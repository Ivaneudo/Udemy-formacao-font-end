import { useState } from 'react'
import './App.css'

// TODO: 2 - Inportanto componente
import FirstComponent from './components/FirstComponent'

// TODO: 4 - Template Expression
import TemplateExpression from './components/TemplateExpression'

// TODO: 5 - Hierarquia
import MyComponent from './components/MyComponent'

// TODO: 6 - Eventos
import Events from './components/Events'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'> 
        <h1>Fundamentos do React</h1>
        {/* 3 - Comentarios JSX */}
        <FirstComponent/>
        <TemplateExpression/>
        <MyComponent/>
        <Events/>
    </div>
  )
}

export default App
