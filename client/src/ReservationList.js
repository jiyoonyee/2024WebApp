import React, { useEffect, useState } from "react";

function ReservationList() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/reservations")
      .then((res) => res.json())
      .then((data) => setReservations(data))
      .catch((err) => console.error("Error fetching reservations:", err));
  }, []);

  return (
    <div>
      <h1>신청 현황</h1>
      {reservations.length > 0 ? (
        <table border="1">
          <thead>
            <tr>
              <th>호실</th>
              <th>학년</th>
              <th>반</th>
              <th>번호</th>
              <th>이름</th>
              <th>날짜</th>
              <th>시간</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((res) => (
              <tr key={res.id}>
                <td>{res.room}</td>
                <td>{res.grade}</td>
                <td>{res.class}</td>
                <td>{res.number}</td>
                <td>{res.name}</td>
                <td>{res.date}</td>
                <td>
                  {res.startTime} - {res.endTime}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>신청 내역이 없습니다.</p>
      )}
    </div>
  );
}

export default ReservationList;
