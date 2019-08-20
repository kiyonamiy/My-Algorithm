/************************************************
* Author        :somniloquy
* Created Time  :2015/10/30 16:15:09
 ************************************************/

/**
在H * W的地图上有N个奶酪工厂，分别生产硬度为1-N的奶酪。有一只吃货老鼠准备从老鼠洞出发吃遍每一个工厂的奶酪。老鼠有一个体力值，初始时为1，每吃一个工厂的奶酪体力值增加1（每个工厂只能吃一次），且老鼠只能吃硬度不大于当前体力值的奶酪。

老鼠从当前格走到相邻的无障碍物的格（上下左右）需要时间1单位，有障碍物的格不能走。走到工厂上时即可吃到该工厂的奶酪，吃奶酪时间不计。问吃遍所有奶酪最少用时。

输入：第一行三个整数H(1 <= H <= 1000)、W(1 <= W <=1000)、N(1 <= N <= 9)，之后H行W列为地图， “.“为空地， ”X“为障碍物，”S“为老鼠洞， 1-N代表硬度为1-N的奶酪的工厂。
*/

/**
吃货必须按照工厂N值从小到大的顺序吃，否则体力不济。所以这个题目其实就是求按顺序遍历地图上12345……这几个点的最短路径。说到最短路径，当然就是bfs了。 
BFS差不多已经毕业了..
*/

#include <cstdio>
#include <algorithm>
#include <iostream>
#include <cstring>
#include <queue>

using namespace std;

const int hw_max = 1000 + 5;
char graph[hw_max][hw_max];
int sign[hw_max][hw_max];
int h, w, n, ans;
int dx[4] = {-1, 1, 0, 0};
int dy[4] = {0, 0, -1, 1};
struct node
{
    int x;
    int y;
    int time;
} start;

void BFS(node op, char ed)
{
    queue <node> process;
    process.push(op);
    sign[op.x][op.y] = 1;
    while(!process.empty())
    {
        node now = process.front();
        process.pop();
        for(int i = 0; i < 4; i ++)
        {
            node next = now;
            next.x += dx[i];
            next.y += dy[i];
            next.time ++;
            if(next.x >= 0 && next.x < h && next.y >= 0 && next.y < w && graph[next.x][next.y] != 'X' && !sign[next.x][next.y])
            {
                if(graph[next.x][next.y] == ed)
                {
                    ans += next.time;
                    next.time = 0;
                    start = next;
                        return;
                }
                else
                {
                    process.push(next);
                    sign[next.x][next.y] = 1;
                }
            }
        }
    }
}

int main()
{
    while(~scanf("%d %d %d", & h, & w, & n))
    {
        getchar();
        for(int i = 0; i < h; i ++)
        {
            for(int j = 0; j < w; j ++)
            {
                   scanf("%c", & graph[i][j]);
                   if(graph[i][j] == 'S')
                   {
                    start.x = i;
                    start.y = j;
                    start.time = 0;
                   }
            }
            getchar();
        }
        ans = 0;
        for(int i = 1; i <= n; i ++)
        {
            memset(sign, 0, sizeof(sign));
            BFS(start, '0' + i);
        }
        printf("%d\n", ans);
    }
    return 0;
}