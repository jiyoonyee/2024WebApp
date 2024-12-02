from flask import Flask, request, jsonify, render_template
from sentence_transformers import SentenceTransformer, util
import json

app = Flask(__name__)
model = SentenceTransformer('all-MiniLM-L6-v2')

# 실습실 데이터 로드
with open('lab_data.json', 'r', encoding='utf-8') as f:
    lab_data = json.load(f)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/recommend', methods=['POST'])
def recommend_lab():
    user_request = request.json['description']
    user_embedding = model.encode(user_request, convert_to_tensor=True)

    scores = []
    for lab_id, lab_info in lab_data.items():
        lab_embedding = model.encode(lab_info['program'], convert_to_tensor=True)
        similarity = util.pytorch_cos_sim(user_embedding, lab_embedding).item()
        scores.append({"id": lab_id, "score": similarity, "info": lab_info})

    best_match = max(scores, key=lambda x: x['score'])
    return jsonify({
        "name": best_match["id"],
        "score": round(best_match["score"], 2),
        "details": best_match["info"]
    })

if __name__ == '__main__':
    app.run(debug=True)
