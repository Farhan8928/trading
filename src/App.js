import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { themeContext } from "./Context";
import "./App.css";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Helmet>
        <title>Experts Research - Stock Market Advisory</title>
        <meta
          name="description"
          content="Experts Research offers SEBI-registered stock market advisory services for Nifty & Bank Nifty derivatives, intraday tips, and portfolio management."
        />
        <meta
          name="keywords"
          content="stock market, Nifty, Bank Nifty, trading, investment advisory, SEBI registered, intraday tips"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Experts Research - Stock Market Advisory"
        />
        <meta
          property="og:description"
          content="Master Nifty & Bank Nifty derivatives with expert investment advisory services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://expertsresearch.com" />
        <meta
          property="og:image"
          content="https://expertsresearch.com/images/logo.jpg"
        />
        <link rel="canonical" href="https://expertsresearch.com" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Experts Research",
            "url": "https://expertsresearch.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4th Floor, Banarsi Heritage Office, 405-406, Malad, Mindspace",
              "addressLocality": "Malad West, Mumbai",
              "addressRegion": "Maharashtra",
              "postalCode": "400064",
              "addressCountry": "IN"
            },
            "email": "experts.research01@gmail.com"
          }
        `}</script>
      </Helmet>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;