/************************************************
* Author        :somniloquy
* Created Time  :2015/10/21 17:46:20
 ************************************************/

// 有N个点 R个路径（双向的） 起点是1，终点是N 求1到N的次短路。

// 参考了N多资料…也是对A算法稍微理解了一点…最后在呆呆的人v的博客中体会到…spfa中的队列投入第一个元素必须是终点，为了求每个点到终点的最短距离。A的注释我写的也不是很详细（饿死了…）

#include <cstdio>
#include <algorithm>
#include <iostream>
#include <cstring>
#include <queue>

using namespace std;
const int n_max = 5e3 + 5;
const int r_max = 1e5 * 2 + 5;
const int INF = 0x3fffffff;
int n, r, pos, ans;
int connect[n_max];
int sign[n_max];
int dis[n_max];
struct node
{
	int Next;
	int to;
	int len;
} edge[r_max];

struct star
{
	int data;						//当前点的编号
	int g;							//走到这个点实际已花费的路程
	int h;							//之前SPFA所算出来的 终点到该点的距离（所谓的估计值，其实也算是已经确定好的）
	bool operator < (star Next) const			//优先队列的排列 总是 g + h小的 先弹出
	{
		return g + h > Next.g + Next.h;			//g + h 即 f，就是从起点开始 经过 该点 再到 终点的值（就是强制多走 一点 再到 终点）
	}
} Now, Next;

void init()			//初始化
{
	memset(connect, -1, sizeof(connect));
	memset(sign, 0, sizeof(sign));
	fill(dis, dis + n_max, INF);
	pos = 0;
}

void add_edge(int op, int ed, int len)		//加边
{
	edge[pos].Next = connect[op];
	connect[op] = pos;
	edge[pos].to = ed;
	edge[pos].len = len;
	pos ++;
}

void SPFA(int op)				//把原终点 作为 起点，计算 每个点到 终点的 最短距离，以下与SPFA相同
{
	queue <int> process;
	process.push(op);
	sign[op] = 1;
	dis[op] = 0;
	while(!process.empty())
	{
		int this_op = process.front();
		process.pop();
		sign[this_op] = 0;
		for(int i = connect[this_op]; i != -1; i = edge[i].Next)
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

int A_star(int op, int ed, int k)			// A*算法 op为起点 ed为终点 k为第k短路
{
	int cnt[n_max];					//记录拓展次数
	memset(cnt, 0, sizeof(cnt));
	priority_queue <star> process;
	Now.data = op;					//初始化第一个元素
	Now.g = 0;
	Now.h = dis[op];
	process.push(Now);
	while(!process.empty())
	{
		Now = process.top();
		process.pop();
		cnt[Now.data] ++;
		if(cnt[Now.data] > k)			//如果当前想拓展的点cnt>k就没必要拓展了
			continue;			//因为这个点已经是求到k+1短路了 从这个点继续往下搜肯定得到的是大于等于k+1短路的路径
		if(cnt[ed] == k)			//找到第k短路(注意下标为ed)
			return Now.g;
		for(int i = connect[Now.data]; i != -1; i = edge[i].Next)
		{
			Next.data = edge[i].to;		//下一个元素的编号
			Next.g = Now.g + edge[i].len;	//强制走到 该点。加上Now.data到Next.data的距离
			Next.h = dis[edge[i].to];	//下一个点到终点的最短距离
			process.push(Next);
		}
	}
}

int main(void)
{
	while(~scanf("%d %d", & n, & r))
	{
		init();
		int a, b, d;
		for(int i = 0; i < r; i ++)
		{
			scanf("%d %d %d", & a, & b, & d);
			add_edge(a, b, d);
			add_edge(b, a, d);
		}
		SPFA(n);
		ans = A_star(1, n, 2);		//起点1 终点n 第2短路
		printf("%d\n", ans);
	}
        return 0;
}
