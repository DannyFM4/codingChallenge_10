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
        return this.stock -= quantity
    };
};

// creates a new product using the class parameters
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); // uses the method to list all details

// updates the product 1 stock
prod1.updateStock(3);
console.log(prod1.getDetails()); // logs the updates details in the console