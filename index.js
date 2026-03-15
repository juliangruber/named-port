import crypto from 'node:crypto'

const namedPort = (str, options) => {
  const { min = 1024, max = 65535 } = options ?? {}
  if (min >= max) throw new Error('min option must be less than max option')
  // TODO: sha512 isn't big enough to cover the full port range
  const hash = crypto.createHash('sha512').update(str).digest()
  const n = hash.reduce((a, b) => a + b, 0)
  return min + n % (max - min)
}

export default namedPort
