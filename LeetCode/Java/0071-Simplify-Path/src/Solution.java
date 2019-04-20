import java.util.Stack;

/**
 * @author KiyonamiYu
 * @date 2019/4/20 22:26
 * 10min
 */
public class Solution {
    public String simplifyPath(String path) {
        Stack<String> stack = new Stack<>();

        for(String file : path.split("/")) {
            if(file.equals("..") && !stack.isEmpty()) {
                stack.pop();
            } else if(!file.equals("..") && !file.equals(".") && !file.equals("")) {
                stack.push(file);
            }
        }
        //反向将将栈内String组合，不需要借助其他数据结构
        String res = "";
        while(!stack.isEmpty()) {
            res = "/" + stack.pop() + res;
        }
        return res.equals("") ? "/" : res;
    }
}
