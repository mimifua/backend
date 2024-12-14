CREATE TABLE customers (
    -- set as VARCHAR to allow use of uuid()
    id VARCHAR(255) PRIMARY KEY,
    userId VARCHAR(255) NOT NULL,
    firstName VARCHAR(250) NOT NULL,
    lastName VARCHAR(250) NOT NULL,
    contactNumber VARCHAR(15) NOT NULL UNIQUE,
    registrationDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    isNumberVerified BOOLEAN DEFAULT 0,
    FOREIGN KEY (userId) REFERENCES users(id)
);