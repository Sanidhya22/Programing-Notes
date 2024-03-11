// Program to implement sychronization in java using synchronized method

class Que {
    static int cnt = 72;

    synchronized void booking(String na) {
        System.out.println("[ booking ticket for : " + na);
        int x = 0;
        while (x < 123456789) {
            x = x + 2;
            x = x - 1;
        }
        System.out.println(" ticket no for : " + na + " is " + cnt--);
    }
};

class Person extends Thread {
    String p;
    Que ob;

    Person(String pp, Que qq) {
        p = pp;
        ob = qq;
    }

    public void run() {
        ob.booking(p);
    }
};

public class Multithreading10 {
    public static void main(String gs[]) {
        Que q1 = new Que();
        Person p1 = new Person("king", q1);
        Person p2 = new Person("ming", q1);
        Person p3 = new Person("ping", q1);
        Person p4 = new Person("ting", q1);
        p1.start();
        p2.start();
        p3.start();
        p4.start();
    }
}
// When there is a competition among multiple threads which are trying to access a shared resource 
// this condition is called race condition.

// OS uses Semaphore or Mutex lock or lock to avoid race condition between multiple processes. The
// same concept has been implemented in Java by synchronized keyword.

// When a thread will access a Synchronized Method, then it will acquire a lock on the Synchronized
// Method and the object by which Synchronized Method is invoked. During this time other threads are not
// allowed to access the same Synchronized Method on same object. When the thread will complete the
// execution of Synchronized Method then it will release the lock, so that another thread will acquire the lock to
// execute Synchronized Method.