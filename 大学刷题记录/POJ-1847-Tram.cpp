/************************************************
* Author        :somniloquy
* Created Time  :2015/10/19 15:16:41
 ************************************************/

// Zagreb的电车轨道网络由许多的道路交叉口和连接它们的道路组成，进入道路交叉口的电车只能够通过该道路交叉口开关所指向的道

// 路离开。

// 如果司机想通过其他道路离开，便需要手动改变开关。

// 现在告诉你该电车轨道网络中道路交叉口的个数N以及起点道路交叉口的编号A和终点道路交叉口的编号B。

// 再告诉你每个道路交叉口所连接的道路个数K并给出与其直接相连的其他道路交叉口的编号（其中第一个为开关当前所指向的道路通

// 往的方向）。

// 求解从A开往B所需改变道路交叉口开关的最少次数。

// spfa默写。

#include <cstdio>
#include <algorithm>
#include <iostream>
#include <cstring>
#include <queue>

using namespace std;

const int n_max = 100 + 5;
const int INF = 0x3fffffff;
int N, A, B, pos, ans;
int connect[n_max];
int sign[n_max];
int dis[n_max];
struct node
{
	int next;
	int to;
	int len;
} edge[n_max * n_max];

void add_edge(int op, int ed, int len)
{
	edge[pos].next = connect[op];
	connect[op] = pos;
	edge[pos].to = ed;
	edge[pos].len = len;
	pos ++;	
}

void SPFA(int op, int ed)
{
	queue <int> process;
	memset(sign, 0, sizeof(sign));
	fill(dis, dis + n_max, INF);
	process.push(op);
	sign[op] = 1;
	dis[op] = 0;
	while(!process.empty())
	{
		int this_op = process.front();
		process.pop();
		sign[this_op] = 0;
		for(int i = connect[this_op]; i != -1; i = edge[i].next)
		{
			int this_len = edge[i].len;
			int this_ed = edge[i].to;
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
	ans = dis[ed];	
}

int main(void)
{
	while(~scanf("%d %d %d", & N, & A, & B))
	{
		memset(connect, -1, sizeof(connect));
		pos = 0;
		int a, b, k;		
		for(int i = 0; i < N; i ++)
		{
			a = i + 1;
			scanf("%d", & k);
			for(int j = 0; j < k; j ++)
			{
				scanf("%d", & b);
				if(j == 0)
					add_edge(a, b, 0);
				else
					add_edge(a, b, 1);
			}
		}
		SPFA(A, B);
		if(ans < INF)
			printf("%d\n", ans);
		else
			printf("-1\n");
	}
        return 0;
}
