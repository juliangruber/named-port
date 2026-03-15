#!/usr/bin/env node

import namedPort from '../index.js'
import { MAX, MIN } from '../constants.js'

const args = process.argv.slice(2)

let min = MIN
let max = MAX
const nameParts = []

for (const arg of args) {
  if (arg.startsWith('--min=')) {
    const v = Number(arg.slice(6))
    if (Number.isNaN(v)) throw new Error('Invalid --min option')
    min = v
  } else if (arg.startsWith('--max=')) {
    const v = Number(arg.slice(6))
    if (Number.isNaN(v)) throw new Error('Invalid --max option')
    max = v
  } else {
    nameParts.push(arg)
  }
}

if (!nameParts.length) { throw new Error('Usage: named-port <name> [--min=Number] [--max=Number]') }

const port = namedPort(nameParts.join(' '), { min, max })
console.log(port)
