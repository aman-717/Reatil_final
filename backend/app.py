from flask import Flask

app = Flask(__name__)

from routes import *

if __name__ == '__main__':
    print(app.url_map)
    app.run(debug=True,port=8080)
