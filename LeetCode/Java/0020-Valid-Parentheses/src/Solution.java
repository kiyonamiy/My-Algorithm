import java.util.Stack;

/**
 * @author KiyonamiYu
 * @date 2019/4/5 9:53
 */
public class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();

        for(int i = 0; i < s.length(); i ++) {
            char ch = s.charAt(i);

            if(ch == '(' || ch == '[' || ch == '{') {
                stack.push(ch);
                //因为只有括号
            } else {
                if(stack.isEmpty()) {
                    return false;
                }
                char stackTop = stack.pop();
                if(ch == ')' && stackTop != '('
                        || ch == ']' && stackTop != '['
                        || ch == '}' && stackTop != '{') {
                    return false;
                }
            }
        }
        return stack.isEmpty();
    }
}

