const connection = require('./connection');

class DB {
  constructor(connection) {
    this.connection = connection;
  }
  // Create a new department
  createDepartment(department) {
    return this.connection.query('INSERT INTO department SET ?', department);
  }

  // Create a new role
  createRole(role) {
    return this.connection.query('INSERT INTO role SET ?', role);
  }

  // Create a new employee
  createEmployee(employee) {
    return this.connection.query('INSERT INTO employee SET ?', employee);
  }

  // Find all departments
  findAllDepartments() {
    return this.connection.query(
      'SELECT department.id, department.name, SUM(role.salary) AS utilized_budget FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id GROUP BY department.id, department.name;'
    );
  }

  // Find all roles
  findAllRoles() {
    return this.connection.query(
      'SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;'
    );
  }

  // Find all employees
  findAllEmployeesByDepartment(departmentId) {
    return this.connection.query(
      'SELECT employee.id, employee.first_name, employee.last_name, role.title FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department department on role.department_id = department.id WHERE department.id = ?;',
      departmentId
    );
  }
}

module.exports = new DB(connection);
