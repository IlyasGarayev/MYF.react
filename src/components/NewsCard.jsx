import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getLocalizedField, getLocalizedSlug } from '../data/mockData';
import { formatDate, formatNumber, truncateText } from '../utils/helpers';

const NewsCard = ({ news, featured = false }) => {
  const { lang } = useParams();

  const title = getLocalizedField(news, 'title', lang);
  const content = getLocalizedField(news, 'content', lang);
  const slug = getLocalizedSlug(news, lang);

  return (
    <article className={`news-card ${featured ? 'lg:col-span-2' : ''}`}>
      <div className="relative overflow-hidden">
        <img
          src={news.image}
          alt={title}
          className={`w-full object-cover transition-transform duration-300 ${
            featured ? 'h-64 md:h-80' : 'h-48 md:h-56'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black from-opacity-30 to-transparent"></div>
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4 bg-festival-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            <i className="bi bi-star-fill mr-1"></i>
            Featured
          </div>
        )}
      </div>

      <div className="p-6">
        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <i className="bi bi-calendar3 mr-1"></i>
              {formatDate(news.publishedAt, lang)}
            </span>
            <span className="flex items-center">
              <i className="bi bi-eye mr-1"></i>
              {formatNumber(news.views, lang)}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className={`font-semibold text-gray-900 mb-3 hover:text-festival-green-600 transition-colors duration-300 ${
          featured ? 'text-xl md:text-2xl' : 'text-lg'
        }`}>
          <Link to={`/${lang}/news/${slug}`}>
            {title}
          </Link>
        </h3>

        {/* Content Preview */}
        <p className="text-gray-600 mb-4 leading-relaxed">
          {truncateText(content, featured ? 200 : 120)}
        </p>

        {/* Read More Link */}
        <Link
          to={`/${lang}/news/${slug}`}
          className="inline-flex items-center text-festival-green-600 hover:text-festival-green-700 font-medium transition-colors duration-300"
        >
          Daha çox oxu
          <i className="bi bi-arrow-right ml-1"></i>
        </Link>
      </div>
    </article>
  );
};

export default NewsCard;