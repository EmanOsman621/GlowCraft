import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);
  const toggleLanguage = () => setLanguage(prev => (prev === 'en' ? 'ar' : 'en'));

  const translations = {
    en: {
      home: "Home",
      products: "Products",
      about: "About",
      contact: "Contact",
      allProducts: "All Products",
      subtitle: "Find the perfect products for your skin",
      filter: "Filter",
      skinType: "Skin Type",
      oily: "Oily",
      dry: "Dry",
      combination: "Combination",
      sensitive: "Sensitive",
      category: "Category",
      cleansers: "Cleansers",
      serums: "Serums",
      moisturizers: "Moisturizers",
      sunscreens: "Sunscreens",
      masks: "Masks",
      priceRange: "Price Range",
      sort: "Sort By",
      latest: "Latest",
      priceLowHigh: "Price: Low to High",
      priceHighLow: "Price: High to Low",
      addToCart: "Add to Cart",
      searchPlaceholder: "Search for products...",
      showingText: "Showing 1-6 of 24"
    },
    ar: {
      home: "الرئيسية",
      products: "المنتجات",
      about: "معلومات عنا",
      contact: "اتصل بنا",
      allProducts: "جميع المنتجات",
      subtitle: "اعثر على المنتجات المثالية لبشرتك",
      filter: "فلتر",
      skinType: "نوع البشرة",
      oily: "دهنية",
      dry: "جافة",
      combination: "مختلطة",
      sensitive: "حساسة",
      category: "التصنيف",
      cleansers: "غسول",
      serums: "سيروم",
      moisturizers: "مرطبات",
      sunscreens: "واقي شمس",
      masks: "ماسكات",
      priceRange: "نطاق السعر",
      sort: "ترتيب حسب",
      latest: "الأحدث",
      priceLowHigh: "السعر: من الأقل للأعلى",
      priceHighLow: "السعر: من الأعلى للأقل",
      addToCart: "إضافة إلى السلة",
      searchPlaceholder: "ابحث عن المنتجات...",
      showingText: "عرض 1-6 من 24"
    }
  };

  const t = translations[language];

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, language, toggleLanguage, t }}>
      <div className={isDarkMode ? 'dark-mode' : 'light-mode'} style={{ minHeight: '100vh', transition: 'all 0.3s ease' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);