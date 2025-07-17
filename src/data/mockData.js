// Mock data for the festival website
// All data includes multi-lingual content (az, en, ru)

const placeholderImage = '/images/placeholder-image.svg';

// Helper function to simulate API delay
const simulateApiDelay = (ms = 300) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Mock News Data
const newsData = [
  {
    id: 1,
    title_az: "Festival 2024 Tarixləri Açıqlandı",
    title_en: "Festival 2024 Dates Announced",
    title_ru: "Объявлены даты фестиваля 2024",
    slug_az: "festival-2024-tarixleri-aciqlandı",
    slug_en: "festival-2024-dates-announced",
    slug_ru: "obyavleny-daty-festivalya-2024",
    content_az: "Milli Yaylaq Festivalı 2024-cü ildə iyulun 15-17 tarixlərində keçiriləcək. Bu il daha da böyük və maraqlı proqramla qarşınızdayıq. Festival zamanı müxtəlif konsertlər, sərgilər və mədəni tədbirlər təşkil ediləcək. Biletlər tezliklə satışa çıxacaq.",
    content_en: "The National Highland Festival will take place on July 15-17, 2024. This year we are presenting an even bigger and more interesting program. Various concerts, exhibitions and cultural events will be organized during the festival. Tickets will be on sale soon.",
    content_ru: "Национальный Горный Фестиваль пройдет 15-17 июля 2024 года. В этом году мы представляем еще более масштабную и интересную программу. Во время фестиваля будут организованы различные концерты, выставки и культурные мероприятия. Билеты скоро поступят в продажу.",
    image: placeholderImage,
    publishedAt: "2024-01-15T10:00:00Z",
    views: 1250,
    featured: true
  },
  {
    id: 2,
    title_az: "Yeni Tərəfdaşlar Festivalımıza Qoşuldu",
    title_en: "New Partners Joined Our Festival",
    title_ru: "Новые партнеры присоединились к нашему фестивалю",
    slug_az: "yeni-terəfdaşlar-festivalımıza-qoşuldu",
    slug_en: "new-partners-joined-our-festival",
    slug_ru: "novye-partnery-prisoedinitlls-k-nashemu-festivalu",
    content_az: "Bu il festivalımıza yeni tərəfdaşlar qoşulub. Onlar festivala dəstək verəcək və ziyarətçilər üçün xüsusi endirimlər təqdim edəcəklər. Tərəfdaşlarımızın tam siyahısını veb saytımızda görə bilərsiniz.",
    content_en: "New partners have joined our festival this year. They will support the festival and offer special discounts for visitors. You can see the full list of our partners on our website.",
    content_ru: "В этом году к нашему фестивалю присоединились новые партнеры. Они будут поддерживать фестиваль и предлагать специальные скидки для посетителей. Полный список наших партнеров можно увидеть на нашем сайте.",
    image: placeholderImage,
    publishedAt: "2024-01-10T14:30:00Z",
    views: 890,
    featured: false
  },
  {
    id: 3,
    title_az: "Könüllü Qeydiyyatı Başladı",
    title_en: "Volunteer Registration Started",
    title_ru: "Началась регистрация волонтеров",
    slug_az: "könüllü-qeydiyyatı-başladı",
    slug_en: "volunteer-registration-started",
    slug_ru: "nachalas-registratsiya-volonterov",
    content_az: "Festival üçün könüllü qeydiyyatı başlayıb. Könüllü olmaq istəyənlər konullu.myf.az saytından qeydiyyatdan keçə bilərlər. Könüllülər festival zamanı müxtəlif sahələrdə kömək edəcəklər.",
    content_en: "Volunteer registration for the festival has started. Those who want to volunteer can register at konullu.myf.az. Volunteers will help in various areas during the festival.",
    content_ru: "Началась регистрация волонтеров для фестиваля. Желающие стать волонтерами могут зарегистрироваться на сайте konullu.myf.az. Волонтеры будут помогать в различных областях во время фестиваля.",
    image: placeholderImage,
    publishedAt: "2024-01-05T09:15:00Z",
    views: 1100,
    featured: true
  },
  {
    id: 4,
    title_az: "Çadır Sahəsi Genişləndirildi",
    title_en: "Camping Area Expanded",
    title_ru: "Расширена зона кемпинга",
    slug_az: "çadır-sahəsi-genişləndirildi",
    slug_en: "camping-area-expanded",
    slug_ru: "rasshirena-zona-kempinga",
    content_az: "Bu il çadır sahəsi genişləndirildi və daha çox insanın öz çadırları ilə festivalda qala biləcəyi. Çadır sahəsi üçün qeydiyyat tezliklə başlayacaq.",
    content_en: "This year the camping area has been expanded and more people will be able to stay at the festival with their own tents. Registration for the camping area will start soon.",
    content_ru: "В этом году зона кемпинга была расширена, и больше людей смогут остаться на фестивале со своими палатками. Регистрация для зоны кемпинга скоро начнется.",
    image: placeholderImage,
    publishedAt: "2024-01-02T16:45:00Z",
    views: 750,
    featured: false
  }
];

