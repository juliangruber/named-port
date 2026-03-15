import test from 'node:test'
import namedPort from './index.js'
import assert from 'node:assert'

const MIN = 1024
const MAX = 65535

test('named port', () => {
  assert.strictEqual(namedPort('Filecoin Station Core'), 7834)
})

test('port is within range', () => {
  const port = namedPort('project')
  assert.ok(port >= MIN)
  assert.ok(port <= MAX)
})

test('same string outputs same port', () => {
  const a = namedPort('project')
  const b = namedPort('project')
  assert.strictEqual(a, b)
})

test('different strings output different ports', () => {
  const a = namedPort('project-a')
  const b = namedPort('project-b')
  assert.notStrictEqual(a, b)
})

test('stable across multiple calls', () => {
  const results = Array.from({ length: 10 }, () => namedPort('project'))
  const [first] = results
  for (const r of results) { assert.strictEqual(r, first) }
})
