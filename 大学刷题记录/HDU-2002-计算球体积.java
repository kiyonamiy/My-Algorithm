/**
2015年11月15日 20:55:23
根据输入的半径值，计算球的体积。 
输出对应的球的体积，对于每组输入数据，输出一行，计算结果保留三位小数。
 */

/**
水。PI取3.1415927
 */

import java.util.*;
import java.text.*;

public class Main {

    public static void main(String[] args) {
        Scanner cin = new Scanner(System.in);
        Ball ball = new Ball();
        while(cin.hasNext()) {
            ball.setRadius(cin.nextDouble());
            double ans = ball.volume();
            NumberFormat layout = new DecimalFormat("0.000");
            System.out.println(layout.format(ans));
        }
        cin.close();
    }
}

class Ball {
    private double radius;
    public void setRadius(double radius) {
        this.radius = radius;
    }
    public double getRadius() {
        return radius;
    }
    public double volume() {
        return 3.1415927 * Math.pow(radius, 3) * 4 / 3;
    }
}