/************************************************
* Author        :somniloquy
* Created Time  :2015/10/25 17:23:09
 ************************************************/

/**
输入n m。 
输入n个字母。 
输入m个替换操作。 
例如 输入 a b。 
之后n个字母中 a 变成了 b， b 变成了 a。
**/

/**
直接进行替换一定超时。将输入操作的时候进行处理。将每个字母最后变成的字母直接储存。借用栈来存储，判断顶端元素。就有一种找根节点的感觉。
**/

#include <cstdio>
#include <algorithm>
#include <iostream>
#include <cstring>
#include <stack>

using namespace std;

const int n_max = 2e6 + 5;
char letter[n_max];
int num_x, num_y;

int main(void)
{
    int n, m;
    while(~scanf("%d %d", & n, & m))
    {
        getchar();
        for(int i = 0; i < n; i ++)
            scanf("%c", & letter[i]);
        getchar();
        char x, y;
        stack <int> root[26];
        for(int i = 0; i < 26; i ++)
            root[i].push(i);
        while(m --)
        {
            scanf("%c %c", & x, & y);
            getchar();
            num_x = x - 'a';
            num_y = y - 'a';
            for(int i = 0; i < 26; i ++)
            {
                if(root[i].top() == num_x)
                    root[i].push(num_y);
                else if(root[i].top() == num_y)
                    root[i].push(num_x);
            }
        }
        for(int i = 0; i < n; i ++)
            letter[i] = root[letter[i] - 'a'].top() + 'a';
        for(int i = 0; i < n; i ++)
            printf("%c", letter[i]);
        printf("\n");
    }
        return 0;
}
