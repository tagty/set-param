# set-param

> set-param is a library to set a parameter

[![NPM](https://img.shields.io/npm/v/set-param.svg)](https://www.npmjs.com/package/set-param) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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

  return <h1>setParam!</h1>
}
```

## License

MIT © [tagty](https://github.com/tagty)
