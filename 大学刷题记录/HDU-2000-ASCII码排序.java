/**
2015年11月16日 16:43:30
输入三个字符后，按各字符的ASCII码从小到大的顺序输出这三个字符。
 */

/**
水。
 */
import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) {
        // TODO Auto-generated method stub
        Scanner cin = new Scanner(new BufferedInputStream(System.in));
        while(cin.hasNext()) {
            String letter = cin.nextLine();
            char[] ch;
            ch = letter.toCharArray();
            Arrays.sort(ch);
            for(int i = 0; i < ch.length - 1; i ++)
                System.out.print(ch[i] + " ");
            System.out.println(ch[ch.length - 1]);
        }
        cin.close();
    }
}