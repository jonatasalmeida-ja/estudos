import { useState } from "react";
import Button from "./Button";

function ProductItem({ name, price }) {
    const [showDetails, setShowDetails] = useState(false);

    function handleToggle() {
        setShowDetails(!showDetails)
    }

    return (
        <div>
            <p>{name}</p>

            <Button
                label='Ver detalhes'
                onClick={handleToggle}
            />

            {showDetails && (
                <p>Preço: {price}</p>
            )}
        </div>
    )
}

export default ProductItem

/*
function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div>
        <Header title='Lista de Produtos' />
      </div>

      <div>
        {products.map(p => (
          <ProductItem
            key={p.id}
            name={p.name}
            price={p.price}
          />
        ))}
      </div>
    </>
  )
}
*/