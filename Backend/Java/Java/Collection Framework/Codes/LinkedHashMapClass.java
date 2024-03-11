import java.util.LinkedHashMap;
import java.util.Map;

public class LinkedHashMapClass {
    public static void main(String[] args) {
        // Creating a new LinkedHashMap
        LinkedHashMap<String, Integer> map = new LinkedHashMap<String, Integer>();

        // Adding key-value pairs to the map
        map.put("John", 25);
        map.put("Alice", 30);
        map.put("Bob", 28);
        map.put("Emily", 22);

        // Displaying the map
        System.out.println("LinkedHashMap: " + map);

        // Accessing values by key
        System.out.println("Age of John: " + map.get("John")); // Output: Age of John: 25

        // Checking if a key exists
        System.out.println("Contains key 'Alice': " + map.containsKey("Alice")); // Output: Contains key 'Alice': true
        System.out.println("Contains key 'David': " + map.containsKey("David")); // Output: Contains key 'David': false

        // Removing a key-value pair
        map.remove("Bob");
        System.out.println("LinkedHashMap after removing 'Bob': " + map);

        // Iterating over the key-value pairs
        System.out.println("Iterating over key-value pairs:");
        for (Map.Entry<String, Integer> entry : map.entrySet()) {
            System.out.println(entry.getKey() + " : " + entry.getValue());
        }
    }
}
