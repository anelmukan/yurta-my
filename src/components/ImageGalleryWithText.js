import '../styles/ImageGalleryLikes.css';

import React, { useRef, useState } from 'react';

const ImageGalleryWithText = () => {
  const scrollRef = useRef(null);

  const imageUrls = [
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/camp1.jpg?v=1717909010720',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/creamcloset%20(3).jpg?v=1717909026843',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/bedroomYellow.jpg?v=1717908947980',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/bedroomBunny.jpg?v=1717908930438',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/bluewhite.jpg?v=1717908952120',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/blwchair.jpg?v=1717908957869',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/buklenear%20(2).jpg?v=1717908964441',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/IMG_7841.jpg?v=1704612965154',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/IMG_8391.jpg?v=1704613039134',
  ];

  const imageTexts = [
    'Кемпинг еще не был таким удоб..',
    'Нет,это не музей,это всего..',
    'Также ярко как солнце, еще од..',
    'Хит сезона такая подушка вере..',
    'Если небо мало, то вот это па..',
    'Любовь с первого взгяда?Да..',
    'Кресло из букле, то что вам ну..',
    'Комната для уроков теперь буде..',
    'Зеркало волна на пике популярно..',
  ];

  // const [likes, setLikes] = useState(imageUrls.map(() => 0));
  // const [dislikes, setDislikes] = useState(imageUrls.map(() => 0));

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="image-gallery-container">
      <h2>Вы ищете такие фотографии?</h2>
      <p>Мы рекомендуем контент по дизайну интерьера, который вам может понравиться.</p>
      <div className="scroll-button left" onClick={() => scroll(-300)}>
        ‹
      </div>
      <div className="image-gallery" ref={scrollRef}>
        {imageUrls.map((imageUrl, index) => (
          <div className="image-item" key={index}>
            <div className="image-container">
              <img src={imageUrl} alt={` ${index + 1}`} />
              <p className="image-text">{imageTexts[index]}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="scroll-button right" onClick={() => scroll(300)}>
        ›
      </div>
    </div>
  );
};

export default ImageGalleryWithText;
