# named-port

Deterministically map service names to port numbers `(1024,65535)`.

## Usage

```bash
$ npx named-port Filecoin Station Core
51806
```

```js
import namedPort from 'named-port'

console.log(namedPort('Filecoin Station Core'))
```

### Custom port range

```js
console.log(namedPort('Filecoin Station Core', { min: 3000, max: 10000 }))
```

## Algorithm

```
port = min + H(name) % (max - min + 1)
```

- `H(name)`: `hash = 0; for each char c: hash = (hash * 31 + c.charCodeAt(0)) >>> 0`
- `31`: prime multiplier for even distribution
- `>>> 0`: 32-bit unsigned overflow handling
