import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [selected, setSelected] = useState("predictor");
  return (
    <div className="Navbar">
      <div className="Navbar-Title">AutoValue Estimator</div>
      <div className="Navbar-Nav">
        <div
          className="Navbar-Nav-item"
          style={
            selected === "predictor"
              ? { borderBottom: "2px solid white", transform: "scale(1.1)" }
              : {}
          }
          onClick={() => {
            setSelected("predictor");
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "#f4f4f9" }}>
            Price Predictor
          </Link>
        </div>
        <div
          className="Navbar-Nav-item"
          style={
            selected === "about"
              ? { borderBottom: "2px solid white", transform: "scale(1.1)" }
              : {}
          }
          onClick={() => {
            setSelected("about");
          }}
        >
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "#f4f4f9" }}
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
