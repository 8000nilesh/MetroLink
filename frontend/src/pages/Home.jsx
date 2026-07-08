import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const [stations, setStations] = useState([]);

  const [source, setSource] = useState("");

  const [destination, setDestination] = useState("");

  const [result, setResult] = useState(null);

  useEffect(() => {
    setStations([
      "Dwarka",
      "Janakpuri West",
      "Rajouri Garden",
      "Kirti Nagar",
      "Karol Bagh",
      "Rajiv Chowk",
      "Supreme Court",
      "Yamuna Bank",
      "Vaishali",
      "Sector 52",
      "Samaypur Badli",
      "Haiderpur Badli Mor",
      "Azadpur",
      "Kashmere Gate",
      "New Delhi",
      "Delhi Haat - INA",
      "AIIMS",
      "Hauz Khas",
      "Chhatarpur",
      "Saket",
      "HUDA City Centre",
      "Rithala",
      "NSP",
      "Inderlok",
      "Shastri Nagar",
      "Welcome",
      "New Bus Adda",
      "Shalimar Bagh",
      "Shakurpur",
      "Naraina Vihar",
      "Delhi Cantt",
      "INA",
      "Lajpat Nagar",
      "Mayur Vihar Phase 1",
      "Anand Vihar ISBT",
      "Karkarduma",
      "Maujpur Babarpur",
    ]);
  }, []);

  async function findRoute() {
    try {
      const res = await api.post("/metro/route", {
        source,
        destination,
      });

      setResult(res.data);
    } catch (err) {
      alert(err.response?.data?.msg || "Failed");
    }
  }

  function logout() {
    localStorage.removeItem("token");

    navigate("/");
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Delhi Metro Route Finder</h1>

        <select value={source} onChange={(e) => setSource(e.target.value)}>
          <option value="">Select Source</option>

          {stations.map((station) => (
            <option key={station} value={station}>
              {station}
            </option>
          ))}
        </select>

        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        >
          <option value="">Select Destination</option>

          {stations.map((station) => (
            <option key={station} value={station}>
              {station}
            </option>
          ))}
        </select>

        <button onClick={findRoute}>Find Route</button>

        <button onClick={() => navigate("/history")}>View History</button>

        <button onClick={logout}>Logout</button>

        {result && (
          <div>
            <h2>Distance : {result.totalDistance} km</h2>

            <h3>Interchanges : {result.interchanges}</h3>

            <h3>Route</h3>

            <ul>
              {result.path.map((station, index) => (
                <li key={index}>{station}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
