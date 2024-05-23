import { KeyboardEventHandler, useState, useEffect } from 'react'
import Bucket from './Bucket.tsx'
import useThis from './time.ts'

function App() {

  const time = useThis()

  return (
    <div>
      <Bucket/>
      <br/>
      {time.toLocaleString()}
    </div>
)
}

export default App
