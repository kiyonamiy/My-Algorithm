/************************************************
* Author        :somniloquy
* Created Time  :2015/10/17 19:37:31
 ************************************************/

// （摘自 LYHVOYAGE）
// 一辆卡车要行驶L单位距离。最开始时，卡车上有P单位汽油，每向前行驶1单位距离消耗1单位汽油。如果在途中车上的汽油耗尽，卡车就无法继续前行，即无法到达终点。途中共有N个加油站，加油站提供的油量有限，卡车的油箱无限大，无论加多少油都没问题。给出每个加油站距离终点的距离和能够提供的油量，问卡车从起点到终点至少要加几次油？如果不能到达终点，输出-1。

// （摘自 LYHVOYAGE）
// 由于N比较大，应该找一个高效的解法。稍微转换一下思考方式：在卡车开往终点的途中，只有在加油站才可以加油。但是，如果认为“在到达加油站i时，就获得了一次在之后的任何时候都可以加Bi单位汽油的权利”，在解决问题上也是一样的。而在之后需要加油时，就认为是在之前经过的加油站加的油就可以了。因为希望加油次数尽可能少，所以当燃料为0了之后再加油是最好的选择。基于贪心的思想，当燃料为0时，选择能加油量最大的加油站。所以可以用一个优先队列来保存经过的加油站的油量，当需要加油时，取出队列中的最大元素即可。
// 这道题我卡在了忘记优先队列删除元素 又忘记了判空。cur从1开始。注意cnt的变化。

#include <cstdio>
#include <algorithm>
#include <iostream>
#include <cstring>
#include <queue>

using namespace std;

const int n_max = 1e4 + 5;
int n, ans, len;
struct node
{
	int distance;
	int fuel;
	bool operator < (node Next) const
	{
		return fuel < Next.fuel;
	}
} stop[n_max];

bool cmp(node x, node y)
{
	return x.distance < y.distance;
}

int main(void)
{
	while(~scanf("%d", & n))
	{
		for(int i = 0; i < n; i ++)
			scanf("%d %d", & stop[i].distance, & stop[i].fuel);
		scanf("%d %d", & stop[n].distance, & stop[n].fuel);
		len = stop[n].distance;
		for(int i = 0; i <= n; i ++)
			stop[i].distance = stop[n].distance - stop[i].distance;
		sort(stop, stop + n + 1, cmp);
		priority_queue <node> gas;
		queue <node> process;
		process.push(stop[0]);
		int cur = 1, cnt = 0;
		ans = 0;
		bool flag = false;
		while(!process.empty())
		{
			node now = process.front();
			process.pop();
			cnt += now.fuel;
            if(cnt >= len)
			{
				flag = true;
				break;
			}
			while(stop[cur].distance <= cnt && cur <= n)
			{
				gas.push(stop[cur]);
				cur ++;
			}
			if(!gas.empty())
            {
                process.push(gas.top());
                gas.pop();
            }
			ans ++;
		}
		if(flag)
			printf("%d\n", ans);
		else
			printf("-1\n");
	}
        return 0;
}

