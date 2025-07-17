# Milli Yaylaq Festivalı - Frontend Application

A complete React.js Single Page Application (SPA) for the "Milli Yaylaq Festivalı" (National Highland Festival) website featuring multi-language support, responsive design, and modern UI components.

## 🌟 Features

- **Multi-language Support**: Azerbaijani (az), English (en), Russian (ru)
- **Responsive Design**: Fully responsive using Tailwind CSS and Bootstrap
- **Green Theme**: Custom green color palette with excellent readability
- **Single Page Application**: React Router DOM for client-side routing
- **Mock Data**: Complete mock API with simulated backend responses
- **Scroll Animations**: Smooth scroll-based animations using Intersection Observer
- **Modern UI Components**: Reusable components with consistent design
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Technology Stack

- **React.js 18.2.0** - Frontend framework
- **React Router DOM 6.3.0** - Client-side routing
- **Tailwind CSS 3.1.8** - Utility-first CSS framework
- **Bootstrap 5.3.0** - Component library for complex UI elements
- **react-i18next 11.18.6** - Internationalization
- **react-intersection-observer 9.4.0** - Scroll animations

## 📁 Project Structure

```
myf-festival-frontend/
├── public/
│   ├── locales/
│   │   ├── az.json                 # Azerbaijani translations
│   │   ├── en.json                 # English translations
│   │   └── ru.json                 # Russian translations
│   ├── images/
│   │   └── placeholder-image.svg   # Demo placeholder image
│   └── index.html                  # Main HTML file
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Dynamic header with language switcher
│   │   ├── Footer.jsx              # Footer with links and social media
│   │   ├── LanguageSwitcher.jsx    # Language dropdown component
│   │   ├── ImageSlider.jsx         # Full-screen hero image slider
│   │   ├── SectionBlock.jsx        # Reusable section component
│   │   ├── NewsCard.jsx            # News article card component
│   │   ├── Pagination.jsx          # Pagination component
│   │   └── PartnerSlider.jsx       # Partner logos slider
│   ├── pages/
│   │   ├── Home.jsx                # Homepage with hero and sections
│   │   ├── About.jsx               # About festival page
│   │   ├── Program.jsx             # Festival program page
│   │   ├── NewsList.jsx            # News listing page
│   │   ├── NewsDetail.jsx          # Single news article page
│   │   ├── Partners.jsx            # Partners page
│   │   ├── Sponsorship.jsx         # Sponsorship information
│   │   ├── PastFestivals.jsx       # Past festivals showcase
│   │   ├── GallerySections.jsx     # Gallery sections listing
│   │   ├── GalleryMedia.jsx        # Gallery media viewer
│   │   ├── OzYurdunuQur.jsx        # Camping application form
│   │   └── Contact.jsx             # Contact information
│   ├── data/
│   │   └── mockData.js             # Complete mock API data
│   ├── hooks/
│   │   └── useScrollAnimation.js   # Custom scroll animation hooks
│   ├── styles/
│   │   └── index.css               # Main CSS with Tailwind imports
│   ├── utils/
│   │   └── helpers.js              # Utility functions
│   ├── App.js                      # Main app component with routing
│   ├── index.js                    # React DOM entry point
│   └── i18n.js                     # Internationalization configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
├── package.json                    # Dependencies and scripts
└── README.md                       # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd myf-festival-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)

## 🎨 Design System

### Color Palette

The application uses a custom green color palette:

- **Festival Green**: Primary brand colors (#22c55e, #16a34a, #15803d)
- **Nature Green**: Secondary nature colors (#84cc16, #65a30d, #4d7c0f)
- **Forest Green**: Accent colors for variety (#0ea5e9, #0284c7, #0369a1)

### Typography

- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights (600-700) with proper hierarchy
- **Body Text**: Regular weight (400) with 1.7 line height for readability

### Components

All components follow consistent design patterns:

- **Buttons**: Primary, secondary, and outline variants
- **Cards**: Consistent shadow and hover effects
- **Forms**: Styled inputs with focus states
- **Navigation**: Responsive with mobile-first approach

## 🌐 Multi-Language Support

### URL Structure

- `myf.az/az` - Azerbaijani (default)
- `myf.az/en` - English
- `myf.az/ru` - Russian

### Adding New Languages

1. Create translation file in `public/locales/`
2. Add language to `src/i18n.js`
3. Update `LanguageSwitcher.jsx` component
4. Add language-specific slugs to mock data

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Key Responsive Features

- Mobile-first navigation with hamburger menu
- Responsive grid layouts
- Touch-friendly buttons and interactions
- Optimized image sizes for different screens

## 🔧 Mock Data System

The application uses a comprehensive mock data system simulating real API responses:

### Features

- **Simulated API Delays**: Realistic loading states
- **Multi-language Content**: All data includes translations
- **Pagination Support**: For news and gallery sections
- **Error Handling**: Simulated error states
- **Form Submissions**: Mock form processing

### Data Structure

All mock data includes multi-language fields:
```javascript
{
  title_az: "Azərbaycan dili",
  title_en: "English title",
  title_ru: "Русский заголовок",
  slug_az: "azerbaycan-slug",
  slug_en: "english-slug",
  slug_ru: "russkiy-slug"
}
```

## 📄 Pages Overview

### 1. Home Page (`/`)
- Full-screen hero slider
- Festival about section
- "Öz Yurdunu Qur" camping section
- Volunteer section
- Latest news grid
- Partner logos slider
- Call-to-action sections

### 2. About Festival (`/about`)
- Hero section with festival image
- Detailed festival description
- Animated statistics counters
- Mission and vision sections
- Call-to-action

### 3. Festival Program (`/program`)
- Day-based program filtering
- Event timeline display
- Location and description details
- Responsive table layout

### 4. News (`/news`)
- News listing with pagination
- Featured news highlighting
- Search and filter functionality
- Individual news detail pages

### 5. Partners (`/partners`)
- Partner logos grid
- Category filtering
- Partner information display
- External website links

### 6. Sponsorship (`/sponsorship`)
- Sponsorship information
- Contact details
- Partnership benefits
- Application process

### 7. Past Festivals (`/past-festivals`)
- Previous festival showcases
- Image galleries
- Attendance statistics
- Historical information

### 8. Gallery (`/gallery`)
- Section-based organization
- Photo and video support
- Lightbox modal viewer
- Pagination for large galleries

### 9. Öz Yurdunu Qur (`/oz-yurdunu-qur`)
- Camping application form
- File upload functionality
- Camping-themed design
- Form validation and submission

### 10. Contact (`/contact`)
- Contact information display
- Location details
- Social media links
- Contact form

## 🎯 Key Features Implementation

### 1. Hero Section
- Full viewport height (100vh)
- Auto-playing image slider
- Smooth transitions
- Responsive text sizing
- Call-to-action buttons

### 2. Dynamic Header
- Transparent on homepage
- Solid background on scroll
- Language switcher
- Mobile-responsive menu
- Smooth transitions

### 3. Scroll Animations
- Intersection Observer API
- Fade-in animations
- Staggered animations
- Counter animations
- Parallax effects

### 4. Form Handling
- Input validation
- File upload support
- Success/error states
- Loading indicators
- Accessibility features

## 🔍 SEO Considerations

- Semantic HTML structure
- Proper heading hierarchy
- Meta tags optimization
- Alt text for images
- ARIA labels for accessibility
- Clean URL structure

## 📊 Performance Optimizations

- Lazy loading for images
- Code splitting with React Router
- Optimized bundle size
- Efficient re-renders
- Smooth animations with CSS transforms

## 🛡️ Accessibility Features

- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- High contrast ratios
- Touch-friendly interactions

## 🧪 Testing Considerations

- Component unit tests
- Integration tests
- Responsive design testing
- Cross-browser compatibility
- Performance testing
- Accessibility testing

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deployment Options

- **Netlify**: Direct GitHub integration
- **Vercel**: Optimized for React apps
- **AWS S3**: Static website hosting
- **GitHub Pages**: Free hosting option

### Environment Variables

Create `.env` file for environment-specific configurations:

```env
REACT_APP_API_URL=https://api.myf.az
REACT_APP_SITE_URL=https://myf.az
```

## 📝 Development Guidelines

### Code Style

- Use functional components with hooks
- Follow React best practices
- Consistent naming conventions
- Component composition over inheritance
- Proper error boundaries

### Git Workflow

- Feature branches for new development
- Descriptive commit messages
- Pull request reviews
- Automated testing on CI/CD

### Performance Guidelines

- Minimize bundle size
- Optimize images
- Use React.memo for expensive components
- Implement proper loading states
- Monitor Core Web Vitals

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For questions or support, please contact:
- Email: info@myf.az
- Phone: +994 12 555 55 55

---

**Note**: This is a complete frontend application with mock data. For production use, replace the mock data system with actual API endpoints and implement proper backend integration.
