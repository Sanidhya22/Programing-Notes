class C implements Runnable {
    public void run() {
        int x = 0;
        Thread t = Thread.currentThread();
        while (x < 4)
            System.out.println(t.getName() + " run in C " +
                    x++);
    }
};

public class Multithreading9 {
    public static void main(String args[]) {
        C c1 = new C();
        // c1.start();
        Thread t1 = new Thread(c1);
        t1.start();
        Runnable a1 = new C();
        Thread t2 = new Thread(a1, "rahul");
        t2.start();
    }
}
