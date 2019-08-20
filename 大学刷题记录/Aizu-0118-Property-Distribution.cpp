/************************************************
* Author        :somniloquy
* Created Time  :2015/10/30 14:00:50
 ************************************************/

/**
在H * W的矩形果园里有苹果、梨、蜜柑三种果树， 相邻（上下左右）的同种果树属于同一个区域，给出果园的果树分布，求总共有多少个区域。 （原题的样图中苹果为リ，梨为カ，蜜柑为ミ， 图中共10个区域） 
输入： 
多组数据，每组数据第一行为两个整数H，W（H <= 100, W <= 100）， H =0 且 W = 0代表输入结束。以下H行W列表示果园的果树分布， 苹果是@，梨是#， 蜜柑是*。 
输出： 
对于每组数据，输出其区域的个数。
*/

/**
日文题..
*/

#include <cstdio>
#include <algorithm>
#include <iostream>
#include <cstring>

using namespace std;
const int hw_max = 100 + 5;
char graph[hw_max][hw_max];
int sign[hw_max][hw_max];
int h, w, ans;
int dx[4] = {-1, 1, 0, 0};
int dy[4] = {0, 0, -1, 1};
struct node
{
    int x;
    int y;
    char mark;
} start;

void dfs(node now)
{
    for(int i = 0; i < 4; i ++)
    {
        node next = now;
        next.x += dx[i];
        next.y += dy[i];
        if(next.x >= 0 && next.x < h && next.y >= 0 && next.y < w && next.mark == graph[next.x][next.y] && !sign[next.x][next.y])
        {
            sign[next.x][next.y] = 1;
            dfs(next);
        }
    }
}

int main(void)
{
    while(~scanf("%d %d", & h, & w))
    {
        getchar();
        if(!h && !w)
            break;
        memset(sign, 0, sizeof(sign));
        ans = 0;
        for(int i = 0; i < h; i ++)
        {
            for(int j = 0; j < w; j ++)
                scanf("%c", & graph[i][j]);
            getchar();
        }
        for(int i = 0; i < h; i ++)
        {
            for(int j = 0; j < w; j ++)
            {
                if(!sign[i][j])
                {
                    start.x = i;
                    start.y = j;
                    start.mark = graph[i][j];
                    dfs(start);
                    ans ++;
                }
            }
        }
        printf("%d\n", ans);
    }
        return 0;
}
