function Button({ label, ...rest }) {
    return (
        <button {...rest}>{label}</button>
    );
};

export default Button;

/*
function App() {
  const [count, setCount] = useState(0)
  const [visibleProduct, setVisibleProduct] = useState(null)

 function handleVisibleProduct(product) {
    if (visibleProduct === product) {
      setVisibleProduct(null)
    } else {
      setVisibleProduct(product)
    }
  }

  return (
    <>
      <div>
        <Header title='Lista de Produtos'/>
      </div>

      <div>
        {products.map(p => (
          <div key={p.id}>
            <p>{p.name}</p>
            <Button label='Ver detalhes' onClick={() =>
              handleVisibleProduct(`Preço: ${p.price}`)
            }/>
          </div>
        ))}
      </div>

      <div>
        <p>Produtos clicados</p>
        {visibleProduct || 'Nenhum produto clicado'}
      </div>
    </>
  )
}
*/