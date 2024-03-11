// Program to set the priorities of the thread

public class Multithreading8 extends Thread {
    public void run() {
        int x = 0;
        while (x < 15)
            System.out.println(getName() + " : " + x++);
    }

    public static void main(String args[]) {
        System.out.println("begin main");
        Multithreading8 p1 = new Multithreading8();
        Multithreading8 p2 = new Multithreading8();
        p1.start();
        p2.start();
        p1.setPriority(Thread.MIN_PRIORITY);
        p2.setPriority(10);
        System.out.println("end main");
    }
}

// When we don’t provide any priority of threads, then Java uses fixed priority scheduling in which it
// will provide equal priority i.e. normal priority or 5 for each thread.
