import React from 'react'

export const ConditionalRender = () => {
    const x = true

    const name = "João"
  return (
    <div>
        {/* 7 - Render condicional */}
        <h3>Isso será exibido?</h3>
        {x && <p>Se x for true, sim.</p>}
        {!x && <p>Se x for false, não.</p>}

        {/* 8 - else */}
        <h3>Render ternario</h3>
        {name === "João" ? (
            <div>
                <p>Rosa João????</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado</p>
            </div>
        )}
    </div>
  )
}
