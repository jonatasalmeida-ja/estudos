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