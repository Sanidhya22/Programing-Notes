import java.util.*;

public class TreeMapClass {
    public static void main(String[] args) {
        // Creating a new TreeMap
        TreeMap<String, Integer> treeMap = new TreeMap<>();

        // Adding key-value pairs to the TreeMap
        treeMap.put("Alice", 30);
        treeMap.put("Bob", 28);
        treeMap.put("John", 25);

        // Displaying the TreeMap
        System.out.println("TreeMap: " + treeMap);

        // Accessing values by key
        System.out.println("Age of Alice: " + treeMap.get("Alice")); // Output: Age of Alice: 30

        // Iterating over the key-value pairs
        System.out.println("Iterating over key-value pairs:");
        for (Map.Entry<String, Integer> entry : treeMap.entrySet()) {
            System.out.println(entry.getKey() + " : " + entry.getValue());
        }
    }
}
