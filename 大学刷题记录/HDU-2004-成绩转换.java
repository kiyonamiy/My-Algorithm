/**
2015年11月16日 17:17:51
输入一个百分制的成绩t，将其转换成对应的等级，具体转换规则如下： 
90~100为A; 
80~89为B; 
70~79为C; 
60~69为D; 
0~59为E; 
对于每组输入数据，输出一行。如果输入数据不在0~100范围内，请输出一行：“Score is error!”。
 */

/**
练习java。
*/

import java.util.*;
import java.text.*;
import java.io.*;

public class Main {

    public static void main(String[] args) {
        // TODO Auto-generated method stub
        Scanner cin = new Scanner(new BufferedInputStream(System.in));
        while(cin.hasNext()) {
            double t = cin.nextDouble();
            if(t > 100 || t < 0)
                System.out.println("Score is error!");
            else if(t >=90 && t <= 100)
                System.out.println("A");
            else if(t >= 80 && t <= 89)
                System.out.println("B");
            else if(t >= 70 && t <= 79)
                System.out.println("C");
            else if(t >= 60 && t <= 69)
                System.out.println("D");
            else
                System.out.println("E");

        }
        cin.close();
    }

}