// （摘自飘过的小牛）
// 初始时，有n个龙珠，编号从1到n，分别对应的放在编号从1到n的城市中。

// 现在又2种操作：

// T A B，表示把A球所在城市全部的龙珠全部转移到B城市。（第一次时，因为A球所在的城市只有一个球，所以只移动1个，如果有多个，则全部移动）。

// Q A，表示查询A。要求得到的信息分别是：A现在所在的城市，A所在城市的龙珠数目，A转移到该城市移动的次数（如果没有移动就输出0）
// 题解：
// （参考 飘过的小牛）我也是超时的问题…也知道该在Find函数中改…不过不知道该怎么改。后来看到了大神…我模拟了好几遍，也终于弄懂，不过不知道能不能日后想的起并运用…这道并查集我觉得是比较全面的。
// Find函数 所做的操作 是 将 所有的节点 指向 根节点。
// Merge函数 所做的操作 是 将Find出来的根节点 指向 另一个节点，使这个节点成为一个新的根节点。
// 举例 ： 此时的数组结果应该是这样… 3 3 4 4!（下标分别 为 1 2 3 4）（Merge函数中的 Find的操作结果 是 将 下标为 1 2 的值改为了 3 3，Merge的最后操作是 将 下标为 3 的值 改为 4）（下标为 4 的值 本来就为 4，不变）
// 上面AC代码中 最后一次的 Find (例如Find(1))作用后，数组的结果 ： 4 3 4 4（最后一次压缩路径 将Find的子节点指向根节点）.

#include <cstdio>

using namespace std;

const int n_max = 1e4 + 5;
struct node
{
	int root;
	int leaf;
	int transfer;
} ball[n_max];
int t, n, q;

int Find(int x)
{
	if(x == ball[x].root)
		return x;
	else
	{
		int temp = ball[x].root;	//记录原根节点
		ball[x].root = Find(ball[x].root);	//路径压缩 根节点改变
		ball[x].transfer += ball[temp].transfer;	//因为是原根节点移动，所以 以 原根节点的移动 带动改 此时查询的节点的移动次数
		return ball[x].root;
	}
}

void Merge(int x, int y)
{
	x = Find(ball[x].root);
	y = Find(ball[y].root);
	if(x != y)
	{
		ball[x].root = y;	//改变根节点
		ball[x].transfer ++;	//根节点移动 （Find函数中的temp）
		ball[y].leaf += ball[x].leaf;	//节点数量移动
		ball[x].leaf = 0;		//全移走 归0
	}
}

int main()
{
	scanf("%d", & t);
	int cas = 0;
	while(t --)
	{

		printf("Case %d:\n", ++ cas);
		scanf("%d %d", & n, & q);
		for(int i = 1; i <= n; i ++)	//初始化
		{
			ball[i].root = i;
			ball[i].leaf = 1;
			ball[i].transfer = 0;
		}
		char operation;
		for(int i = 1; i <= q; i ++)
		{
			getchar();
			scanf("%c", & operation);
			int a, b;
			if(operation == 'T')
			{
				scanf("%d %d", & a, & b);
				Merge(a, b);
			}
			else if(operation == 'Q')
			{
				scanf("%d", & a);
				int parent = Find(a);		//其实我觉得这蛮关键的 这一次调用函数Find,使整个并查集的结构更分明，只有一个根节点，其他所有节点的root都等于根节点，并且a的最后一次transfer是在这里调用累加的（没有这一步操作是不行的）
				printf("%d %d %d\n", parent, ball[parent].leaf, ball[a].transfer);	//输出根节点，根节点的节点数，a的转移次数
			}
		}
	}
}