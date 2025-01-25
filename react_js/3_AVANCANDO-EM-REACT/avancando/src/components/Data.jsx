import React, { useState } from 'react'

function Data() {
  let valor = 10;

  const [anoTherNumber, setAnoTherNumber] = useState(15)
    return (
    <div>
        <div>
            <p> Valor: {valor}</p>
            <button onClick={() => {valor = 15}}>Mudar Varivel</button>
        </div>
        <div>
            <p>Valor {anoTherNumber}</p>
            <button onClick={() => {setAnoTherNumber(20)}}>Mudar com State</button>
        </div>

    </div>
  )
}

export default Data