// Mock Festival Program Data
const programData = [
  {
    id: 1,
    day: 1,
    date: "2024-07-15",
    events: [
      {
        id: 1,
        startTime: "10:00",
        endTime: "11:00",
        title_az: "Festival Açılışı",
        title_en: "Festival Opening",
        title_ru: "Открытие фестиваля",
        location_az: "Əsas Səhnə",
        location_en: "Main Stage",
        location_ru: "Главная сцена",
        description_az: "Festivalın rəsmi açılış mərasimi",
        description_en: "Official opening ceremony of the festival",
        description_ru: "Официальная церемония открытия фестиваля"
      },
      {
        id: 2,
        startTime: "11:30",
        endTime: "12:30",
        title_az: "Milli Rəqslər Nümayişi",
        title_en: "National Dances Performance",
        title_ru: "Выступление национальных танцев",
        location_az: "Əsas Səhnə",
        location_en: "Main Stage",
        location_ru: "Главная сцена",
        description_az: "Azərbaycan milli rəqslərinin nümayişi",
        description_en: "Performance of Azerbaijani national dances",
        description_ru: "Выступление азербайджанских национальных танцев"
      }
    ]
  },
  {
    id: 2,
    day: 2,
    date: "2024-07-16",
    events: [
      {
        id: 3,
        startTime: "09:00",
        endTime: "10:00",
        title_az: "Səhər İdmanı",
        title_en: "Morning Exercise",
        title_ru: "Утренняя зарядка",
        location_az: "İdman Sahəsi",
        location_en: "Sports Area",
        location_ru: "Спортивная зона",
        description_az: "Bütün iştirakçılar üçün səhər idmanı",
        description_en: "Morning exercise for all participants",
        description_ru: "Утренняя зарядка для всех участников"
      }
    ]
  },
  {
    id: 3,
    day: 3,
    date: "2024-07-17",
    events: [
      {
        id: 4,
        startTime: "18:00",
        endTime: "20:00",
        title_az: "Festival Bağlanışı",
        title_en: "Festival Closing",
        title_ru: "Закрытие фестиваля",
        location_az: "Əsas Səhnə",
        location_en: "Main Stage",
        location_ru: "Главная сцена",
        description_az: "Festivalın bağlanış mərasimi",
        description_en: "Festival closing ceremony",
        description_ru: "Церемония закрытия фестиваля"
      }
    ]
  }
];

// Mock Partners Data
const partnersData = [
  {
    id: 1,
    name: "Azərbaycan Turizm Şirkəti",
    logo: placeholderImage,
    website: "https://example.com",
    category: "tourism",
    description_az: "Turizm sahəsində lider şirkət",
    description_en: "Leading company in tourism sector",
    description_ru: "Ведущая компания в сфере туризма"
  },
  {
    id: 2,
    name: "Milli Bank",
    logo: placeholderImage,
    website: "https://example.com",
    category: "finance",
    description_az: "Maliyyə xidmətləri təqdim edən bank",
    description_en: "Bank providing financial services",
    description_ru: "Банк, предоставляющий финансовые услуги"
  },
  {
    id: 3,
    name: "Təbii Məhsullar",
    logo: placeholderImage,
    website: "https://example.com",
    category: "food",
    description_az: "Təbii ərzaq məhsulları istehsalçısı",
    description_en: "Natural food products manufacturer",
    description_ru: "Производитель натуральных продуктов питания"
  }
];

