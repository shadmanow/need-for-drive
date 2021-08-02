import React from 'react'
import { NavLink } from 'react-router-dom'

import './Breadcrumbs.scss'
import { links } from './Links'

const Breadcrumbs = () => {
  return (
    <section className="breadcrumbs">
      {links.map((link, index) => (
        <NavLink
          key={`${link.name}-${index}`}
          className="breadcrumbs__link"
          activeClassName="breadcrumbs__link_active"
          to={link.to}
        >
          {link.name}
        </NavLink>
      ))}
    </section>
  )
}

export default Breadcrumbs
