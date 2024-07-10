// src/pages/Catalog.js
/*import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Letter.css";


const Catalog = () => {
    return <div className="content"><h1>Catalog</h1></div>;
   
};

export default Catalog;*/
import React, { useState, useEffect } from 'react';
import '../styles/TodayDeal.css'; 

const Catalog = () => {
  const initialDeals = [
    {
      id: 1,
      title: "Зеркало Волна,на подставке",
      price: "6 781",
      discount: "34%",
      imageUrl: "https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/wavemirror.jpg?v=1717909062952",
      rating: 3.9,
      reviews: 1005,
      label: "Волна 797",
      delivery: "Бесплатная доставка",
      countdown: "07:25:20",
    },
    {
      id: 2,
      title: "Диван Сальвадор",
      price: "144 000",
      discount: "60%",
      imageUrl: "https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/divanpokupki.jpeg?v=1704612726856",
      rating: 4.8,
      reviews: 243,
      label: "Диван трех местный",
      delivery: "Скидка при оплате до 5%",
      countdown: "07:25:20",
    },
    {
      id: 3,
      title: "Ваза для цветов",
      price: "8500",
      discount: "20%",
      imageUrl: "https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/IMG_7714.JPG?v=1704612930801",
      rating: 4.7,
      reviews: 16289,
      label: "Декор ваза, искусство",
      delivery: "Скидка при оплате до 5%",
      countdown: "07:25:20",
    },
    {
      id: 4,
      title: "Постер горы, настенный",
      price: "9 000",
      discount: "67%",
      imageUrl: "https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/reg-fourteen.jpg?v=1704613122184",
      rating: 4.7,
      reviews: 944,
      label: "Каул",
      delivery: "Бесплатная доставка",
      countdown: "21:25:20",
    },
    
  ];

  const [deals, setDeals] = useState(initialDeals);

  useEffect(() => {
    const timer = setInterval(() => {
      setDeals((prevDeals) =>
        prevDeals.map((deal) => {
          const [hours, minutes, seconds] = deal.countdown.split(':').map(Number);
          const date = new Date();
          date.setHours(hours, minutes, seconds + 1);
          const newCountdown = date.toTimeString().split(' ')[0];
          return { ...deal, countdown: newCountdown };
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="today-deal-container">
      <h2>Распродажа сегодня!</h2>
      <div className="deals-grid">
        {deals.map((deal) => (
          <div key={deal.id} className="deal-item">
            <div className="countdown-timer">{deal.countdown} осталось</div>
            <img src={deal.imageUrl} alt={deal.title} className="deal-image" />
            <div className="deal-details">
              <div className="deal-label">{deal.label}</div>
              <div className="deal-title">{deal.title}</div>
              <div className="deal-price">
                <span className="discount">{deal.discount}</span> {deal.price}
              </div>
              <div className="deal-rating">
                <span>⭐{deal.rating}</span> Отзывы {deal.reviews}
              </div>
              <div className="deal-delivery">{deal.delivery}</div>
            </div>
          </div>
        ))}
      </div>
      <a href="#more-deals" className="more-deals-link">узнать больше</a>
    </div>
  );
};

export default Catalog;