// Mock Gallery Sections Data
const gallerySections = [
  {
    id: 1,
    title_az: "2023 Festival Foto",
    title_en: "2023 Festival Photos",
    title_ru: "Фото фестиваля 2023",
    description_az: "2023-cü il festivalının ən yaxşı anları",
    description_en: "Best moments from 2023 festival",
    description_ru: "Лучшие моменты фестиваля 2023 года",
    coverImage: placeholderImage,
    mediaCount: 45,
    type: "photo"
  },
  {
    id: 2,
    title_az: "2023 Festival Video",
    title_en: "2023 Festival Videos",
    title_ru: "Видео фестиваля 2023",
    description_az: "2023-cü il festivalının video çəkilişləri",
    description_en: "Video recordings from 2023 festival",
    description_ru: "Видеозаписи фестиваля 2023 года",
    coverImage: placeholderImage,
    mediaCount: 12,
    type: "video"
  }
];

// Mock Gallery Media Data
const galleryMedia = {
  1: [
    {
      id: 1,
      type: "photo",
      url: placeholderImage,
      thumbnail: placeholderImage,
      title_az: "Açılış Mərasimi",
      title_en: "Opening Ceremony",
      title_ru: "Церемония открытия",
      description_az: "Festivalın açılış mərasimi",
      description_en: "Festival opening ceremony",
      description_ru: "Церемония открытия фестиваля"
    },
    {
      id: 2,
      type: "photo",
      url: placeholderImage,
      thumbnail: placeholderImage,
      title_az: "Milli Rəqslər",
      title_en: "National Dances",
      title_ru: "Национальные танцы",
      description_az: "Milli rəqslərin nümayişi",
      description_en: "National dances performance",
      description_ru: "Выступление национальных танцев"
    }
  ],
  2: [
    {
      id: 3,
      type: "video",
      url: placeholderImage,
      thumbnail: placeholderImage,
      title_az: "Festival Highlights",
      title_en: "Festival Highlights",
      title_ru: "Основные моменты фестиваля",
      description_az: "Festivalın ən maraqlı anları",
      description_en: "Most interesting moments of the festival",
      description_ru: "Самые интересные моменты фестиваля"
    }
  ]
};

// Mock Past Festivals Data
const pastFestivalsData = [
  {
    id: 1,
    year: 2023,
    title_az: "2023 Milli Yaylaq Festivalı",
    title_en: "2023 National Highland Festival",
    title_ru: "Национальный Горный Фестиваль 2023",
    description_az: "2023-cü ildə keçirilən festival böyük uğur qazandı və minlərlə ziyarətçi qəbul etdi.",
    description_en: "The festival held in 2023 was a great success and welcomed thousands of visitors.",
    description_ru: "Фестиваль, проведенный в 2023 году, имел большой успех и принял тысячи посетителей.",
    images: [placeholderImage, placeholderImage, placeholderImage],
    attendees: 15000,
    duration: "3 gün"
  },
  {
    id: 2,
    year: 2022,
    title_az: "2022 Milli Yaylaq Festivalı",
    title_en: "2022 National Highland Festival",
    title_ru: "Национальный Горный Фестиваль 2022",
    description_az: "2022-ci ildə pandemiyanın təsiri altında kiçik miqyasda keçirilən festival.",
    description_en: "Festival held on a smaller scale in 2022 under the influence of the pandemic.",
    description_ru: "Фестиваль, проведенный в меньшем масштабе в 2022 году под влиянием пандемии.",
    images: [placeholderImage, placeholderImage, placeholderImage],
    attendees: 8000,
    duration: "2 gün"
  }
];

// Mock Contact Data
const contactData = {
  address_az: "Bakı şəhəri, Yasamal rayonu, Atatürk prospekti 89",
  address_en: "Baku city, Yasamal district, Ataturk avenue 89",
  address_ru: "город Баку, Ясамальский район, проспект Ататюрка 89",
  phone: "+994 12 555 55 55",
  email: "info@myf.az",
  socialMedia: {
    facebook: "https://facebook.com/myf.az",
    instagram: "https://instagram.com/myf.az",
    twitter: "https://twitter.com/myf_az",
    youtube: "https://youtube.com/myf.az"
  }
};

