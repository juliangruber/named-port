#!/usr/bin/env node

import namedPort from '../index.js'

console.log(namedPort(process.argv.slice(2).join(' ')))
