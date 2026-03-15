import assert from 'node:assert'
import test from 'node:test'
import namedPort from './index.js'

test('named port', () => {
  assert.strictEqual(namedPort('Filecoin Station Core'), 7834)
})
