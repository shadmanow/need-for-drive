export const getDays = (startDate, endDate) => {
  return Math.round((endDate - startDate) / 1000 / 60 / 60 / 24)
}

export const getHours = (startDate, endDate) => {
  return Math.round(((endDate - startDate) / 1000 / 60 / 60) % 24)
}

export const getMinutes = (startDate, endDate) => {
  return Math.round(((endDate - startDate) / 1000 / 60) % 60)
}
