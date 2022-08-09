INSERT INTO department(id, name)
VALUES
    (1, Marketing),
    (2, IT),
    (3, Graphics),
    (4, Production),
    (5, Warhouse);

INSERT INTO role(id, name, salary, department_id)
VALUES
    (10, Leadership),
    (20, Developer),
    (30, Artist),
    (40, Operator),
    (50, Loader);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
("JAYDEN", "COWLEY", 20, 2),
("BRAD", "SMITH", 40, 1),
("COREY", "WEBB", 50, 2),
("CHRISTIAN", "THOMAS", 30, 1)
("DEVIN", "BRANDON", 10, 1)