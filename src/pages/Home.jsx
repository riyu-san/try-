import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/deliciousCake.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Yurey's Desserts </h1>
        <p> DESSERT TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;