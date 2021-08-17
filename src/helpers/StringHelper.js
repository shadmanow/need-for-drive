export const firstToUpperCase = (str) => {
  return str[0].toUpperCase() + str.slice(1)
}

export const getNumbers = (str) => {
  return str.match(/\d/g).join('')
}
