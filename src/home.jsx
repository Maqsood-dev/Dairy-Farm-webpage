import React, { useState, useEffect } from 'react';
import './home.css';


import cow1 from './assets/cow.jpg';
import cow2 from './assets/blackcow.jpg';
import cow3 from './assets/miximg2.jpg';

function Home() {
    const images = [cow1, cow2, cow3];

    const [currentImage, setCurrentImage] = useState(images[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * images.length);
            setCurrentImage(images[randomIndex]);
        }, 3000); 

        return () => clearInterval(interval); 
    }, [images]);

    return (
        <section
            className="first-content"
            style={{ backgroundImage: `url(${currentImage})` }}
        >
            <p>Welcome to our Dairy and Poultry Farm</p>
            <h1>The Form Of <br /> Dairy and Poultry <br /> Products</h1>
            <div className="tooltip-container">
                <button aria-label="Explore our products">Explore</button>
                    <div className="tooltip-text">
                        Discover a variety of fresh dairy and poultry products.<br/>
                        We have different kind of products at the low price.<br/>
                        our company is know for the fresh products. 
                    </div>
            </div>
        </section>
    );
}

export default Home;
