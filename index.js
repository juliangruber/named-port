import { MAX, MIN } from './constants.js'

const namedPort = (str, options) => {
  const { min = MIN, max = MAX } = options ?? {}
  if (min >= max) throw new Error('min option must be less than max option')
  let hash = 0
  for (const char of str) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0
  }
  return min + hash % (max - min + 1)
}

export default namedPort
