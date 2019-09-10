/************************************************
* Author        :somniloquy
* Created Time  :2015/10/24 11:20:37
 ************************************************/

// 要求(A/B)%9973，但由于A很大，我们只给出n(n=A%9973)(我们给定的A必能被B整除，且gcd(B,9973) = 1)。
// 数据的第一行是一个T，表示有T组数据。
// 每组数据有两个数n(0 <= n < 9973)和B(1 <= B <= 10^9)。
// 对应每组数据输出(A/B)%9973。

// 转化原式。
// 假设 (A / B) % 9973 = K
// => A/ B = 9973 * t1 + K
// => A = 9973 * t1 * B + K * B
// => A % 9973 = [(9973 * t1 * B) % 9973 + (K * B） % 9973] % 9973
// => n = [0 + (K * B) % 9973] % 9973
// => n = (K * B) % 9973
// => K * B = 9973 * t2 + n
// => B * K - 9973 * t2 = n
// 这样就转化成 扩展欧几里德定理的格式 a * x + b * y = c。
// 题目要求的 就是 K。

#include <cstdio>
#include <algorithm>
#include <iostream>
#include <cstring>

using namespace std;

int ext_gcd(long long a, long long b, long long& x, long long& y)
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

int cal(long long a, long long b, long long c)
{
	long long x, y;
	long long gcd = ext_gcd(a, b, x, y);
	x *= c / gcd;
	b /= gcd;
	if(b < 0)
		b = -b;
	x %= b;
	if(x < 0)
		x += b;
	return x;
}

int main(void)
{
	int t, n, B;
	scanf("%d", & t);
	while(t --)
	{
		scanf("%d %d", & n, & B);
		long long ans = cal(B, -9973, n);
		printf("%lld\n", ans);
	}
        return 0;
}