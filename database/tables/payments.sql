CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    orderId INT,
    paymentDate DATEtIME DEFAULT CURRENT_TIMESTAMP, 
    paymentMethod ENUM('cash','card','mpesa'),
    amountPaid DECIMAL(10,2),

    FOREIGN KEY (orderId) REFERENCES orders(id)
);