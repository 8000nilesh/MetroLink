import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function History() {
  const navigate = useNavigate();

  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  async function fetchHistory() {
    try {
      const res = await api.get("/metro/history");

      setHistory(res.data);
    } catch (err) {
      alert(err.response?.data?.msg || "Failed");
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Search History</h1>

        {history.length === 0 ? (
          <p>No Searches Yet</p>
        ) : (
          history.map((item) => (
            <div
              key={item._id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            >
              <h3>
                {item.source} ➜ {item.destination}
              </h3>

              <p>Distance : {item.totalDistance} km</p>

              <p>Interchanges : {item.interchanges}</p>
            </div>
          ))
        )}

        <button onClick={() => navigate("/home")}>Back</button>
      </div>
    </div>
  );
}
