// Case 5 : Overriding the start()

class A extends Thread {
    public void start() {
        super.start();
        System.out.println("Start in A");
    }

    public void run() {
        System.out.println("Run in A");
    }
};

public class Multithreading4 {
    public static void main(String ar[]) {
        System.out.println("Begin Main");
        A a1 = new A();
        a1.start();
        System.out.println("End Main");
    }
}
