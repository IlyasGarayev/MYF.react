import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ImageSlider from '../components/ImageSlider';
import SectionBlock from '../components/SectionBlock';
import NewsCard from '../components/NewsCard';
import PartnerSlider from '../components/PartnerSlider';
import { fetchHomepageData, getLocalizedField } from '../data/mockData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Home = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const [homepageData, setHomepageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newsRef, isNewsVisible] = useScrollAnimation();
  const [partnersRef, isPartnersVisible] = useScrollAnimation();

  useEffect(() => {
    const loadHomepageData = async () => {
      try {
        setLoading(true);
        const data = await fetchHomepageData(lang);
        setHomepageData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadHomepageData();
  }, [lang]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="error-message">
          <p>{t('common.error')}: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16"> {/* Account for fixed header */}
      {/* Hero Section */}
      <ImageSlider 
        slides={homepageData?.heroSlides || []} 
        autoPlay={true}
        interval={5000}
      />

      {/* About Festival Section */}
      <SectionBlock
        title={t('home.aboutSection.title')}
        description={t('home.aboutSection.description')}
        image="/images/placeholder-image.svg"
        buttonText={t('common.readMore')}
        buttonLink={`/${lang}/about`}
        imagePosition="left"
        backgroundClass="section-green-1"
      />

      {/* Öz Yurdunu Qur Section */}
      <SectionBlock
        title={t('home.ozYurdunuQurSection.title')}
        description={t('home.ozYurdunuQurSection.description')}
        image="/images/placeholder-image.svg"
        buttonText={t('nav.ozYurdunuQur')}
        buttonLink={`/${lang}/oz-yurdunu-qur`}
        imagePosition="right"
        backgroundClass="section-green-2 camping-theme"
        pattern={true}
      />

      {/* Könüllü Ol Section */}
      <SectionBlock
        title={t('home.volunteerSection.title')}
        description={t('home.volunteerSection.description')}
        image="/images/placeholder-image.svg"
        buttonText={t('home.volunteerSection.title')}
        buttonLink="https://konullu.myf.az"
        externalLink={true}
        imagePosition="left"
        backgroundClass="section-green-3"
      />

      {/* Latest News Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div 
            ref={newsRef}
            className={`text-center mb-12 ${
              isNewsVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <h2 className="heading-secondary text-festival-green-800 mb-4">
              {t('home.latestNews')}
            </h2>
            <div className="w-24 h-1 bg-festival-green-600 mx-auto"></div>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
            isNewsVisible ? 'animate-fade-in' : 'opacity-0'
          }`}>
            {homepageData?.latestNews?.map((news, index) => (
              <NewsCard 
                key={news.id} 
                news={news} 
                featured={index === 0}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={`/${lang}/news`}
              className="btn-outline"
            >
              {t('common.viewAll')}
              <i className="bi bi-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div 
            ref={partnersRef}
            className={`text-center mb-12 ${
              isPartnersVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <h2 className="heading-secondary text-festival-green-800 mb-4">
              {t('home.partners')}
            </h2>
            <div className="w-24 h-1 bg-festival-green-600 mx-auto"></div>
          </div>

          <div className={`${
            isPartnersVisible ? 'animate-fade-in' : 'opacity-0'
          }`}>
            <PartnerSlider 
              partners={homepageData?.partners || []}
              slidesToShow={3}
              autoPlay={true}
              interval={4000}
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-festival-green-600 text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Festivalda iştirak etmək istəyirsiniz?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            2024-cü ildə keçiriləcək Milli Yaylaq Festivalında iştirak edin və unudulmaz xatirələr yaşayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`/${lang}/oz-yurdunu-qur`}
              className="btn-secondary"
            >
              <i className="bi bi-tent mr-2"></i>
              Öz Yurdunu Qur
            </a>
            <a
              href="https://konullu.myf.az"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-white text-white hover:bg-white hover:text-festival-green-600"
            >
              <i className="bi bi-people mr-2"></i>
              Könüllü Ol
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;