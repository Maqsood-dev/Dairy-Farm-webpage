import sevicephoto1 from './assets/servicephoto1.jpg'
import sevicephoto2 from './assets/servicephoto2.jpg'
import sevicephoto3 from './assets/servicephoto3.jpg'
import img1 from './assets/miximg1.jpg'
import img2 from './assets/miximg2.jpg'
import img3 from './assets/miximg3.jpg'
import img4 from './assets/miximg4.jpg'
import img5 from './assets/miximg5.jpg'
import img6 from './assets/miximg6.jpg'
import img7 from './assets/smallcow1.jpg'
import img8 from './assets/smallcow2.jpg'


import "./Services.css";  // You can create a corresponding CSS file for styling.

function Services() {
  return (
    <>
    <section className="services">
        <h3 id="ser">Services</h3>
      <h2 id>Services That We Offer <br/>For Entrepreneurs</h2>
      <div className="service-cards">
        <div className="service-card">
          <img
            src={sevicephoto1}  // Random image for demonstration
            alt="Best Animal Selection"
            className="service-image"
          />
          <h3>Best Animal Selection</h3>
          <p>
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
            sed diam stet diam sed stet.
          </p>
          <button className="service-btn">→</button>
        </div>
        <div className="service-card">
          <img
            src={sevicephoto2}  // Random image for demonstration
            alt="Breeding & Veterinary"
            className="service-image"
          />
          <h3>Breeding & Veterinary</h3>
          <p>
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
            sed diam stet diam sed stet.
          </p>
          <button className="service-btn">→</button>
        </div>
        <div className="service-card">
          <img
            src={sevicephoto3}  // Random image for demonstration
            alt="Care & Milking"
            className="service-image"
          />
          <h3>Care & Milking</h3>
          <p>
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
            sed diam stet diam sed stet.
          </p>
          <button className="service-btn">→</button>
        </div>
      </div>
    </section>

    <div class="image-container">
    <img id="img1" src={img1} alt="Image 1" class="overlapping-image" />
    <img id="img2" src={img2} alt="Image 1" class="overlapping-image" />
    <img id="img3" src={img3} alt="Image 2" class="overlapping-image" />
    <img id="img4" src={img4} alt="Image 3" class="overlapping-image" />
    <img id="img5" src={img5} alt="Image 4" class="overlapping-image" />
    <img id="img6" src={img6} alt="Image 5" class="overlapping-image" />
    <img id="img7" src={img7} alt="Image " class="overlapping-image" />
    <img id="img8" src={img8} alt="Image 5" class="overlapping-image" />
</div>

    </>
  );
}

export default Services;
