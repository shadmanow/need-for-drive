import React from 'react'

import './Loader.scss'
import { ReactComponent as LoadingIcon } from '../../assets/images/svg/loading.svg'

const Loader = () => {
  return (
    <div className="loader">
      <LoadingIcon className="loader__icon" />
      <span className="loader__text">Подождите...</span>
    </div>
  )
}

export default Loader
