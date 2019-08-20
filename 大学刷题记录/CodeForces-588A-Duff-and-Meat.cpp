/************************************************
* Author        :somniloquy
* Created Time  :2015/10/28 14:07:02
 ************************************************/

/**
输入数字n 代表天数。 
再输入n组a p 
第i行输入ai pi，分别代表第i天她需要ai kg的肉，和当天肉的价格(/kg)，（可以多买囤货）。 
问最少花的价格。
**/

/**
水。
**/

#include <cstdio>
#include <algorithm>
#include <iostream>
#include <cstring>

using namespace std;

const int INF = 0x3fffffff;
int sum, n;

int main(void)
{
    while(~scanf("%d", & n))
    {
        int p_min = INF;
        sum = 0;
        for(int i = 0; i < n; i ++)
        {
            int a, p;
            scanf("%d %d", & a, & p);
            if(p < p_min)
                p_min = p;
            sum += p_min * a;
        }
        printf("%d\n", sum);
    }
        return 0;
}
 ———————————————— 
版权声明：本文为CSDN博主「somniloquy_」的原创文章，遵循CC 4.0 by-sa版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/somniloquy_/article/details/49468383