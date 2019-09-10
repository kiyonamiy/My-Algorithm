/************************************************
* Author        :somniloquy
* Created Time  :2015/10/18 10:08:15
 ************************************************/


// （摘自 小優YoU）
// 有一个农夫要把一个木板钜成几块给定长度的小木板，每次锯都要收取一定费用，这个费用就是当前锯的这个木版的长度
// 给定各个要求的小木板的长度，及小木板的个数n，求最小费用
// 以3 5 8 5为例：
// 先从无限长的木板上锯下长度为 21 的木板，花费 21
// 再从长度为21的木板上锯下长度为5的木板，花费5
// 再从长度为16的木板上锯下长度为8的木板，花费8
// 总花费 = 21+5+8 =34

// 优先队列，每次取出队列中的2个最小值，合并后再放入队列，直到队列元素只有一个。注意ans的范围 longlong。

#include <cstdio>
#include <algorithm>
#include <iostream>
#include <cstring>
#include <queue>

using namespace std;

const int n_max = 2e4 + 5;
int len[n_max], n;
long long ans;
priority_queue <int, vector<int>, greater<int> > fence;

int main(void)
{
	while(~scanf("%d", & n))
	{
		for(int i = 0; i < n; i ++)
		{
			scanf("%d", & len[i]);
			fence.push(len[i]);
		}
		ans = 0;
		while(!fence.empty())
		{
			int len_1 = fence.top();
			fence.pop();
			if(fence.empty())
                break;
			int len_2 = fence.top();
			fence.pop();
			int len_3 = len_1 + len_2;
			ans +=	len_3;
			fence.push(len_3);
		}
		printf("%I64d\n", ans);
	}
        return 0;
}