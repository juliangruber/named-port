import test from 'node:test'
import namedPort from './index.js'
import assert from 'node:assert'

test('named port', () => {
  assert.strictEqual(namedPort('Filecoin Station Core'), 7834)
})
