import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const [stations, setStations] = useState([]);

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const [result, setResult] = useState(null);

  // Search States
  const [filteredSource, setFilteredSource] = useState([]);
  const [filteredDestination, setFilteredDestination] = useState([]);

  const [showSource, setShowSource] = useState(false);
  const [showDestination, setShowDestination] = useState(false);

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

  function handleSourceSearch(value) {
    setSource(value);

    if (value.trim() === "") {
      setFilteredSource([]);
      setShowSource(false);
      return;
    }

    const filtered = stations.filter((station) =>
      station.toLowerCase().includes(value.toLowerCase()),
    );

    setFilteredSource(filtered);
    setShowSource(true);
  }

  function handleDestinationSearch(value) {
    setDestination(value);

    if (value.trim() === "") {
      setFilteredDestination([]);
      setShowDestination(false);
      return;
    }

    const filtered = stations.filter((station) =>
      station.toLowerCase().includes(value.toLowerCase()),
    );

    setFilteredDestination(filtered);
    setShowDestination(true);
  }

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

        {/* SOURCE */}

        <div className="search-box">
          <input
            type="text"
            placeholder="Search Source Station"
            value={source}
            onChange={(e) => handleSourceSearch(e.target.value)}
            autoComplete="off"
          />

          {showSource && filteredSource.length > 0 && (
            <div className="suggestions">
              {filteredSource.map((station) => (
                <div
                  key={station}
                  className="suggestion-item"
                  onClick={() => {
                    setSource(station);
                    setShowSource(false);
                    setFilteredSource([]);
                  }}
                >
                  {station}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* DESTINATION */}

        <div className="search-box">
          <input
            type="text"
            placeholder="Search Destination Station"
            value={destination}
            onChange={(e) => handleDestinationSearch(e.target.value)}
            autoComplete="off"
          />

          {showDestination && filteredDestination.length > 0 && (
            <div className="suggestions">
              {filteredDestination.map((station) => (
                <div
                  key={station}
                  className="suggestion-item"
                  onClick={() => {
                    setDestination(station);
                    setShowDestination(false);
                    setFilteredDestination([]);
                  }}
                >
                  {station}
                </div>
              ))}
            </div>
          )}
        </div>

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