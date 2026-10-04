import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';

export default function SingleProductPage({ 
  product = {
    id: 59,
    nameEn: "Tolيدي Refreshing Cucumber Mask",
    nameAr: "ماسك الخيار المنعش يدي",
    price: 115,       // السعر بالجنيه المصري
    oldPrice: 145,    // السعر القديم بالجنيه المصري
    rating: 4.4,
    reviewsCount: 140,
    descriptionEn: "A refreshing cucumber mask with 96% cucumber water essence designed to deeply hydrate and soothe the skin.",
    descriptionAr: "ماسك خيار منعش يحتوي على خلاصة ماء الخيار بنسبة 96% مصمم لترطيب وتلطف البشرة بعمق.",
    image: "https://images.unsplash.com/photo-1567324467592-f6789b5c3924?auto=format&fit=crop&w=500&q=80"
  }, 
  onBackToProducts,
  onAddToCart 
}) {
  
  const themeContext = useTheme() || {};
  const { language = 'ar', darkMode: contextDarkMode } = themeContext;
  
  const [localDarkMode, setLocalDarkMode] = useState(contextDarkMode || false);
  const [currentLang, setCurrentLang] = useState(language);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleAddToCartClick = () => {
    if (onAddToCart) {
      onAddToCart(product, quantity);
    }
    
    alert(currentLang === 'ar' ? `تم إضافة ${quantity} من المنتج إلى السلة بنجاح!` : `Added ${quantity} item(s) to cart successfully!`);
  };

  const themeStyles = {
    pageBg: localDarkMode ? '#1a201c' : '#FFFFFF',
    cardBg: localDarkMode ? '#232b26' : '#FFFFFF',
    textColor: localDarkMode ? '#F3F4F6' : '#2D332E',
    borderColor: localDarkMode ? '#344039' : '#E5E7EB',
    primaryColor: '#2C4A3E',
    lightBg: localDarkMode ? '#2a352e' : '#F9FAFB'
  };

  const isAr = currentLang === 'ar';
  const productName = isAr ? product.nameAr : product.nameEn;
  const productDesc = isAr ? product.descriptionAr : product.descriptionEn;
  const currencySymbol = isAr ? 'ج.م' : 'EGP';

  return (
    <div style={{ 
      direction: isAr ? 'rtl' : 'ltr', 
      backgroundColor: themeStyles.pageBg, 
      color: themeStyles.textColor,
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      transition: 'all 0.3s ease',
      paddingTop: '20px'
    }}>
      
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 60px 20px' }}>
        
        {onBackToProducts && (
          <button 
            onClick={onBackToProducts}
            style={{
              background: 'none',
              border: `1px solid ${themeStyles.borderColor}`,
              color: themeStyles.textColor,
              padding: '8px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
              marginBottom: '20px',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            {isAr ? '← العودة للمنتجات' : '← Back to Products'}
          </button>
        )}
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: windowWidth < 900 ? '1fr' : '1fr 1fr', 
          gap: '40px', 
          alignItems: 'start' 
        }}>
          
          <div>
            <div style={{ 
              backgroundColor: themeStyles.lightBg, 
              borderRadius: '16px', 
              padding: '30px', 
              textAlign: 'center',
              border: `1px solid ${themeStyles.borderColor}`
            }}>
              <img 
                src={product.image} 
                alt={productName} 
                style={{ width: '100%', maxHeight: '400px', objectFit: 'contain', borderRadius: '8px' }} 
              />
            </div>
            <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
              {[1, 2, 3, 4].map((_, idx) => (
                <div key={idx} style={{ 
                  width: '70px', 
                  height: '70px', 
                  borderRadius: '8px', 
                  border: `2px solid ${idx === 0 ? themeStyles.primaryColor : themeStyles.borderColor}`,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  backgroundColor: themeStyles.lightBg
                }}>
                  <img src={product.image} alt="thumb" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 style={{ fontSize: windowWidth < 768 ? '22px' : '28px', fontWeight: '700', marginBottom: '15px', lineHeight: '1.3' }}>
              {productName}
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <span style={{ fontSize: '26px', fontWeight: '800', color: themeStyles.primaryColor }}>
                {product.price} {currencySymbol}
              </span>
              {product.oldPrice && (
                <span style={{ fontSize: '18px', textDecoration: 'line-through', opacity: 0.5 }}>
                  {product.oldPrice} {currencySymbol}
                </span>
              )}
            </div>

            <p style={{ fontSize: '14px', opacity: 0.8, lineHeight: '1.6', marginBottom: '25px' }}>
              {productDesc}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap', marginBottom: '30px' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                border: `1px solid ${themeStyles.borderColor}`, 
                borderRadius: '8px', 
                overflow: 'hidden',
                backgroundColor: themeStyles.lightBg
              }}>
                <button 
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  style={{ padding: '10px 15px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', color: themeStyles.textColor }}
                >
                  -
                </button>
                <span style={{ padding: '0 15px', fontWeight: 'bold', fontSize: '15px' }}>{quantity}</span>
                <button 
                  onClick={() => setQuantity(prev => prev + 1)}
                  style={{ padding: '10px 15px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', color: themeStyles.textColor }}
                >
                  +
                </button>
              </div>

              <button 
                onClick={handleAddToCartClick}
                style={{
                  flex: 1,
                  minWidth: '200px',
                  padding: '12px 24px',
                  backgroundColor: '#2C4A3E',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '700',
                  fontSize: '15px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(44, 74, 62, 0.2)',
                  transition: 'opacity 0.2s'
                }}
              >
                {isAr ? 'إضافة إلى السلة' : 'Add to Cart'}
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '13px', opacity: 0.85, borderTop: `1px solid ${themeStyles.borderColor}`, paddingTop: '20px' }}>
              <div>🌿 {isAr ? 'مناسب لجميع أنواع البشرة' : 'For all skin types'}</div>
              <div>🐰 {isAr ? 'لم يُختبر على الحيوانات' : 'Cruelty Free'}</div>
              <div>✨ {isAr ? 'اختبار جلد معتمد' : 'Dermatologist tested'}</div>
              <div>💧 {isAr ? 'ترطيب عميق طويل الأمد' : 'Long-lasting hydration'}</div>
            </div>

          </div>

        </div>

        <div style={{ marginTop: '60px', borderTop: `1px solid ${themeStyles.borderColor}`, paddingTop: '30px' }}>
          <div style={{ display: 'flex', gap: '30px', borderBottom: `1px solid ${themeStyles.borderColor}`, paddingBottom: '12px', overflowX: 'auto' }}>
            {[
              { key: 'description', label: isAr ? 'الوصف' : 'Description' },
              { key: 'ingredients', label: isAr ? 'المكونات الأساسية' : 'Key Ingredients' },
              { key: 'howToUse', label: isAr ? 'طريقة الاستخدام' : 'How to Use' },
              { key: 'reviews', label: isAr ? 'التقييمات (140)' : 'Reviews (140)' }
            ].map(tab => (
              <span 
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{ 
                  cursor: 'pointer', 
                  fontWeight: activeTab === tab.key ? '700' : '500', 
                  color: activeTab === tab.key ? themeStyles.primaryColor : themeStyles.textColor,
                  borderBottom: activeTab === tab.key ? `2px solid ${themeStyles.primaryColor}` : 'none',
                  paddingBottom: '12px',
                  whiteSpace: 'nowrap',
                  fontSize: '15px'
                }}
              >
                {tab.label}
              </span>
            ))}
          </div>

          <div style={{ padding: '25px 0', fontSize: '14px', lineHeight: '1.7', opacity: 0.85 }}>
            {activeTab === 'description' && (
              <p>{productDesc} منتج طبيعي عالي الجودة مصمم خصيصاً ليمنح بشرتك إشراقة ونضارة طبيعية تدوم طوال اليوم.</p>
            )}
            {activeTab === 'ingredients' && (
              <ul>
                <li>🥒 {isAr ? 'مستخلص ماء الخيار الطبيعي (96%): لترطيب وتبريد البشرة الفوري.' : 'Natural Cucumber Water Essence (96%): For instant hydration.'}</li>
                <li>💧 {isAr ? 'حمض الهيالورونيك: يحافظ على رطوبة الجلد.' : 'Hyaluronic Acid: Retains skin moisture.'}</li>
                <li>🍃 {isAr ? 'مستخلص الألوفيرا: لتهدئة ومنع التهابات البشرة.' : 'Aloe Vera Extract: Soothes irritated skin.'}</li>
              </ul>
            )}
            {activeTab === 'howToUse' && (
              <p>{isAr ? 'يُوضع الماسك على بشرة نظيفة وجافة، يترك لمدة 15-20 دقيقة ثم يُززال برفق ويدلك ما تبقى من السائل بلطف حتى يمتصه الجلد تماماً.' : 'Apply the mask on clean dry skin, leave for 15-20 minutes, then gently remove and massage remaining essence until fully absorbed.'}</p>
            )}
            {activeTab === 'reviews' && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                  <span style={{ fontSize: '20px', fontWeight: 'bold' }}>⭐ {product.rating} / 5.0</span>
                  <span style={{ opacity: 0.6 }}>(140 {isAr ? 'تقييم' : 'reviews'})</span>
                </div>
                <p>💬 &quot;ممتاز جداً ويرطب البشرة من أول استخدام أنصح به بشدة!&quot; - سارة أحمد</p>
              </div>
            )}
          </div>
        </div>

      </main>
    </div>
  );
}