import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';

export default function AllProductsPage({ onSelectProduct }) {
  const themeContext = useTheme() || {};
  const { t = {}, language = 'ar', darkMode: contextDarkMode } = themeContext;
  
  const [localDarkMode, setLocalDarkMode] = useState(contextDarkMode || false);

  useEffect(() => {
    if (contextDarkMode !== undefined) {
      setLocalDarkMode(contextDarkMode);
    }
  }, [contextDarkMode]);

  const [search, setSearch] = useState('');
  const [maxPrice, setMaxPrice] = useState(600); // تعديل النطاق السعري بالجنيه المصري أو العملة المناسبة
  const [sortBy, setSortBy] = useState('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const productsPerPage = 6;
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [selectedSkinTypes, setSelectedSkinTypes] = useState({
    oily: false,
    dry: false,
    combination: false,
    sensitive: false
  });

  const [selectedCategories, setSelectedCategories] = useState({
    cleansers: false,
    serums: false,
    moisturizers: false,
    sunscreens: false,
    masks: false
  });

  // قائمة 60 منتجاً حقيقياً لمنتجات العناية بالبشرة المصرية والعالمية الشهيرة المتاحة بالسوق المصري
  const realEgyptianSkincareProducts = [
    // Cleansers (غسول)
    { id: 1, nameAr: "ستارفيل جل غسول للبشرة الدهنية والمختلطة", nameEn: "Starville Facial Cleanser for Oily & Combination Skin", category: "cleansers", skin: "oily", price: 145, rating: 4.8, reviews: 245, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT6zeD5DazFeiL0IbZFzQewj6CblxgVVvzQ3fmcp8Ih_FYIbKwLjAAzn8EaftQO85noSSfQj7MgA4We1Rw3e3zCTxKOXE2hNFYgxwFHj4lZZ7iOquxHvN7JUA&usqp=CAc" },
    { id: 2, nameAr: "بوباي جل غسول منظف للبشرة", nameEn: "Bobai Purifying Cleansing Gel", category: "cleansers", skin: "oily", price: 160, rating: 4.5, reviews: 190, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT7ZWqstarvqSb82e7GjxT7jGJrhnN-9ZB2z7qamIV_g&s=10" },
    { id: 3, nameAr: "إيفا كلين آند كليار غسول يومي", nameEn: "Eva Skin Care Daily Facial Wash", category: "cleansers", skin: "combination", price: 75, rating: 4.3, reviews: 310, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSM7ec4GF3iaTqKKavD38YTHw77STVr3kCySAuMU4id4Y7QO6iAia4mUYbHD1UiOCEcJldyc763sl4FrTWdXKu93uhKPEtI8yPrN6VuAEQ8RXxPuZiVzSLWbzWDepNfakDmOLaWfg&usqp=CAc" },
    { id: 4, nameAr: "كلين آند كير غسول لطيف للبشرة الحساسة", nameEn: "Cleo Gentle Cleanser for Sensitive Skin", category: "cleansers", skin: "sensitive", price: 180, rating: 4.7, reviews: 140, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBezuyDYOGOJWoWYJzNV3m38YdKfDn3xfLZIYdhGjeBw&s" },
    { id: 5, nameAr: "كلي오 رغوة تنظيف الوجه", nameEn: "Cleo Face Cleansing Foam", category: "cleansers", skin: "dry", price: 195, rating: 4.6, reviews: 120, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGuqsdD6DLoUzzYos22sX3rDBPWJoSFZUtz3mDWtuAyA&s=10" },
    { id: 6, nameAr: "إنفينيتي غسول طبي مرطب", nameEn: "Infinity Moisturizing Medical Cleanser", category: "cleansers", skin: "dry", price: 210, rating: 4.8, reviews: 95, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCMAntfR_a5Coy1tj6y-AwoNSozywQ4oXtwLBhi1Yhig&s=10" },
    { id: 7, nameAr: "بيزلين صابون طبيعي مفتح للبشرة", nameEn: "Beesline Whitening Natural Soap", category: "cleansers", skin: "sensitive", price: 90, rating: 4.4, reviews: 215, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Vnnu3hyH1TkdHr_fHuVBY5lfEdfIaOeifMuTAKNvDA&s" },
    { id: 8, nameAr: "لافون غسول للبشرة المعرضة للحبوب", nameEn: "Lafon Acne-Prone Skin Cleanser", category: "cleansers", skin: "oily", price: 130, rating: 4.2, reviews: 88, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcR8rdrfS0d8sQ9Io7MDnx9MP1O5dNCwVwoM0Wb3AOwA&s=10" },
    { id: 9, nameAr: "سولاديرم غسول منظف عميق", nameEn: "Soladerm Deep Cleansing Gel", category: "cleansers", skin: "combination", price: 175, rating: 4.5, reviews: 76, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8NuqKWhu0ocrNfNOqg2sCdLs8eCavVbEev5TlB9hTqQ&s=10" },
    { id: 10, nameAr: "توليدي غسول لطيف بخلاصة العسل", nameEn: "Tolيدي Gentle Honey Cleanser", category: "cleansers", skin: "sensitive", price: 110, rating: 4.6, reviews: 134, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSddTUMrT5dXTosw2M6PiTMmhnPe_OfkezsxMXf0JB9VQ&s" },
    { id: 11, nameAr: "كير باي كير غسول رغوي", nameEn: "Care by Care Foaming Wash", category: "cleansers", skin: "oily", price: 155, rating: 4.3, reviews: 67, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUzLJdam17aIMvgIjFXXbanj7eISmVDYYH0ipnq2_Uqw&s=10" },
    { id: 12, nameAr: "ميريكس غسول للبشرة الدهنية", nameEn: "Merex Oily Skin Cleanser", category: "cleansers", skin: "oily", price: 165, rating: 4.7, reviews: 155, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3ERWpHXGgeOW5nQl6Hhg5dhfoLtDmld52PZiMOj3hreWgW07vpkNvxk&s=10" },

    // Serums (سيروم)
    { id: 13, nameAr: "ستارفيل سيروم فيتامين سي المشرق", nameEn: "Starville Vitamin C Glow Serum", category: "serums", skin: "combination", price: 220, rating: 4.9, reviews: 420, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoIhvPIIkZ-n37w57Jucj8VRFRZKRuiaa_NgXiqBoeQ&s=10" },
    { id: 14, nameAr: "إيفا سيروم الهيالورونيك اسد للترطيب المكثف", nameEn: "Eva Skin Care Hyaluronic Acid Serum", category: "serums", skin: "dry", price: 190, rating: 4.7, reviews: 350, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnRLu9KgewqmBaY3C-PZKgcw6P1tQHmpot_FSUQBW5w&s=10" },
        { id: 15, nameAr: "كليـو سيروم النياسيناميد لتصفية البشـرة", nameEn: "Cleo Niacinamide Clarifying Serum", category: "serums", skin: "oily", price: 240, rating: 4.8, reviews: 210, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScePW8wvo3PEGzoteSbv42KOFgjE8oku-JVUof__Z7xQ&s=10" },
    { id: 16, nameAr: "إنفينيتي سيروم الكولاجين المضاد للشيخوخة", nameEn: "Infinity Anti-Aging Collagen Serum", category: "serums", skin: "dry", price: 280, rating: 4.6, reviews: 180, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTeWTOJDz-qddoc3Y3GkmYpUCwfxQpsjFvVLF36gdP1HC9F2YsZ9TS_QBzu70rTwffZrv2qz6Ao5Xk_uBHzLLg4Usw5eHQPjRzApYt3lFnpt61jgfA5C1K0_JV4TqoaA-Lwx633KfA&usqp=CAc" },
    { id: 17, nameAr: "ملانوفورت سيروم تفتيح البشرة وإزالة التصبغات", nameEn: "Melanoforte Skin Brightening Serum", category: "serums", skin: "combination", price: 260, rating: 4.7, reviews: 290, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ8WTIJfx4vYpnbOen7jaQ33YR5J0Gj-SZNMyAP8s31gpsBAdjAMc1rH4&s=10" },
    { id: 18, nameAr: "بوبهير سيروم الرموش والحواجب المغذي", nameEn: "Bobair Lash & Brow Nourishing Serum", category: "serums", skin: "sensitive", price: 150, rating: 4.4, reviews: 115, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYE8dZp04x8uPOAB1n6wtxU73yl5skm9L65QIaFAr64A&s=10" },
  
    // Moisturizers (مرطبات)
   
   

    { id: 36, nameAr: "أفول مرطب للبشرة الدهنية المعرضة للشوائب", nameEn: "Avol Blemish-Prone Skin Moisturizer", category: "moisturizers", skin: "oily", price: 170, rating: 4.6, reviews: 125, image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=400&q=80" },

    // Sunscreens (واقي شمس)
    { id: 37, nameAr: "بوباي كريم واقي من الشمس SPF 50+", nameEn: "Bobai Sun Care Cream SPF 50+", category: "sunscreens", skin: "dry", price: 210, rating: 4.8, reviews: 890, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR8hu5ElyyzScd7HdlgH6dgC8yTNvQbzvi_gwGnH9msCZPJ8wMcqfBcdBkJ1M8lAtzja0v_QNeZErbbn1FuMmcfJ2IDIQn-_EYkIQDj0a7a6S1Wui3MrQbz53IpABBKdR9W6MVgs8q6&usqp=CAc" },
    { id: 38, nameAr: "بوباي جل واقي شمس للبشرة الدهنية", nameEn: "Bobai Sun Screen Gel for Oily Skin", category: "sunscreens", skin: "oily", price: 230, rating: 4.9, reviews: 1100, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRn5TaWoEdEAEsI8VuWYmV2m-nDnVhXH1Tu1P6nTdYrbX4nULNufCEoA2R-DXdTDd2C1vD-e-cWGt-BhNvDYwM1zlK6SdsUKwwQgbxLyOjVmMXajFKgVMy_xiZ6ZFMXrtBYMP1MyyuB&usqp=CAc" },
    { id: 39, nameAr: "ستارفيل واقي شمس بخلاصة الألوفيرا", nameEn: "Starville Sunscreen with Aloe Vera", category: "sunscreens", skin: "combination", price: 195, rating: 4.7, reviews: 650, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7bWzMbl2GU8eopJHuowL_NAQ859BBOrUORrkJdShrJw&s=10" },
    { id: 40, nameAr: "بيزلين كريم واقي شمس طبيعي واقي مرطب", nameEn: "Beesline Whitening UV Defense Cream", category: "sunscreens", skin: "sensitive", price: 380, rating: 4.6, reviews: 340, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJycJGiaAuZw5Tz0ZlhmTCSQb43k4nblwQ-eSv3n-Eiw&s" },
    { id: 41, nameAr: "كليـو واقي شمس بخاصية الحماية الشاملة", nameEn: "Cleo Advanced Sun Screen SPF 50+", category: "sunscreens", skin: "sensitive", price: 290, rating: 4.8, reviews: 290, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQAJeZdtTaw8BOdOLhqQY3iUnCltKdCrhMIbCNAQiLiTEKalHKZAm1uq8&s=10" },
  
    // Masks (ماسكات وتقشير)

    { id: 55, nameAr: "لونا ماسك الذهب المشرق للوجه", nameEn: "Luna Gold Glow Facial Mask", category: "masks", skin: "combination", price: 60, rating: 4.2, reviews: 240, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Q9eSuAUYAORqH4yN1F-Z-SQF-ImIzXCSo2PgvY2VTw&s=10" },
    { id: 56, nameAr: "ديرما ماسك الطين الأخضر للتحكم بالدهون", nameEn: "Derma Green Clay Oil Control Mask", category: "masks", skin: "oily", price: 180, rating: 4.6, reviews: 195, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6MOFIVcHzLI0Kw6_pVP76YQWN9dPehLsfZ_XJJ4ebFQ&s" },
    { id: 57, nameAr: "أفول ماسك تنظيف الرؤوس السوداء", nameEn: "Avol Blackhead Clearing Peel-off Mask", category: "masks", skin: "oily", price: 135, rating: 4.3, reviews: 160, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4aHSinY_DjgBUJXrbJpGqHuLOMO6K8iNaq_PGtU_Wlg&s" },
    { id: 58, nameAr: "ميريكس ماسك مهدئ للبشرة المتهيجة", nameEn: "Merex Calming Face Mask", category: "masks", skin: "sensitive", price: 160, rating: 4.7, reviews: 85, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9xxFL_KdRKttiIQF9H0wtwE5Bfy2pxda6ixTeJANskQ&s=10" },
    { id: 59, nameAr: "توليدي ماسك بالخيار المنعش", nameEn: "Tolيدي Refreshing Cucumber Mask", category: "masks", skin: "dry", price: 85, rating: 4.4, reviews: 140, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNjQU-8fo-ZPSgSFzhi4rB72Xu27w_yVrDanF9Nw_mQQ&s=10" },
    { id: 60, nameAr: "بايوكسيرا ماسك تقشير أحماض الفواكه", nameEn: "Bioxera AHA Fruit Acids Mask", category: "masks", skin: "combination", price: 290, rating: 4.9, reviews: 210, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJLdLzaix3YZ-kQr9nurDjkquSz1vQuUlay9AwUu4oMQ&s" }
  ];

  const handleSkinChange = (type) => {
    setSelectedSkinTypes(prev => ({ ...prev, [type]: !prev[type] }));
    setCurrentPage(1);
  };

  const handleCategoryChange = (cat) => {
    setSelectedCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
    setCurrentPage(1);
  };

  function idGen(a, b) {
    return b.id - a.id;
  }

  const filteredProducts = realEgyptianSkincareProducts.filter(product => {
    const productName = language === 'ar' ? product.nameAr : product.nameEn;
    const matchesSearch = productName.toLowerCase().includes(search.toLowerCase());
    const matchesPrice = product.price <= maxPrice;

    const activeSkinTypes = Object.keys(selectedSkinTypes).filter(k => selectedSkinTypes[k]);
    const matchesSkin = activeSkinTypes.length === 0 || activeSkinTypes.includes(product.skin);

    const activeCategories = Object.keys(selectedCategories).filter(k => selectedCategories[k]);
    const matchesCategory = activeCategories.length === 0 || activeCategories.includes(product.category);

    return matchesSearch && matchesPrice && matchesSkin && matchesCategory;
  }).sort((a, b) => {
    if (sortBy === 'low-high') return a.price - b.price;
    if (sortBy === 'high-low') return b.price - a.price;
    return idGen(a, b); 
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage) || 1;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // 🎨 الألوان المطابقة تماماً للصورة (خلفية داكنة زيتونية عميقة، مع عناصر وبطاقات بلون بيج عاجي فاتح Off-White)
  const themeStyles = {
    pageBg: localDarkMode ? '#1a201c' : '#F6F8F5',       
    cardBg: localDarkMode ? '#f4efe6' : '#FFFFFF',       
    bannerBg: localDarkMode ? '#f4efe6' : '#EAEFEA',     
    textColor: localDarkMode ? '#1f2420' : '#2D332E',    
    darkTextColor: '#F3F4F6',                            
    borderColor: localDarkMode ? '#d8cebe' : '#DDE3DD',  
    primaryColor: '#3b5331',                            
  };

  const getGridColumns = () => {
    if (windowWidth < 768) return '1fr';
    if (windowWidth < 1024) return 'repeat(2, 1fr)';
    return 'repeat(3, 1fr)';
  };

  const getMainLayoutColumns = () => {
    if (windowWidth < 992) return '1fr';
    return '280px 1fr';
  };

  return (
    <div style={{ 
      padding: windowWidth < 768 ? '15px' : '30px 40px', 
      maxWidth: '1300px', 
      margin: '0 auto', 
      direction: language === 'ar' ? 'rtl' : 'ltr', 
      color: themeStyles.darkTextColor, 
      backgroundColor: themeStyles.pageBg, 
      minHeight: '100vh', 
      transition: 'background-color 0.3s ease, color 0.3s ease',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      
      {/* Banner Section */}
      <div style={{ 
        background: themeStyles.bannerBg, 
        color: themeStyles.textColor,
        padding: windowWidth < 768 ? '20px' : '30px 35px', 
        borderRadius: '14px', 
        marginBottom: '25px',
        border: `1px solid ${themeStyles.borderColor}`,
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '15px'
      }}>
        <div>
          <h1 style={{ fontSize: windowWidth < 768 ? '22px' : '28px', marginBottom: '6px', fontWeight: '700' }}>
            {t.allProducts || 'منتجات العناية المصرية والعالمية'}
          </h1>
          <p style={{ opacity: 0.8, fontSize: windowWidth < 768 ? '13px' : '14px', margin: 0 }}>
            {t.subtitle || 'اكتشف أفضل منتجات العناية بالبشرة المتاحة في السوق المصري لمختلف أنواع البشرة'}
          </p>
        </div>

        {/* زر تبديل الدارك مود */}
        <button 
          onClick={() => setLocalDarkMode(prev => !prev)}
          style={{
            padding: '9px 16px',
            borderRadius: '8px',
            border: `1px solid ${themeStyles.borderColor}`,
            background: localDarkMode ? '#eae2d4' : '#1a201c',
            color: localDarkMode ? '#1f2420' : '#F3F4F6',
            cursor: 'pointer',
            fontSize: '13px',
            fontWeight: '600',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            transition: 'all 0.2s'
          }}
        >
          {localDarkMode ? '☀️ وضع النهار' : '🌙 الوضع الليلي'}
        </button>
      </div>

      {/* Main Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: getMainLayoutColumns(), gap: '25px', alignItems: 'start' }}>
        
        {/* Sidebar Filters */}
        <div style={{ 
          background: themeStyles.cardBg, 
          color: themeStyles.textColor,
          padding: '22px', 
          borderRadius: '14px', 
          border: `1px solid ${themeStyles.borderColor}`,
          boxShadow: '0 4px 15px rgba(0,0,0,0.06)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: `1px solid ${themeStyles.borderColor}`, paddingBottom: '10px' }}>
            <span style={{ fontWeight: '700', fontSize: '15px', color: themeStyles.primaryColor }}>⚙ {t.filter || 'فلترة المنتجات'}</span>
          </div>

          {/* Skin Type */}
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '13px', marginBottom: '10px', fontWeight: '700', opacity: 0.95 }}>{t.skinType || 'نوع البشرة'}</h4>
            {[
              { key: 'oily', label: t.oily || 'دهنية' },
              { key: 'dry', label: t.dry || 'جافة' },
              { key: 'combination', label: t.combination || 'مختلطة' },
              { key: 'sensitive', label: t.sensitive || 'حساسة' }
            ].map(item => (
              <label key={item.key} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', marginBottom: '8px', cursor: 'pointer', opacity: 0.9 }}>
                <input 
                  type="checkbox" 
                  checked={selectedSkinTypes[item.key]} 
                  onChange={() => handleSkinChange(item.key)}
                  style={{ accentColor: themeStyles.primaryColor, width: '15px', height: '15px', cursor: 'pointer' }}
                />
                {item.label}
              </label>
            ))}
          </div>

          {/* Category */}
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '13px', marginBottom: '10px', fontWeight: '700', opacity: 0.95 }}>{t.category || 'التصنيف'}</h4>
            {[
              { key: 'cleansers', label: t.cleansers || 'غسول ومنظفات' },
              { key: 'serums', label: t.serums || 'سيروم' },
              { key: 'moisturizers', label: t.moisturizers || 'مرطبات' },
              { key: 'sunscreens', label: t.sunscreens || 'واقي شمس' },
              { key: 'masks', label: t.masks || 'ماسكات وتقشير' }
            ].map(item => (
              <label key={item.key} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', marginBottom: '8px', cursor: 'pointer', opacity: 0.9 }}>
                <input 
                  type="checkbox" 
                  checked={selectedCategories[item.key]} 
                  onChange={() => handleCategoryChange(item.key)}
                  style={{ accentColor: themeStyles.primaryColor, width: '15px', height: '15px', cursor: 'pointer' }}
                />
                {item.label}
              </label>
            ))}
          </div>

          {/* Price Range */}
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '13px', marginBottom: '8px', fontWeight: '700', opacity: 0.95 }}>{t.priceRange || 'السعر الأقصى (ج.م)'}</h4>
            <input 
              type="range" 
              min="50" 
              max="600" 
              step="10"
              value={maxPrice} 
              onChange={(e) => {
                setMaxPrice(Number(e.target.value));
                setCurrentPage(1);
              }}
              style={{ width: '100%', accentColor: themeStyles.primaryColor, cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', opacity: 0.8, marginTop: '4px' }}>
              <span>50 ج.م</span>
              <span style={{ fontWeight: 'bold', color: themeStyles.primaryColor }}>{maxPrice} ج.م</span>
            </div>
          </div>

          {/* Sort By */}
          <div>
            <h4 style={{ fontSize: '13px', marginBottom: '8px', fontWeight: '700', opacity: 0.95 }}>{t.sort || 'ترتيب حسب'}</h4>
            <select 
              value={sortBy} 
              onChange={(e) => {
                setSortBy(e.target.value);
                setCurrentPage(1);
              }}
              style={{ 
                width: '100%', 
                padding: '9px', 
                borderRadius: '8px', 
                border: `1px solid ${themeStyles.borderColor}`, 
                background: localDarkMode ? '#eae2d4' : '#FFFFFF', 
                color: themeStyles.textColor,
                fontSize: '13px',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="latest">{t.latest || 'الأحدث'}</option>
              <option value="low-high">{t.priceLowHigh || 'السعر: من الأقل للأعلى'}</option>
              <option value="high-low">{t.priceHighLow || 'السعر: من الأعلى للأقل'}</option>
            </select>
          </div>
        </div>

        {/* Main Products Area */}
        <div>
          {/* Search Box */}
          <div style={{ display: 'flex', flexDirection: windowWidth < 576 ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ position: 'relative', width: '100%' }}>
              <span style={{ position: 'absolute', top: '12px', [language === 'ar' ? 'right' : 'left']: '14px', opacity: 0.5 }}>🔍</span>
              <input 
                type="text" 
                placeholder={t.searchPlaceholder || 'ابحث عن غسول، سيروم، مرطب، واقي شمس...'}
                value={search} 
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                style={{ 
                  width: '100%', 
                  padding: '12px 15px 12px 40px', 
                  borderRadius: '10px', 
                  border: `1px solid ${localDarkMode ? '#d8cebe' : themeStyles.borderColor}`, 
                  backgroundColor: localDarkMode ? '#f4efe6' : '#FFFFFF', 
                  color: localDarkMode ? '#1f2420' : themeStyles.darkTextColor,
                  fontSize: '13px',
                  outline: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                }}
              />
            </div>
            <div style={{ fontSize: '12px', opacity: 0.8, whiteSpace: 'nowrap', color: themeStyles.darkTextColor, alignSelf: windowWidth < 576 ? 'flex-start' : 'center' }}>
              {filteredProducts.length} {language === 'ar' ? 'منتج متاح' : 'products found'}
            </div>
          </div>

          {/* Products Grid */}
          {currentProducts.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: getGridColumns(), gap: '16px', marginBottom: '30px' }}>
              {currentProducts.map(product => {
                const displayName = language === 'ar' ? product.nameAr : product.nameEn;
                return (
                  <div 
                    key={product.id} 
                    onClick={() => onSelectProduct({ ...product, name: displayName })} 
                    style={{ 
                      background: themeStyles.cardBg, 
                      color: themeStyles.textColor,
                      padding: '14px', 
                      borderRadius: '12px', 
                      cursor: 'pointer', 
                      border: `1px solid ${themeStyles.borderColor}`,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{ background: localDarkMode ? '#eae2d4' : '#F0F4EF', borderRadius: '8px', padding: '12px', textAlign: 'center', marginBottom: '12px' }}>
                      <img src={product.image} alt={displayName} style={{ width: '100%', height: '140px', objectFit: 'contain', borderRadius: '6px' }} />
                    </div>
                    <h4 style={{ margin: '6px 0 8px', fontSize: '13px', fontWeight: '600', height: '36px', overflow: 'hidden', lineHeight: '1.4' }}>
                      {displayName}
                    </h4>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                      <span style={{ fontWeight: '700', color: themeStyles.primaryColor, fontSize: '15px' }}>{product.price} ج.م</span>
                      <div style={{ display: 'flex', gap: '6px', alignItems: 'center', fontSize: '11px', opacity: 0.85 }}>
                        <span>⭐ {product.rating}</span>
                        <span>💬 {product.reviews}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '50px', background: themeStyles.cardBg, color: themeStyles.textColor, borderRadius: '12px', border: `1px solid ${themeStyles.borderColor}`, opacity: 0.8, fontSize: '13px' }}>
              {language === 'ar' ? 'لا توجد منتجات تطابق بحثك أو الفلتر المختار' : 'No products match your search or filter'}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div style={{ display: 'flex', flexDirection: windowWidth < 576 ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'center', gap: '12px', marginTop: '20px', paddingTop: '15px', borderTop: `1px solid ${localDarkMode ? '#2d3830' : themeStyles.borderColor}` }}>
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap' }}>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
                  <button 
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    style={{ 
                      width: '32px', 
                      height: '32px', 
                      background: currentPage === pageNumber ? themeStyles.primaryColor : (localDarkMode ? '#f4efe6' : themeStyles.cardBg), 
                      color: currentPage === pageNumber ? '#fff' : themeStyles.textColor, 
                      border: `1px solid ${themeStyles.borderColor}`, 
                      borderRadius: '6px', 
                      cursor: 'pointer', 
                      fontSize: '12px',
                      fontWeight: '600',
                      transition: 'background 0.2s'
                    }}
                  >
                    {pageNumber}
                  </button>
                ))}
              </div>
              <div style={{ fontSize: '12px', opacity: 0.8, color: themeStyles.darkTextColor }}>
                {language === 'ar' 
                  ? `عرض الصفحة ${currentPage} من ${totalPages}` 
                  : `Showing page ${currentPage} of ${totalPages}`}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}