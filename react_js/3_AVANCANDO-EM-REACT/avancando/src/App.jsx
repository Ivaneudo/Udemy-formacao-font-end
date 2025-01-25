// import { useState } from 'react'
import './App.css'

import Data from './components/Data';

// TODO: 2 - Imagens em assets
import night from "./assets/night.jpg";

function App() {
  // const [count, setCount] = useState(0)

  return (
      <div style={{paddingBottom: "500px"}}>
        <h1>Avançando em React</h1>
        {/* 1 - Imagens em public */} 
        <img src="/img.jpg" alt="Alguma imagem" />
        {/* 2 - Imagens em assets */}
        <img src={night} alt="Outra imagem" />
        {/* 3 - useState */}
        <Data/>
      </div>
  )
}

export default App
