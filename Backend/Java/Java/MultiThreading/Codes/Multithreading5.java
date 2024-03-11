// Creating threads using Thread class constructor

class A extends Thread {
    A() {
    }

    A(String p) {
        super(p);
    }

    public void run() {
        int x = 0;
        while (x < 5)
            System.out.println(getName() + " : " + x++);
    }
};

public class Multithreading5 {
    public static void main(String gs[]) {
        System.out.println("begin main");
        A a1 = new A();
        A a2 = new A("ram");
        A a3 = new A();
        a3.setName("ravan");
        A a4 = new A();
        a1.start();
        a2.start();
        a3.start();
        a4.start();
        System.out.println("end main");
    }

}
