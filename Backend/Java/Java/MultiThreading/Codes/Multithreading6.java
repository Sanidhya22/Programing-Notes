// Thread class methods

public class Multithreading6 extends Thread {
    public void run() {
        int x = 0;
        while (x < 15)
            System.out.println(getName() + " : " + x++);
    }

    public static void main(String ar[]) throws Exception {
        System.out.println("begin main");
        Multithreading6 t1 = new Multithreading6();
        Multithreading6 t2 = new Multithreading6();
        System.out.println(t1.isAlive());
        t1.start();
        t2.start();
        t1.join();
        System.out.println(t1.isAlive());
        System.out.println(t2.isAlive());
        System.out.println("end main");
    }
}
