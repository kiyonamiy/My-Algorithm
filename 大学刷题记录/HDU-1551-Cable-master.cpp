/************************************************
* Author        :somniloquy
* Created Time  :2015/10/24 19:26:50
 ************************************************/

// 有N条绳子，它们的长度分别为Li。如果从它们中切割出K条长度相同的绳子的话，这K条绳子每条最长能有多长？答案保留到小数点后2位。

// 二分。之前做过。POJ-1064。想当初也是嫩…写着玩。精度以for循环100次为准。

#include <cstdio>
#include <algorithm>
#include <iostream>
#include <cstring>

using namespace std;

const int n_max = 1e4 + 5;
const int INF = 1e8;
double len[n_max];
int n, k;

bool judge(double x)
{
	int cnt = 0;
	for(int i = 0; i < n; i ++)
		cnt += (int) (len[i] / x);
	return cnt >= k;
}

int main(void)
{
	while(~scanf("%d %d", & n, & k))
	{
		if(!n && !k)
			break;
		for(int i = 0; i < n; i ++)
			scanf("%lf", & len[i]);
		double left = 0, right = INF;
		for(int i = 1; i < 100; i ++)
		{
			double mid = (left + right) / 2;
			if(judge(mid))
				left = mid;
			else
				right = mid;
		}
		printf("%.2f\n", right);
	}
        return 0;
}