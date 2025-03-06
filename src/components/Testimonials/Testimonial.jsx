import React, { useContext } from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { themeContext } from "../../Context";

const Testimonial = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const clients = [
    {
      img: profilePic1,
      review:
        "Andrew's trading advice completely transformed my strategy. His insights on market trends helped me make better decisions and maximize my profits.",
    },
    {
      img: profilePic2,
      review:
        "I was struggling with consistency until I started following Andrew’s trading tips. His risk management strategies are top-notch and truly effective.",
    },
    {
      img: profilePic3,
      review:
        "Andrew provides some of the best trading insights out there. His technical analysis skills helped me understand the market in ways I never imagined.",
    },
    {
      img: profilePic4,
      review:
        "Thanks to Andrew's guidance, I’ve improved my trading discipline and profitability. His advice is practical, easy to follow, and highly effective!",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>What Traders Say </span>
        <span>About My Advice </span>
        <span>and Market Insights...</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial">
              <img src={client.img} alt="Client Profile" />
              <span>{client.review}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
