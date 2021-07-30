import React, { useState, useEffect } from 'react'
import './Pagination.scss'

const CircleList = ({ curIndex, count }) => {
  const circles = []
  for (let i = 0; i < count; i++) {
    circles.push(
      <div
        key={i}
        className={`pagination__circle ${
          curIndex === i ? 'pagination__circle_active' : ''
        }`}
      />
    )
  }
  return circles
}

const Pagination = ({ count, curIndex }) => {
  const [index, setIndex] = useState(curIndex)

  useEffect(() => {
    setIndex(curIndex)
  }, [curIndex])

  return (
    <div className="pagination">
      <CircleList curIndex={index} count={count} />
    </div>
  )
}

export { Pagination }
