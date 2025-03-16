import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/avatarLadies.png";
import profilePic2 from "../../img/avatarMen.png";
import { Helmet } from "react-helmet";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Experts Research has provided me with unmatched market insights. The advice I received gave me the confidence to invest and see remarkable returns.",
    },
    {
      img: profilePic2,
      review:
        "Thanks to Experts Research, I’m now consistently making profitable trades. Their data-driven analysis and personalized strategies have been game changers for me.",
    },
    {
      img: profilePic1,
      review:
        "The team at Experts Research is highly knowledgeable and always up-to-date with market trends. Their tips and guidance helped me diversify my portfolio with confidence.",
    },
    {
      img: profilePic2,
      review:
        "I’ve been following Experts Research for months, and I can confidently say that their trading advice is second to none. I’ve seen a noticeable improvement in my returns since I started.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <Helmet>
        <title>Testimonials - Experts Research</title>
        <meta
          name="description"
          content="Read testimonials from traders who succeeded with Experts Research’s stock market advisory services, featuring market insights and profitable strategies."
        />
        <meta
          name="keywords"
          content="Experts Research testimonials, stock market reviews, client success, trading advice, SEBI registered"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Testimonials - Experts Research" />
        <meta
          property="og:description"
          content="See what traders say about our expert stock market guidance and insights."
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:url"
          content="https://expertsresearch.com/#testimonial"
        />
        <meta
          property="og:image"
          content="https://expertsresearch.com/images/testimonial-image.jpg"
        />
        <link rel="canonical" href="https://expertsresearch.com/#testimonial" />
      </Helmet>

      <div className="t-heading">
        <span>What Traders Say </span>
        <span>About My Advice </span>
        <span>and Market Insights...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
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