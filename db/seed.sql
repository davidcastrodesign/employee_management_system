use employeesdb;

INSERT INTO department
	(name)
values
	('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');
    
INSERT INTO role
	(title, salary, department_id)
VALUES
	('Sales lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Egineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Account Manager', 160000, 3),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 25000, 4),
    ('Lawyer', 190000, 4);
    
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
	('Jose', 'Rivers', 1, NULL),
    ('Stanley', 'Fim', 2, 1),
    ('Josh', 'Meadows', 3, NULL),
    ('Frank', 'Ryz', 4, 3),
    ('Brandon', 'Hok', 5, NULL),
    ('Chris', 'Kolm', 6, 5),
    ('Matt', 'Gaines', 7, NULL),
    ('Art', 'Herman', 8, 7);