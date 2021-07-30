import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.scss';

import {ReactComponent as MenuButton} from '../../assets/images/svg/menu_btn.svg';
import {ReactComponent as MenuButtonClosed} from '../../assets/images/svg/menu_close.svg';
import {ReactComponent as Instagram} from '../../assets/images/svg/instagram.svg';
import {ReactComponent as Facebook} from '../../assets/images/svg/facebook.svg';
import {ReactComponent as Telegram} from '../../assets/images/svg/telegram.svg';

export const Sidebar = () => {
  const [language, setLanguage] = useState('Eng');
  const [isOpen, setIsOpen] = useState(false);

  const onLanguageChange = () => {
    setLanguage(language === 'Eng'? 'Рус' : 'Eng');
  };

  const onMenuButtonClick = () =>  setIsOpen(!isOpen);

  return (
    <aside className={`sidebar${isOpen ? ' sidebar__opened' : ''}`}>

      {isOpen ?
        <MenuButtonClosed className='sidebar__icon' onClick={onMenuButtonClick}/> :
        <MenuButton className='sidebar__icon' onClick={onMenuButtonClick}/>
      }

      <div className='sidebar__wrapper'>
        <nav>
          <ul className='nav-list'>
            <li className='nav-list__item'>
              <Link to='#' className='nav-link nav-link_color-gray'>Парковка</Link>
            </li>
            <li className='nav-list__item'>
              <Link to='#' className='nav-link nav-link_color-gray'>Страховка</Link>
            </li>
            <li className='nav-list__item'>
              <Link to='#' className='nav-link nav-link_color-gray'>Бензин</Link>
            </li>
            <li className='nav-list__item'>
              <Link to='#' className='nav-link nav-link_color-gray'>Обслуживание</Link>
            </li>
          </ul>
          <ul className='nav-list nav-list_horizontal'>
            <li className='nav-list__item'>
              <Link to='#'>
                <Telegram/>
              </Link>
            </li>
            <li className='nav-list__item'>
              <Link to='#'>
                <Facebook/>
              </Link>
            </li>
            <li className='nav-list__item'>
              <Link to='#'>
                <Instagram/>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <span
        className='sidebar__language'
        onClick={onLanguageChange}
      >
        { language }
      </span>
    </aside>
  )
};