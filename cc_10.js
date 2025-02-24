// Task 1: Creating a Product Class

class Product { // lines below create a class called Product
    constructor(name, id, price, stock) { // determines parameters needed
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    };

    getDetails() { // creates a method in class, that will list the product details
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`
    };

    updateStock(quantity) { // creates a method in the class that will update that prducts stock
        return this.stock -= quantity;
    };

    increaseStock(quantity) {
        this.stock += quantity;
    };
};

// creates a new product using the class parameters
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); // uses the method to list all details

// updates the product 1 stock
prod1.updateStock(3);
console.log(prod1.getDetails()); // logs the updates details in the console


// Task 2: Creating an Order Class


class Order { // creates a new class named Order
    constructor(orderID, product, quantity) {

        this.orderID = orderID;
        this.product = product;
        this.quantity = quantity;

        this.product.updateStock(quantity); // this line makes sure that the stock from product class is updated everytime there is an order
    };



    getOrderDetails() { // creates a method inside the class that returns all of the details
        return `OrderID: ${this.orderID}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${(this.quantity * this.product.price)}`
    };
};

// creates a order using the parameters and pulling the product name from prod1
const order1 = new Order(501, prod1, 2);

// runs the methods in the class and logs it in the console
console.log(order1.getOrderDetails());
console.log(prod1.getDetails());


// Task 3: Creating an Inventory Class

class Inventory {  // these lines create a new class called Inventory
    constructor() {
        // creates an open array (products and orders)
        this.products = [];
        this.orders = []
    };

    addProduct(product){ // creates a method inside the class that will add a product to the products array
        this.products.push(product);
    };

    listProducts() { // goes through the products array, runs the getDetails method
        this.products.forEach(product => console.log(product.getDetails()) );
    };

    placeOrder(orderId, product, quantity) { // creates method inside of the class
        const order = new Order(orderId, product, quantity); // creates a new order
        this.orders.push(order); // adds order to the open array
    };

    listOrders() { // creates new method inside the array
        this.orders.forEach(order => console.log(order.getOrderDetails()) ); // goes through the array, runs the getOrderDetails method, and logs it in the console
    };

    restockProduct(productId, quantity) { // creates a method inside the class
        const stockParameter = this.products.find(product => product.id === productId); // makes the parameters for if statement. asking to make product id exactly equal to the id
        if (stockParameter) { // creates if statement, if id equal to id then increase the stock
            stockParameter.increaseStock(quantity); // runs method using the quantity
        };
    };
};

// creates a new inventory
const inventory = new Inventory();

// runs the addProduct method using the parameters given
inventory.addProduct(prod1);
// runs the listProducts method after adding a product to the open array
inventory.listProducts();


// Task 4: Implementing Order Management

// runs the place order method using the parameters
inventory.placeOrder(601, prod1, 2);
inventory.listOrders(); // runs the method

// logs the updated product details
console.log(prod1.getDetails());


// Task 5: Implementing Product Restocking

// runs method with the parameters provided
inventory.restockProduct(101, 5);
// logs the updated prod1 in the console
console.log(prod1.getDetails()); 