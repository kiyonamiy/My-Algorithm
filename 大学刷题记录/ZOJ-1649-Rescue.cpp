// 给一个矩阵。x代表警卫。#代表墙。r代表天使的朋友。a代表天使的位置。天使的朋友要去救天使。走一步花费1单位的时间，遇到警卫可以杀死它，要多花1单位的时间。问最短的时间是多少。（注意：朋友可以多个。如果救不出天使 则输出一段英文。）

// 用BFS宽度搜索最短路。BFS是按宽度不断扩展搜索的，但是碰到警卫会破坏这种搜索制度（一开始我认为只要遇到警卫，时间+2就行，实则不然）。必须对遇到警卫这种情况进行特殊处理。就是遇到警卫，执行的操作是将警卫杀死，使x变成.，花费1单位时间，不进行移步，并将这种状态投入队尾，使其达到时间上的统一。其他的算法都是和普通的BFS一样。（一开始也没看到题目说朋友可以多个？）

#include <cstdio>
#include <queue>
#include <cstring>

using namespace std;

const int n_max = 200 + 5;
const int m_max = 200 + 5;
int n, m, ans;
bool flag;
char prison[n_max][m_max];
int sign[n_max][m_max];
struct node
{
	int x;
	int y;
	int time;
} op, ed;
queue <node> process;
int step[4][2] = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

void bfs()
{
	while(!process.empty())
	{
		node now = process.front();
		process.pop();
		if(prison[now.x][now.y] == 'x')		//判断是否有guard。（此题关键）
		{
			now.time ++;
			prison[now.x][now.y] = '.';
			process.push(now);
			sign[now.x][now.y] = 1;
			continue;
		}
		for(int i = 0; i < 4; i ++)
		{
			node next = now;
			next.x += step[i][0];
			next.y += step[i][1];
			if(next.x >= 0 && next.x < n && next.y >= 0 && next.y < m && prison[next.x][next.y] != '#' && !sign[next.x][next.y])
			{
				if(prison[next.x][next.y] == 'a')
				{
					ans = next.time + 1;
					flag = true;
					return;
				}
				next.time ++;
				process.push(next);
				sign[next.x][next.y] = 1;
			}
		}
	}
}

int main()
{
	while(~scanf("%d %d", & n, & m))
	{
		getchar();
		memset(sign, 0, sizeof(sign));
		while(!process.empty())
			process.pop();
		for(int i = 0; i < n; i ++)
		{
			for(int j = 0; j < m; j ++)
			{
				scanf("%c", & prison[i][j]);
				if(prison[i][j] == 'r')
				{
					op.x = i;
					op.y = j;
					op.time = 0;
					process.push(op);
					sign[i][j] = 1;
				}
			}
			getchar();
		}
		flag = false;
		bfs();
		if(flag)
			printf("%d\n", ans);
		else
			printf("Poor ANGEL has to stay in the prison all his life.\n");
	}
}
