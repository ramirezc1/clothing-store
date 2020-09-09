import React from "react";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-mentu">
        <div className="menu-items">
          <div className="content">
            <h1 className="title">Hats</h1>
            <span className="subtitle">ShopNow</span>
          </div>
        </div>

        <div className="menu-items">
          <div className="content">
            <h1 className="title">Jackets</h1>
            <span className="subtitle">ShopNow</span>
          </div>
        </div>

        <div className="menu-items">
          <div className="content">
            <h1 className="title">Sneakers</h1>
            <span className="subtitle">ShopNow</span>
          </div>
        </div>

        <div className="menu-items">
          <div className="content">
            <h1 className="title">Womens</h1>
            <span className="subtitle">ShopNow</span>
          </div>
        </div>

        <div className="menu-items">
          <div className="content">
            <h1 className="title">Mens</h1>
            <span className="subtitle">ShopNow</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
