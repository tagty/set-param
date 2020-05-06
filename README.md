# set-param

> set-param is a library to set parameters.

[![NPM](https://img.shields.io/npm/v/set-param.svg)](https://www.npmjs.com/package/set-param) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

https://tagty.github.io/set-param

## Install

```bash
npm install --save set-param
```

## Usage

```tsx
import React from 'react'

import { setParam } from 'set-param'

export default () => {
  React.useEffect(() => {
    setParam({ bar: 'aaa' })
  }, [])

  return (
    <div>
      <h1>set-param</h1>
      <p>bar is aaa.</p>
      <button onClick={() => setParam({ buz: 'bbb' })}>set bbb on buz</button>
    </div>
  )
}
```

## License

MIT © [tagty](https://github.com/tagty)
