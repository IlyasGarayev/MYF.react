import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Program from './pages/Program';
import NewsList from './pages/NewsList';
import NewsDetail from './pages/NewsDetail';
import Partners from './pages/Partners';
import Sponsorship from './pages/Sponsorship';
import PastFestivals from './pages/PastFestivals';
import GallerySections from './pages/GallerySections';
import GalleryMedia from './pages/GalleryMedia';
import OzYurdunuQur from './pages/OzYurdunuQur';
import Contact from './pages/Contact';

function App() {
  const { i18n } = useTranslation();

  // Language route wrapper component
  const LanguageWrapper = ({ children }) => {
    return (
      <div className="App">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </div>
    );
  };

  return (
    <Router>
      <Routes>
        {/* Redirect root to default language */}
        <Route path="/" element={<Navigate to="/az" replace />} />
        
        {/* Language-specific routes */}
        <Route path="/:lang" element={<LanguageWrapper><Home /></LanguageWrapper>} />
        <Route path="/:lang/about" element={<LanguageWrapper><About /></LanguageWrapper>} />
        <Route path="/:lang/program" element={<LanguageWrapper><Program /></LanguageWrapper>} />
        <Route path="/:lang/news" element={<LanguageWrapper><NewsList /></LanguageWrapper>} />
        <Route path="/:lang/news/:slug" element={<LanguageWrapper><NewsDetail /></LanguageWrapper>} />
        <Route path="/:lang/partners" element={<LanguageWrapper><Partners /></LanguageWrapper>} />
        <Route path="/:lang/sponsorship" element={<LanguageWrapper><Sponsorship /></LanguageWrapper>} />
        <Route path="/:lang/past-festivals" element={<LanguageWrapper><PastFestivals /></LanguageWrapper>} />
        <Route path="/:lang/gallery" element={<LanguageWrapper><GallerySections /></LanguageWrapper>} />
        <Route path="/:lang/gallery/:sectionId" element={<LanguageWrapper><GalleryMedia /></LanguageWrapper>} />
        <Route path="/:lang/oz-yurdunu-qur" element={<LanguageWrapper><OzYurdunuQur /></LanguageWrapper>} />
        <Route path="/:lang/contact" element={<LanguageWrapper><Contact /></LanguageWrapper>} />
        
        {/* Catch all route - redirect to default language */}
        <Route path="*" element={<Navigate to="/az" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
