/************************************************
* Author        :somniloquy
* Created Time  :2015/10/30 13:23:15
 ************************************************/

/**
就是红黑棋盘。这个人只能走黑格子，问他总共能走多少格黑格子。 
@：出发点（算1格） 
#：红格子（不能走） 
. :黑格子（计数）
*/

/**
时隔2个月..
*/

#include <cstdio>
#include <algorithm>
#include <iostream>
#include <cstring>

using namespace std;

const int wh_max = 20 + 5;
int w, h;
char graph[wh_max][wh_max];
int sign[wh_max][wh_max];
struct node
{
    int x;
    int y;
} start;
int ans;
int dx[4] = {-1, 1, 0, 0};
int dy[4] = {0, 0, -1, 1};

void dfs(node now)
{
    for(int i = 0; i < 4; i ++)
    {
        node next = now;
        next.x += dx[i];
        next.y += dy[i];
        if(next.x >= 0 && next.x < h && next.y >= 0 && next.y < w &&graph[next.x][next.y] != '#' && !sign[next.x][next.y])
        {
            sign[next.x][next.y] = 1;
            ans ++;
            dfs(next);
        }
    }
    return; 
}

int main(void)
{
    while(~scanf("%d %d", & w, & h))
    {
        getchar();
        if(!w && !h)
            break;
        memset(sign, 0, sizeof(sign));
        for(int i = 0; i < h; i ++)
        {
            for(int j = 0; j < w; j ++)
            {
                scanf("%c", & graph[i][j]);
                if(graph[i][j] == '@')
                {
                    start.x = i;
                    start.y = j;
                    ans = 1;
                    sign[i][j] = 1;
                }
            }
            getchar();
        }
        dfs(start);
        printf("%d\n", ans);
    }
        return 0;
}
