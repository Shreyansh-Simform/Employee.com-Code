#Employee Manageent API (Flask + MYSQL)  

This is a Flask Web application with CRUD functionality connected to a MYSQL database.It servers as the backend for the Employee Management System.

##**Features**
-Create,Read,Update,and Delete(CRUD) employee records.
- MySQL database integration.
- RESTful API design.

## **Setup Instructions**

1. Clone the repository

```bash
git clone https://github.com/Shreyansh-Simform/Employee.com-Code.git
cd trainee_backend

2. Create a Virtual Environment.

python3 -m venv venv
source venv/bin/activate

3. Install dependencies

pip install -r requirements.txt

4. Run database migrations (if applicable)

flask db upgrade

5. Start the Flask server

python app.py

The backend will be available at:
http://localhost:5000


---

MySQL Setup

Connect to MySQL and create the database:

CREATE DATABASE employee_db;

You can now use the API to interact with the database!


---

Troubleshooting

Ensure MySQL is running.

Double-check .env variables.

Use flask run --reload for auto-reloading during development.



---




