import { useState } from "react";
import Button from "./Button";

function CourseItem({ title, duration }) {
    const [showCourse, setShowCourse] = useState(false);

    function handleToggle() {
        setShowCourse(prev => !prev);
    };

    return (
        <div>
            <p>{title}</p>

            <Button
                label='Ver duração'
                onClick={handleToggle}
            />

            {showCourse && (
                <p>Duração: {duration}</p>
            )}
        </div>
    );
};

export default CourseItem;