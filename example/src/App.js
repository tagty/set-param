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
