import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PartnerSlider = ({ partners = [], slidesToShow = 3, autoPlay = true, interval = 3000 }) => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Calculate total slides needed
  const totalSlides = Math.ceil(partners.length / slidesToShow);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || totalSlides <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  // Get partners for current slide
  const getCurrentSlidePartners = () => {
    const startIndex = currentSlide * slidesToShow;
    const endIndex = startIndex + slidesToShow;
    return partners.slice(startIndex, endIndex);
  };

  if (!partners || partners.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">{t('partners.noPartners')}</p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Partners Grid */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {partners
                  .slice(slideIndex * slidesToShow, (slideIndex + 1) * slidesToShow)
                  .map((partner) => (
                    <div
                      key={partner.id}
                      className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="mb-4">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="partner-logo"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">
                        {partner.name}
                      </h3>
                      <p className="text-sm text-gray-600 text-center mb-4">
                        {partner.description_az}
                      </p>
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-festival-green-600 hover:text-festival-green-700 font-medium transition-colors duration-300"
                      >
                        <i className="bi bi-globe mr-1"></i>
                        Website
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {totalSlides > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center text-festival-green-600 hover:text-festival-green-700 transition-all duration-300"
            aria-label="Previous partners"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center text-festival-green-600 hover:text-festival-green-700 transition-all duration-300"
            aria-label="Next partners"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-festival-green-600'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* View All Button */}
      <div className="text-center mt-8">
        <Link
          to={`/${lang}/partners`}
          className="btn-outline"
        >
          {t('common.viewAll')}
          <i className="bi bi-arrow-right ml-2"></i>
        </Link>
      </div>
    </div>
  );
};

export default PartnerSlider;