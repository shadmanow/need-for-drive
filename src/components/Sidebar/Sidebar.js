import React, { useState } from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'

import './Sidebar.scss'
import { links } from './Links'
import { ReactComponent as MenuButton } from '../../assets/images/svg/menu_btn.svg'
import { ReactComponent as MenuButtonClosed } from '../../assets/images/svg/menu_close.svg'
import { ReactComponent as Instagram } from '../../assets/images/svg/instagram.svg'
import { ReactComponent as Facebook } from '../../assets/images/svg/facebook.svg'
import { ReactComponent as Telegram } from '../../assets/images/svg/telegram.svg'

export const Sidebar = () => {
  const [language, setLanguage] = useState('Eng')
  const [isOpen, setIsOpen] = useState(false)
  const classes = cn('sidebar', { sidebar__opened: isOpen })

  const onLanguageChange = () => {
    setLanguage(language === 'Eng' ? 'Рус' : 'Eng')
  }

  const onMenuButtonClick = () => setIsOpen(!isOpen)

  return (
    <aside className={classes}>
      {isOpen ? (
        <MenuButtonClosed
          className="sidebar__icon"
          onClick={onMenuButtonClick}
        />
      ) : (
        <MenuButton className="sidebar__icon" onClick={onMenuButtonClick} />
      )}

      <div className="sidebar__wrapper">
        <nav>
          <ul className="nav-list">
            {links.map((link) => (
              <li className="nav-list__item">
                <Link className="nav-link nav-link_color-gray" to={link.to}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="nav-list nav-list_horizontal">
            <li className="nav-list__item">
              <Link to="#">
                <Telegram />
              </Link>
            </li>
            <li className="nav-list__item">
              <Link to="#">
                <Facebook />
              </Link>
            </li>
            <li className="nav-list__item">
              <Link to="#">
                <Instagram />
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <button className="sidebar__language" onClick={onLanguageChange}>
        {language}
      </button>
    </aside>
  )
}
