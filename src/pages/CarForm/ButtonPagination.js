import React, { useState, useEffect } from 'react'

import Button from '../../components/Button/Button'
import './ButtonPagination.scss'

const ButtonPagination = ({ startPage, countPages, onClick }) => {
  const [curCountPages, setCurCountPages] = useState(countPages)
  const [curPage, setCurPage] = useState(startPage)

  const onButtonClick = (page) => {
    setCurPage(page)
    onClick(page)
  }

  useEffect(() => {
    let count = countPages
    if (count === 0) count++

    setCurCountPages(count)

    if (startPage > count) {
      setCurPage(count)
    } else {
      setCurPage(startPage)
    }
  }, [startPage, countPages])

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
        disabled={curPage >= curCountPages}
        onClick={() => onButtonClick(curPage + 1)}
      />
    </div>
  )
}

export default ButtonPagination
