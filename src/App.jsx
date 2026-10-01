import React, { useState } from 'react';


export default function App() {
    const [lang, setLang] = useState('en');
    const [darkMode, setDarkMode] = useState(true);
    const [activeView, setActiveView] = useState('home'); // 'home', 'allBest', 'allOffers', 'quiz', 'Products'

    // Quiz States
    const [quizStep, setQuizStep] = useState(0);
    const [quizAnswers, setQuizAnswers] = useState({});
    const [quizResultData, setQuizResultData] = useState(null);

    const t = {
        en: {
            brand: "GlowCraft",
            brandDesc: "Your skin, Our priority",
            nav: ["Home", "Products", "About", "Contact"],
            heroTitle: "Discover Your Natural Glow",
            heroDesc: "Personalized skincare for healthier, brighter and happier skin.",
            shopNow: "Shop Now",
            findRoutine: "Find My Routine",
            bestSelling: "Best Selling Products",
            weeklyOffers: "Weekly Offers",
            shopByCategory: "Shop By Category",
            viewAll: "View All",
            backToHome: "← Back to Home",
            quizTitle: "Don't know your skin type?",
            quizDesc: "Take our skin quiz and find your perfect routine.",
            quizBtn: "Find My Routine",
            quickLinksTitle: "Quick Links",
            customerCareTitle: "Customer Care",
            followUsTitle: "Follow Us",
            quickLinks: ["Home", "Products", "About", "Contact"],
            customerCare: ["FAQs", "Shipping", "Returns", "Support"],
            rights: "© 2026 GlowCraft. All rights reserved.",
            categories: [
                { name: "Cleansers", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1u8buBSU7gZosWeLilDRS-tTmw6el-Y7A0JBCmhsxUA&s=10" },
                { name: "Serums", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI9dPA7OIY832IuGsQaMA-eCbXln-Z0cNuYbu4khNZ0g&s=10" },
                { name: "Moisturizers", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWrxFnM2o32OQhiqRjvYyYJ_cHoTCqbf6REqUzVqZ8ow&s" },
                { name: "Sunscreens", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwoUIzIjfHYMGmaHXCZL4zuaZ_NecNMErIvAn5WaXuNQ&s" },
                { name: "Masks", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZmFdM5JbXvAgvhG8N6-LnYLvg7DG9vAGG1WyqmJPo5g&s=10" }
            ],
            features: [
                { title: "Free Shipping", desc: "On orders over $50", icon: "fa-solid fa-truck" },
                { title: "Natural Ingredients", desc: "Safe & Effective", icon: "fa-solid fa-leaf" },
                { title: "Skincare Experts", desc: "Trusted by 10K+", icon: "fa-solid fa-shield-alt" }
            ],
            quizQuestions: [
                {
                    question: "How does your skin feel after washing?",
                    subtitle: "Let's find out what your skin needs for a natural glow.",
                    options: [
                        { text: "Very tight or dry", type: "dry" },
                        { text: "Shiny and oily", type: "oily" },
                        { text: "Oily in T-zone, dry elsewhere", type: "combination" },
                        { text: "Balanced and comfortable", type: "normal" }
                    ]
                },
                {
                    question: "How does your skin react to the sun?",
                    subtitle: "Understanding your sensitivity helps us pick the right protection.",
                    options: [
                        { text: "Always burns, rarely tans", type: "sensitive" },
                        { text: "Burns mildly, tans gradually", type: "normal" },
                        { text: "Rarely burns, tans easily", type: "resilient" },
                        { text: "Never burns, highly pigmented", type: "resilient" }
                    ]
                },
                {
                    question: "What is your main skin concern?",
                    subtitle: "Select the primary issue you want to solve.",
                    options: [
                        { text: "Acne and breakouts", concern: "acne" },
                        { text: "Fine lines and aging", concern: "aging" },
                        { text: "Dark spots and pigmentation", concern: "pigmentation" },
                        { text: "Dullness and lack of hydration", concern: "dullness" }
                    ]
                }
            ]
        },
        ar: {
            brand: "جلو كرافت",
            brandDesc: "بشرتك، أولويتنا",
            nav: ["الرئيسية", "المنتجات", "من نحن", "اتصل بنا"],
            heroTitle: "اكتشفي إشراقتك الطبيعية",
            heroDesc: "العناية بالبشرة المخصصة لبشرة أكثر صحة وإشراقاً وسعادة.",
            shopNow: "تسوقي الآن",
            findRoutine: "اعثري على روتينك",
            bestSelling: "المنتجات الأكثر مبيعاً",
            weeklyOffers: "العروض الأسبوعية",
            shopByCategory: "التسوق حسب الفئة",
            viewAll: "عرض الكل",
            backToHome: "← العودة للرئيسية",
            quizTitle: "لا تعرفين نوع بشرتك؟",
            quizDesc: "أجري اختبار البشرة الخاص بنا واكتشفي روتينك المثالي.",
            quizBtn: "اعثري على روتينك",
            quickLinksTitle: "روابط سريعة",
            customerCareTitle: "خدمة العملاء",
            followUsTitle: "تابعنا",
            quickLinks: ["الرئيسية", "المنتجات", "من نحن", "اتصل بنا"],
            customerCare: ["الأسئلة الشائعة", "الشحن", "الإرجاع", "الدعم"],
            rights: "© 2026 جلو كرافت. جميع الحقوق محفوظة.",
            categories: [
                { name: "غسول البشرة", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1u8buBSU7gZosWeLilDRS-tTmw6el-Y7A0JBCmhsxUA&s=10" },
                { name: "السيروم", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI9dPA7OIY832IuGsQaMA-eCbXln-Z0cNuYbu4khNZ0g&s=10" },
                { name: "مرطبات", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWrxFnM2o32OQhiqRjvYyYJ_cHoTCqbf6REqUzVqZ8ow&s" },
                { name: "واقي شمس", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwoUIzIjfHYMGmaHXCZL4zuaZ_NecNMErIvAn5WaXuNQ&s" },
                { name: "ماسكات", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZmFdM5JbXvAgvhG8N6-LnYLvg7DG9vAGG1WyqmJPo5g&s=10" }
            ],
            features: [
                { title: "شحن مجاني", desc: "للطلبات التي تزيد عن 50$", icon: "fa-solid fa-truck" },
                { title: "مكونات طبيعية", desc: "آمنة وفعالة", icon: "fa-solid fa-leaf" },
                { title: "خبراء العناية", desc: "موثوق به من 10 آلاف+", icon: "fa-solid fa-shield-alt" }
            ],
            quizQuestions: [
                {
                    question: "كيف تشعرين بشرتك بعد غسلها؟",
                    subtitle: "دعينا نكتشف ما تحتاجه بشرتك لتوهج طبيعي.",
                    options: [
                        { text: "مشدودة جداً أو جافة", type: "dry" },
                        { text: "لامعة وتهيجها الدهون", type: "oily" },
                        { text: "دهنية في منطقة T-zone وجافة في الباقي", type: "combination" },
                        { text: "متوازنة ومريحة", type: "normal" }
                    ]
                },
                {
                    question: "كيف تتفاعل بشرتك مع الشمس؟",
                    subtitle: "فهم حساسية بشرتك يساعدنا في اختيار الحماية المناسبة.",
                    options: [
                        { text: "تحترق دائماً ونادراً ما تكتسب سمرة", type: "sensitive" },
                        { text: "تحترق قليلاً وتكتسب سمرة تدريجياً", type: "normal" },
                        { text: "نادراً ما تحترق وتكتسب سمرة بسهولة", type: "resilient" },
                        { text: "لا تحترق أبداً ولديها تصبغ عالي", type: "resilient" }
                    ]
                },
                {
                    question: "ما هي مشكلتك الأساسية في البشرة؟",
                    subtitle: "حددي المشكلة الرئيسية التي ترغبين في حلها.",
                    options: [
                        { text: "حب الشباب والبثور", concern: "acne" },
                        { text: "الخطوط الدقيقة والشيخوخة", concern: "aging" },
                        { text: "البقع الداكنة والتصبغات", concern: "pigmentation" },
                        { text: "الباهتة ونقص الترطيب", concern: "dullness" }
                    ]
                }
            ]
        }
    };

    const currentText = t[lang];

    const routineRecommendations = {
        oily: {
            titleEn: "Oily Skin Care Routine",
            titleAr: "روتين العناية بالبشرة الدهنية",
            descEn: "Your skin produces excess sebum. Focus on deep cleansing, oil control, and gentle exfoliation without clogging pores.",
            descAr: "تفرز بشرتك كميات إضافية من الدهون. التركيز هنا يجب أن يكون على التنظيف العميق، التحكم في الدهون، والتقشير اللطيف دون سد المسام.",
            cleanser: lang === 'en' ? "Gel Cleanser with Salicylic Acid (BHA)" : "غسول جل بحمض الساليسيليك (Salicylic Acid)",
            serum: lang === 'en' ? "Niacinamide 10% Serum (for oil control & pores)" : "سيروم نياسيناميد 10% (للتحكم بالدهون وتنقية المسام)",
            moisturizer: lang === 'en' ? "Oil-free & Lightweight Gel Moisturizer (with Hyaluronic Acid)" : "مرطب جل خفيف وخالي من الزيوت (يحتوي على الهيالورونيك)",
            sunscreen: lang === 'en' ? "Matte / Fluid Mineral Sunscreen SPF 50+" : "واقي شمس فلود أو مطفي (Matte) حماية SPF 50+"
        },
        dry: {
            titleEn: "Dry Skin Care Routine",
            titleAr: "روتين العناية بالبشرة الجافة",
            descEn: "Your skin lacks moisture and lipid barrier strength. Focus on intense hydration, ceramides, and nourishing ingredients.",
            descAr: "تعاني بشرتك من نقص الترطيب وضعف حاجز البشرة. التركيز هنا على الترطيب المكثف، السيراميد، والمكونات المغذية.",
            cleanser: lang === 'en' ? "Creamy or Hydrating Non-stripping Cleanser" : "غسول كريمي مرطب لا يجرّد البشرة من زيوتها",
            serum: lang === 'en' ? "Hyaluronic Acid + Vitamin B5 Serum" : "سيروم حمض الهيالورونيك وفيتامين B5",
            moisturizer: lang === 'en' ? "Rich Barrier Repair Cream with Ceramides & Shea Butter" : "كريم غني لإصلاح الحاجز الوقائي يحتوي على السيراميد",
            sunscreen: lang === 'en' ? "Hydrating Sunscreen Milk SPF 50+" : "حليب وقاية من الشمس مرطب SPF 50+"
        },
        combination: {
            titleEn: "Combination Skin Care Routine",
            titleAr: "روتين العناية بالبشرة المختلطة",
            descEn: "Your skin is oily in the T-zone and dry elsewhere. Focus on balancing hydration levels without triggering breakouts.",
            descAr: "بشرتك دهنية في منطقة الجبهة والأنف (T-zone) وجافة في باقي الوجه. التركيز على موازنة الترطيب دون التسبب في حبوب.",
            cleanser: lang === 'en' ? "Balanced Foaming Gentle Cleanser" : "غسول رغوي لطيف ومتوازن",
            serum: lang === 'en' ? "Niacinamide Serum for T-zone & Hydration for Cheeks" : "سيروم نياسيناميد للتحكم وموازنة الإفرازات",
            moisturizer: lang === 'en' ? "Lightweight Balancing Gel-Cream" : "جل-كريم خفيف ومتوازن",
            sunscreen: lang === 'en' ? "Lightweight Invisible Sunscreen SPF 50+" : "واقي شمس خفيف وغير مرئي SPF 50+"
        },
        normal: {
            titleEn: "Normal / Balanced Skin Care Routine",
            titleAr: "روتين العناية بالبشرة العادية / المتوازنة",
            descEn: "Your skin is naturally well-balanced. Focus on maintaining skin health, antioxidant protection, and daily prevention.",
            descAr: "بشرتك متوازنة وطبيعية بشكل جيد. التركيز على الحفاظ على صحة البشرة، الحماية بمضادات الأكسدة، والوقاية اليومية.",
            cleanser: lang === 'en' ? "Gentle Daily Cleanser" : "غسول يومي لطيف ومنعش",
            serum: lang === 'en' ? "Vitamin C Glow Serum (for radiance & antioxidants)" : "سيروم فيتامين سي للإشراقة ومضادات الأكسدة",
            moisturizer: lang === 'en' ? "Daily Hydrating Lotion with Peptides" : "لوشن ترطيب يومي خفيف",
            sunscreen: lang === 'en' ? "Daily Broad-Spectrum Sunscreen SPF 50+" : "واقي شمس واسع المدى SPF 50+"
        }
    };

    const allBestSellers = [
        { name: lang === 'en' ? 'Hydrating Toner' : 'تونر مرطب للبشرة', price: '19.99', img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ_WUKew_1p6d073m_-lF121n8CNxOyoYCuEumhsh9vb13luKgklZqQnT6_OwXdcHwkCPUB926bu5dDBeLzvZeZFha8vkQJoauGfNWwZY0heeFSTnAmv96b6ynxTzx5bwms3JNxuiJr&usqp=CAc' },
        { name: lang === 'en' ? 'Niacinamide Serum' : 'سيروم نياسيناميد', price: '21.99', img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSG8z5_wQ9TuvbaiCZSJ0jKBDP0DjZg0_Q3i9ZEFGR7aHVBwGobNWeAcXa9jSsDLlcfHdb8NKZFWQ6CXWWsUNWCeownV4-f6RLnQt4_9PVdnd3iJ2wvHAZ6upkCWfCRoqI9OF5Oig&usqp=CAc' },
        { name: lang === 'en' ? 'Eye Contour Gel' : 'جل محيط العين', price: '15.99', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsjJxdQottQCNC21yFoNq6CYqFchT8jAFx22HnwBDcA&s=10' },
        { name: lang === 'en' ? 'Barrier Repair Balm' : 'بلسم إصلاح الحاجز', price: '25.99', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrx5mazOKRE_YjXC92YVrYsLAzbwWenLFfRsK6cIQ4A&s=10' },
        { name: lang === 'en' ? 'Vitamin C Glow Serum' : 'سيروم فيتامين سي', price: '24.99', img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQVwsjVXbkZWoFujNKe8R83NRe1QPvtLgOQSoMJpOL1D5U75N059503JrLT2rPB5-1mXBfPZ139nKKkQY4aDDSQfB_z8S5YX2lnUA--JqF1w5SqaLOVFormHJUX-9qwT3NVFQOJvdM&usqp=CAc' }
    ];

    const allWeeklyOffers = [
        { name: lang === 'en' ? 'Eva Skin Care Honey Cream' : 'كريم إيفا بالعسل للبشرة', price: 'EGP 120', old: 'EGP 160', disc: '-25%', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHt2GzSeDsssu-28-63raAJRZ7ZNLap8fqAy45_oDuWQ&s' },
        { name: lang === 'en' ? 'Starville Whitening Cream' : 'كريم ستارفيل للتفتيح', price: 'EGP 180', old: 'EGP 230', disc: '-22%', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxtF5QZ_GmlW_r04i_21cjbbBluZCMflbHH4DEus2Rjg&s=10' },
        { name: lang === 'en' ? 'Bebat Panthenol Cream' : 'كريم بانثينول المرطب', price: 'EGP 45', old: 'EGP 60', disc: '-25%', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4_ydscRbfpNrPeXNw0zP8vT172nsvjJFLNMHl3WrJQ&s=10' },
        { name: lang === 'en' ? 'Luna Cold Cream' : 'كريم لونا المرطب', price: 'EGP 35', old: 'EGP 50', disc: '-30%', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFTLsh0VazfJThtZVDQHiJQsdBHHzgqp8QQxZuFB7N_g&s=10' },
        { name: lang === 'en' ? 'Sekem Organic Jojoba Oil' : 'زيت جوجوبا سيكم العضوي', price: 'EGP 95', old: 'EGP 130', disc: '-27%', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUDL_HqS8IB83WBPOnyvJvq6XHWFaCSilT0nQg7LJnaA&s=10' }
    ];

    const displayedBestSellers = activeView === 'allBest' ? allBestSellers : allBestSellers.slice(0, 4);
    const displayedOffers = activeView === 'allOffers' ? allWeeklyOffers : allWeeklyOffers.slice(0, 4);

    const theme = {
        bgCream: darkMode ? '#37433c' : '#fbf9f6',
        cardBg: darkMode ? '#1e341e' : '#ffffff',
        textMain: darkMode ? '#f0f4f0' : '#2d3748',
        textMuted: darkMode ? '#91af91' : '#718096',
        accentGreen: darkMode ? '#8fb38f' : '#374737',
        borderColor: darkMode ? '#3e4a3e' : '#f0eae1',
        priceGreen: darkMode ? '#36724d' : '#36473f',
        heroStart: darkMode ? 'rgba(30, 52, 30, 0.92)' : 'rgba(251, 249, 246, 0.95)',
        heroEnd: darkMode ? 'rgba(30, 52, 30, 0.5)' : 'rgba(251, 249, 246, 0.4)',
        btnLightBg: darkMode ? 'rgba(5, 19, 5, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        btnLightBorder: darkMode ? '#364e36' : '#cbd5e0',
        catImgBg: darkMode ? '#a9f4a9' : '#f2ece4',
        catImgBorder: darkMode ? '#4e5e4e' : '#e2dcd2',
        quizBannerBg: darkMode ? '#1e341e' : 'linear-gradient(135deg, #f0e9dc 0%, #faeee3 100%)',
        productImgBg: darkMode ? '#96b596' : '#f7f5f0',
        discountBg: darkMode ? '#1e341e' : '#e53e3e',
        footerBg: darkMode ? '#1e341e' : '#374737',
        footerText: darkMode ? '#f0f4f0' : '#ffffff',
    };

    const handleOptionSelect = (option) => {
        const updatedAnswers = { ...quizAnswers, [quizStep]: option };
        setQuizAnswers(updatedAnswers);

        if (quizStep < currentText.quizQuestions.length - 1) {
            setQuizStep(quizStep + 1);
        } else {
            const skinTypeKey = updatedAnswers[0]?.type || 'normal';
            setQuizResultData(routineRecommendations[skinTypeKey]);
        }
    };

    const startQuiz = () => {
        setQuizStep(0);
        setQuizAnswers({});
        setQuizResultData(null);
        setActiveView('quiz');
    };

    return (
        <div style={{
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            backgroundColor: theme.bgCream,
            color: theme.textMain,
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            direction: lang === 'ar' ? 'rtl' : 'ltr',
            overflowX: 'hidden',
            transition: 'background-color 0.3s ease, color 0.3s ease'
        }}>

            {/* Header */}
            <header style={{
                backgroundColor: theme.cardBg,
                padding: '15px 30px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '15px',
                borderBottom: `1px solid ${theme.borderColor}`,
                boxShadow: darkMode ? 'none' : '0 2px 10px rgba(0,0,0,0.03)'
            }}>
                <div style={{ fontSize: '22px', fontWeight: 'bold', cursor: 'pointer', color: theme.accentGreen }} onClick={() => setActiveView('home')}>
                    {currentText.brand}
                </div>

                <nav style={{ display: 'flex', gap: '20px', fontSize: '14px', fontWeight: '500', flexWrap: 'wrap', color: theme.textMain }}>
                    <span style={{ cursor: 'pointer' }} onClick={() => setActiveView('home')}>
                        {currentText.nav[0]}
                    </span>
                    {/* زر المنتجات الذي يفتح صفحة الـ Products */}
                    <span style={{ cursor: 'pointer', fontWeight: activeView === 'Products' ? 'bold' : 'normal', color: activeView === 'Products' ? theme.accentGreen : 'inherit' }} onClick={() => setActiveView('Products')}>
                        {currentText.nav[1]}
                    </span>
                    <span style={{ cursor: 'pointer', opacity: 0.7 }} onClick={() => setActiveView('home')}>
                        {currentText.nav[2]}
                    </span>
                    <span style={{ cursor: 'pointer', opacity: 0.7 }} onClick={() => setActiveView('home')}>
                        {currentText.nav[3]}
                    </span>
                </nav>

                <div style={{ display: 'flex', gap: '18px', alignItems: 'center', fontSize: '15px' }}>
                    <i className="fa-solid fa-magnifying-glass" style={{ cursor: 'pointer' }}></i>
                    <i className="fa-regular fa-heart" style={{ cursor: 'pointer' }}></i>
                    <i className="fa-solid fa-shopping-bag" style={{ cursor: 'pointer' }}></i>

                    <span
                        onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                        style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', fontSize: '12px', background: darkMode ? 'rgba(255,255,255,0.1)' : '#f2ece4', padding: '4px 10px', borderRadius: '15px', color: theme.textMain }}>
                        <i className="fa-solid fa-globe"></i> {lang === 'en' ? 'العربية' : 'English'}
                    </span>

                    <i
                        className={darkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}
                        onClick={() => setDarkMode(!darkMode)}
                        style={{ cursor: 'pointer', fontSize: '16px', color: darkMode ? '#f1c40f' : theme.accentGreen }}
                    ></i>
                </div>
            </header>

            {/* QUIZ VIEW */}
            {activeView === 'quiz' && (
                <section style={{ padding: '40px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <div style={{
                        background: theme.cardBg,
                        borderRadius: '24px',
                        padding: '40px 30px',
                        maxWidth: '700px',
                        width: '100%',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.06)',
                        border: `1px solid ${theme.borderColor}`,
                        textAlign: 'center'
                    }}>
                        {!quizResultData ? (
                            <>
                                <h2 style={{ fontSize: '26px', fontWeight: '700', margin: '0 0 8px 0', color: theme.textMain }}>Skin Type Quiz</h2>
                                <p style={{ fontSize: '14px', color: theme.textMuted, margin: '0 0 30px 0' }}>{currentText.quizQuestions[quizStep].subtitle}</p>

                                <div style={{ fontSize: '18px', fontWeight: '600', marginBottom: '25px', color: theme.textMain }}>
                                    {currentText.quizQuestions[quizStep].question}
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '35px' }}>
                                    {currentText.quizQuestions[quizStep].options.map((opt, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleOptionSelect(opt)}
                                            style={{
                                                backgroundColor: theme.bgCream,
                                                color: theme.textMain,
                                                border: `1px solid ${theme.borderColor}`,
                                                padding: '15px 20px',
                                                borderRadius: '12px',
                                                fontSize: '14px',
                                                fontWeight: '500',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s',
                                                boxShadow: '0 2px 5px rgba(0,0,0,0.02)'
                                            }}
                                            onMouseOver={(e) => e.currentTarget.style.borderColor = theme.accentGreen}
                                            onMouseOut={(e) => e.currentTarget.style.borderColor = theme.borderColor}
                                        >
                                            {opt.text}
                                        </button>
                                    ))}
                                </div>

                                <div style={{ fontSize: '13px', color: theme.textMuted, marginBottom: '20px' }}>
                                    Question {quizStep + 1} of {currentText.quizQuestions.length}
                                </div>
                            </>
                        ) : (
                            <div style={{ textAlign: (lang === 'ar' ? 'right' : 'left') }}>
                                <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '10px', color: theme.accentGreen, textAlign: 'center' }}>
                                    {lang === 'ar' ? quizResultData.titleAr : quizResultData.titleEn}
                                </h2>
                                <p style={{ fontSize: '14px', color: theme.textMuted, marginBottom: '25px', textAlign: 'center' }}>
                                    {lang === 'ar' ? quizResultData.descAr : quizResultData.descEn}
                                </p>

                                <div style={{ background: theme.bgCream, padding: '20px', borderRadius: '15px', marginBottom: '25px', border: `1px solid ${theme.borderColor}` }}>
                                    <h4 style={{ margin: '0 0 15px 0', fontSize: '16px', color: theme.textMain, fontWeight: '700' }}>
                                        {lang === 'ar' ? '✨ الروتين والمكونات الموصى بها علمياً:' : '✨ Recommended Routine & Formulations:'}
                                    </h4>
                                    <ul style={{ margin: 0, paddingInlineStart: '20px', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
                                        <li><strong>{lang === 'ar' ? 'الغسول المناسب:' : 'Cleanser:'}</strong> {quizResultData.cleanser}</li>
                                        <li><strong>{lang === 'ar' ? 'السيروم العلاجي:' : 'Treatment Serum:'}</strong> {quizResultData.serum}</li>
                                        <li><strong>{lang === 'ar' ? 'المرطب:' : 'Moisturizer:'}</strong> {quizResultData.moisturizer}</li>
                                        <li><strong>{lang === 'ar' ? 'الحماية من الشمس:' : 'Sunscreen:'}</strong> {quizResultData.sunscreen}</li>
                                    </ul>
                                </div>

                                <div style={{ textAlign: 'center' }}>
                                    <button
                                        onClick={() => setActiveView('home')}
                                        style={{ backgroundColor: theme.accentGreen, color: darkMode ? '#1e341e' : '#ffffff', border: 'none', padding: '12px 30px', borderRadius: '25px', fontSize: '14px', fontWeight: '700', cursor: 'pointer' }}
                                    >
                                        {currentText.shopNow}
                                    </button>
                                </div>
                            </div>
                        )}

                        <div style={{ marginTop: '20px', textAlign: 'center' }}>
                            <span onClick={() => setActiveView('home')} style={{ color: theme.accentGreen, fontWeight: '600', fontSize: '14px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                                {currentText.backToHome}
                            </span>
                        </div>
                    </div>
                </section>
            )}

            {/* HOME VIEW */}
            {activeView === 'home' && (
                <section style={{ padding: '30px 20px' }}>
                    <div style={{
                        backgroundImage: `linear-gradient(${theme.heroStart}, ${theme.heroEnd}), url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqYOnex7vaTDNE-hUjpK9GSLGwnbJGnxqbPz9nK0NTlw&s=10)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '25px',
                        padding: '60px 40px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        minHeight: '380px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        border: `1px solid ${theme.borderColor}`
                    }}>
                        <h1 style={{ fontSize: 'clamp(32px, 5vw, 50px)', fontWeight: '700', lineHeight: '1.2', maxWidth: '550px', margin: '0 0 15px 0', color: theme.textMain }}>
                            {currentText.heroTitle}
                        </h1>
                        <p style={{ fontSize: '16px', color: theme.textMuted, maxWidth: '420px', margin: '0 0 30px 0', fontWeight: '400' }}>
                            {currentText.heroDesc}
                        </p>
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                            <button onClick={() => setActiveView('Products')} style={{ backgroundColor: theme.accentGreen, color: darkMode ? '#1e341e' : '#ffffff', border: 'none', padding: '12px 25px', borderRadius: '30px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
                                {currentText.shopNow}
                            </button>
                            <button onClick={startQuiz} style={{ backgroundColor: theme.btnLightBg, color: theme.textMain, border: `1px solid ${theme.btnLightBorder}`, padding: '12px 25px', borderRadius: '30px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
                                {currentText.findRoutine}
                            </button>
                        </div>
                    </div>
                </section>
            )}

            {/* PRODUCTS VIEW - صفحة المنتجات الفعلية */}
            {activeView === 'Products' && <AllProducts />}

            {/* Back to Home Link for other views */}
            {activeView !== 'home' && activeView !== 'quiz' && activeView !== 'Products' && (
                <div style={{ padding: '20px 30px 0 30px' }}>
                    <span onClick={() => setActiveView('home')} style={{ color: theme.accentGreen, fontWeight: '600', fontSize: '15px', cursor: 'pointer' }}>
                        {currentText.backToHome}
                    </span>
                </div>
            )}

            {/* 1. Best Selling Products */}
            {(activeView === 'home' || activeView === 'allBest') && (
                <section style={{ padding: '30px 20px', flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <h2 style={{ fontSize: '22px', fontWeight: '700', color: theme.textMain }}>{currentText.bestSelling}</h2>
                        {activeView === 'home' ? (
                            <span onClick={() => setActiveView('allBest')} style={{ color: theme.accentGreen, fontWeight: '600', fontSize: '14px', cursor: 'pointer' }}>
                                {currentText.viewAll}
                            </span>
                        ) : null}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                        {displayedBestSellers.map((prod, idx) => (
                            <div key={idx} style={{ background: theme.cardBg, borderRadius: '18px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', border: `1px solid ${theme.borderColor}`, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ background: theme.productImgBg, height: '180px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '15px' }}>
                                    <img src={prod.img} alt={prod.name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', mixBlendMode: darkMode ? 'normal' : 'multiply' }} />
                                </div>
                                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                                    <h4 style={{ fontSize: '16px', fontWeight: 600, margin: '0 0 15px 0', color: theme.textMain }}>{prod.name}</h4>
                                    <div style={{ fontWeight: 700, color: theme.priceGreen, fontSize: '16px' }}>{prod.price}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* 2. Weekly Offers */}
            {(activeView === 'home' || activeView === 'allOffers') && (
                <section style={{ padding: '30px 20px', flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <h2 style={{ fontSize: '22px', fontWeight: '700', color: theme.textMain }}>{currentText.weeklyOffers}</h2>
                        {activeView === 'home' ? (
                            <span onClick={() => setActiveView('allOffers')} style={{ color: theme.accentGreen, fontWeight: '600', fontSize: '14px', cursor: 'pointer' }}>
                                {currentText.viewAll}
                            </span>
                        ) : null}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                        {displayedOffers.map((prod, idx) => (
                            <div key={idx} style={{ background: theme.cardBg, borderRadius: '18px', overflow: 'hidden', position: 'relative', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', border: `1px solid ${theme.borderColor}`, display: 'flex', flexDirection: 'column' }}>
                                <span style={{ position: 'absolute', top: '15px', [lang === 'ar' ? 'right' : 'left']: '15px', background: theme.discountBg, color: '#fff', padding: '3px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 700, zIndex: 2, border: darkMode ? '1px solid #3e4a3e' : 'none' }}>
                                    {prod.disc}
                                </span>
                                <div style={{ background: theme.productImgBg, height: '180px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '15px' }}>
                                    <img src={prod.img} alt={prod.name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', mixBlendMode: darkMode ? 'normal' : 'multiply' }} />
                                </div>
                                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                                    <h4 style={{ fontSize: '16px', fontWeight: 600, margin: '0 0 15px 0', color: theme.textMain }}>{prod.name}</h4>
                                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                        <span style={{ fontWeight: 700, color: theme.priceGreen, fontSize: '16px' }}>{prod.price}</span>
                                        <span style={{ textDecoration: 'line-through', color: theme.textMuted, fontSize: '13px' }}>{prod.old}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* 3. Shop By Category */}
            {activeView === 'home' && (
                <section style={{ padding: '30px 20px' }}>
                    <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '25px', color: theme.textMain }}>{currentText.shopByCategory}</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '20px', textAlign: 'center' }}>
                        {currentText.categories.map((cat, idx) => (
                            <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }} onClick={() => setActiveView('Products')}>
                                <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', backgroundColor: theme.catImgBg, border: `3px solid ${theme.catImgBorder}`, marginBottom: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                                    <img src={cat.img} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <h5 style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: theme.textMain }}>{cat.name}</h5>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* 4. Skin Quiz Banner */}
            {activeView === 'home' && (
                <section style={{ padding: '30px 20px' }}>
                    <div style={{
                        background: theme.quizBannerBg,
                        backgroundColor: darkMode ? theme.quizBannerBg : undefined,
                        borderRadius: '25px',
                        padding: '35px 40px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '20px',
                        boxShadow: '0 5px 20px rgba(0,0,0,0.03)',
                        border: `1px solid ${theme.borderColor}`
                    }}>
                        <div>
                            <h2 style={{ fontSize: '24px', fontWeight: '700', margin: '0 0 10px 0', color: theme.textMain }}>{currentText.quizTitle}</h2>
                            <p style={{ fontSize: '14px', color: theme.textMuted, margin: '0 0 20px 0' }}>{currentText.quizDesc}</p>
                            <button onClick={startQuiz} style={{ backgroundColor: theme.accentGreen, color: darkMode ? '#1e341e' : '#ffffff', border: 'none', padding: '10px 22px', borderRadius: '25px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
                                {currentText.quizBtn}
                            </button>
                        </div>

                        <div style={{ background: darkMode ? '#243124' : '#f5dccb', padding: '10px', borderRadius: '15px', maxWidth: '240px', textAlign: 'center', color: theme.textMain, boxShadow: '0 4px 10px rgba(0,0,0,0.05)', cursor: 'pointer' }} onClick={startQuiz}>
                            <img src="https://thecampbellconnection.com/wp-content/uploads/2020/04/beautycounter-skincare-quiz-cover.png" alt="Quiz" style={{ width: '100%', height: '110px', objectFit: 'cover', borderRadius: '10px', marginBottom: '8px' }} />
                            <div style={{ fontSize: '12px', fontWeight: '600' }}>Natural Skincare Quiz</div>
                        </div>
                    </div>
                </section>
            )}

            {/* Features Footer Section */}
            {activeView === 'home' && (
                <section style={{ padding: '30px 20px', display: 'flex', justifyContent: 'space-around', borderTop: `1px solid ${theme.borderColor}`, flexWrap: 'wrap', gap: '20px', backgroundColor: darkMode ? '#28382e' : '#f4efe6' }}>
                    {currentText.features.map((feat, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '15px', minWidth: '220px' }}>
                            <div style={{ fontSize: '22px', color: theme.accentGreen, width: '35px', textAlign: 'center' }}>
                                <i className={feat.icon}></i>
                            </div>
                            <div>
                                <h4 style={{ margin: '0 0 3px 0', fontSize: '14px', fontWeight: '600', color: theme.textMain }}>{feat.title}</h4>
                                <p style={{ margin: 0, fontSize: '12px', color: theme.textMuted }}>{feat.desc}</p>
                            </div>
                        </div>
                    ))}
                </section>
            )}

            {/* Main Footer */}
            <footer style={{
                backgroundColor: theme.footerBg,
                color: theme.footerText,
                padding: '50px 40px 30px 40px',
                borderTop: `1px solid ${theme.borderColor}`,
                marginTop: 'auto'
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '40px',
                    marginBottom: '40px',
                    alignItems: 'start'
                }}>
                    <div>
                        <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: '0 0 8px 0', color: theme.footerText }}>{currentText.brand}</h3>
                        <p style={{ fontSize: '13px', color: theme.textMuted, margin: 0 }}>{currentText.brandDesc}</p>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '15px', color: theme.footerText }}>{currentText.quickLinksTitle}</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: theme.textMuted }}>
                            {currentText.quickLinks.map((link, idx) => (
                                <li key={idx} style={{ cursor: 'pointer' }} onClick={() => setActiveView('home')}>{link}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '15px', color: theme.footerText }}>{currentText.customerCareTitle}</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: theme.textMuted }}>
                            {currentText.customerCare.map((item, idx) => (
                                <li key={idx} style={{ cursor: 'pointer' }}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '15px', color: theme.footerText }}>{currentText.followUsTitle}</h4>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                                <i className="fa-brands fa-facebook-f" style={{ fontSize: '13px', color: theme.footerText }}></i>
                            </div>
                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                                <i className="fa-brands fa-twitter" style={{ fontSize: '13px', color: theme.footerText }}></i>
                            </div>
                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                                <i className="fa-brands fa-pinterest-p" style={{ fontSize: '13px', color: theme.footerText }}></i>
                            </div>
                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                                <i className="fa-brands fa-instagram" style={{ fontSize: '13px', color: theme.footerText }}></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: `1px solid ${theme.borderColor}`,
                    paddingTop: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '15px',
                    fontSize: '12px',
                    color: theme.textMuted
                }}>
                    <div>{currentText.rights}</div>
                    <div style={{ display: 'flex', gap: '10px', fontSize: '16px', alignItems: 'center' }}>
                        <i className="fa-brands fa-cc-mastercard"></i>
                        <i className="fa-brands fa-cc-visa"></i>
                        <i className="fa-brands fa-cc-paypal"></i>
                    </div>
                </div>
            </footer>

        </div>
    );
}