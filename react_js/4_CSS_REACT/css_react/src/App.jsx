import { useState } from 'react'
import './App.css'

// TODO: 2 - CSS de componentes
import MyComponent from './components/MyComponent'

// TODO: 6 - css modules
import Title from './components/Title'

function App() {
  // TODO: 4 - inlinee style dinamico
  const n = 15

  // TODO: 5 - Classes dinâmicas
  const redTitle = true


  return (
    <div className="App">

      {/* 1 - css global */}
      <h1>CSS no React</h1>

      {/* 2 - CSS de componentes */}
      <MyComponent/>
      <p>Pegou o css do componente</p>

      {/* 3 - inline style */}
      <p style={{color: "blue", border: 'none'}}>Este elemento tem estilos inline</p>

      {/* 4 - inline style dinamico */}
      <h2 style={n > 10? {color: "purple"} : {color: "magenta"}}>
        CSS dinâmico
      </h2>
      <h2 style={n > 20? {color: "purple"} : {color: "magenta"}}>
        CSS dinâmico 2
      </h2>

      {/* 5 - Classes dinâmicas */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter uma classe</h2>

      {/* 6 - css modules */}
      <Title/>
    </div>
  )
}

export default App
