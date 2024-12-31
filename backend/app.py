from flask import Flask

app = Flask(__name__)

@app.route("/api/schedule", methods=['POST'])
def generate_schedule():
    return "<p>Hello, World!</p>"

