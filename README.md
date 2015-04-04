minecraft-combine-command
===

Transform an array of Minecraft commands into a single one

Installation
===

```bash
npm install minecraft-combine-command
```

Usage
===

```js
var combine = require('minecraft-combine-command');

var commands = [
    'say Foo',
    'say Bar',
    'say Baz'
];

combine(commands); // 'summon MinecartCommandBlock ~ ~1 ~ {Comman...'

```

License
===

MIT.
