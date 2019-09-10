/************************************************
* Author        :somniloquy
* Created Time  :2015/10/25 14:06:01
 ************************************************/

// 有1到n个数字，两个人轮流选1个数，并把它的所有约数擦去。擦去最后一个数的人赢，输出先手必胜还是必败。

// 这道题有点厉害…考一个逻辑思维吧…看到其他人的代码和解释 我也是醉醉的。
// 假设先手A走1 又假设后手B必赢 那么A只要提前按着B必赢的方案先走 则必赢（因为无论走其他哪个数 1一定是会被作为约数被拿走）。这样 A一定赢 （除了本来n = 0外 A一开始就不能走）

#include <cstdio>
#include <algorithm>
#include <iostream>
#include <cstring>

using namespace std;

int n;

int main(void)
{
	while(~scanf("%d", & n))
	{
		if(!n)
			printf("fail\n");
		else
			printf("win\n");
	}
        return 0;
}
