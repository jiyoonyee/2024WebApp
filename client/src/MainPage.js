import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function Home() {
  const [computerData, setComputerData] = useState(null);
  const [id, setId] = useState("302"); // 기본 호실
  const [showForm, setShowForm] = useState(false); // 신청 폼 표시 여부
  const [formData, setFormData] = useState({
    grade: "",
    class: "",
    number: "",
    name: "",
    purpose: "",
    date: "", // 날짜
    startTime: "", // 시작 시간
    endTime: "", // 종료 시간
  });

  const navigate = useNavigate(); // React Router의 navigate 훅

  // 컴퓨터 데이터 가져오기
  useEffect(() => {
    fetch(`http://127.0.0.1:5000/computer/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setComputerData(data);
        console.log(data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [id]);

  // 신청 폼 데이터 변경 처리
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 신청 완료 처리
  const handleSubmit = () => {
    // 모든 폼 데이터 출력
    alert(
      `${formData.date} ${formData.startTime}~${formData.endTime} 신청 완료되었습니다.
      학년: ${formData.grade}
      반: ${formData.class}
      학번: ${formData.number}
      이름: ${formData.name}
      용무: ${formData.purpose}`
    );
    setShowForm(false);
  };

  return (
    <div>
      <h1>{id}호</h1>
      <p>{id}호의 컴퓨터 대수, 성능 등에 대한 설명입니다.</p>

      {/* 호실 선택 */}
      <select onChange={(e) => setId(e.target.value)} value={id}>
        <option value="302">302</option>
        <option value="306">306</option>
        <option value="307">307</option>
        <option value="308">308</option>
      </select>

      {/* 컴퓨터 데이터 */}
      {computerData ? (
        <div>
          <p>CPU: {computerData.cpu}</p>
          <p>GPU: {computerData.gpu}</p>
          <p>메모리: {computerData.memory}</p>
          <p>디스크: {computerData.disk}</p>
          <p>설치 프로그램: {computerData.program}</p>
          <p>설치 언어: {computerData.language}</p>
          <p>특이사항: {computerData.Notes}</p>
          <p>컴퓨터 개수: {computerData.count}</p>
          {/* 이미지 */}
          {computerData.image_url && (
            <img
              src={`http://127.0.0.1:5000${computerData.image_url}`}
              alt={`Room ${id}`}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {/* 신청하기 버튼 */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setShowForm(true)}>신청하기</button>
        <button onClick={() => navigate("/reservation-list")}>신청현황 조회</button>
      </div>

      {/* 신청 폼 */}
      {showForm && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            border: "1px solid black",
            borderRadius: "8px",
          }}
        >
          <h2>{id}호 사용 신청</h2>
          <p>학번을 선택해주세요</p>
          <label>
            <select name="grade" onChange={handleChange} value={formData.grade}>
              <option value="">선택</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            학년
            <select name="class" onChange={handleChange} value={formData.class}>
              <option value="">선택</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            반
            <input
              type="number"
              name="number"
              onChange={handleChange}
              value={formData.number}
            />
            번
          </label>
          <br />
          <p>이름을 입력해주세요</p>
          <label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
          </label>
          <br />
          <p>실습실에서 진행할 용무를 적어주세요</p>
          <label>
            <input
              type="text"
              name="purpose"
              onChange={handleChange}
              value={formData.purpose}
            />
          </label>
          <br />
          <p>실습실을 사용할 날짜와 시간을 선택해주세요</p>
          <label>
            날짜:
            <input
              type="date"
              name="date"
              onChange={handleChange}
              value={formData.date}
            />
          </label>
          <br />
          <label>
            시작 시간:
            <input
              type="time"
              name="startTime"
              onChange={handleChange}
              value={formData.startTime}
            />
          </label>
          <br />
          <label>
            종료 시간:
            <input
              type="time"
              name="endTime"
              onChange={handleChange}
              value={formData.endTime}
            />
          </label>
          <br />
          <button onClick={handleSubmit}>신청하기</button>
          <button onClick={() => setShowForm(false)}>취소</button>
        </div>
      )}
    </div>
  );
}

// 예약 현황 리스트 컴포넌트
function ReservationList() {
  return (
    <div>
      <h1>예약 현황</h1>
      <p>여기에 예약 현황 리스트가 표시됩니다.</p>
    </div>
  );
}

// 전체 라우터 설정
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation-list" element={<ReservationList />} />
      </Routes>
    </Router>
  );
}

export default App;
