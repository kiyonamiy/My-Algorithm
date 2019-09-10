/************************************************
* Author        :somniloquy
* Created Time  :2015/10/22 18:09:44
 ************************************************/


// 两只青蛙在网上相识了，它们聊得很开心，于是觉得很有必要见一面。它们很高兴地发现它们住在同一条纬度线上，于是它们约定各自朝西跳，直到碰面为止。可是它们出发之前忘记了一件很重要的事情，既没有问清楚对方的特征，也没有约定见面的具体位置。不过青蛙们都是很乐观的，它们觉得只要一直朝着某个方向跳下去，总能碰到对方的。但是除非这两只青蛙在同一时间跳到同一点上，不然是永远都不可能碰面的。为了帮助这两只乐观的青蛙，你被要求写一个程序来判断这两只青蛙是否能够碰面，会在什么时候碰面。
// 我们把这两只青蛙分别叫做青蛙A和青蛙B，并且规定纬度线上东经0度处为原点，由东往西为正方向，单位长度1米，这样我们就得到了一条首尾相接的数轴。设青蛙A的出发点坐标是x，青蛙B的出发点坐标是y。青蛙A一次能跳m米，青蛙B一次能跳n米，两只青蛙跳一次所花费的时间相同。纬度线总长L米。现在要你求出它们跳了几次以后才会碰面。
// 输入只包括一行5个整数x，y，m，n，L，其中x≠y < 2000000000，0 < m、n < 2000000000，0 < L < 2100000000。
// 输出碰面所需要的跳跃次数，如果永远不可能碰面则输出一行"Impossible"


// 觉得上面的博客讲的不错 就是后面的逆元不是很清楚。
// （以下摘自 Accept）
// 假设跳了T次以后，青蛙1的坐标便是x+mT,青蛙2的坐标为y+nT。它们能够相遇的情况为（x+mT）-(y+nT)==P*L，其中P为某一个整数，变形一下

// 得到(n-m)T+PLx-y 我们设a=(n-m),b=L,c=x-y,T=x,P=y.于是便得到ax+byc。激动啊，这不就是上面一样的式子吗~

// 直接套用扩展欧几里得函数，得到一组解x,y。由于问题是问最少跳多少次，于是只有x是我们需要的信息。那么再想，x是最小的吗？

// 答案是可能不是！那么如何得到最小解呢？ 我们考虑x的所有解的式子： x=x0+b/dt。x0是我们刚刚求到的，很显然右边是有个单调函数，当t为某一个与x正负性质相反的数时，可以得到最小的x。 令x的正负性质为正，那么x=x0-b/dt1 (t1==-t)。令x==0，那么t=x0d/b，最小的x等于x0减去tb/d。这里得到的x可能是负数，如果是负数，我们再为它加上一个b/d即是所求答案了！

// 其实质和我原代码是一样的。只不过这个比较容易理解，代码上那个比较简洁。t = X * gcd / b; ans = X - b / gcd * t; 这两步 等价 原代码上的 X % (b / gcd)。

#include <cstdio>
#include <algorithm>
#include <iostream>
#include <cstring>

using namespace std;

long long x, y, m, n, L;

long long ext_gcd(long long a, long long b, long long& X, long long& Y)
{
	long long ans = a;
	if(b == 0)
	{
		X = 1;
		Y = 0;
	}
	else
	{
		ans = ext_gcd(b, a % b, X, Y);
		long long temp = X;
		X = Y;
		Y = temp - a / b * Y;
	}
	return ans;
}

long long cal(long long a, long long b, long long c)
{
	long long X, Y;
	long long gcd = ext_gcd(a, b, X, Y);
	if(c % gcd != 0)
		return -1;
	long long multiple = c / gcd;
	X *= multiple;
	b /= gcd;
	if(b < 0)
		b = -b;
	long long ans = X % b;
	if(ans < 0)
		ans += b;
	return ans;
}

int main(void)
{
	while(~scanf("%I64d %I64d %I64d %I64d %I64d", & x, & y, & m, & n, & L))
	{
		long long a, X, b, Y, c, gcd, ans;
		a = n - m;
		b = L;
		c = x - y;
		ans = cal(a, b, c);
		if(ans == -1)
			printf("Impossible\n");
		else
			printf("%I64d\n", ans);
	}
        return 0;
}