import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SectionBlock = ({ 
  title, 
  description, 
  image, 
  buttonText, 
  buttonLink, 
  externalLink = false,
  imagePosition = 'left', 
  backgroundClass = 'section-green-1',
  pattern = false
}) => {
  const { lang } = useParams();
  const [ref, isVisible] = useScrollAnimation();

  const isImageLeft = imagePosition === 'left';

  return (
    <section className={`${backgroundClass} ${pattern ? 'camping-pattern' : ''}`}>
      <div className="container-custom section-padding">
        <div 
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          {/* Image */}
          <div className={`${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={image}
                alt={title}
                className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black from-opacity-20 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className={`${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="max-w-lg">
              <h2 className="heading-secondary text-festival-green-800 mb-6">
                {title}
              </h2>
              <p className="text-readable text-lg mb-8 leading-relaxed">
                {description}
              </p>
              
              {buttonText && buttonLink && (
                <div>
                  {externalLink ? (
                    <a
                      href={buttonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center"
                    >
                      {buttonText}
                      <i className="bi bi-arrow-up-right ml-2"></i>
                    </a>
                  ) : (
                    <Link
                      to={buttonLink}
                      className="btn-primary inline-flex items-center"
                    >
                      {buttonText}
                      <i className="bi bi-arrow-right ml-2"></i>
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBlock;