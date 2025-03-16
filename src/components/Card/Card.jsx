import React from "react";
import "./Card.css";
import { Link } from "react-scroll";

const Card = ({
  emoji,
  heading,
  detail,
  color,
  actualPrice,
  discountPrice,
}) => {
  return (
    <div className="card" style={{ borderColor: color }}>
      <img src={emoji} alt={`${heading} emoji`} />
      <span>{heading}</span>
      <span>{detail}</span>
      <div className="price-section">
        <span className="discount-price">₹ {discountPrice}</span>
        <span className="actual-price">₹{actualPrice}</span>
      </div>
      <Link to="contact" smooth={true} duration={500} offset={-80}>
        <button className="c-button">LEARN MORE</button>
      </Link>
    </div>
  );
};

export default Card;