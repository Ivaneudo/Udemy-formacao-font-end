import { useState, useEffect } from 'react'

import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products"

import './App.css'

function App() {

  // TODO: 1 - Resgatando dados
  const [products, setProduct] = useState([]);

  // TODO: 4 - custom hook
  const {data: items, httpConfig, loading, Error} = useFetch(url)

  // useEffect(() => {
  //   async function getData() {
  //     const res = await fetch(url);

  //     const data = await res.json();

  //     setProduct(data)
  //   }

  //   getData()
  // }, []);

  // TODO: 2 - Envio de dados
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()

    // TODO: 5 - refatorando post
    const product = {
      name,
      price,
    };

    httpConfig(product, "POST")

    
    // const res = await fetch(url, {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product),
    // });

    // // TODO: 3 - carregamento dinamico
    // const addedProduct = await res.json();

    // setProduct((prevProducts) => [...prevProducts, addedProduct])
  };

  return (
    <>
      <div>
        <h1>HTTP em React</h1>

        {/* 6 - loading */}
        {loading && <p>Carregando...</p>}

        {/* 7 - tratando erro */}
        {Error && <p>{Error}</p>}

        {/* 1 resgate de dados */}
          <ul>
            {items && 
            items.map((product) => {
              <li key={product.id}>
                {product.name} - R$: {product.price}
              </li>
            })}
          </ul>
        </div>

        {/* 2 - Enviando dados */}
        <div className='add-product'>
            <form onSubmit={handleSubmit}>
              <label>
                <span>Nome:</span>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
              </label>
              <label>
                <span>Preço:</span>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
              </label>
              {/* <input type="submit" value="Enviar"/> */}
              {/* 7 - loading post */}
              {loading && <input type='submit' disabled value='Aguarde'/>}
              {!loading && <input type='submit' value='Criar'/>}
            </form> 
        </div>
    </>
  )         
}

export default App
