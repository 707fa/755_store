import React from "react";
import "./Card.scss";
import { FaInstagram, FaTelegramPlane, FaPhone, FaMapMarkerAlt, FaHeadset } from "react-icons/fa";
import imgcard from "../../assets/store.jpg";

export default function Card() {
  const links = [
    {
      icon: <FaInstagram />,
      title: "INSTAGRAM",
      desc: "Siz eng yaxshisiga loyiqsiz",
      url: "https://www.instagram.com/755__store?igsh=MXU4eXFwbW45ZHc5eQ==",
    },
    {
      icon: <FaTelegramPlane />,
      title: "TELEGRAM",
      desc: "Bizni telegram orqali kuzatishingiz mumkin",
      url: "https://t.me",
    },
    {
      icon: <FaHeadset />,
      title: "ADMINGA MUROJAAT",
      desc: "Telegram orqali buyurtma berish uchun",
      url: "https://t.me/@sltnvvv7",
    },
    {
      icon: <FaPhone />,
      title: "TELEFON 1",
      desc: "Murojaat uchun",
      url: "tel:+998884992424",
    },
    {
      icon: <FaPhone />,
      title: "TELEFON 2",
      desc: "Biz bilan bog‘lanish uchun",
      url: "tel:+998884701670",
    },
  ];

  return (
    <div className="card">
        <img src={imgcard} alt="" />
      <h1>755_Store</h1>
      <p>Самые качественные и доступные товары только у нас</p>

      <div className="card-links">
        {links.map((item, i) => (
          <a href={item.url} key={i} target="_blank" rel="noreferrer" className="card-link">
            <span className="icon">{item.icon}</span>
            <div className="text">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
