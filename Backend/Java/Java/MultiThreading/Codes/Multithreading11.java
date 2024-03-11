// Thread Interrupts

class A extends Thread {
    A() {
        start();
    }

    public void run() {
        int i = 1;
        while (i < 2000) {
            System.out.println(i++);
            if (Thread.interrupted())
                System.out.println("Thread Inrrupted..");
        }
    }
}

public class Multithreading11 {
    public static void main(String args[]) throws Exception {
        A a1 = new A();
        Thread.sleep(50);
        if (!a1.isInterrupted()) {
            a1.interrupt();
            System.out.println("Interrupted by main");
        }
    }
}
