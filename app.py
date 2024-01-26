from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    # Run the Flask app on https://192.168.12.140:5000
    app.run(debug=True, host='192.168.12.140', port=5000, ssl_context='adhoc')
