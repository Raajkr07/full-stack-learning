import { useState } from 'react'
import './style/App.css'
import Demo1 from './example/Demo1'
import Demo2 from './example/Demo2'

function App() {

  return (
    <>
      <p className='flex item-center text-black text-9xl font-bold'>
        Hello World
      </p>
      <Demo1/>
      <Demo2/>
    </>
  )
}

export default App