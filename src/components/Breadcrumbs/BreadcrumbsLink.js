import React from 'react'
import cn from 'classnames'
import { NavLink } from 'react-router-dom'

const BreadcrumbsLink = ({ name, to, disabled }) => {
  const classes = cn('breadcrumbs__link', {
    breadcrumbs__link_disabled: disabled,
  })
  const onClick = (e) => {
    if (disabled) e.preventDefault()
  }
  return (
    <NavLink
      className={classes}
      activeClassName="breadcrumbs__link_active"
      to={to}
      onClick={onClick}
    >
      {name}
    </NavLink>
  )
}

export default BreadcrumbsLink
