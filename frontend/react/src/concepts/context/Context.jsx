import React, { useState } from 'react'
import { createContext } from 'react';

export const MyContext = createContext();

const Context = ({children}) => {

    const [value, setValue] = useState('dark');
  return (
    <>
       <MyContext.Provider value={{value, setValue}}>
            {children}
       </MyContext.Provider>
    </>
  )
}

export default Context