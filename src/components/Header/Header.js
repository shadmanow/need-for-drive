import React from 'react';

import './Header.scss';
import logo from '../../assets/images/svg/logo.svg';
import map from '../../assets/images/svg/map.svg';

const Header = () => {
  return (
    <header className='header'>
      <img
        className='header__logo'
        src={logo}
        alt='Need for drive'
      />
      <div className='header__map'>
        <img
          src={map}
          alt='Need for drive'
        />
        <p>Ульяновск</p>
      </div>
    </header>
  )
};

export {Header}