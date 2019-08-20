/************************************************
* Author        :somniloquy
* Created Time  :2015/10/30 14:32:53
 ************************************************/

/**
输入测试组数t。 
之后每组直接输入10个数。 
问这10个数能不能分成两堆单调严格递增的序列。（按顺序出栈） 
输出YES or NO。
*/

/**
思想还是太死板.. 
枚举每一种元素为首的情况，用dfs取后面满比当前值大的数，取到用sign标记。判断另一堆剩余的数是否满足题意。
*/

#include <cstdio>
#include <algorithm>
#include <iostream>
#include <cstring>

using namespace std;

int t, n;
int num[10];
int sign[10];

void dfs(int now, int next)
{
    if(next < 10 && num[now] < num[next])
    {
        sign[next] = 1;
        dfs(next, next + 1);
    }
    else if(next < 10 && num[now] >= num[next])
        dfs(now, next + 1);
}

int main(void)
{
    scanf("%d", & t);
    while(t --)
    {
        for(int i = 0; i < 10; i ++)
            scanf("%d", & num[i]);
        bool flag; 
        for(int i = 0; i < 10; i ++)
        {
            flag = true;
            memset(sign, 0, sizeof(sign));
            sign[i] = 1;
            dfs(i, i + 1);
            int max_temp = -1;
            for(int i = 0; i < 10; i ++)
            {
                if(!sign[i])
                {
                    if(max_temp < num[i])
                        max_temp = num[i];
                    else
                    {
                        flag = false;
                        break;
                    }
                }
            }
            if(flag)
            {
                printf("YES\n");
                break;
            }
        }
        if(!flag)
            printf("NO\n");
    }
        return 0;
}
