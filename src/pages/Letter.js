import React from "react";
import { Link } from "react-router-dom";
import "../styles/Letter.css";

function Letter() {
  return (
    <div className="letter-container">
      <div className="letter-logo">
        <Link className="logo" to="/">
          <img src="./images/logo.png" alt="" width="60px" height="60px" />
          
        </Link>
      </div>
      <h6>Напишите всем о своем опыте:</h6>
      <p className="message">Поделитесь идеями и вдохновите других по оформлению комнаты</p>
      <form action="/action_page.php">
        <label htmlFor="fname">Ваше имя</label>
        <input type="text" id="fname" name="firstname" placeholder="Мое имя.." />
        <label htmlFor="lname">Ваше фамилия</label>
        <input type="text" id="lname" name="lastname" placeholder="Моя фамилия.." />
        <label htmlFor="country">Отзывы</label>
        <select id="country" name="country">
          <option value="australia">Загрузить фото/видео</option>
          <option value="canada">Написать отзыв на продукцию</option>
          <option value="usa">Письмо на новоселье</option>
          <option value="usa">Написать о ноу-хау</option>
        </select>
        <label htmlFor="subject">Заголовок</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Напишите..."
          style={{ height: 200 }}
          defaultValue={""}
        />
        <input type="submit" defaultValue="Отправить" />
      </form>
    </div>
  );
}

export default Letter;
