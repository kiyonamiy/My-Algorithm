/************************************************
* Author        :somniloquy
* Created Time  :2015/10/19 16:35:35
 ************************************************/


// （摘自 依然）
// flymouse是幼稚园班上的班长，一天老师给小朋友们买了一堆的糖果，由flymouse来分发。flymouse希望自己分得的糖果数尽量多于snoopy。对于其他小朋友而言，则必须自己得到的糖果不少于班上某某，给出m个这种约束关系（u，v, w）即同学u的糖果数不能比同学v的糖果数少w。问flymouse最多能多snoopy几个糖果。


// （摘自 fisty）
// 给出一些形如x-y<=b不等式的约束，问你是否满足有解的问题

// 好神奇的是这类问题竟然可以转换成图论里的最短路径问题，下面开始详细介绍下

// 比如给出三个不等式,b-a<=k1,c-b<=k2,c-a<=k3,求出c-a的最大值,我们可以把a,b,c转换成三个点，k1，k2，k3是边上的权

// 由题我们可以得知，这个有向图中，由题b-a<=k1,c-b<=k2,得出c-a<=k1+k2,因此比较k1+k2和k3的大小，求出最小的就是c-a的最大值了

// 根据以上的解法，我们可能会猜到求解过程实际就是求从a到c的最短路径，没错的…简单的说就是从a到c沿着某条路径后把所有权值和k求出就是c -a<=k的一个

// 推广的不等式约束，既然这样，满足题目的肯定是最小的k，也就是从a到c最短距离…
// 不知道为什么queue会超时，stack不会。

#include <cstdio>
#include <algorithm>
#include <iostream>
#include <cstring>
#include <stack>

using namespace std;

const int n_max = 3e4 + 5;
const int m_max = 15e4 + 5;
const int INF = 0x3fffffff;
int connect[n_max];
int sign[n_max];
int dis[n_max];
int n, m, pos;
struct node
{
	int next;
	int to;
	int len;
} edge[m_max];

void add_edge(int op, int ed, int len)
{
	edge[pos].next = connect[op];
	connect[op] = pos;
	edge[pos].to = ed;
	edge[pos].len = len;
	pos ++;
}

void SPFA()
{
	stack <int> process;
	memset(sign, 0, sizeof(sign));
	fill(dis, dis + n_max, INF);
	int op = 1;
	process.push(op);
	sign[op] = 1;
	dis[op] = 0;
	while(!process.empty())
	{
		int this_op = process.top();
		process.pop();
		sign[this_op] = 0;
		for(int i = connect[this_op]; i != -1; i =edge[i].next)
		{
			int this_ed = edge[i].to;
			int this_len = edge[i].len;
			if(dis[this_op] + this_len < dis[this_ed])
			{
				dis[this_ed] = dis[this_op] + this_len;
				if(!sign[this_ed])
				{
					process.push(this_ed);
					sign[this_ed] = 1;
				}
			}
		}
	}
}

int main(void)
{
	while(~scanf("%d %d", & n, & m))
	{
		int a, b, l;
		memset(connect, -1, sizeof(connect));
		pos = 0;
		for(int i = 0; i < m; i ++)
		{
			scanf("%d %d %d", & a, & b, & l);
			add_edge(a, b, l);
		}
		SPFA();
		printf("%d\n", dis[n]);
	}
        return 0;
}
