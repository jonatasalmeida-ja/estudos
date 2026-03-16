import { useState } from "react";
import Button from "./Button";

function BooksItem({ title, author }) {
    const [showBook, setShowBook] = useState(false);

    function toggleSwitch() {
        setShowBook(prev => !prev);
    }

    return (
        <div>
            <p>{title}</p>

            <Button 
                label='Ver autor'
                onClick={toggleSwitch}
            />

            {showBook && (
                <p>Autor: {author}</p>
            )}
        </div>
    );
};

export default BooksItem;