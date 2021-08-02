import React from 'react'
import { useHistory } from 'react-router-dom'

import './Header.scss'
import logo from '../../assets/images/svg/logo.svg'
import map from '../../assets/images/svg/map.svg'

const Header = () => {
  const history = useHistory()
  const onLogoClick = () => history.push('/')
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        alt="Need for drive"
        onClick={onLogoClick}
      />
      <div className="header__map">
        <img src={map} alt="Need for drive" />
        <p>Ульяновск</p>
      </div>
    </header>
  )
}

export default Header
