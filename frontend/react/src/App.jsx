import { useState } from 'react'
import './style/App.css'
import Demo1 from './example/Demo1'
import Demo2 from './example/Demo2'
import Form from './concepts/forms/FormHandling'
import Local from './concepts/local-storage/LocalStorage'
import Fetch from './concepts/api/FetchAPI'
import AppRoutes from './library/react-router-dom/AppRoutes'

function App() {

  return (
    <>
    <AppRoutes/>
      <p className='flex item-center text-black text-9xl font-bold'>
        Hello World
      </p>
      <Demo1/>
      <Demo2/>
      <Form />
      <Local />
      <Fetch/>
    </>
  )
}

export default App