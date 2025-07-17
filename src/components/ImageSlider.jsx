import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getLocalizedField } from '../data/mockData';

const ImageSlider = ({ slides = [], autoPlay = true, interval = 5000 }) => {
  const { lang } = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  if (!slides || slides.length === 0) {
    return (
      <div className="hero-section bg-festival-green-600">
        <div className="hero-overlay"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Milli Yaylaq Festivalı
          </h1>
          <p className="text-xl md:text-2xl">
            Azərbaycanın ən böyük milli festivalı
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="hero-section">
      {/* Slides */}
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id || index}
            className={`hero-slide ${
              index === currentSlide ? 'active' : 'inactive'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="hero-overlay"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            {getLocalizedField(slides[currentSlide], 'title', lang)}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 animate-fade-in">
            {getLocalizedField(slides[currentSlide], 'subtitle', lang)}
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <button className="btn-primary text-lg px-8 py-4">
              <i className="bi bi-play-circle mr-2"></i>
              Festival Haqqında
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              <i className="bi bi-calendar-event mr-2"></i>
              Proqram
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full flex items-center justify-center text-white transition-all duration-300"
            aria-label="Previous slide"
          >
            <i className="bi bi-chevron-left text-xl"></i>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full flex items-center justify-center text-white transition-all duration-300"
            aria-label="Next slide"
          >
            <i className="bi bi-chevron-right text-xl"></i>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2">Scroll Down</span>
          <i className="bi bi-chevron-down text-2xl"></i>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;