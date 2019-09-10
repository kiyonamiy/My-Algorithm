/************************************************
* Author        :somniloquy
* Created Time  :2015/10/24 18:28:46
 ************************************************/

// 输入t 表示测试组数。
// 输入m 表示对m取余。
// 输入h 接下来输入h组 a b。
// 输入h组的a b 表示a^b
// 计算所有a ^ b 之和 对 m取余。

// 简单快速幂。

#include <cstdio>
#include <algorithm>
#include <iostream>
#include <cstring>

using namespace std;

typedef long long ll;

ll mod_pow(ll x, ll n, ll mod)
{
	ll res = 1;
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
	int t;
	scanf("%d", & t);
	while(t --)
	{
		ll m, h, a, b;
		scanf("%lld", & m);
		scanf("%lld", & h);
		ll sum = 0;
		while(h --)
		{
			scanf("%lld %lld", & a, & b);
			sum += mod_pow(a, b, m);
		}
		sum %= m;
		printf("%lld\n", sum);
	}
        return 0;
}
