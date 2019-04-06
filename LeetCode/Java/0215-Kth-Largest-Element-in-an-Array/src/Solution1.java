/**
 * @author KiyonamiYu
 * @date 2019/4/6 22:42
 */
public class Solution1 {
    public int findKthLargest(int[] nums, int k) {
        int low = 0, high = nums.length - 1;
        int targetPos = nums.length - k;
        //之前while(low < high) 有些解可能在low == high产生 所以错误
        while(true) {
            int pivotPos = partition(nums, low, high);
            if(pivotPos < targetPos) {
                low = pivotPos + 1;
            } else if(pivotPos > targetPos) {
                high = pivotPos - 1;
            } else {
                return nums[pivotPos];
            }
        }
    }

    public int partition(int[] nums, int low, int high) {
        int pivot = nums[low];

        //表示查找完毕
        while(low < high) {
            //从左侧开始寻找，比pivot大的留在右边
            //直到比pivot小的，丢到左边
            while(low < high && nums[high] >= pivot) {  //low < high 防止单次查找过头
                high --;
            }
            nums[low] = nums[high];     //每次都是单边复制，nums[high]依旧是原来的nums[high] //第一次对nums[low]进行了一次保存，所以覆盖了没有关系。这也是从左边开始的原因。

            while(low < high && nums[low] <= pivot) {
                low ++;
            }
            nums[high] = nums[low];
        }

        //最后跳出循环，一定是high == low，二者也会进行一次没有意义的nums[high] = nums[low]。（指向同一下标还赋值）
        //此时的nums[low]存放的是重复的元素，所以可以覆盖。
        nums[low] = pivot;
        return low;
    }
}
