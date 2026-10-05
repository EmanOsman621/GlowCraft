import React from 'react';
import { useTheme } from './ThemeContext';

export default function Navbar({ activePage, setActivePage, cartCount }) {
  const { isDarkMode, toggleTheme, language, toggleLanguage, t } = useTheme();

  return (
    <nav className="navbar" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      borderBottom: '1px solid var(--border-color)',
      backgroundColor: 'var(--bg-card)',
      direction: language === 'ar' ? 'rtl' : 'ltr'
    }}>
      <div className="logo" style={{ fontSize: '22px', fontWeight: 'bold', color: 'var(--text-main)', cursor: 'pointer' }} onClick={() => setActivePage('all')}>
        GlowCraft
      </div>

      <div className="nav-links" style={{ display: 'flex', gap: '25px', cursor: 'pointer', fontSize: '14px', color: 'var(--text-main)' }}>
        <span onClick={() => setActivePage('all')}>{t.home}</span>
        <span onClick={() => setActivePage('all')}>{t.products}</span>
        <span>{t.about}</span>
        <span>{t.contact}</span>
      </div>

      <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        {/* زر تبديل الثيم (دارك / لايت) */}
        <button 
          onClick={toggleTheme} 
          title="Toggle Dark/Light Mode"
          style={{ background: 'var(--border-color)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>

        {/* زر تبديل اللغة (عربي / إنجليزي) */}
        <button 
          onClick={toggleLanguage} 
          style={{ background: '#2c4a3e', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px' }}
        >
          {language === 'en' ? 'عربي' : 'EN'}
        </button>

        <div style={{ position: 'relative', cursor: 'pointer', fontSize: '18px' }}>
          🛒 <span style={{ position: 'absolute', top: '-8px', right: '-8px', background: '#2c4a3e', color: '#fff', borderRadius: '50%', padding: '2px 5px', fontSize: '10px' }}>{cartCount}</span>
        </div>
      </div>
    </nav>
  );
}