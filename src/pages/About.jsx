import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fetchAboutFestival, getLocalizedField } from '../data/mockData';
import { useScrollAnimation, useScrollCounter } from '../hooks/useScrollAnimation';
import { formatNumber } from '../utils/helpers';

const About = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [contentRef, isContentVisible] = useScrollAnimation();
  const [statsRef, isStatsVisible] = useScrollAnimation();

  // Counter animations for statistics
  const [yearsRef, yearsCount] = useScrollCounter(aboutData?.stats?.yearsRunning || 0);
  const [attendeesRef, attendeesCount] = useScrollCounter(aboutData?.stats?.totalAttendees || 0);
  const [partnersRef, partnersCount] = useScrollCounter(aboutData?.stats?.partnersCount || 0);
  const [activitiesRef, activitiesCount] = useScrollCounter(aboutData?.stats?.activitiesCount || 0);

  useEffect(() => {
    const loadAboutData = async () => {
      try {
        setLoading(true);
        const data = await fetchAboutFestival(lang);
        setAboutData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadAboutData();
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
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-festival-green-600 to-nature-green-600 text-white section-padding">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="heading-primary text-white mb-6">
              {getLocalizedField(aboutData, 'title', lang)}
            </h1>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src={aboutData.image}
                alt={getLocalizedField(aboutData, 'title', lang)}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black from-opacity-20 to-transparent rounded-lg"></div>
            </div>

            {/* Content */}
            <div 
              ref={contentRef}
              className={`${isContentVisible ? 'animate-fade-in' : 'opacity-0'}`}
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-readable text-lg leading-relaxed">
                  {getLocalizedField(aboutData, 'content', lang)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-festival-green-50 section-padding">
        <div className="container-custom">
          <div 
            ref={statsRef}
            className={`text-center mb-12 ${
              isStatsVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <h2 className="heading-secondary text-festival-green-800 mb-4">
              Festival Statistikası
            </h2>
            <div className="w-24 h-1 bg-festival-green-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Years Running */}
            <div className="text-center">
              <div 
                ref={yearsRef}
                className="text-4xl md:text-5xl font-bold text-festival-green-600 mb-2"
              >
                {formatNumber(yearsCount, lang)}
              </div>
              <p className="text-gray-600 font-medium">İl Keçirilir</p>
            </div>

            {/* Total Attendees */}
            <div className="text-center">
              <div 
                ref={attendeesRef}
                className="text-4xl md:text-5xl font-bold text-festival-green-600 mb-2"
              >
                {formatNumber(attendeesCount, lang)}+
              </div>
              <p className="text-gray-600 font-medium">Ümumi İştirakçı</p>
            </div>

            {/* Partners */}
            <div className="text-center">
              <div 
                ref={partnersRef}
                className="text-4xl md:text-5xl font-bold text-festival-green-600 mb-2"
              >
                {formatNumber(partnersCount, lang)}+
              </div>
              <p className="text-gray-600 font-medium">Tərəfdaş</p>
            </div>

            {/* Activities */}
            <div className="text-center">
              <div 
                ref={activitiesRef}
                className="text-4xl md:text-5xl font-bold text-festival-green-600 mb-2"
              >
                {formatNumber(activitiesCount, lang)}+
              </div>
              <p className="text-gray-600 font-medium">Fəaliyyət</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="text-center">
              <div className="w-16 h-16 bg-festival-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-bullseye text-2xl text-festival-green-600"></i>
              </div>
              <h3 className="heading-tertiary text-festival-green-700 mb-4">
                Missiyamız
              </h3>
              <p className="text-readable leading-relaxed">
                Azərbaycan milli mədəniyyətini, adət-ənənələrini və tarixi dəyərlərini qoruyub saxlamaq, 
                gənclərin milli kimlik şüurunu artırmaq və mədəni irsi gələcək nəsillərə ötürmək.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <div className="w-16 h-16 bg-festival-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-eye text-2xl text-festival-green-600"></i>
              </div>
              <h3 className="heading-tertiary text-festival-green-700 mb-4">
                Vizyonumuz
              </h3>
              <p className="text-readable leading-relaxed">
                Azərbaycanın ən böyük və ən prestijli milli festivalı olmaq, beynəlxalq səviyyədə 
                tanınmaq və mədəni turizmin inkişafına töhfə vermək.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-festival-green-600 text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Festivalımızda iştirak edin
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Milli Yaylaq Festivalında iştirak edərək Azərbaycan mədəniyyətinin zənginliyini yaşayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`/${lang}/program`}
              className="btn-secondary"
            >
              <i className="bi bi-calendar-event mr-2"></i>
              Festival Proqramı
            </a>
            <a
              href={`/${lang}/oz-yurdunu-qur`}
              className="btn-outline border-white text-white hover:bg-white hover:text-festival-green-600"
            >
              <i className="bi bi-tent mr-2"></i>
              Öz Yurdunu Qur
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;