DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department(
    id INTEGER NOT NULL,
    name VARCHAR(30)
    );
CREATE TABLE role(
    id PRIMARY KEY,
    name VARCHAR(30),
    salary DECIMAL,
    department_id INTEGER
);
CREATE TABLE employee(
    id INTEGER PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER,
    manager_id INTEGER NULL
);