import React from "react";
import sunny from "../assets/Sunny.svg"


function WeatherCard({ item }) {
  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {sunny} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{item.city}</h3>
            <h5 className="card-text">{item.temperature}</h5>
            <h5 className="card-text">{item.forecast}</h5>
        </div>
    </div>
  );
};

// Export the WeatherCard
module.exports = WeatherCard;