import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Option 1: If images are in src/assets/slide bar/
import imgSlide1 from '../../assets/slide bar/Slide1.jpg';
import imgSlide2 from '../../assets/slide bar/Slide2.jpg';
import imgSlide3 from '../../assets/slide bar/Slide3.jpg';
import imgSlide4 from '../../assets/slide bar/Slide4.jpg';


const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: imgSlide1,
      title: "Premium Kitchen Collection",
      subtitle: "Discover exquisite cookware that transforms your cooking experience",
      buttonText: "Explore Collection",
      buttonLink: "/products"
    },
    {
      id: 2,
      image: imgSlide2,
      title: "Professional Grade Cookware",
      subtitle: "Used by chefs worldwide - now available for your home kitchen",
      buttonText: "Shop Now",
      buttonLink: "/dinner-ware"
    },
    {
      id: 3,
      image: imgSlide3,
      title: "Modern Kitchen Essentials",
      subtitle: "Upgrade your kitchen with our carefully curated selection",
      buttonText: "View Products",
      buttonLink: "/kitchen-cooking"
    },
    {
      id: 4,
      image: imgSlide4,
      title: "Free Delivery Across Bangladesh",
      subtitle: "Get your favorite kitchenware delivered to your doorstep",
      buttonText: "Learn More",
      buttonLink: "/shipping"
    }
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="hero min-h-screen relative overflow-hidden">
      {/* Carousel Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="hero-overlay bg-opacity-50 absolute inset-0"></div>
            </div>
            
            {/* Slide Content */}
            <div className="hero-content text-neutral-content text-center relative z-10">
              <div className="max-w-4xl">
                <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  {slide.title}
                </h1>
                
                <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                  {slide.subtitle}
                </p>
                
                
                
                
                {/* Call-to-Action Buttons */}
                
                
                {/* Trust Indicators - Only show on first slide */}
                
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 btn btn-circle btn-outline btn-sm md:btn-md border-white text-white hover:bg-white hover:text-black"
        aria-label="Previous slide"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 btn btn-circle btn-outline btn-sm md:btn-md border-white text-white hover:bg-white hover:text-black"
        aria-label="Next slide"
      >
        ❯
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;