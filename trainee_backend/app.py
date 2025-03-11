from flask import Flask, request, jsonify
from flask_cors import CORS
from db import app, mysql

CORS(app)

# Get all employees
@app.route('/employees', methods=['GET'])
def get_employees():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM employees")
    rows = cur.fetchall()
    cur.close()
    return jsonify(rows)

# Add an employee
@app.route('/employees', methods=['POST'])
def add_employee():
    data = request.json
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO employees (name, position, salary) VALUES (%s, %s, %s)", 
                (data['name'], data['position'], data['salary']))
    mysql.connection.commit()
    cur.close()
    return jsonify({"message": "Employee added"})

# Update an employee
@app.route('/employees/<int:id>', methods=['PUT'])
def update_employee(id):
    data = request.json
    cur = mysql.connection.cursor()
    cur.execute("UPDATE employees SET name = %s, position = %s, salary = %s WHERE id = %s", 
                (data['name'], data['position'], data['salary'], id))
    mysql.connection.commit()
    cur.close()
    return jsonify({"message": "Employee updated"})

# Delete an employee
@app.route('/employees/<int:id>', methods=['DELETE'])
def delete_employee(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM employees WHERE id = %s", (id,))
    mysql.connection.commit()
    cur.close()
    return jsonify({"message": "Employee deleted"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
