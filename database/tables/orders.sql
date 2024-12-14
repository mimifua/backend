CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customerId VARCHAR(255),
    orderDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    status ENUM('pending','in progress','completed','cancelled'),
    orderDetails JSON NOT NULL,
    totalPrice DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (customerId) REFERENCES customers(id)
);