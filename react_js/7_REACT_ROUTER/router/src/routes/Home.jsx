import React from 'react'

// TODO: 6 - Carregamento de dados
import { useFetch } from '../hooks/useFetch'

const Home = () => {

  const url = 'http://localhost:3000/products';

  const {data: items} = useFetch(url);

  return (
    <div>
        <h1>Home</h1>
        {/* 6 - Carregando dados */}
        <ul className="porducts">
          {items && items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>RS: {item.price}</p>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Home