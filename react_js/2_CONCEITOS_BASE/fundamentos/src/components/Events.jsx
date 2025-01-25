// TODO: 6 - Eventos
const Events = () => {

    const HandleClick = () => {
        console.log("Executou")
    }

    // TODO: 8 - Função de renderização
    const render = (x) => {
        if (x) {
            return <h1>Redenrizando com True</h1>
        } else {
            return <h1>Rederizando com False</h1>
        }
    }

    return (
      <div>
        <div>
            <button onClick={() => {console.log("Testando um eventos de onclick")}}>
                Clique aqui
            </button>
        </div>
        {/* 7 - Eventos com função */}
        <div>
            <button onClick={HandleClick}>
                Clique aqui - com função
            </button>
        </div>
        {render(true)}
        {render(false)}
      </div>
    )
 }

export default Events