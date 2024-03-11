public class Exception4 {
    static void test(int p, int q) throws ArithmeticException {
        int z = p / q;
        System.out.println("div : " + z);
    }

    public static void main(String args[]) {
        try {
            test(45, 5);
            System.out.println("finish 1");
            test(23, 0);
            System.out.println("finish 2");
        } catch (ArithmeticException e) {
            System.out.println("catch in main");
        }
    }
}
