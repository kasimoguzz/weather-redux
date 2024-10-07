import React from "react";
import DayCard from "../DayCard/DayCard";
import { useSelector } from "react-redux";

function DayCardList() {
  const data = useSelector((state) => state.app.itemAll);
  const status = useSelector((state)=> state.app.status)
  const error = useSelector((state)=> state.app.error)
  // Bir fonksiyon, haftanın gününü almak için kullanılıyor
  const getDayName = (dateString) => {
    const date = new Date(dateString); // Tarihi Date objesine çeviriyoruz
    return date.toLocaleDateString("tr-TR", { weekday: "long" }); // Haftanın gününü Türkçe olarak alıyoruz
  };

  // Bugün tarihini kontrol eden fonksiyon
  const isToday = (dateString) => {
    const today = new Date();
    const date = new Date(dateString);
    return (
      today.getFullYear() === date.getFullYear() &&
      today.getMonth() === date.getMonth() &&
      today.getDate() === date.getDate()
    );
  };

  return (
    <>
      <div className="cardList">
        {status === "failed" && <h2>{error}</h2>}
        {status === "loading" && <h2>Loading...</h2>}
        {status !== "loading" ? (
          data.map((item, index) => {
            const dateStr = item.date; 
            const dayName = isToday(dateStr) ? "Bugün" : getDayName(dateStr); // Bugünse "Bugün" yaz, değilse haftanın günü

            return (
              <div key={index}>
                <h3>{dayName}</h3> 
                <DayCard item={item} />
              </div>
            );
          })
        ) : (
          <p>Veri bulunamadı</p>
        )}
      </div>
    </>
  );
}

export default DayCardList;
