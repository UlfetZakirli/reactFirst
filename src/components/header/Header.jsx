import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IntlProvider, FormattedMessage } from "react-intl";
import "./header.scss";
import { useBasket } from "../../contexts/BasketContext";
const Header = ({num}) => {

  const basket=useBasket()
  console.log(basket)
  const localeLang = localStorage.getItem("myLang");
  const [bgColor, setBgColor] = useState("");
  const [lang, setLang] = useState(localeLang ? localeLang : "az-AZ");
  const myMessage = {
    "az-AZ": {
      title: "Salam Gözəl",
      description: "Lorem Gözəl",
    },
    "en-EN": {
      title: "Hi baby",
      description: "Lorem Baby",
    },
  };

  useEffect(() => {
    localStorage.setItem("myLang", lang);
  }, [lang]);
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      setBgColor("active-header");
    } else {
      setBgColor("");
    }
  });
  return (
    <header className={`header ${bgColor}`}>
      <IntlProvider locale={lang} messages={myMessage[lang]}>
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="logo">
              <Link to="/" className="text-white">
                <h2>Logo</h2>
              </Link>
            </div>
            <ul className="d-flex list-unstyled">
              <li>
                <button onClick={() => setLang("az-AZ")}>Az</button>
                <button onClick={() => setLang("en-EN")}>En</button>
              </li>
              <li>
                <Link to="/">
                  <i className="far fa-circle-user" />
                  <FormattedMessage id="title" />
                  <br />
                  <FormattedMessage id="description" />
                </Link>
              </li>
              <li>
                <Link to="/products">
                  <i className="fas fa-shopping-basket" /> Shop {num}
                </Link>
              </li>
              <li>
                <Link to="/haqqimizda">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </IntlProvider>
    </header>
  );
};

export default React.memo(Header);
