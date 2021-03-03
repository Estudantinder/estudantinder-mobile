export default (value: string, len = 4) => {
  return value
    .toLowerCase()
    .split(' ')
    .map((word) => {
      if (word.length <= len) return word

      return word.charAt(0).toUpperCase() + word.substring(1)
    })
    .join(' ')
}
