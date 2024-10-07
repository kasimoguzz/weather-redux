import React from "react";

function DayCard({ item }) {
  return (
    <>
    <div className="day-card-box">
      
    <div style={{textAlign:"center"}}>
    <p>Sıcaklık: {Math.round(item.temperature)}°C</p>
        <img
          src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
          alt="Hava durumu ikonu"
        />
        
      </div>
      <div style={{textAlign:"center"}}>
        <p>{item.weatherDescription}</p>

        <p>Nem: {item.humidity}%</p>
        <p>Rüzgar Hızı: {item.windSpeed} m/s</p>
      </div>
    </div>
    </>
  );
}

export default DayCard;
