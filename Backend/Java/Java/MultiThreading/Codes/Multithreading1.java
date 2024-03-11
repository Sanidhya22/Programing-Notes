//Analysis of Thread

// Case 1 : Creating a simple thread

class A extends Thread {
    public void run() {
        int x = 0;
        while (x < 100)
            System.out.println("running : " + x++);
    }
};

public class Multithreading1 {
    public static void main(String args[]) {
        System.out.println("begin main");
        A a1 = new A();
        a1.start();
        int y = 1000;
        while (y < 1100)
            System.out.println("end main" + y++);
    }
}

// If we have multiple threads which are waiting to execute then they are
// dependent on this thread scheduler
// to decide the order of execution. The thread scheduler is the part of the JVM
// and it may execute any
// thread randomly because when all the threads are in equal priority then they
// wait in an area is known as
// thread pool and thread scheduler will choose any one of them randomly to
// execute.

// Case-2 : Difference between a1.start () and a1.run ()
// In case of a1.start() new thread will get created and it will be responsible
// to do execution of
// run method.
// In case of a1.run() no new thread will get created and main thread is
// responsible to do execution of
// run method, here we will never get the output from the new thread.

// Case 3 : Importance of predefined Thread class

// The start() of the thread class is responsible to register our thread
// instance (a1) with the thread
// scheduler and also calling run method.

// public class Thread extends Object implements Runnable {
//     public void run() {
//     }
//     public void start() throws IllegalThreadStateException{
//     try{
//         1.Register the thread with thread scheduler by PID.
//         2.Process all other activities.
//         3.Invoke the run() of child class/user defined class
//     }catch(Exception e){}
//     }
// };


// If we don’t invoke the start () we can’t get separate control i.e. separate thread in our java program & the
// output is never considered as multithreading rather it will become single thread output. Therefore start () is
// considered as heart of multithreading.
