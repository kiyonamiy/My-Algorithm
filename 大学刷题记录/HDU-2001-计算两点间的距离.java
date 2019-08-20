/**
2015年11月15日 20:24:25
输入两点坐标（X1,Y1）,（X2,Y2）,计算并输出两点间的距离。 
输入数据有多组，每组占一行，由4个实数（double）组成，分别表示x1,y1,x2,y2,数据之间用空格隔开。 
对于每组输入数据，输出一行，结果保留两位小数。
 */

/**
学习JAVA ing..这是我第一道JAVA题。这道题也是搞得我半天。 
错的原因就是提交代码时不能包括包！ 
while(cin.hasNext())多组输入。 
NumberFormat layout = new DecimalFormat(“0.00”);控制输出格式。（import java.text.*）
 */
import java.text.NumberFormat;
import java.util.*;
import java.text.*;

public class Main {

    public static void main(String[] args) {
        Scanner cin = new Scanner(System.in);
        Coor coor_1 = new Coor();
        Coor coor_2 = new Coor();
        while(cin.hasNext()) {
            coor_1.setX(cin.nextDouble());
            coor_1.setY(cin.nextDouble());
            coor_2.setX(cin.nextDouble());
            coor_2.setY(cin.nextDouble());
            double X = Math.pow(coor_1.getX() - coor_2.getX(), 2);
            double Y = Math.pow(coor_1.getY() - coor_2.getY(), 2);
            double ans = Math.sqrt(X + Y);
            NumberFormat layout = new DecimalFormat("0.00"); 
            System.out.println(layout.format(ans));
        }
        cin.close();
    }
}

class Coor {
    private double x;
    private double y;
    Coor() {

    }
    public void setX(double x) {
        this.x = x;
    }
    public void setY(double y) {
        this.y = y;
    }
    public double getX() {
        return x;
    }
    public double getY() {
        return y;
    }
}