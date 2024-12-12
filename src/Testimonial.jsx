import React from "react";
import "./Testimonial.css"; 
import khan from './assets/khan.jpg'
import rajeev from './assets/rajeev.jpg'
import zahid from './assets/zahid.jpg'
import siraj from './assets/siraj.jpeg'

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Darshan",
      imgSrc: "https://via.placeholder.com/150",
      comment: "Absolutely love these products! They've changed my life for the better.",
    },
    {
      id: 2,
      name: "Rajeev",
      imgSrc: rajeev,
      comment: "Top-notch quality and amazing customer service. Highly recommend!",
    },
    {
      id: 3,
      name: "Khan Muhammad",
      imgSrc: khan,
      comment: "The best products I've ever purchased. Great value for money!",
    },
    {
      id: 4,
      name: "Siraj",
      imgSrc: siraj,
      comment: "These products are simply fantastic. Five stars all the way!",
    },
    {
      id: 5,
      name: "Zahid",
      imgSrc: zahid,
      comment: "I'm so impressed with the quality. I'll definitely be buying again!",
    },
  ];

  return (
    <div className="testimonial-container">
        <h3 id="ser">Testimonial</h3>
      <h1 className="testimonial-title">What people say <br/>about our products</h1>
      <div className="testimonial-cards">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <img
              src={testimonial.imgSrc}
              alt={testimonial.name}
              className="testimonial-img"
            />
            <p className="testimonial-comment">"{testimonial.comment}"</p>
            <h3 className="testimonial-name">- {testimonial.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
