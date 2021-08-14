export const firstToUpperCase = (str) => {
  return str[0].toUpperCase() + str.slice(1)
}

export const isId = (str) => {
  return str.search('[a-z0-9]{24}') !== -1
}
