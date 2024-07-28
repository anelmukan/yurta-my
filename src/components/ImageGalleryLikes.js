import '../styles/ImageGalleryLikes.css';

import React, { useRef, useState } from 'react';

const ImageGalleryLikes = () => {
  const scrollRef = useRef(null);

  const imageUrls = [
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/buklenear%20(7).jpg?v=1717908989281',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/orangeheart.jpg?v=1717909049898',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/green3.jpg?v=1717909038790',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/orange%20carpet.jpg?v=1717909047168',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/IMG_8389.jpg?v=1704613027975',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/wall.jpg?v=1717909058794',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/wavemirror.jpg?v=1717909062952',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/yellowstudy.jpg?v=1717909068270',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/studyhanger.jpg?v=1717909053449',
  ];

  const [likes, setLikes] = useState(imageUrls.map(() => 0));
  // const [dislikes, setDislikes] = useState(imageUrls.map(() => 0));

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  return (
    <div className="image-gallery-container">
      <h2>Добро пожаловать лето!</h2>
      <p>Выберите дизайн и мы подскажем где все это можно купить.</p>
      <div className="scroll-button left" onClick={() => scroll(-300)}>
        ‹
      </div>
      <div className="image-gallery" ref={scrollRef}>
        {imageUrls.map((imageUrl, index) => (
          <div className="image-item" key={index}>
            <div className="image-container">
              <img src={imageUrl} alt={` ${index + 1}`} />
              <div className="likes-dislikes">
                <button onClick={() => handleLike(index)}>❤ {likes[index]}</button>
              </div>
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

export default ImageGalleryLikes;
