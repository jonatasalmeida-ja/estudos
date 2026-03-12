import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './exercises/exe09/Header'
import MovieItem from './exercises/exe09/MovieItem'
import { movies } from './exercises/exe09/movies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header title={'Lista de Filmes'}/>
      </div>

      <div>
        {movies.map(m => (
          <MovieItem
            key={m.id}
            title={m.title}
            year={m.year}
          />
        ))}
      </div>
    </>
  )
}

export default App