import React from "react";

const Header = ({ title, subtitle }) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{title}</h1>
      {subtitle && <p className="header__subtitle">{subtitle}</p>}
    </div>
  </div>
);

export default Header;
