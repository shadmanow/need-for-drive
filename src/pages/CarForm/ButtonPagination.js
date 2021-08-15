import React, { useState, useEffect } from 'react'

import Button from '../../components/Button/Button'
import './ButtonPagination.scss'

const ButtonPagination = ({ startPage = 1, countPages, onClick }) => {
  const [curPage, setCurPage] = useState(startPage)

  const onButtonClick = (page) => {
    setCurPage(page)
    onClick(page)
  }

  useEffect(() => setCurPage(startPage), [startPage])

  return (
    <div className="button-pagination">
      <Button
        value="<"
        color="default"
        className="button-pagination__button"
        disabled={curPage === 1}
        onClick={() => onButtonClick(curPage - 1)}
      />

      <span className="button-pagination__number">{curPage}</span>

      <Button
        value=">"
        color="default"
        className="button-pagination__button"
        disabled={curPage === countPages}
        onClick={() => onButtonClick(curPage + 1)}
      />
    </div>
  )
}

export default ButtonPagination
