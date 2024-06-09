import React from 'react';
import '../styles/Footer.css'; // Assuming you place the CSS in a separate file named Footer.css

const Footer = () => {
  return (
    <footer className="footer">
      <div className="customer-service">
        <h2>Центр обслуживания клиентов</h2>
        <p className="phone-number">1670-0876 09:00-18:00</p>
        <ul>
          <li>Будни: Консультация по всем вопросам</li>
          <li>Суббота, праздничные дни: прямая доставка в YurtaHome, консультации по вопросам переезда/строительства/установки продукции.</li>
          <li>Воскресенье: закрыто</li>
        </ul>
        <button className="contact-button">Консультация Whatsapp (будние дни 09:00-18:00)</button>
        <button className="email-request-button">Запрос по электронной почте</button>
      </div>
      <div className="footer-links">
        
          
      </div>
      <div className="company-info">
        <p>ТОО ILA Group</p>
        <p>г.Астана Республика Казахстан</p>
        <p>inditilla@gmail.com</p>
        
        <p>ТОО ILA Group является посредником в почтовых отправлениях и не является стороной сделки, поэтому не несет ответственность за информацию о продукте и транзакции, зарегистрированные продавцом. Все права на информацию о продукте и транзакции принадлежат продавцу, и в случае споров, связанных с этим, ответственность несет продавец.</p>
        <p>&copy; Copyright 2023, ILA Group,  Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
