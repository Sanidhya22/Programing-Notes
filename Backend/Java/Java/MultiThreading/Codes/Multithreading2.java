//Case 4 : 
// If we overload the run() in our class, then the start() will never call the overloaded run() rather it 
// will execute the overridden run().

class A extends Thread {
    public void run() {
        System.out.println(" I am run");
    }

    public void run(int p) {
        System.out.println(" I am overloaded run");
    }
}

public class Multithreading2 {
    public static void main(String args[]) {
        A a1 = new A();
        a1.start();
    }
}

// Note --

// class A extends Thread {
// }

// class B {
//     public static void main(String ar[]) {
//         A a1 = new A();
//         a1.start();
//     }
// };

// It will compile but there will be no output because in the thread class in run() there will be no 
// parameter given. Therefore it is recommended that we should override the run(), otherwise we will not get 
// the multithreading functionality.
