import './About.css';
import cowimg1 from './assets/smallcow1.jpg';
import cowimg2 from './assets/smallcow2.jpg';

function About() {
    return (
        <>
            <section className="second-content">
                <div className="parant1">
                    <div className="child1">
                        <div className="box" id="box1">
                            <h1>1 Year <br /> Experience</h1>
                        </div>
                        <div className="box" id="box2"></div>
                        <div className="box" id="box3"></div>
                        <div className="box" id="box4"></div>
                    </div>
                    <div className="child2">
                        <p className="p1">About us</p>
                        <h1>Know About Our Dairy<br />& Our History</h1>
                        <p className="p2">
                            This is our dairy farm. We have 2 partners, 6 cows, 100 ducks, and other birds like doves, chickens, and turkeys. 
                            Additionally, we have 1 worker.
                        </p>
                        <div className="baby">
                            <div className="baby1">
                                <i id="logophone" className="fa-solid fa-square-phone-flip"></i>
                                <h3>Dedicated Services</h3>
                                <p>Telecommunications service tailored to private communication needs.</p>
                            </div>
                            <div className="baby2">
                                <i className="fa-solid fa-cow"></i>
                                <h3>Organic Products</h3>
                                <p>Milk, eggs, butter, chicken meat, cow meat, and more.</p>
                            </div>
                        </div>
                        <div className="tooltip-container">
                            <button className="explore-btn" aria-label="Explore our products">Explore</button>
                            <div className="tooltip-text">
                                Discover a variety of fresh dairy and poultry products.<br />
                                High-quality and affordable prices.<br />
                                Known for freshness and reliability.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="parant2">
                    <div className="child1">
                        <p className="a">WHY US</p>
                        <h1 className="a">Few Reasons Why People Choose Us!</h1>
                        <p className="a">
                            We provide fresh milk, eggs, and many other products. Our customers trust us for the quality and freshness we deliver.
                        </p>
                        <ul className="a">
                            <li>FRESH MILK</li>
                            <li>FRESH EGGS</li>
                            <li>FRESH MEAT</li>
                        </ul>
                        <div className="tooltip-container">
                            <button className="explore-btn" aria-label="Explore our products">Explore</button>
                            <div className="tooltip-text">
                                Discover a variety of fresh dairy and poultry products.<br />
                                High-quality and affordable prices.<br />
                                Known for freshness and reliability.
                            </div>
                        </div>
                    </div>
                    <div className="child2">
                        <div className="square-container">
                            <div className="child" id="box1">
                                10<br /><span>Years Experience</span>
                            </div>
                            <div className="child" id="box2">
                                76<br /><span>Award Winning</span>
                            </div>
                            <div className="child" id="box3">
                                <i className="fa-solid fa-cow"></i>288<br /><span>Total Animals</span>
                            </div>
                            <div className="child" id="box4">
                                <i className="fa-solid fa-face-smile"></i>5713<br /><span>Happy Clients</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="cows-section">
                <div className="cow-card">
                    <img
                        src={cowimg1}
                        alt="Cow grazing in a field"
                        className="cow-image"
                    />
                    <div className="cow-details">
                        <h2>We Sell Best Dairy Products</h2>
                        <p>Discover our fresh dairy products made with love and care.</p>
                        
                    </div>
                </div>
                <div className="cow-card">
                    <img
                        src={cowimg2}
                        alt="Cow in a barn"
                        className="cow-image"
                    />
                    <div className="cow-details">
                        <h2>We Deliver Fresh Milk Worldwide</h2>
                        <p>
                            Our milk is processed and delivered fresh to your doorstep.
                        </p>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
