from flask import Flask
import json
app = Flask(__name__)

@app.route('/')
def main():
message = {'message':'Hello Naija'}
return json.dumps(message)

if __name__ == '__main__':
app.run(host='0.0.0.0',port=5020)
