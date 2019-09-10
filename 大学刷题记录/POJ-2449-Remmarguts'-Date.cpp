/************************************************
* Author        :somniloquy
* Created Time  :2015/10/22 9:26:14
 ************************************************/

// 输入n m。表示点的个数 边的条数（单向）。
// 接下来的m行 输入 a b t。表示 a到b的花费t。(a b两个顶点 t边长）
// 输入 s t k。求s到t的第k短路径长度。
// 不存在输出-1。
// 必须走一条路。

// 算是一道A*求最短路的模板题了…
// 我写这道题的最大的错误是没有建反向图。因为是单向边，要从终点出发，要完全反向行走，才能计算终点到各点的最短距离。（因为上一道题是双向边…所以没考虑过…）

#include <cstdio>
#include <algorithm>
#include <iostream>
#include <cstring>
#include <queue>

using namespace std;

const int n_max = 1e3 + 5;
const int m_max = 1e5 + 5;
const int INF = 0x3fffffff;
int n, m, pos, s, t, k, ans;
int connect_1[n_max];		//正向连接
int connect_2[n_max];		//反向连接
int sign[n_max];		
int dis[n_max];			//记录终点到各个点的最短路（即 h）
int cnt[n_max];			//记录所有的点的拓展次数（大于k 不继续拓展）
struct node
{
	int Next;
	int to;
	int len;
} edge_1[m_max], edge_2[m_max];	//正向图 反向图
struct star
{
	int data;
	int g;			//实际花费
	int h;			//估计值（即 dis[])
	int f;			//g + h （经过该点再到终点的总花费）
	bool operator < (const star Next) const
	{
		if(Next.f == f)
			return Next.g < g;
		else
			return Next.f < f;	//总是先弹出f最小的
	}
} Now, Next;

void init()			//初始化
{
	memset(connect_1, -1, sizeof(connect_1));
	memset(connect_2, -1, sizeof(connect_2));
	memset(sign, 0, sizeof(sign));
	fill(dis, dis + n_max, INF);
	memset(cnt, 0, sizeof(cnt));
	pos = 0;
}

void add_edge(node* edge, int* connect, int op, int ed, int len)	//加边
{
	edge[pos].Next = connect[op];
	connect[op] = pos;
	edge[pos].to = ed;
	edge[pos].len = len;
}

void SPFA(int src)			//利用反向图 从终点出发 计算出终点到每一点的最短距离（必须利用反向图，因为是单向边）
{
	queue <int> process;
	process.push(src);
	sign[src] = 1;
	dis[src] = 0;
	while(!process.empty())
	{
		int this_op = process.front();
		process.pop();
		sign[this_op] = 0;
		for(int i = connect_2[this_op]; i != -1; i = edge_2[i].Next)
		{
			int this_ed = edge_2[i].to;
			int this_len = edge_2[i].len;
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

void A_star(int op, int ed, int rank)		//从起点出发 利用正向图 不断进行拓展
{
	priority_queue <star> process;
	Now.data = op;				//初始化第一个元素
	Now.g = 0;
	Now.h = dis[op];
	Now.f = Now.g + Now.h;
	process.push(Now);
	while(!process.empty())
	{
		Now = process.top();
		process.pop();
		cnt[Now.data] ++;		//计数
		if(cnt[Now.data] > rank)
			continue;
		if(cnt[ed] == rank)		//达到目标 ans赋值 弹出
		{
			ans = Now.g;
			return;
		}
		for(int i = connect_1[Now.data]; i != -1; i = edge_1[i].Next)		//强制走到这个点 并计算总花费f
		{
			Next.data = edge_1[i].to;
			Next.g = Now.g + edge_1[i].len;
			Next.h = dis[Next.data];
			Next.f = Next.g + Next.h;
			process.push(Next);
		}	
	}	
}

int main(void)
{
	while(~scanf("%d %d", & n, & m))
	{
		init();
		int a, b, t;
		for(int i = 0; i < m; i ++)
		{
			scanf("%d %d %d", & a, & b, & t);
			add_edge(edge_1, connect_1, a, b, t);		//正向建图 A_star用
			add_edge(edge_2, connect_2, b, a, t);		//反向建图 SPFA用
			pos ++;
		}
		scanf("%d %d %d", & s, & t, & k);
		if(s == t)		//题目要求 必须走一条路 当s==t 最短路不应该是0 所以要在k的基础上+1
			k ++;
		SPFA(t);		//终点做起点
		ans = -1;
		A_star(s, t, k);	//A*算法
		printf("%d\n", ans);
	}
        return 0;
}
