CREATE TABLE users (
    -- set as VARCHAR to allow use of uuid()
    id VARCHAR(255) PRIMARY KEY,
    username VARCHAR(250) NOT NULL UNIQUE,
    email VARCHAR(250) NOT NULL UNIQUE,
    password VARCHAR(250) NOT NULL,
    role ENUM('customer','employee','admin') NOT NULL,
    isDeleted BOOLEAN DEFAULT 0,
    isWelcomeEmailSent BOOLEAN DEFAULT 0,
    forgotPassword BOOLEAN DEFAULT 0
);