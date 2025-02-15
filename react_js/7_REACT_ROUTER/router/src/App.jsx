import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Outlet } from 'react-router-dom';

// TODO: 5 - links entre pagians
import NavBar from './components/NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar/>
        <Outlet/>
        <p>Footer</p>
      </div>
    </>
  )
}

export default App
