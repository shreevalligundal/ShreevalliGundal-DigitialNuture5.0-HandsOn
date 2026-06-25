public class SearchTest {

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Phone", "Electronics"),
                new Product(103, "Headphones", "Accessories"),
                new Product(104, "Shoes", "Fashion"),
                new Product(105, "Watch", "Fashion")
        };

        int targetId = 104;

        System.out.println("Linear Search:");

        Product result1 =
                SearchAlgorithms.linearSearch(products, targetId);

        if (result1 != null) {
            System.out.println(result1);
        } else {
            System.out.println("Product not found");
        }

        System.out.println("\nBinary Search:");

        Product result2 =
                SearchAlgorithms.binarySearch(products, targetId);

        if (result2 != null) {
            System.out.println(result2);
        } else {
            System.out.println("Product not found");
        }
    }
}
