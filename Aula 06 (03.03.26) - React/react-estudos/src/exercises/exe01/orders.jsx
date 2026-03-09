// Renderização de Listas
const orders = [
    { id: 1, customer: "João" },
    { id: 2, customer: "Maria" },
    { id: 3, customer: "Pedro" }
];

export { orders }
/*
      <div>
        <h2>Renderização de Listas</h2>
        {orders.map(ord => (<p key={ord.id}>Pedido de {ord.customer}</p>))}
      </div>
*/