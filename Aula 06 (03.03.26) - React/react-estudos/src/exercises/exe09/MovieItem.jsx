import { useState } from "react";
import Button from "./Button";

function MovieItem({ title, year }) {
    const [showMovie, setShowMovie] = useState(false);

    function handleToggle() {
        setShowMovie(prev => !prev);
    };

    return (
        <div>
            <p>{title}</p>
            
            <Button
                label='Ver ano'
                onClick={handleToggle}
            />

            {showMovie && (
                <p>Ano: {year}</p>
            )}
        </div>
    );
};

export default MovieItem;

/*
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
*/