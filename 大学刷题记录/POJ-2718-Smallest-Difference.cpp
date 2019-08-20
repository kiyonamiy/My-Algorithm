/************************************************
* Author        :somniloquy
* Created Time  :2015/11/4 15:44:49
 ************************************************/

/**
输入0~9中的几个数 要求分成两堆 使组合后的数字 差值最小。 
（输入数字不重复）（最少输入2个数字 最多输入10个数字）（不允许有前导零）
*/

/**
作者的全排列超时 是因为调用那些函数么？string慢吧？
*/

#include <cstdio>
#include <algorithm>
#include <iostream>
#include <cstring>

using namespace std;

int number[10];
int t, n;

int combination(int op, int ed)
{
    int ans = 0;
    for(int i = op; i < ed; i ++)
        ans = ans * 10 + number[i];
    return ans;
}

int main(void)
{
    scanf("%d", & t);
    getchar();
    while(t --)
    {
        char temp;
        n = 0;
        while((temp = getchar()) != '\n')
        {
            if(temp - '0' >= 0 && temp - '0' <= 9)
                number[n ++] = temp - '0';
        }
        int mid = n / 2;
        int ans = 0x3fffffff;
        do
        {
            if(number[0] == 0 || number[mid] == 0)
                    continue;
            int a = combination(0, mid);
            int b = combination(mid, n);
            ans = min(ans, abs(a - b)); 
        } while(next_permutation(number, number + n));
        if(n == 2)
            ans = abs(number[1] - number[0]);
        printf("%d\n", ans);
    }
        return 0;
}