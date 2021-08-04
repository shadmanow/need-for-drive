import React, { useState, useEffect } from 'react'
import './CirclePagination.scss'

const CircleList = ({ curIndex, count }) => {
  const circles = []
  for (let i = 0; i < count; i++) {
    circles.push(
      <div
        key={i}
        className={`circle-pagination__circle ${
          curIndex === i ? 'circle-pagination__circle_active' : ''
        }`}
      />
    )
  }
  return circles
}

const CirclePagination = ({ count, curIndex }) => {
  const [index, setIndex] = useState(curIndex)

  useEffect(() => {
    setIndex(curIndex)
  }, [curIndex])

  return (
    <div className="circle-pagination">
      <CircleList curIndex={index} count={count} />
    </div>
  )
}

export default CirclePagination
