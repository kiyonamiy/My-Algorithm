/************************************************
* Author        :somniloquy
* Created Time  :2015/10/23 16:27:12
 ************************************************/

// 求一个最小的正整数x，使a乘以x对m的取余等于1对m的取余。

// ZOJ有毒？ %lld AC %I64d TLE 。？？？
// x = y。
// y = x。- a / b * y。
// 通解
// x = x。 + b / gcd * t
// y = y。 - a / gcd * t

// a * x === 1 (mod m)
// a * x + m * y = 1

#include <cstdio>
#include <algorithm>
#include <iostream>
#include <cstring>

using namespace std;

long long ext_gcd(long long a, long long b, long long& x, long long& y)
{
	long long ans = a;
	if(b == 0)
	{
		x = 1;
		y = 0;
	}
	else
	{
		ans = ext_gcd(b, a % b, x, y);
		long long temp = x;
		x = y;
		y = temp - a / b * y;
	}
	return ans;
}


long long cal(long long a, long long b, long long c)
{
	long long x, y;
	long long gcd = ext_gcd(a, b, x, y);
	if(c % gcd != 0)
		return -1;
	x *= c / gcd;
	b /= gcd;
	if(b < 0)
		b = -b;
	long long ans = x % b;
	if(ans <= 0)
		ans += b;
	return ans;
}

int main(void)
{
	long long a, m, t;
	scanf("%lld", & t);
	while(t --)
	{
		scanf("%lld %lld", & a, & m);
		long long ans = cal(a, m, 1);
		if(ans == -1)
			printf("Not Exist\n");
		else
			printf("%lld\n", ans);
	}
        return 0;
}