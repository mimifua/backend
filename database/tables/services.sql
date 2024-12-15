CREATE TABLE services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) UNIQUE,
    description TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL
);