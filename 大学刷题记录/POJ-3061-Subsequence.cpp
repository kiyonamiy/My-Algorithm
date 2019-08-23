/************************************************
* Author        :somniloquy
* Created Time  :2015/10/25 14:57:32
 ************************************************/

/**
给定长度为n的数列整数a0, a1, ….a(n-1) 以及整数 S。求出总和不小于S的连续子序列的长度的最小值。如果解不存在，则输出0。
**/

/**
先录入所有的数到num数组。 
再计算从每一个num[i]前面的数字之和储存到sum[i]。 
之后再二分搜索出长度。
**/

#include <cstdio>
#include <algorithm>
#include <iostream>
#include <cstring>

using namespace std;

const int n_max = 1e5 + 5;
int num[n_max];
int sum[n_max];

int main(void)
{
    int t, n, s;
    scanf("%d", & t);
    while(t --)
    {
        scanf("%d %d", & n, & s);
        for(int i = 0; i < n; i ++)
            scanf("%d", & num[i]);
        memset(sum, 0, sizeof(sum));
        sum[0] = num[0];
        for(int i = 1; i < n; i ++)
            sum[i] = sum[i - 1] + num[i];
        if(sum[n - 1] < s)
        {
            printf("0\n");
            continue;
        }
        int lft = 0, rit = n;
        while(rit - lft > 1)
        {
            int mid = (lft + rit) / 2;
            bool flag = false;
            for(int i = 0; i < n - mid; i ++)
            {
                if(sum[i + mid] - sum[i] >= s)
                {
                    flag = true;
                    break;
                }
            }
            if(flag)
                rit = mid;
            else
                lft = mid;
        }
        printf("%d\n", rit);
    }
        return 0;
}
