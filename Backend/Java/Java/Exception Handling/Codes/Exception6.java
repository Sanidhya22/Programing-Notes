class A extends RuntimeException {
    String res;

    A() {
        res = "first exception";
    }

    A(String r) {
        res = r;
    }

    public String toString() {
        return res;
    }
};

class ChainExp {
    static void test() {
        try {
            A a1 = new A();
            throw a1;
        } catch (A aa) { // aa is a1
            A a2 = new A("second exception");
            a2.initCause(aa);
            throw a2;
        }
    }
};

public class Exception6 {
    public static void main(String args[]) {
        try {
            ChainExp.test();
        } catch (A e) { /* e is a2 */
            A ob = (A) e.getCause(); /* ob is a1 */
            System.out.println(ob);/* toStirng() of a1 */
            System.out.println(e); /* a2.toString() of a2 */
        }
    }
}
