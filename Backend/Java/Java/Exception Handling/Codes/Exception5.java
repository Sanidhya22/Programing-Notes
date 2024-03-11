class MyExp extends Exception {
    String res; /* reason of excp */
    String cn; /* class name in which excp occurs. */
    String mn; /* method name in which excp occurs. */
    int nn; /* line number in which excp occurs. */

    MyExp(String r, String c, String m, int n) {
        res = r;
        cn = c;
        mn = m;
        nn = n;
    }

    public String toString() {
        return "excpetion in : " + mn + ", at line no : " +
                nn + ", in class : " + cn + ", due to " + res;
    }
}

public class Exception5 {
    static void test(int p) throws MyExp {
        if (p > 1000) {
            MyExp ob = new MyExp("more than 1000", "UserExp", "test()", 3);
            throw ob;
        } else
            System.out.println("val " + p);
    }

    public static void main(String args[]) {
        try {
            test(456);
            System.out.println("success 1");
            test(3456);
            System.out.println("success 2");
        } catch (MyExp e) {
            System.out.println(e);
        }
    }
}
