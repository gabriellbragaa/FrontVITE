import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const data = [];

  return (
    <div className="Container App">  
      <h1> CoopAgroBrasil </h1>
    
        <div className='AgroBrasil'> 
          {data.map(agroData => <Agro/>)}
      </div>
    </div>
  )
}

export default App
