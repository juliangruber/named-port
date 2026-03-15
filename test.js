import test from 'node:test'
import namedPort from './index.js'
import assert from 'node:assert'

const MIN = 1024
const MAX = 65535

test('named port', () => {
  assert.strictEqual(namedPort('Filecoin Station Core'), 7834)
})

test('port is within default range', () => {
  const port = namedPort('project')
  assert.ok(port >= MIN)
  assert.ok(port <= MAX)
})

test('port is within custom range', () => {
  const min = 3000
  const max = 10000
  const port = namedPort('project', { min, max })
  assert.ok(port >= min)
  assert.ok(port <= max)
})

test('throw error when min >= max', () => {
  assert.throws(() => { namedPort('project', { min: 10, max: 1 }) })
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
