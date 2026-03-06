import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  const orders = [
    { id: 1, customer: "João" },
    { id: 2, customer: "Maria" },
    { id: 3, customer: "Pedro" }
  ];

  return (
    <>
      <div>
        <Header title='Página Inicial'/>
        <Header title='Área de usuários'/>
        <p>Minha primeira aplicação react</p>
      </div>

      <div>
        {orders.map(order => (
          <p key={order.id}>Pedido de {order.customer}</p>
        ))}
      </div>
    </>
  )
}

export default App
