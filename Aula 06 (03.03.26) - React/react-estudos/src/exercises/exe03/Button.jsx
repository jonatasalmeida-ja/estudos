function Button({ label, ...rest }) {
    return (
        <button {...rest}>{label}</button>
    )
};

export default Button;

/*
  const [lastProduct, setLastProduct] = useState('')

  function handleSelectProduct(product) {
    setLastProduct(product)
  }

    <div>
        {products.map(p => (
          <div key={p.id}>
            <p>{p.name}</p>
            <Button label='Comprar' onClick={() => handleSelectProduct(p.name)}/>
          </div>
        ))}
      </div>

      <div>
        <h2>Último produto comprado</h2>
        {lastProduct}
      </div>
*/