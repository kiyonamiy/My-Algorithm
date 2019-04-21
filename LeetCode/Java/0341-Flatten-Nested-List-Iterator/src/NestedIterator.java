import java.util.*;

/**
 * @author KiyonamiYu
 * @date 2019/4/21 17:03
 * 25min
 */
public class NestedIterator implements Iterator<Integer> {

    private Stack<NestedInteger> stack;
    private Queue<Integer> result;

    public NestedIterator(List<NestedInteger> nestedList) {
        result = new ArrayDeque<>();

        stack = new Stack<>();

        for(int i = nestedList.size() - 1; i >= 0; i --) {
            stack.push(nestedList.get(i));
        }

        while(!stack.isEmpty()) {
            NestedInteger nestedInteger = stack.pop();
            if(nestedInteger.isInteger()) {
                result.add(nestedInteger.getInteger());
            } else {
                List<NestedInteger> nestedIntegers = nestedInteger.getList();
                for(int i = nestedIntegers.size() - 1; i >= 0; i --) {
                    stack.push(nestedIntegers.get(i));
                }
            }
        }
    }
    @Override
    public boolean hasNext() {
        return !result.isEmpty();
    }

    @Override
    public Integer next() {
        return result.remove();
    }
}
