import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './exercises/exe10/Header'
import BooksItem from './exercises/exe10/BooksItem'
import { books } from './exercises/exe10/books'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header
          title={'Lista de Livros'}
        />
      </div>

      <div>
        {books.map(b => (
          <BooksItem
            key={b.id}
            title={b.title}
            author={b.author}
          />
        ))}
      </div>
    </>
  )
}

export default App