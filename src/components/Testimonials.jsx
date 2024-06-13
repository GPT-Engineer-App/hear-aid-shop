import React from 'react';

const testimonials = [
  { id: 1, name: 'John Doe', feedback: 'These hearing aids changed my life!' },
  { id: 2, name: 'Jane Smith', feedback: 'Excellent quality and great customer service.' },
  { id: 3, name: 'Sam Wilson', feedback: 'Affordable and reliable, highly recommend!' },
];

const Testimonials = () => {
  return (
    <section className="testimonials py-20 bg-base-200">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <p className="text-xl italic">"{testimonial.feedback}"</p>
                <p className="text-right mt-4">- {testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;