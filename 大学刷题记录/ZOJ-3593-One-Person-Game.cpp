/************************************************
* Author        :somniloquy
* Created Time  :2015/10/23 21:00:05
 ************************************************/

// 输入A B a b，分别代表 起点编号 终点编号 一步走a格 或者 一步走b格 或者 一步走（a + b）格，问最小步数。如果无解 则输出-1。

// 这道题的解法也是参考别人的博客。觉得这样解最简洁。
// 可以把通解的两个方程 X = b * t + x 、 Y = -a * t + y 分别看成 X Y关于t的线性方程。因为 b > 0，-a < 0 所以 两条直线必然相交。可以想象，若是交点为正整数，即X = Y，那只要按（a + b）方式走即是最小步数。
// 若不是正整数，则最小步数就在交点的左右。（详见代码）
// 一开始的错误就是没想通 异号的情况 纠结好久 也是脑残…- -(异号就不走(a + b)格就行…然而我是一定想走那格…

#include <cstdio>
#include <algorithm>
#include <iostream>
#include <cstring>
#include <cmath>

using namespace std;

const int INF = 0x3fffffff;

long long ext_gcd(long long a, long long b, long long& x, long long& y)		//求特解 x y 并求 最大公约数 gcd
{
	long long ans = a;
	if(b == 0)				//递归终点
	{
		x = 1;
		y = 0;
	}
	else
	{
		ans = ext_gcd(b, a % b, x, y);		//递归
		long long temp = x;
		x = y;				//递推上一个 x y，这种写法觉得比书上容易理解。
		y = temp - a / b * y;
	}
	return ans;		//实际传值 一直都只是传 最后一个最大公约数（当b == 0时的 a）
}

long long cal(long long a, long long b, long long c)
{
	long long  x,  y;
	long long gcd = ext_gcd(a, b, x, y);
	if(c % gcd != 0)		//无解情况 c不是gcd的倍数
		return -1;
	x *= c / gcd;			//放大相同倍数
	y *= c / gcd;
	b /= gcd;			//为通解做准备
	a /= gcd;
	long long mid = (y - x) / (a + b);		//两条直线的交点 X = x + b * t 、 Y = y - a * t 同是关于 t 的一元一次方程。交点即最小值
	long long ans = (long long)INF * (long long)INF;
	long long temp;
	for(long long t = mid - 1;  t <= mid + 1; t ++)		//对交点 和 交点前后两个点 进行判断（最小值产生在附近）
	{
		if(abs(x + b * t) + abs(y - a * t) == abs(x + b * t + y - a * t))	//如果 X Y 同正 同负 则表示方向相同 可以走（a + b）来减少步数
			temp = max(abs(x + b * t), abs(y - a * t));
		else									//如果 X Y 异号 则表示方向相反 不能走（a + b），只能最少 |X| + |Y| 步
			temp = abs(x + b * t) + abs(y - a * t);
		ans = min(temp, ans);				//不断取最小值
	}
	return ans;
}

int main(void)
{
	long long t, A, B, a, b;
	scanf("%lld", & t);
	while(t --)
	{
		scanf("%lld %lld %lld %lld", & A, & B, & a, & b);
		long long ans = cal(a, b, B - A);
		printf("%lld\n", ans);
	}
        return 0;
}