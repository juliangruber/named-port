import crypto from 'node:crypto'
import { MAX, MIN } from './constants.js'

const namedPort = (str, options) => {
  const { min = MIN, max = MAX } = options ?? {}
  if (min >= max) throw new Error('min option must be less than max option')
  // TODO: sha512 isn't big enough to cover the full port range
  const hash = crypto.createHash('sha512').update(str).digest()
  const n = hash.reduce((a, b) => a + b, 0)
  return min + n % (max - min)
}

export default namedPort
