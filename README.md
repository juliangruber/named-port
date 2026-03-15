# named-port

Deterministically map service names to port numbers `(1024,65535)`.

## Usage

```bash
$ npx named-port Filecoin Station Core
7834
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
port = min + H(name) % (max - min)
```
