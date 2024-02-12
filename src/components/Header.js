import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/about">ОбоМне</Link></li>
          <li><Link to="/flowers">Цветы</Link></li>
          <li><Link to="/contact">Контакты</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;