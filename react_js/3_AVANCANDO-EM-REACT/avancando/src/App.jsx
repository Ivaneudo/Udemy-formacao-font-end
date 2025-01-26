import './App.css'

// TODO: 2 - Imagens em assets
import night from "./assets/night.jpg";

// TODO: 3 - useState
import Data from './components/Data';

// TODO: 4 - renderização de lista
import ListRender from './components/ListRender';

// TODO: 7 - rederização condicional
import { ConditionalRender } from './components/ConditionalRender';

// TODO: 8 - props
import { ShowUserName } from './components/ShowUserName';

// TODO: 9 - desestruturando props
import { CarDetails } from './components/CarDetails';

// TODO: 11 - renderização de listas com componente
const cars = [
  {id: 1, brand: "Ferrari", color: "Amarelo", km: 0,},
  {id: 2, brand: "KIA", color: "Branco", km: 200000,},
  {id: 3, brand: "Renault", color: "Azul", km: 32000,},
]

// TODO: 12 - fragment
import Fragment from './components/Fragment';

// TODO: 13 - children
import Container from './components/Container';

// TODO: 14 - Função em prop
import ExecuteFunction from './components/ExecuteFunction';
import { useState } from 'react';

// TODO: 15 - state lift
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';

function App() {

  // TODO: 14 - Função em prop
  function showMessage() {
    console.log("Evento do componente pai")
  }

  // TODO: 15 - state lift
  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }  

  return (
      <div style={{paddingBottom: "500px"}}>
        <h1>Avançando em React</h1>

        {/* 1 - Imagens em public */} 
        <img src="/img.jpg" alt="Alguma imagem" />
        
        {/* 2 - Imagens em assets */}
        <img src={night} alt="Outra imagem" />

        {/* 3 - useState */}
        <Data/>

        {/* 4 - renderazação de lista */}
        <ListRender/>

        {/* 7 - renderização condicional */}
        <ConditionalRender/>

        {/* 8 - props */}
        <ShowUserName name="Ivaneudo" />

        {/* 9 - Desestruturando props */}
        <CarDetails brand="VW" km={999} color="Preto"/>

        {/* 10 - Reaproveitamento de props */}
        <CarDetails brand="Fiat" km={123444} color="Branco"/>
        <CarDetails brand="Audi" km={9987} color="Azul"/>

        {/* 11 - Renderização de lista com componente */}
        {cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km}/>
        ))}

        {/* 12 - Fragments */}
        <Fragment/>

        {/* 13 - Children */}
        <Container>
          <div>
            <h2>Teste</h2>
            <p>Meu container</p>
          </div>
        </Container>

        {/* 14 - Função prop */}
        <ExecuteFunction myFunction={showMessage}/>

        {/* 15 - state lift */}
        <Message msg={message}/>
        <ChangeMessage handleMessage={handleMessage}/>
      </div>
  )
}

export default App
