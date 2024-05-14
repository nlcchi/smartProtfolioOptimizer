from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/yfinance', methods=['POST'])
def return_yfinance_results():
    return jsonify({'data': 'test yfinance data'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)