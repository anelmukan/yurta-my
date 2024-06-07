import React, { useRef, useState } from 'react';
import '../styles/ImageGalleryLikes.css';

// Mock function to check if the user is authorized
const isUserAuthorized = () => {
  // Replace with actual logic to check user authentication
  return true; // or false if the user is not authorized
};

const ImageGalleryLikes = () => {
  const scrollRef = useRef(null);

  const imageUrls = [
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/regthirteen.jpg?v=1704613155648',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/reg-nine.jpg?v=1704613130460',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/odeyalopokupki.jpeg?v=1704613079278',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/IMG_7714.JPG?v=1704612930801',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/IMG_8389.jpg?v=1704613027975',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/reg-fourteen.jpg?v=1704613122184',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/regthirteen.jpg?v=1704613155648',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/regthirteen.jpg?v=1704613155648',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/regthirteen.jpg?v=1704613155648',
  ];

  const [likes, setLikes] = useState(imageUrls.map(() => 0));
  const [dislikes, setDislikes] = useState(imageUrls.map(() => 0));

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  const handleDislike = (index) => {
    const newDislikes = [...dislikes];
    newDislikes[index] += 1;
    setDislikes(newDislikes);
  };

  return (
    <div className="image-gallery-container">
      <h2>Вы ищете такие фотографии?</h2>
      <p>Мы рекомендуем контент по дизайну интерьера, который вам может понравиться.</p>
      <div className="scroll-button left" onClick={() => scroll(-300)}>‹</div>
      <div className="image-gallery" ref={scrollRef}>
        {imageUrls.map((imageUrl, index) => (
          <div className="image-item" key={index}>
            <div className="image-container">
              <img src={imageUrl} alt={`Image ${index + 1}`} />
              <div className="likes-dislikes">
                <button onClick={() => handleLike(index)}>Like {likes[index]}</button>
                <button onClick={() => handleDislike(index)}>Dislike {dislikes[index]}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="scroll-button right" onClick={() => scroll(300)}>›</div>
    </div>
  );
};

export default ImageGalleryLikes;
