import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome to EarX</h1>
          <p className="py-6">Your one-stop shop for the best hearing aids in the market.</p>
          <button className="btn" style={{ backgroundColor: '#e11e27' }}>Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;