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

## Algorithm

```
port = min + H(name) % (max - min)
```
