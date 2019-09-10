// 简单的说就是输入n。之后输入n个数。之后按着输入顺序和规则建树。（规则：输入的这个数 比 前一个数 小 建在左边， 比 前一个数 大 建在 右边）。之后输入q。之后输入q个查询。输出到达这些查询的路径。

// 第一次用二级指针吧…也是很不熟练…阿信喋教的真心好…只有用二级指针改值才能改变一级指针的值。（就像 一级指针能改变普通的值）
// （摘自 chinacloud。受用…）
// 二级指针

// void change_val(char *p)  
// {  
//     char new_val[3] = {2, 3, 4};    // [2]  
//     p = new_val;    //[3]
//     return;             // [4]  
// }  
// char val[3] = {1, 2, 3};  
// char *p = val;              // [1]  
// change_val(p);  
// 执行到语句[1]时，val和p如下图，val的起始地址为0x0000，指针p指向val首地址
// 　　　　　　　　　　　　　
// 执行到语句[2]时，val不变，指针p作为传入参数，拷贝其值，以p_copy代替，仍指向val首地址，函数内的new_val的起始地址为0x0020
// 　　　　　　　　　　　　　
// 执行到语句[3]时，将p_copy更改为指向new_val首地址，即：
// 　　　　　　　　　　　　　
// 执行到语句[4]时，函数返回，由于传入的只是p的拷贝p_copy（指针传入的也是拷贝？），故改变的只是p_copy的指向，对于指针p没有任何变化

// 改进一：[使用拷贝]

// void change_val(char *p)  
// {  
//     char new_val[3] = {2, 3, 4};    // [2]  
//     memcpy(p, new_val, 3);  
//     return;             // [3]            
// }  
// char val[3] = {1, 2, 3};  
// char *p = new char[3];          // [1]  
// change_val(p);  
// 执行到语句[3]时，将p_copy指向的地址(0x0000)填充为new_val的值，此时p_copy的值并没有发生变化，而是p_copy指向的值，即函数外p指向的值发生了变化，因此当函数返回时，p指向的内容已经发生了改变，即：

// 改进二：[使用二级指针]

// void change_val(char **p)  
// {  
//     static char new_val[3] = {2, 3, 4}; // [2]  
//     *p = new_val;  
//     return;             // [3]  
// }  
// char val[3] = {1, 2, 3};  
// char *p = val;              // [1]  
// change_val(&p);  
// 执行到语句[3]时，函数传入的是p指针的地址，即p_copy_double，将p_copy_double指向的地址(0x0020)填充为new_val的地址，即p指针的值发生了变化，因此当函数返回时，p指向的内容已经改变，即：

// 小结一下：如果直接使用赋值操作(如p = q)，需要使用二级指针
// 　　　　　如果使用拷贝，即重新分配了内存(如strcpy, memcpy)，使用一级指针即可

// 使用二级指针，也就是指针的指针时，其中一级指针是存放的是一个地址，二级指针存放的是一级指针的地址。也就是上面所说的p指针的值发生了变化。

#include <cstdio>
#include <cstdlib>

using namespace std;

int t, n, q;
struct node
{
    int data;
    node *left_son;
    node *right_son;
};

void build_tree(node **root,int temp)
{
    if(*root == NULL)
    {
        node *p = (node*)malloc(sizeof(node));
        p->data = temp;
        p->left_son = NULL;
        p->right_son = NULL;
        *root = p;
    }
    else
    {
        if(temp > (*root)->data)
            build_tree(& (*root)->left_son, temp);
        else
            build_tree(& (*root)->right_son, temp);
    }
}

void query_tree(node **root, int number)
{
    if(number == (*root)->data)
    {
        printf("\n");
        return;
    }
    if(number > (*root)->data)
    {
        printf("W");
        query_tree(& (*root)->left_son, number);
    }
    else
    {
        printf("E");
        query_tree(& (*root)->right_son, number);
    }
}

int main()
{
    scanf("%d", & t);
    while(t --)
    {
        node *root = NULL;
        scanf("%d", & n);
        int temp;
        for(int i = 0; i < n; i ++)
        {
            scanf("%d", & temp);
            build_tree(& root, temp);
        }
        scanf("%d", & q);
        while(q --)
        {
            int number;
            scanf("%d", & number);
            query_tree(& root, number);
        }
    }
}