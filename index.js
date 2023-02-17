const namedPort = (str) => {
  const min = 1024
  const max = 65535
  const n = str.split('').reduce((a, b) => a + b.charCodeAt(0), 0)
  return min + n % (max - min)
}

export default namedPort
