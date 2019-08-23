/************************************************
* Author        :somniloquy
* Created Time  :2015/10/25 14:17:21
 ************************************************/

/**
输入测试组数T。 
输入n。 
再输入n个数。 
判断哪个数出现的次数最多。如果最大个数有相同，则输出Nobody。
**/

/**
水。
**/

#include <cstdio>
#include <algorithm>
#include <iostream>
#include <cstring>

using namespace std;

const int a_max = 1000 + 5;
int cnt[a_max];

int main(void)
{
    int t;
    scanf("%d", & t);
    while(t --)
    {
        int n;
        scanf("%d", & n);
        int temp, max = 0;
        bool flag = true;
        memset(cnt, 0, sizeof(cnt));
        for(int i = 0; i < n; i ++)
        {
            scanf("%d", & temp);
            cnt[temp] ++;
        }
        for(int i = 1; i < a_max; i ++)
        {
            if(cnt[i] > cnt[max])
            {
                max = i;
                flag = true;
            }
            else if(cnt[i] == cnt[max])
                flag = false;
        }
        if(flag)
            printf("%d\n", max);
        else
            printf("Nobody\n");
    }
        return 0;
}
