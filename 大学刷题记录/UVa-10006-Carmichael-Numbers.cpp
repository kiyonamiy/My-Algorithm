/************************************************
* Author        :somniloquy
* Created Time  :2015/10/24 12:55:17
 ************************************************/

// 输入n，若满足如下两个条件，则n是Carmichael number
// 1、n不是素数
// 2、对于所有x(1 < x < n)，有(x ^ n) % n = x
// 输入0结束

// 快速幂…

#include <cstdio>
#include <algorithm>
#include <iostream>
#include <cstring>

using namespace std;

long long mod_pow(long long x, long long n, long long mod)
{
	long long res = 1;
	while(n)
	{
		if(n & 1)
			res = res * x % mod;
		x = x * x % mod;
		n >>= 1;
	}
	return res;
}

bool is_prime(long long x) {  
    for(long long i = 2; i * i <= x; ++i) {  
        if(x % i == 0) return false;  
    }  
    return true;  
} 

int main(void)
{
	long long n;
	while(~scanf("%lld", & n) && n)
	{
		bool flag = true;
		if(is_prime(n))
			flag = false;
		for(long long i = 2; i < n && flag; i ++)
		{
			long long ans_1 = mod_pow(i, n, n);
			long long ans_2 = i % n;
			if(ans_1 != ans_2)
				flag = false;
		}
		if(flag)
			printf("The number %lld is a Carmichael number.\n", n);
		else
			printf("%lld is normal.\n", n);
	}
        return 0;
}