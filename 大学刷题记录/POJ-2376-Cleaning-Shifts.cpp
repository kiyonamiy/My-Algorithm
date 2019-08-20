/************************************************
* Author        :somniloquy
* Created Time  :2015/11/1 17:05:56
 ************************************************/

/**
给定N个小区间以及区间起点终点，求能用它们覆盖区间[1,T]的最小组合。
*/

/**
贪心策略是从左往右，尽量选择长度最大的区间。

首先对所有奶牛排序，按照开始时间排序。

然后更新起点=终点+1，搜索剩下的奶牛中能够覆盖这个起点同时终点最远的那一头，更新终点。
*/

#include <cstdio>
#include <algorithm>
#include <iostream>
#include <cstring>

using namespace std;

const int n_max = 25e3 + 5;
int n, t;
struct node
{
    int op;
    int ed;
    bool operator < (node Next) const
    {
        if(op == Next.op)
            return ed > Next.ed;
        else
            return op < Next.op;
    }
} cow[n_max];

int main(void)
{
    while(~scanf("%d %d", & n, & t))
    {
        for(int i = 0; i < n; i ++)
            scanf("%d %d", & cow[i].op, & cow[i].ed);
        sort(cow, cow + n);
        int min_t = 0, max_i = 0, ans = 0;
        bool flag;
        while(min_t < t && max_i < n)
        {
            flag = false;
            for(int i = max_i; i < n; i ++)
            {
                if(cow[i].op <= min_t + 1)
                {
                    flag = true;
                    if(cow[i].ed > cow[max_i].ed)
                        max_i = i;
                }
                else
                    break;
            }
            min_t = cow[max_i].ed;
            ans ++;
            max_i ++;
            if(!flag)
                break;          
        }
        if(min_t == t)
            printf("%d\n", ans);
        else
            printf("-1\n");
    }
        return 0;
}