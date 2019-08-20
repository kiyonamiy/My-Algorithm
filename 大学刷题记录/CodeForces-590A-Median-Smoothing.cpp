/************************************************
* Author        :somniloquy
* Created Time  :2015/10/26 16:33:25
 ************************************************/

/**
就是给一段01序列。 
之后首尾01保持不变。 
其余都是取中位数在不断变化，例如1 0 1，排序后位 0 1 1 中位数是 1，所以 0 变成 1。 
问最后需要经过几步变化使序列稳定（不能继续变化）。输出步数 和 最终稳定的序列。
**/

/**
这道题如果暴力会超时。必须找变化的规律，可以发现最后只要 连着两个00 或者 11 就不会改变，改变的只会是01交替出现的。
**/

#include <cstdio>
#include <algorithm>
#include <iostream>
#include <cstring>

using namespace std;

const int n_max = 5e5 + 5;
int num[n_max];
int sign[n_max];        //标记数组 标记最后不变的数字

int main(void)
{
    int n;
    while(~scanf("%d", & n))
    {
        for(int i = 0; i < n; i ++)     
            scanf("%d", & num[i]);      //输入 01 序列
        int ans = 0;                //ans初始
        memset(sign, 0, sizeof(sign));      //标记初始
        sign[0] = sign[n - 1] = 1;      //起点 和 终点 不变
        for(int i = 0; i < n - 1; i ++)     //标记 连着两个0 或者 连着两个1 则这几个数最后不会变动
        {
            if(num[i] == num[i + 1])
                sign[i] = sign[i + 1] = 1;
        }
        int cur = 0;                //移动光标
        for(int i = 0; i < n; i ++)
        {
            if(sign[i])         //如果 sign[i] = 1 不做处理 
                cur = i;        //cur随i移动
            else
            {
                cur ++;
                int cnt_0 = 0, cnt_1 = 0;   //记录中间01出现的个数
                while(cur < n && !sign[cur])    //一直移动到下一个被sign = 1（即不能改变的数字）的地方
                {
                    if(num[cur] == 0)   //记录0出现的个数
                        cnt_0 ++;
                    else if(num[cur] == 1)  //记录1出现的个数
                        cnt_1 ++;
                    cur ++;
                }
                if(num[i - 1] == 1 && num[cur] == 1)    //当可变子序列的两端同为1的时候 变化的最后结果就是1
                    for(int j = i; j <= cur - 1; j ++)
                        num[j] = 1;
                else if(num[i - 1] == 0 && num[cur] == 0)   //同为0的时候
                    for(int j = i; j <= cur - 1; j ++)
                        num[j] = 0;
                else if(num[i - 1] == 1 && num[cur] == 0)   //首端为1 末端为0 的时候 变化的最后结果就是 1全部前移 0全部后移
                {
                    for(int j = i; j <= i - 1 + cnt_1; j ++)
                        num[j] = 1;
                    for(int j = i - 1 + cnt_1 + 1; j <= cur - 1; j ++)
                        num[j] = 0;
                }
                else if(num[i - 1] == 0 && num[cur] == 1)   //首端为0 末端为1 的时候 
                {
                    for(int j = i; j <= i - 1 + cnt_0; j ++)
                        num[j] = 0;
                    for(int j = i - 1 + cnt_0 + 1; j <= cur - 1; j ++)
                        num[j] = 1;
                }
                ans = max(ans, max(cnt_0, cnt_1));      //总是取子序列变化的最大值
                i = cur;                    //i直接移动到cur处
            }
        }
        printf("%d\n", ans);
        for(int i = 0; i < n - 1; i ++)
            printf("%d ", num[i]);
        printf("%d\n", num[n - 1]);
    }
    return 0;
}