// Mock About Festival Data
const aboutFestivalData = {
  title_az: "Festival Haqqında",
  title_en: "About Festival",
  title_ru: "О Фестивале",
  content_az: "Milli Yaylaq Festivalı Azərbaycanın ən böyük və ən maraqlı milli festivalıdır. Bu festival milli mədəniyyətimizi, adət-ənənələrimizi və tariximizi qoruyub saxlamaq məqsədi ilə keçirilir. Festival zamanı zəngin mədəni proqram, konsertlər, sərgilər və müxtəlif fəaliyyətlər təşkil edilir. Festivalda iştirak edənlər Azərbaycan mədəniyyətinin zənginliyini yaşaya və unudulmaz xatirələr yarada bilərlər. Festival həmçinin gənclərin milli dəyərlərlə tanış olması və onları qoruyub saxlaması üçün mühüm platformadır.",
  content_en: "The National Highland Festival is Azerbaijan's largest and most interesting national festival. This festival is held to preserve our national culture, customs and traditions, and history. During the festival, a rich cultural program, concerts, exhibitions and various activities are organized. Festival participants can experience the richness of Azerbaijani culture and create unforgettable memories. The festival is also an important platform for young people to get acquainted with national values and preserve them.",
  content_ru: "Национальный Горный Фестиваль - это крупнейший и самый интересный национальный фестиваль Азербайджана. Этот фестиваль проводится для сохранения нашей национальной культуры, обычаев и традиций, а также истории. Во время фестиваля организуется богатая культурная программа, концерты, выставки и различные мероприятия. Участники фестиваля могут испытать богатство азербайджанской культуры и создать незабываемые воспоминания. Фестиваль также является важной платформой для молодежи, чтобы познакомиться с национальными ценностями и сохранить их.",
  image: placeholderImage,
  stats: {
    yearsRunning: 5,
    totalAttendees: 50000,
    partnersCount: 25,
    activitiesCount: 150
  }
};

// Mock Homepage Data
const homepageData = {
  heroSlides: [
    {
      id: 1,
      image: placeholderImage,
      title_az: "Milli Yaylaq Festivalı 2024",
      title_en: "National Highland Festival 2024",
      title_ru: "Национальный Горный Фестиваль 2024",
      subtitle_az: "15-17 İyul 2024",
      subtitle_en: "July 15-17, 2024",
      subtitle_ru: "15-17 июля 2024"
    },
    {
      id: 2,
      image: placeholderImage,
      title_az: "Mədəniyyəti Yaşa",
      title_en: "Live the Culture",
      title_ru: "Живи культурой",
      subtitle_az: "Azərbaycan mədəniyyətinin zənginliyini kəşf et",
      subtitle_en: "Discover the richness of Azerbaijani culture",
      subtitle_ru: "Откройте для себя богатство азербайджанской культуры"
    },
    {
      id: 3,
      image: placeholderImage,
      title_az: "Öz Yurdunu Qur",
      title_en: "Build Your Camp",
      title_ru: "Построй свой лагерь",
      subtitle_az: "Təbiətlə ünsiyyət qur və unudulmaz xatirələr yaşa",
      subtitle_en: "Connect with nature and create unforgettable memories",
      subtitle_ru: "Общайся с природой и создавай незабываемые воспоминания"
    }
  ]
};

// Mock Sponsorship Data
const sponsorshipData = {
  title_az: "Sponsorluq",
  title_en: "Sponsorship",
  title_ru: "Спонсорство",
  content_az: "Milli Yaylaq Festivalının sponsoru olmaq istəyirsinizsə, bizimlə əlaqə saxlayın. Festivalın uğurla keçirilməsi üçün sizin dəstəyinizə ehtiyacımız var. Sponsor kimi müxtəlif imkanlar və üstünlüklərdən yararlanacaqsınız.",
  content_en: "If you want to become a sponsor of the National Highland Festival, please contact us. We need your support for the successful organization of the festival. As a sponsor, you will benefit from various opportunities and advantages.",
  content_ru: "Если вы хотите стать спонсором Национального Горного Фестиваля, пожалуйста, свяжитесь с нами. Нам нужна ваша поддержка для успешной организации фестиваля. Как спонсор, вы получите различные возможности и преимущества.",
  contactNumber: "+994 12 555 55 55",
  email: "sponsor@myf.az"
};

