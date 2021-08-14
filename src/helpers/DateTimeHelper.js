export const toMinutes = (startDate, endDate) => {
  return Math.round((endDate - startDate) / 1000 / 60)
}

export const ceilToDays = (startDate, endDate) => {
  return Math.ceil((endDate - startDate) / 1000 / 60 / 60 / 24)
}

export const getDays = (startDate, endDate) => {
  return Math.round((endDate - startDate) / 1000 / 60 / 60 / 24)
}

export const getHours = (startDate, endDate) => {
  return Math.round(((endDate - startDate) / 1000 / 60 / 60) % 24)
}

export const getMinutes = (startDate, endDate) => {
  return Math.round(((endDate - startDate) / 1000 / 60) % 60)
}

export const isPastTime = (time) => {
  return new Date().getTime() < new Date(time).getTime()
}

export const formatDate = (date) => {
  const isoDate = date.toISOString()
  return `${isoDate.substr(0, 10)} ${isoDate.substr(11, 5)}`
}
