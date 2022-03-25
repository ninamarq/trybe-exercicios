CREATE DATABASE IF NOT EXISTS users_api;

USE users_api;

CREATE TABLE IF NOT EXISTS  users
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    age INTEGER NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO users (name, age, email, password)
VALUES ('Zambelli', 32, 'zambs@gmail.com', 'xablau123'),
    ('Laiza', 21, 'laiza@gmail.com', 'laiza123');