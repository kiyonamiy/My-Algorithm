/************************************************
* Author        :somniloquy
* Created Time  :2015/10/25 17:10:57
 ************************************************/

/**
输入长度l。 
输入第一个速度p。 
输入第二个速度q。 
二者相向而行，问碰撞后 第一个物体行走了多少距离。
**/

/**
水
**/

#include <cstdio>
#include <algorithm>
#include <iostream>
#include <cstring>

using namespace std;

int main(void)
{
    int l, p, q;
    while(~scanf("%d", & l))
    {
        scanf("%d", & p);
        scanf("%d", & q);
        double t = l * 1.0 / (p + q);
        double ans = t * p;
        printf("%f\n", ans);
    }
        return 0;
}
