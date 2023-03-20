import test from 'test'
import namedPort from './index.js'
import assert from 'node:assert'

test('named port', t => {
  assert.strictEqual(namedPort('Filecoin Station Core'), 7834)
})
