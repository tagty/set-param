import React from 'react'

import { setParam } from 'set-param'
import 'set-param/dist/index.css'

export default () => {
  React.useEffect(() => {
    setParam({ bar: 'aaa' })
  }, [])

  return <h1>setParam!</h1>
}
