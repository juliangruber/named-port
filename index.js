import crypto from 'node:crypto'

const min = 1024
const max = 65535

const namedPort = (str) => {
  // TODO: sha512 isn't big enough to cover the full port range
  const hash = crypto.createHash('sha512').update(str).digest()
  const n = hash.reduce((a, b) => a + b, 0)
  return min + n % (max - min)
}

export default namedPort
