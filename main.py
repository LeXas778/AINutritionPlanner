from flask import Flask, request, jsonify, render_template
import openai

app = Flask(__name__)

openai.api_key = "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"


@app.route("/")
def index():
    return render_template("/index.html")

@app.route("/chat", methods=['POST'])
def chat():
    message = request.json["message"]
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=f"User: {message}\nChatGPT: ",
        max_tokens=1024,
        n = 1,
        stop=None,
        temperature=0.5,
    )

    return jsonify({"response": response.choices[0].text})

if __name__ == "__main__":
    app.run(debug=True)
