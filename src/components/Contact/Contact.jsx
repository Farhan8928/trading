import React, { useContext, useState } from "react";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import "./Contact.css";
import { Helmet } from "react-helmet";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [done, setDone] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentTime = new Date().toLocaleString();

    emailjs
      .send(
        "service_d8k9hi5", // Your EmailJS Service ID
        "template_ls8x3mn", // Your EmailJS Template ID
        {
          from_name: formData.user_name,
          email: formData.user_email,
          title: "Contact Us",
          message: formData.message,
          time: currentTime,
        },
        "bDQxCuHtmD1sHgAWu" // Your EmailJS Public Key
      )
      .then(
        () => {
          setDone(true);
          setTimeout(() => setDone(false), 5000);
          setFormData({ user_name: "", user_email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      <Helmet>
        <title>Contact Us - Experts Research</title>
        <meta
          name="description"
          content="Contact Experts Research for expert stock market advisory services via email or our Mumbai office. Get in touch today!"
        />
        <meta
          name="keywords"
          content="contact Experts Research, stock market advisory Mumbai, SEBI registered analyst, trading support"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Us - Experts Research" />
        <meta
          property="og:description"
          content="Reach out to Experts Research for personalized stock market guidance and support."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://expertsresearch.com/#contact" />
        <meta
          property="og:image"
          content="https://expertsresearch.com/images/contact-image.jpg"
        />
        <link rel="canonical" href="https://expertsresearch.com/#contact" />
      </Helmet>

      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
      </div>
      <div className="c-right">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Email sent successfully!"}</span>
          <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;