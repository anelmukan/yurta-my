import '../styles/TodayDeal.css';

import React, { useEffect, useState } from 'react';

const TodayDeal = () => {
  const initialDeals = [
    {
      id: 1,
      title: 'Вешалка стойка, металл, 150x162 см, черный',
      price: '6 781',
      discount: '34%',
      imageUrl:
        'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/hanger.jpg?v=1717919493748',
      rating: 4.9,
      reviews: 2246,
      label: 'Бебе Форест',
      delivery: 'Бесплатная доставка',
      countdown: '07:25:20',
    },
    {
      id: 2,
      title: 'Зеркало Волна, для каждого взгляда',
      price: '34 000',
      discount: '60%',
      imageUrl:
        'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/mirroooor.jpg?v=1717920625450',
      rating: 4.8,
      reviews: 243,
      label: 'Зеркало волна',
      delivery: 'Скидка при оплате до 5%',
      countdown: '07:25:20',
    },
    {
      id: 3,
      title: 'Кресло из трендового материала Букле',
      price: '98 000',
      discount: '28%',
      imageUrl:
        'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/bukle.jpg?v=1717920860084',
      rating: 4.7,
      reviews: 16289,
      label: 'Вокруг белого',
      delivery: 'Скидка при оплате до 5%',
      countdown: '07:25:20',
    },
    {
      id: 4,
      title: 'Бестселлер дивана Essa из ткани премиум',
      price: '41 000',
      discount: '37%',
      imageUrl:
        'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/bed.jpg?v=1717921165763',
      rating: 4.7,
      reviews: 944,
      label: 'Эсса',
      delivery: 'Бесплатная доставка',
      countdown: '21:25:20',
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
        }),
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
      <a href="#more-deals" className="more-deals-link">
        узнать больше
      </a>
    </div>
  );
};

export default TodayDeal;
