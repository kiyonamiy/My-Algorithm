
/************************************************
* Author        :somniloquy
* Created Time  :2015/10/24 17:52:59
 ************************************************/

// 输入两个数 p a。
// 如果p是素数 则输出no。
// 如果a ^ p (mod p) == a 则输出yes。否则 输入no。

// 简单的 快速幂。

#include <cstdio>
#include <algorithm>
#include <iostream>
#include <cstring>

using namespace std;

bool is_prime(long long x)
{
	for(int i = 2; i * i <= x; i ++)
	{
		if(x % i == 0)
			return false;
	}
	return true;
}

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

int main(void)
{
	long long p, a;
	while(~scanf("%lld %lld", & p, & a))
	{
		if(!p && !a)
			break;
		if(is_prime(p))
		{
			printf("no\n");
			continue;
		}
		if(mod_pow(a, p, p) == a)
			printf("yes\n");
		else
			printf("no\n");
	}
        return 0;
}
