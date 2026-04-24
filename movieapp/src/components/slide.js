import React, { useEffect, useState } from 'react';
import '../styles/slide.css';

function Slide({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="slider">
            {images.map((image, index) => (
                <div
                    className="slide"
                    key={index}
                    style={{ display: index === currentIndex ? 'block' : 'none' }}
                >
                    <img src={image} alt={`Slide ${index + 1}`} />
                </div>
            ))}
        </div>
    );
}

export default Slide;