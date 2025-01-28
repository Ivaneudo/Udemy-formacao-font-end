import { useState } from 'react'
import './App.css'

// TODO: 1 - criando formulario 
import MyForm from './components/MyForm'

function App() {

  return (
    <>
     <div>
      <MyForm useName="Ivaneudo" useEmail="ivaneudo.dev@gmail.com"/>
     </div>
    </>
  )
}

export default App
