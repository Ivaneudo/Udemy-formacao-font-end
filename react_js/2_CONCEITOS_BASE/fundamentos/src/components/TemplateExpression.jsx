// TODO: 4 - Template Expression
const TemplateExpression = () => {
    const name = "Ivaenudo"

    const data = {
        age: 18,
        job: 'Programador'
    }
    return (
      <div>
        <p>A soma é: {2 + 2}</p>
        <h3>Bem vindo {name}</h3>
        <p>você tem {data.age} anos e é um {data.job}</p>
      </div>
    )
}

export default TemplateExpression