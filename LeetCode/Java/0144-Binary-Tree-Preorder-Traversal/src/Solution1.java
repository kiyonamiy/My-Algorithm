import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

/**
 * @author KiyonamiYu
 * @date 2019/4/21 15:09
 */
public class Solution1 {

    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        if(root == null) {
            return res;
        }

        Stack<Command> stack = new Stack<>();
        stack.push(new Command(CMD.go, root));

        while(!stack.isEmpty()) {
            Command command = stack.pop();
            if(command.cmd.equals(CMD.go)) {
                if(command.node.right != null) {
                    stack.push(new Command(CMD.go, command.node.right));
                }
                if(command.node.left != null) {
                    stack.push(new Command(CMD.go, command.node.left));
                }
                stack.push(new Command(CMD.print, command.node));
            } else if(command.cmd.equals(CMD.print)) {
                res.add(command.node.val);
            }
        }

        return res;
    }

}