// API Simulation Functions
export const fetchNews = async (lang = 'az', page = 1, pageSize = 15) => {
  await simulateApiDelay();
  
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedNews = newsData.slice(startIndex, endIndex);
  
  return {
    data: paginatedNews,
    pagination: {
      page,
      pageSize,
      total: newsData.length,
      totalPages: Math.ceil(newsData.length / pageSize)
    }
  };
};

export const fetchNewsById = async (id, lang = 'az') => {
  await simulateApiDelay();
  
  const news = newsData.find(item => item.id === parseInt(id));
  if (!news) {
    throw new Error('News not found');
  }
  
  return news;
};

export const fetchNewsBySlug = async (slug, lang = 'az') => {
  await simulateApiDelay();
  
  const news = newsData.find(item => 
    item[`slug_${lang}`] === slug
  );
  
  if (!news) {
    throw new Error('News not found');
  }
  
  return news;
};

export const fetchFestivalProgram = async (lang = 'az') => {
  await simulateApiDelay();
  return programData;
};

export const fetchPartners = async (lang = 'az', category = null) => {
  await simulateApiDelay();
  
  let filteredPartners = partnersData;
  if (category && category !== 'all') {
    filteredPartners = partnersData.filter(partner => partner.category === category);
  }
  
  return filteredPartners;
};

export const fetchGallerySections = async (lang = 'az') => {
  await simulateApiDelay();
  return gallerySections;
};

export const fetchGalleryMedia = async (sectionId, lang = 'az', page = 1, pageSize = 15) => {
  await simulateApiDelay();
  
  const media = galleryMedia[sectionId] || [];
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedMedia = media.slice(startIndex, endIndex);
  
  return {
    data: paginatedMedia,
    pagination: {
      page,
      pageSize,
      total: media.length,
      totalPages: Math.ceil(media.length / pageSize)
    }
  };
};

export const fetchPastFestivals = async (lang = 'az') => {
  await simulateApiDelay();
  return pastFestivalsData;
};

export const fetchContactInfo = async (lang = 'az') => {
  await simulateApiDelay();
  return contactData;
};

export const fetchAboutFestival = async (lang = 'az') => {
  await simulateApiDelay();
  return aboutFestivalData;
};

export const fetchHomepageData = async (lang = 'az') => {
  await simulateApiDelay();
  return {
    ...homepageData,
    latestNews: newsData.slice(0, 3),
    partners: partnersData.slice(0, 6)
  };
};

export const fetchSponsorshipInfo = async (lang = 'az') => {
  await simulateApiDelay();
  return sponsorshipData;
};

export const submitCampingApplication = async (formData) => {
  await simulateApiDelay(1000); // Longer delay for form submission
  
  // Simulate random success/failure
  const isSuccess = Math.random() > 0.1; // 90% success rate
  
  if (!isSuccess) {
    throw new Error('Submission failed');
  }
  
  return {
    success: true,
    message: 'Application submitted successfully',
    applicationId: Math.random().toString(36).substr(2, 9)
  };
};

// Helper function to get localized field
export const getLocalizedField = (obj, field, lang = 'az') => {
  return obj[`${field}_${lang}`] || obj[`${field}_az`] || obj[field];
};

// Helper function to get localized slug
export const getLocalizedSlug = (obj, lang = 'az') => {
  return obj[`slug_${lang}`] || obj[`slug_az`] || obj.slug;
};

export default {
  fetchNews,
  fetchNewsById,
  fetchNewsBySlug,
  fetchFestivalProgram,
  fetchPartners,
  fetchGallerySections,
  fetchGalleryMedia,
  fetchPastFestivals,
  fetchContactInfo,
  fetchAboutFestival,
  fetchHomepageData,
  fetchSponsorshipInfo,
  submitCampingApplication,
  getLocalizedField,
  getLocalizedSlug
};