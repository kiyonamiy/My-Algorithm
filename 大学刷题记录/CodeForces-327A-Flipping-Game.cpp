// 输入n。第二行输入n个 0 或者 1 。 选择一段区间进行翻转。（0变1 1变0）问翻转后最大的和 是多少。

// 水。直接暴力

#include <iostream>
#include <cstdio>
#include <cstring>

using namespace std;

const int n_max = 100 + 5;
int num[n_max];
int n, max_sum;

int main()
{
    while(~scanf("%d", & n))
    {
        for(int i = 1; i <= n; i ++)
            scanf("%d", & num[i]);
        max_sum = 0;
        for(int i = 1; i <= n; i ++)
        {
            for(int j = i; j <= n; j ++)
            {
                int sum = 0;
                for(int k = 1; k < i; k ++)
                    sum += num[k];
                for(int k = i; k <= j; k ++)
                    sum += 1 - num[k];
                for(int k = j + 1; k <= n; k ++)
                    sum += num[k];
                if(sum > max_sum)
                        max_sum = sum;
            }
        }
        printf("%d\n", max_sum);
    }
}