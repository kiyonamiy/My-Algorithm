
/**
2015年11月16日 17:07:30
求实数的绝对值。
*/

/**
练Java
 */

import java.util.*;
import java.math.*;
import java.text.*;
import java.io.*;

public class Main {

    public static void main(String[] args) {
        Scanner cin = new Scanner(new BufferedInputStream(System.in));
        while(cin.hasNext()) {
            double x = cin.nextDouble();
            x = Math.abs(x);
            DecimalFormat layout = new DecimalFormat("0.00");
            System.out.println(layout.format(x));
        }
        cin.close();
    }

}