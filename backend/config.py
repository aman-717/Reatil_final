import mysql.connector

def get_db_connection():
    return mysql.connector.connect(
        host='localhost',      # Your MySQL host
        user='root',           # Your MySQL username
        password='123456789',  # Your MySQL password
        database='retail_billing'  # Your database name
    )
