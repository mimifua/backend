CREATE TABLE feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId VARCHAR(255),
    orderId INT,
    rating INT NOT NULL,
    comment VARCHAR(250) NOT NULL,
    dateAdded DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (orderId) REFERENCES orders(id)
);