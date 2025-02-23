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
        return `OrderID: ${this.orderID}, Product: ${this.product.name}, Quantity: ${this.quantity}`
    };
};

// creates a order using the parameters and pulling the product name from prod1
const order1 = new Order(501, prod1, 2);

// runs the methods in the class and logs it in the console
console.log(order1.getOrderDetails());
console.log(prod1.getDetails());
