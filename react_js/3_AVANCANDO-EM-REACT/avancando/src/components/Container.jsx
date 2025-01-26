const Container = ({children}) => {
  return (
    <div>
        <h1>Conteúdo com componente pai</h1>
        {children}
    </div>
  )
}

export default Container