from flask_mysqldb import MySQL
from flask import Flask

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'flask'
app.config['MYSQL_PASSWORD'] = 'Flask@123'
app.config['MYSQL_DB'] = 'flask_db'

mysql = MySQL(app)
