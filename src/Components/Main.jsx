import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  faBars,
  faBuildingColumns,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Main.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";
import CountUp from "react-countup";

export default function Main() {
  const [showBadge, setShowBadge] = useState(false);
  const [background, setBackground] = useState("transparent");
  const [menu, setMenu] = useState(false);
  const service = useRef();
  const navbar = useRef();
  const news = useRef();
  const contact = useRef();
  const projects = useRef();
  const information = useRef();
  const scrollTosection = (section) => {
    const yOffset = -navbar.current.offsetHeight; // 100px tepadan offset
    const y =
      section.current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    if (window.innerWidth < 968) {
      setMenu(!menu);
    }
  };
  // setBg
  useEffect(() => {
    AOS.init({ duration: 1000 });
    const handleScroll = () => {
      const navbarHeight = 60;
      if (window.innerWidth > 992) {
        if (window.scrollY >= navbarHeight) {
          setBackground("#8b7438");
        } else {
          setBackground("transparent");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Til o'zgartirish bilan bog'liq funksiyalar
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("UZ");
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    if (lng === "uz") {
      setLang("UZ");
    } else if (lng === "en") {
      setLang("EN");
    } else {
      setLang("RU");
    }
    setShowBadge(!showBadge);
    checkFunction();
  };
  const checkFunction = () => {
    if (window.innerWidth < 992) {
      setMenu(!menu);
    }
  };
  const showLangs = () => {
    setShowBadge(!showBadge);
  };
  const showMenu = () => {
    checkFunction();
  };
  // service section cardlari

  const service_card = [
    {
      id: 1,
      animation: "fade-right",
      url: "Images/gold.png",
      information: t(
        "You can get free information from our company's specialists"
      ),
    },
    {
      id: 2,
      animation: "fade-left",
      url: "Images/notebook.png",
      information: t("Documents clearance"),
    },
    {
      id: 3,
      animation: "fade-up",
      url: "Images/settings.png",
      information: t("Repair correction service"),
    },
    {
      id: 4,
      animation: "fade-up",
      url: "Images/car.png",
      information: t("Team of professionals"),
    },
  ];
  const dreamCard = [
    { id: "1", imgUrl: "Images/house1.jpg" },
    { id: "2", imgUrl: "Images/house2.jpg" },
    { id: "3", imgUrl: "Images/house3.jpg" },
    { id: "4", imgUrl: "Images/house4.jpg" },
    { id: "5", imgUrl: "Images/house5.jpg" },
    { id: "6", imgUrl: "Images/house6.jpg" },
  ];
  //project cardlar
  const project_card = [
    {
      id: "1",
      animation: "fade-right",
      url: "Images/magic.webp",
      projectName: t("Magic City"),
      projectDesc: t(
        "This is a large-scale socially significant project. The cultural and entertainment cluster in Tashkent is one of the new attractions."
      ),
    },
    {
      id: "2",
      animation: "fade-left",
      url: "Images/garden.webp",
      projectName: t("Gardens Residence"),
      projectDesc: t(
        "Multifunctional residential complex created to provide comfort to the residents of Uzbekistan."
      ),
    },
    {
      id: "3",
      animation: "fade-right",
      url: "Images/fonon.webp",
      projectName: t("Fonon"),
      projectDesc: t(
        "A grandiose residential area in the heart of the capital."
      ),
    },
    {
      id: "4",
      animation: "fade-left",
      url: "Images/invento.webp",
      projectName: t("Invento"),
      projectDesc: t(
        "Fonon is a jewelry production plant in Uzbekistan built on the basis of Italian ones in 2020. Fonon is the only large enterprise in Central Asia producing jewelry from precious metals in European and Oriental styles"
      ),
    },
    {
      id: "5",
      animation: "fade-right",
      url: "Images/prezident.webp",
      projectName: t("Presidential School"),
      projectDesc: t(
        "International kindergarten and school located in the international business center of Tashkent City."
      ),
    },
    {
      id: "6",
      animation: "fade-left",
      url: "Images/bouleward.webp",
      projectName: t("Boulevard"),
      projectDesc: t(
        "This is an educational institution that provides knowledge at an international level"
      ),
    },
  ];
  //news cardlar
  const new_card = [
    {
      id: 1,
      url: "Images/construction.jpg",
      newsName: t("newDesc-a"),
      newsDesc: t("newDesc-b"),
      animation: "fade-right",
    },
    {
      id: 2,
      url: "Images/news1.jpg",
      newsName: t("newDesc-a2"),
      newsDesc: t("newDesc-b2"),
      animation: "fade-left",
    },
    {
      id: 3,
      url: "Images/news2.jpg",
      newsName: t("newDesc-a3"),
      newsDesc: t("newDesc-b3"),
      animation: "fade-right",
    },
    {
      id: 4,
      url: "Images/news3.jpg",
      newsName: t("newDesc-a4"),
      newsDesc: t("newDesc-b4"),
      animation: "fade-left",
    },
  ];
  const new_image = [
    { id: 1, url: "Images/gallery1.jpg", src: "There is an error" },
    { id: 2, url: "Images/gallery2.jpg", src: "There is an error" },
    { id: 3, url: "Images/gallery3.jpg", src: "There is an error" },
    { id: 4, url: "Images/gallery4.jpg", src: "There is an error" },
    { id: 5, url: "Images/gallery5.jpg", src: "There is an error" },
    { id: 6, url: "Images/gallery6.jpg", src: "There is an error" },
    { id: 7, url: "Images/gallery7.jpg", src: "There is an error" },
    { id: 8, url: "Images/gallery8.jpg", src: "There is an error" },
  ];
  //

  return (
    <div>
      <header className="header">
        <div ref={navbar} className="navs" style={{ background: background }}>
          <div className={`mobile-menu ${menu ? "move" : " "}`}>
            <div onClick={showMenu} className="close-menu">
              <FontAwesomeIcon className="x-mark" icon={faXmark} />
            </div>
            <ul className="mobile-links">
              <li onClick={() => scrollTosection(information)}>
                {t("Information")}
              </li>
              <li onClick={() => scrollTosection(projects)}>{t("About Us")}</li>
              <li onClick={() => scrollTosection(service)}>
                {t("Enterprises")}
              </li>
              <li>{t("Our advantages")}</li>
              <li onClick={() => scrollTosection(news)}>{t("News")}</li>
              <li onClick={() => scrollTosection(contact)}>
                {t("Communication")}
              </li>
            </ul>
            <div className="mobile-langs">
              <span onClick={() => changeLanguage("uz")} className="lang">
                {t("UZ")}
              </span>
              <span onClick={() => changeLanguage("en")} className="lang">
                {t("EN")}
              </span>
              <span onClick={() => changeLanguage("ru")} className="lang">
                {t("RU")}
              </span>
            </div>
          </div>
          <nav className="navbar">
            <div onClick={showMenu} className="menu">
              <FontAwesomeIcon
                className="navbar-icon"
                icon={faBars}
                style={{ color: "#f5f5f5" }}
              />
            </div>
            <ul className="left-links">
              <li onClick={() => scrollTosection(information)}>
                {t("Information")}
              </li>
              <li onClick={() => scrollTosection(projects)}>{t("About Us")}</li>
              <li onClick={() => scrollTosection(service)}>
                {t("Enterprises")}
              </li>
            </ul>
            <ul className="logo">
              <div className="logo-image">
                <FontAwesomeIcon
                  className="logo-icon"
                  icon={faBuildingColumns}
                  style={{ color: "#f5f5f5" }}
                />
              </div>
              <div className="logo-text">
                <span>Building</span>
                <span>Company</span>
              </div>
            </ul>
            <ul className="right-links">
              <li>{t("Our advantages")}</li>
              <li onClick={() => scrollTosection(news)}>{t("News")}</li>
              <li onClick={() => scrollTosection(contact)}>
                {t("Communication")}
              </li>
            </ul>
            <div className="langs">
              <span onClick={showLangs}>{lang}</span>
              {showBadge && (
                <div className="hide-lang">
                  <span onClick={() => changeLanguage("uz")} className="lang">
                    {t("UZ")}
                  </span>
                  <span onClick={() => changeLanguage("en")} className="lang">
                    {t("EN")}
                  </span>
                  <span onClick={() => changeLanguage("ru")} className="lang">
                    {t("RU")}
                  </span>
                </div>
              )}
            </div>
            <div className="phone">
              <FontAwesomeIcon
                className="navbar-icon"
                icon={faPhone}
                style={{ color: "#f5f5f5" }}
              />
            </div>
          </nav>
        </div>
        <div className="header-wrapper">
          <main className="main">
            <div className="main-title">
              <h1 title="company-name">{t("Building Company")}</h1>
              <p>{t("Excellence")}</p>
              <div className="btn-group">
                <button>{t("Our Projects")}</button>
                <button>{t("connect")}</button>
              </div>
            </div>
          </main>
        </div>
      </header>
      <section ref={service} className="service">
        <div className="service-wrapper">
          <h2>{t("Our services")} </h2>
          <div className="service-cards" style={{ overflow: "hidden" }}>
            {service_card &&
              service_card.map((item, index) => (
                <div
                  key={index}
                  data-aos={item.animation}
                  className={`card card${item.id}`}
                >
                  <div className="card-image">
                    <img src={item.url} alt="There is an error" />
                  </div>
                  <div className="card-text">
                    <p>{item.information} </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="company">
          <div className="company-wrapper">
            <h2>{t("Our company")}</h2>
            <div className="count-boxes">
              <div className="count">
                <span>
                  <CountUp start={0} end={120} duration={2.75} /> +
                </span>
                <p>Number of employes</p>
              </div>
              <div className="count">
                <span>
                  <CountUp start={0} end={43} duration={2.75} /> +
                </span>
                <p>Objects</p>
              </div>
              <div className="count">
                <span>
                  <CountUp start={0} end={250} duration={2.75} /> +
                </span>
                <p>Special equipment</p>
              </div>
              <div className="count">
                <span>
                  <CountUp start={0} end={2} duration={2.75} /> +
                </span>
                <p>14 years on the market</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dream">
          <h2>{t("Your dream home")}</h2>
          <div className="dream-home">
            {dreamCard &&
              dreamCard.map((item, index) => (
                <div key={index} className="dream_card">
                  <img src={item.imgUrl} alt="There is an error" />
                </div>
              ))}
          </div>
        </div>
      </section>
      <section ref={projects} className="project">
        <div className="project-wrapper">
          <h2>{t("Our Projects")} </h2>
          <div className="project-cards" style={{ overflow: "hidden" }}>
            {project_card &&
              project_card.map((item, index) => (
                <div
                  key={index}
                  data-aos={item.animation}
                  className="project-card"
                >
                  <div className="project-image">
                    <img src={item.url} alt="There is an error" />
                  </div>
                  <div className="project-text">
                    <h3>{item.projectName}</h3>
                    <p>{item.projectDesc}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <section ref={news} className="news">
        <div className="news-wrapper">
          <h2>{t("Our news")}</h2>
          <div className="news-cards" style={{ overflow: "hidden" }}>
            {new_card &&
              new_card.map((item, index) => (
                <div
                  key={index}
                  data-aos={item.animation}
                  className="news-card"
                >
                  <div className="left-card-image">
                    <img src={item.url} alt="There is an error" />
                  </div>
                  <div className="right-card-text">
                    <button>{t("news")}</button>
                    <h3>{item.newsName}</h3>
                    <p>{item.newsDesc}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="news-images">
          <h2>{t("Exchange ideas with partners")}</h2>
          <div className="boxes">
            {new_image &&
              new_image.map((item, index) => (
                <div key={index} className="box">
                  <img src={item.url} alt={item.src} />
                </div>
              ))}
          </div>
        </div>
      </section>
      <section ref={information} className="information">
        <div className="information-wrapper">
          <h3 data-aos="fade-up">{t("Building Company")} </h3>
          <h2 data-aos="fade-up">{t("Building Company")} </h2>
          <p data-aos="fade-up">{t("build")} </p>
          <button data-aos="fade-up">{t("Learn More")} </button>
        </div>
      </section>
      <section ref={contact} className="contact">
        <div className="contact-wrapper">
          <div className="form-text">
            <h2>{t("Do you have any questions, suggestions or requests?")} </h2>
            <div className="form">
              <form action="">
                <div data-aos="fade-up" className="name">
                  <input required type="text" placeholder={t("Your name")} />
                </div>
                <div data-aos="fade-up" className="number">
                  <input
                    required
                    type="number"
                    placeholder={t("Your phone number")}
                  />
                </div>
                <div data-aos="fade-up" className="message">
                  <textarea
                    resource=""
                    placeholder={t("Your message")}
                    name=""
                    id=""
                  ></textarea>
                </div>
                <button data-aos="fade-up" type="submit">
                  {t("Sending")}{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-wrapper">
          <div className="cards">
            <div className="card">
              <div className="logo">
                <div className="logo-image">
                  <FontAwesomeIcon
                    className="logo-icon"
                    icon={faBuildingColumns}
                    style={{ color: "#f5f5f5", fontSize: "2.5rem" }}
                  />
                </div>
                <div className="logo-text">
                  <span>Building Company </span>
                </div>
              </div>
              <div className="pi">
                <span>{t("Subscribe to our social networks")} </span>
              </div>
              <div className="icons">
                <div className="link">
                  <a href="https://t.me/webjuniors_01">
                    <FontAwesomeIcon className="brand-icon" icon={faTelegram} />
                  </a>
                </div>
                <div className="link">
                  <a href="https://t.me/webjuniors_01">
                    <FontAwesomeIcon
                      className="brand-icon"
                      icon={faInstagram}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <ul>
                <li>{t("Our company")} </li>
                <li>{t("Enterprises")} </li>
                <li>{t("About Us")} </li>
                <li>{t("News")} </li>
                <li>{t("Our Projects")} </li>
              </ul>
            </div>
            <div className="card">
              <ul>
                <li>{t("Communication")} </li>
                <li>+998974839999</li>
                <li>+998974839999</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
