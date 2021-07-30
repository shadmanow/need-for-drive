import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__copyright'>© 2016-2019 «Need for drive»</p>
      <address className='footer__address'>
        <a href='tel: 8 (495) 234-22-44'>
          8 (495) 234-22-44
        </a>
      </address>
    </footer>
  )
};

export {Footer}