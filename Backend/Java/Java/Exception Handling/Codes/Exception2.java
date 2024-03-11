public class Exception2 {

    // Throw keyword
    public static void main(String arghs[]) {
        try {
            System.out.println("hi in try");
            ArithmeticException ob = new ArithmeticException();
            throw ob;
        } catch (Exception e) {
            System.out.println("bye in catch");
        }
    }
}
