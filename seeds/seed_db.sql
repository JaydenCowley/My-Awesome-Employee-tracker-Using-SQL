INSERT INTO department(id, name)
VALUES
    (1, 'Marketing'),
    (2, 'IT'),
    (3, 'Graphics'),
    (4, 'Production'),
    (5, 'Warhouse');

INSERT INTO role(id, title, salary, department_id)
VALUES
    (10, 'Leadership', 40000, 1),
    (20, 'Developer', 80000, 2),
    (30, 'Artist', 30000, 3),
    (40, 'Operator', 45000, 4),
    (50, 'Loader', 50000, 5);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
('JAYDEN', 'COWLEY', 20, 2),
('BRAD', 'SMITH', 40, 1),
('COREY', 'WEBB', 50, 2),
('CHRISTIAN', 'THOMAS', 30, 1),
('DEVIN', 'BRANDON', 10, 1);