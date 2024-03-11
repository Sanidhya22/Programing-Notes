// Case 5 : Overriding the start()

class A extends Thread {
    public void start() {
        System.out.println("Hi start");
    }

    public void run() {
        int x = 0;
        while (x < 6)
            System.out.println("Running :" + x++);
    }
};

public class Multithreading3 {
    public static void main(String ar[]) {
        System.out.println("Begin Main");
        A a1 = new A();
        a1.start();
        System.out.println("End Main");
    }
}
