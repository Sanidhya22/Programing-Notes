// Java program to create Daemon thread and demonstrate the usage of setDaemon() and isDaemon() method.

public class Multithreading7 extends Thread {
    public Multithreading7(String name) {
        super(name);
    }

    public void run() {
        // Checking whether the thread is Daemon or not
        if (Thread.currentThread().isDaemon()) {
            System.out.println(getName() + " is Daemon thread");
        }

        else {
            System.out.println(getName() + " is User thread");
        }
    }

    public static void main(String[] args) {

        Multithreading7 t1 = new Multithreading7("t1");
        Multithreading7 t2 = new Multithreading7("t2");
        Multithreading7 t3 = new Multithreading7("t3");

        // Setting user thread t1 to Daemon
        t1.setDaemon(true);

        // starting first 2 threads
        t1.start();
        t2.start();

        // Setting user thread t3 to Daemon
        t3.setDaemon(true);
        t3.start();
    }
}
