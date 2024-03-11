import java.util.Scanner;

// Try Catch Finally block
public class Exception1 {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        try {
            System.out.println("Enter first Number");
            int x = sc.nextInt();
            System.out.println("Enter second Number");
            int y = sc.nextInt();
            int z = x / y;
            System.out.println("div : " + z);
        } catch (ArithmeticException ae) {
            System.out.println("2nd no. should not be zero");
        } catch (NumberFormatException hei) {
            System.out.println("provide proper value");
        } finally {
            System.out.println("thanks");
        }
        System.out.println("end of prog");
        sc.close();
    }
}