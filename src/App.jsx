import React from 'react';
import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowcase';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ProductShowcase />
      <Testimonials />
      <ContactForm />
    </div>
  );
}

export default App;