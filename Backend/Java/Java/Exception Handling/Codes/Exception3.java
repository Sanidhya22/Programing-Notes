public class Exception3 {
    static void print(String n, int p, int q) {
        try {
            int z = p / q;
            System.out.println(n + "PRINTED IN LASER " + z);
        } catch (ArithmeticException e) {
            System.out.println("error : " + n + " PRINTED IN DMP");
            throw e;
        }
    }

    public static void main(String args[]) {
        try {
            print("salary ", 49, 7);
            System.out.println("mesg : salary printed in laser");
            print("pension ", 97, 0);
            System.out.println("mesg : pension printed in laser");
        } catch (ArithmeticException ob) {
            System.out.println("mesg : printed in dmp");
        }
    }
}
