import React from 'react';
import logo from '../../images/header__logo.png';

function Header() {
    return (
      <div className="header">
        <div className="header__left">
          <img src={logo} className="header__logo" alt="Логотип сайта Евгении Ваган"/>
          <p className="header__title">@travel.by.jane&nbsp;&nbsp;</p>
          <p className="header__quote">//&nbsp;&nbsp;Мы работаем, чтобы вы отдыхали </p>
        </div>
        <button className="header__button">Подобрать тур</button>
        <></>
      </div>
    );
  }

  export default Header;
