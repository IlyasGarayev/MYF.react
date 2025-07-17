import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { useNavbarScroll } from '../hooks/useScrollAnimation';

const Header = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled } = useNavbarScroll(100);
  
  // Check if we're on the home page
  const isHomePage = location.pathname === `/${lang}` || location.pathname === `/${lang}/`;
  
  // Update language when URL changes
  useEffect(() => {
    if (lang && ['az', 'en', 'ru'].includes(lang)) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  const navItems = [
    { key: 'home', path: '' },
    { key: 'about', path: '/about' },
    { key: 'program', path: '/program' },
    { key: 'news', path: '/news' },
    { key: 'partners', path: '/partners' },
    { key: 'sponsorship', path: '/sponsorship' },
    { key: 'pastFestivals', path: '/past-festivals' },
    { key: 'gallery', path: '/gallery' },
    { key: 'ozYurdunuQur', path: '/oz-yurdunu-qur' },
    { key: 'contact', path: '/contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Determine navbar classes based on scroll state and page
  const getNavbarClasses = () => {
    let classes = 'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ';
    
    if (isHomePage && !isScrolled) {
      // Transparent on home page when not scrolled
      classes += 'navbar-transparent text-white';
    } else {
      // Solid background when scrolled or on other pages
      classes += 'navbar-solid text-white';
    }
    
    return classes;
  };

  return (
    <header className={getNavbarClasses()}>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Link 
            to={`/${lang}`} 
            className="flex items-center space-x-2 text-xl font-bold hover:text-festival-green-200 transition-colors duration-300"
            onClick={closeMenu}
          >
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-festival-green-600 font-bold text-sm">MYF</span>
            </div>
            <span className="hidden sm:block">Milli Yaylaq Festivalı</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={`/${lang}${item.path}`}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white hover:bg-opacity-20 transition-all duration-300"
                onClick={closeMenu}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md hover:bg-white hover:bg-opacity-20 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-festival-green-800 bg-opacity-95 backdrop-blur-sm rounded-lg mx-4 mb-4">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={`/${lang}${item.path}`}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white hover:bg-opacity-20 transition-all duration-300"
                  onClick={closeMenu}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;