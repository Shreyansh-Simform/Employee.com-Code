#Employee Management API (Flask + MYSQL)  

This is a Flask Web application with CRUD functionality connected to a MYSQL database.It serves as the backend for the Employee Management System.

##**Features**
-Create,Read,Update,and Delete(CRUD) employee records.
- MySQL database integration.
- RESTful API design.

**Pre-Requirements**
Python 3.12.3
Pip 24.0
Flask 3.0.2
Mysql 8.0.41
Flask-Cors-5.0.1

## **Setup Instructions**

1. Clone the repository

```bash
git clone https://github.com/Shreyansh-Simform/Employee.com-Code.git
cd trainee_backend

2. Install dependencies

Set up an environment variable
pip install -r requirements.txt

3. Run database migrations (if applicable)

flask db upgrade

4. MySQL Setup

Connect to MySQL and create the database:

Create your database and user and edit credentials in db.py

Create a table "employees"  with this schema in your database :-

+----------+---------------+------+-----+---------+----------------+
| Field    | Type          | Null | Key | Default | Extra          |
+----------+---------------+------+-----+---------+----------------+
| id       | int           | NO   | PRI | NULL    | auto_increment |
| name     | varchar(100)  | YES  |     | NULL    |                |
| position | varchar(100)  | YES  |     | NULL    |                |
| salary   | decimal(10,2) | YES  |     | NULL    |                |
+----------+---------------+------+-----+---------+----------------+


You can now use the API to interact with the database!

5. Start the Flask server

python app.py

The backend will be available at:
http://localhost:5000

---

Troubleshooting

Ensure MySQL is running.

Use flask run --reload for auto-reloading during development.

---




