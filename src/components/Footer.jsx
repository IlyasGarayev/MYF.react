import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  const quickLinks = [
    { key: 'home', path: '' },
    { key: 'about', path: '/about' },
    { key: 'program', path: '/program' },
    { key: 'news', path: '/news' },
    { key: 'partners', path: '/partners' },
    { key: 'contact', path: '/contact' }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: 'bi-facebook',
      url: 'https://facebook.com/myf.az'
    },
    {
      name: 'Instagram',
      icon: 'bi-instagram',
      url: 'https://instagram.com/myf.az'
    },
    {
      name: 'Twitter',
      icon: 'bi-twitter',
      url: 'https://twitter.com/myf_az'
    },
    {
      name: 'YouTube',
      icon: 'bi-youtube',
      url: 'https://youtube.com/myf.az'
    }
  ];

  return (
    <footer className="bg-festival-green-900 text-white">
      <div className="container-custom">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Festival Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-festival-green-600 font-bold">MYF</span>
                </div>
                <h3 className="text-xl font-bold">Milli Yaylaq Festivalı</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {t('footer.description')}
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <i className="bi bi-geo-alt-fill text-festival-green-400"></i>
                  <span>Bakı şəhəri, Yasamal rayonu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="bi bi-telephone-fill text-festival-green-400"></i>
                  <span>+994 12 555 55 55</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="bi bi-envelope-fill text-festival-green-400"></i>
                  <span>info@myf.az</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.key}>
                    <Link
                      to={`/${lang}${link.path}`}
                      className="text-gray-300 hover:text-festival-green-400 transition-colors duration-300"
                    >
                      {t(`nav.${link.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.followUs')}</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-festival-green-800 rounded-full flex items-center justify-center hover:bg-festival-green-700 transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <i className={`${social.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
              
              {/* Newsletter Signup */}
              <div className="mt-6">
                <h5 className="text-md font-medium mb-2">Newsletter</h5>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Email"
                    className="flex-1 px-3 py-2 bg-festival-green-800 border border-festival-green-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-festival-green-500 text-white placeholder-gray-400"
                  />
                  <button className="px-4 py-2 bg-festival-green-600 hover:bg-festival-green-700 rounded-r-md transition-colors duration-300">
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-festival-green-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Milli Yaylaq Festivalı. {t('footer.rights')}.
              </div>
              <div className="flex space-x-6 text-sm text-gray-400">
                <Link 
                  to={`/${lang}/privacy`} 
                  className="hover:text-festival-green-400 transition-colors duration-300"
                >
                  Məxfilik Siyasəti
                </Link>
                <Link 
                  to={`/${lang}/terms`} 
                  className="hover:text-festival-green-400 transition-colors duration-300"
                >
                  İstifadə Şərtləri
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;