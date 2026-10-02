import React, { useState } from 'react';
import {
  User,
  ShoppingBag,
  Heart,
  MapPin,
  Settings,
  LogOut,
  LayoutDashboard,
  Package,
  Layers,
  Tag,
  Users,
  Plus,
  Edit3,
  Trash2,
  Search,
  CheckCircle,
  X,
  Globe,
  Sparkles,
  TrendingUp
} from 'lucide-react';

const DEFAULT_AVATAR = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=90";

const INITIAL_PRODUCTS = [
  {
    id: 1,
    nameEn: 'Vitamin C Brightening Serum',
    nameAr: 'سيروم فيتامين سي للنضارة',
    category: 'Serums',
    price: 34.99,
    deals: 51,
    rating: 4.9,
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=90'
  },
  {
    id: 2,
    nameEn: 'Moisturizing Cream',
    nameAr: 'كريم مرطب مغذي للبشرة',
    category: 'Moisturizers',
    price: 18.99,
    deals: 30,
    rating: 4.8,
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1608248597369-245353528f1e?auto=format&fit=crop&w=800&q=90'
  },
  {
    id: 3,
    nameEn: 'Sunscreen SPF 50',
    nameAr: 'واقي شمس حماية مضاعفة',
    category: 'Sun Care',
    price: 16.99,
    deals: 20,
    rating: 4.7,
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=90'
  },
  {
    id: 4,
    nameEn: 'Purifying Clay Mask',
    nameAr: 'قناع الطين المنقي للبشرة',
    category: 'Masks',
    price: 12.99,
    deals: 15,
    rating: 4.6,
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1567928256034-738cb887d188?auto=format&fit=crop&w=800&q=90'
  },
  {
    id: 5,
    nameEn: 'Hydrating Botanical Cleanser',
    nameAr: 'غسول نباتي مرطب',
    category: 'Cleansers',
    price: 22.50,
    deals: 42,
    rating: 4.9,
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=90'
  },
  {
    id: 6,
    nameEn: 'Rose Water Clarifying Toner',
    nameAr: 'تونر ماء الورد للنعومة',
    category: 'Toners',
    price: 15.00,
    deals: 18,
    rating: 4.8,
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=90'
  }
];

export default function App() {
  const [lang, setLang] = useState('ar');
  const [currentView, setCurrentView] = useState('profile'); // 'profile' | 'admin'
  const [activeProfileTab, setActiveProfileTab] = useState('profile');
  const [activeAdminTab, setActiveAdminTab] = useState('dashboard');
  const [toastMessage, setToastMessage] = useState(null);

  const [profile, setProfile] = useState({
    fullName: 'مستخدم GlowCraft',
    fullNameEn: 'GlowCraft User',
    email: 'user@glowcraft.com',
    phone: '+20 101 234 5678',
    address: 'القاهرة، مصر / Cairo, Egypt'
  });

  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productForm, setProductForm] = useState({
    nameEn: '',
    nameAr: '',
    category: 'Serums',
    price: '',
    deals: 0,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=90'
  });

  const isRtl = lang === 'ar';

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleProfileSave = (e) => {
    e.preventDefault();
    showToast(isRtl ? 'تم حفظ التغييرات بنجاح!' : 'Changes saved successfully!');
  };

  const handleOpenAddModal = () => {
    setEditingProduct(null);
    setProductForm({
      nameEn: '',
      nameAr: '',
      category: 'Serums',
      price: '',
      deals: 10,
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=90'
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (product) => {
    setEditingProduct(product);
    setProductForm({
      nameEn: product.nameEn,
      nameAr: product.nameAr,
      category: product.category,
      price: product.price,
      deals: product.deals,
      image: product.image
    });
    setIsModalOpen(true);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
    showToast(isRtl ? 'تم حذف المنتج بنجاح' : 'Product deleted successfully');
  };

  const handleSaveProduct = (e) => {
    e.preventDefault();
    if (!productForm.nameEn && !productForm.nameAr) return;

    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? {
        ...p,
        nameEn: productForm.nameEn || p.nameEn,
        nameAr: productForm.nameAr || p.nameAr,
        category: productForm.category,
        price: parseFloat(productForm.price) || p.price,
        deals: parseInt(productForm.deals) || 0,
        image: productForm.image || p.image,
        status: 'Active'
      } : p));
      showToast(isRtl ? 'تم تحديث المنتج بنجاح' : 'Product updated successfully');
    } else {
      const newProd = {
        id: Date.now(),
        nameEn: productForm.nameEn || 'New Glow Product',
        nameAr: productForm.nameAr || 'منتج جديد',
        category: productForm.category,
        price: parseFloat(productForm.price) || 25.00,
        deals: parseInt(productForm.deals) || 5,
        rating: 5.0,
        status: 'Active',
        image: productForm.image || 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=90'
      };
      setProducts([newProd, ...products]);
      showToast(isRtl ? 'تم إضافة المنتج بنجاح' : 'Product added successfully');
    }
    setIsModalOpen(false);
  };

  const filteredProducts = products.filter(p => {
    const nameMatch = isRtl
      ? p.nameAr.toLowerCase().includes(searchQuery.toLowerCase())
      : p.nameEn.toLowerCase().includes(searchQuery.toLowerCase());
    const categoryMatch = selectedCategory === 'All' || p.category === selectedCategory;
    return nameMatch && categoryMatch;
  });

  return (
    <div
      className="min-h-screen font-sans bg-[#F7F4EE] text-[#2D3B2D] selection:bg-[#2D3B2D] selection:text-white"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 left-6 md:left-auto md:right-6 z-50 flex items-center gap-3 bg-[#2D3B2D] text-white px-5 py-3 rounded-xl shadow-2xl transition-all duration-300">
          <CheckCircle className="w-5 h-5 text-emerald-400" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Top Bar Navigation Switcher */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E2D5] px-4 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2D3B2D] flex items-center justify-center text-white shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight text-[#2D3B2D]">
              GlowCraft
            </span>
          </div>

          <div className="flex items-center bg-[#EFECE6] p-1.5 rounded-xl border border-[#E0DBCF]">
            <button
              onClick={() => setCurrentView('profile')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${currentView === 'profile'
                  ? 'bg-white text-[#2D3B2D] shadow-sm'
                  : 'text-stone-600 hover:text-[#2D3B2D]'
                }`}
            >
              <User className="w-4 h-4" />
              <span>{isRtl ? 'صفحة الملف الشخصي' : 'Profile Page'}</span>
            </button>
            <button
              onClick={() => setCurrentView('admin')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${currentView === 'admin'
                  ? 'bg-[#2D3B2D] text-white shadow-sm'
                  : 'text-stone-600 hover:text-[#2D3B2D]'
                }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>{isRtl ? 'لوحة التحكم (Admin)' : 'Admin Dashboard'}</span>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#E0DBCF] bg-white text-xs font-semibold hover:bg-stone-50 transition-colors"
            >
              <Globe className="w-4 h-4 text-[#2D3B2D]" />
              <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
            </button>

            <div className="flex items-center gap-3 border-r pr-4 border-[#E0DBCF] rtl:border-r-0 rtl:border-l rtl:pl-4 rtl:pr-0">
              <img
                src={DEFAULT_AVATAR}
                alt="Girl Profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm ring-2 ring-[#2D3B2D]/20"
              />
              <div className="hidden sm:block text-xs">
                <p className="font-bold text-[#2D3B2D]">{isRtl ? profile.fullName : profile.fullNameEn}</p>
                <p className="text-stone-500">{profile.email}</p>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Main Content Workspace */}
      <main className="max-w-7xl mx-auto p-4 md:p-8">

        { }
        {currentView === 'profile' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-serif font-bold text-[#2D3B2D]">
                {isRtl ? 'الملف الشخصي' : 'Profile'}
              </h1>
            </div>

            <div className="bg-white rounded-3xl border border-[#EBE6DC] shadow-sm p-4 md:p-8">
              <nav className="flex items-center gap-6 pb-6 mb-6 border-b border-[#F0EBE1] text-sm text-stone-500 font-medium">
                <span className="text-[#2D3B2D] font-bold border-b-2 border-[#2D3B2D] pb-1 cursor-pointer">
                  {isRtl ? 'الرئيسية' : 'Home'}
                </span>
                <span className="hover:text-[#2D3B2D] cursor-pointer">{isRtl ? 'المنتجات' : 'Products'}</span>
                <span className="hover:text-[#2D3B2D] cursor-pointer">{isRtl ? 'عن الشركة' : 'About'}</span>
                <span className="hover:text-[#2D3B2D] cursor-pointer">{isRtl ? 'تواصل معنا' : 'Contact'}</span>
              </nav>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                {/* Profile Sidebar */}
                <div className="md:col-span-4 lg:col-span-3 border-b md:border-b-0 md:border-r border-[#F0EBE1] rtl:md:border-r-0 rtl:md:border-l md:pr-6 rtl:md:pl-6 pb-6 md:pb-0">
                  <div className="flex flex-col items-center text-center pb-6 border-b border-[#F0EBE1]">
                    <div className="relative mb-3">
                      <img
                        src={DEFAULT_AVATAR}
                        alt="Profile Picture"
                        className="w-24 h-24 rounded-full object-cover border-4 border-[#FAF8F5] shadow-md ring-1 ring-stone-200"
                      />
                      <div className="absolute bottom-1 right-1 bg-emerald-500 w-4 h-4 rounded-full border-2 border-white"></div>
                    </div>
                    <h2 className="text-lg font-bold text-[#2D3B2D]">
                      {isRtl ? profile.fullName : profile.fullNameEn}
                    </h2>
                    <p className="text-xs text-stone-500">{profile.email}</p>
                  </div>

                  <ul className="mt-6 space-y-2">
                    {[
                      { id: 'profile', icon: User, labelAr: 'الملف الشخصي', labelEn: 'Profile' },
                      { id: 'orders', icon: ShoppingBag, labelAr: 'طلباتي', labelEn: 'My Orders' },
                      { id: 'wishlist', icon: Heart, labelAr: 'قائمة الرغبات', labelEn: 'Wishlist' },
                      { id: 'addresses', icon: MapPin, labelAr: 'العناوين', labelEn: 'Addresses' },
                      { id: 'settings', icon: Settings, labelAr: 'الإعدادات', labelEn: 'Settings' },
                      { id: 'logout', icon: LogOut, labelAr: 'تسجيل الخروج', labelEn: 'Logout', danger: true },
                    ].map(item => {
                      const Icon = item.icon;
                      const isActive = activeProfileTab === item.id;
                      return (
                        <li key={item.id}>
                          <button
                            onClick={() => setActiveProfileTab(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200 ${isActive
                                ? 'bg-[#EFECE6] text-[#2D3B2D] font-semibold'
                                : item.danger
                                  ? 'text-rose-600 hover:bg-rose-50'
                                  : 'text-stone-600 hover:bg-[#F7F4EE]'
                              }`}
                          >
                            <Icon className={`w-4 h-4 ${isActive ? 'text-[#2D3B2D]' : 'text-stone-500'}`} />
                            <span>{isRtl ? item.labelAr : item.labelEn}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Edit Profile Form */}
                <div className="md:col-span-8 lg:col-span-9 space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-[#2D3B2D]">
                      {isRtl ? 'تعديل الملف الشخصي' : 'Edit Profile'}
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      {isRtl ? 'تحديث معلومات الحساب الشخصية والعنوان' : 'Update your personal account information and address details.'}
                    </p>
                  </div>

                  <form onSubmit={handleProfileSave} className="space-y-5 max-w-2xl">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-2">
                        {isRtl ? 'الاسم الكامل' : 'Full Name'}
                      </label>
                      <input
                        type="text"
                        name={isRtl ? 'fullName' : 'fullNameEn'}
                        value={isRtl ? profile.fullName : profile.fullNameEn}
                        onChange={handleProfileChange}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E5DFD3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D3B2D]/30 focus:border-[#2D3B2D] text-sm"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-2">
                        {isRtl ? 'البريد الإلكتروني' : 'Email Address'}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleProfileChange}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E5DFD3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D3B2D]/30 focus:border-[#2D3B2D] text-sm"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-2">
                        {isRtl ? 'رقم الهاتف' : 'Phone Number'}
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={profile.phone}
                        onChange={handleProfileChange}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E5DFD3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D3B2D]/30 focus:border-[#2D3B2D] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-2">
                        {isRtl ? 'العنوان' : 'Address'}
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={profile.address}
                        onChange={handleProfileChange}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E5DFD3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D3B2D]/30 focus:border-[#2D3B2D] text-sm"
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3.5 bg-[#2D3B2D] hover:bg-[#1E291E] text-white rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200"
                      >
                        {isRtl ? 'حفظ التغيرات' : 'Save Changes'}
                      </button>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        )}

        { }
        {currentView === 'admin' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-serif font-bold text-[#2D3B2D]">
                {isRtl ? 'لوحة التحكم - Admin Dashboard' : 'Admin Dashboard'}
              </h1>
            </div>

            <div className="bg-white rounded-3xl border border-[#EBE6DC] shadow-sm p-4 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                {/* Admin Sidebar */}
                <div className="md:col-span-4 lg:col-span-3 border-b md:border-b-0 md:border-r border-[#F0EBE1] rtl:md:border-r-0 rtl:md:border-l md:pr-6 rtl:md:pl-6 pb-6 md:pb-0">
                  <div className="flex items-center gap-3 pb-6 border-b border-[#F0EBE1]">
                    <div className="w-8 h-8 rounded-lg bg-[#2D3B2D] flex items-center justify-center text-white">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="text-xl font-serif font-bold text-[#2D3B2D]">GlowCraft</span>
                  </div>

                  <ul className="mt-6 space-y-2">
                    {[
                      { id: 'dashboard', icon: LayoutDashboard, labelAr: 'لوحة التحكم', labelEn: 'Dashboard' },
                      { id: 'products', icon: Package, labelAr: 'المنتجات', labelEn: 'Products' },
                      { id: 'categories', icon: Layers, labelAr: 'الأقسام', labelEn: 'Categories' },
                      { id: 'offers', icon: Tag, labelAr: 'العروض', labelEn: 'Offers' },
                      { id: 'orders', icon: ShoppingBag, labelAr: 'الطلبات', labelEn: 'Orders' },
                      { id: 'users', icon: Users, labelAr: 'المستخدمين', labelEn: 'Users' },
                    ].map(item => {
                      const Icon = item.icon;
                      const isActive = activeAdminTab === item.id;
                      return (
                        <li key={item.id}>
                          <button
                            onClick={() => setActiveAdminTab(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200 ${isActive
                                ? 'bg-[#EFECE6] text-[#2D3B2D] font-bold shadow-xs'
                                : 'text-stone-600 hover:bg-[#F7F4EE]'
                              }`}
                          >
                            <Icon className={`w-4 h-4 ${isActive ? 'text-[#2D3B2D]' : 'text-stone-500'}`} />
                            <span>{isRtl ? item.labelAr : item.labelEn}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Dashboard Main Stats and Products Table */}
                <div className="md:col-span-8 lg:col-span-9 space-y-8">

                  <div>
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold text-[#2D3B2D]">
                        {isRtl ? 'لوحة التحكم' : 'Dashboard'}
                      </h2>
                      <div className="flex items-center gap-6 text-xs text-stone-500 font-medium hidden sm:flex">
                        <span className="hover:text-[#2D3B2D] cursor-pointer">{isRtl ? 'الرئيسية' : 'Home'}</span>
                        <span className="hover:text-[#2D3B2D] cursor-pointer">{isRtl ? 'المنتجات' : 'Products'}</span>
                        <span className="hover:text-[#2D3B2D] cursor-pointer">{isRtl ? 'عن الشركة' : 'About'}</span>
                        <span className="hover:text-[#2D3B2D] cursor-pointer">{isRtl ? 'تواصل معنا' : 'Contact'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Stat Cards */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { titleAr: 'إجمالي المنتجات', titleEn: 'Total Products', value: '120' },
                      { titleAr: 'إجمالي الطلبات', titleEn: 'Total Orders', value: '35' },
                      { titleAr: 'إجمالي المستخدمين', titleEn: 'Total Users', value: '250' },
                      { titleAr: 'إجمالي العروض', titleEn: 'Total Offers', value: '12' },
                    ].map((stat, idx) => (
                      <div
                        key={idx}
                        className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#EBE6DC] flex flex-col justify-between hover:shadow-md transition-shadow"
                      >
                        <span className="text-xs font-semibold text-stone-500">
                          {isRtl ? stat.titleAr : stat.titleEn}
                        </span>
                        <div className="mt-3 flex items-baseline justify-between">
                          <span className="text-3xl font-bold text-[#2D3B2D]">{stat.value}</span>
                          <TrendingUp className="w-4 h-4 text-emerald-600" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Products Section */}
                  <div className="pt-4 border-t border-[#F0EBE1]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-[#2D3B2D]">
                          {isRtl ? 'المنتجات' : 'Products'}
                        </h3>
                        <p className="text-xs text-stone-500 mt-0.5">
                          {isRtl ? 'إدارة كتالوج جميع المنتجات وتفاصيلها' : 'Manage your product inventory and view details.'}
                        </p>
                      </div>

                      <button
                        onClick={handleOpenAddModal}
                        className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#2D3B2D] hover:bg-[#1E291E] text-white rounded-xl text-sm font-bold shadow-sm hover:shadow-md transition-all"
                      >
                        <Plus className="w-4 h-4" />
                        <span>{isRtl ? 'إضافة منتج' : 'Add Product'}</span>
                      </button>
                    </div>

                    {/* Filter controls */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
                      <div className="relative w-full sm:w-72">
                        <Search className="w-4 h-4 absolute left-3 rtl:right-3 rtl:left-auto top-3 text-stone-400" />
                        <input
                          type="text"
                          placeholder={isRtl ? 'بحث باسم المنتج...' : 'Search product...'}
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-9 rtl:pr-9 rtl:pl-3 py-2 bg-[#FAF8F5] border border-[#E5DFD3] rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-[#2D3B2D]"
                        />
                      </div>

                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full sm:w-auto px-3 py-2 bg-[#FAF8F5] border border-[#E5DFD3] rounded-xl text-xs focus:outline-none text-stone-700 font-medium"
                      >
                        <option value="All">{isRtl ? 'جميع الأقسام' : 'All Categories'}</option>
                        <option value="Serums">{isRtl ? 'السيروم (Serums)' : 'Serums'}</option>
                        <option value="Moisturizers">{isRtl ? 'المرطبات (Moisturizers)' : 'Moisturizers'}</option>
                        <option value="Sun Care">{isRtl ? 'واقي الشمس (Sun Care)' : 'Sun Care'}</option>
                        <option value="Masks">{isRtl ? 'الأقنعة (Masks)' : 'Masks'}</option>
                      </select>
                    </div>

                    {/* Products Table */}
                    <div className="overflow-x-auto rounded-2xl border border-[#EBE6DC]">
                      <table className="w-full text-left rtl:text-right border-collapse">
                        <thead>
                          <tr className="bg-[#FAF8F5] text-stone-500 text-xs font-semibold border-b border-[#EBE6DC]">
                            <th className="py-3.5 px-4">{isRtl ? 'الصورة' : 'Image'}</th>
                            <th className="py-3.5 px-4">{isRtl ? 'الاسم' : 'Name'}</th>
                            <th className="py-3.5 px-4">{isRtl ? 'السعر' : 'Price'}</th>
                            <th className="py-3.5 px-4">{isRtl ? 'المبيعات / العروض' : 'Deals'}</th>
                            <th className="py-3.5 px-4">{isRtl ? 'الحالة' : 'Status'}</th>
                            <th className="py-3.5 px-4 text-center">{isRtl ? 'الإجراءات' : 'Actions'}</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F0EBE1] text-sm">
                          {filteredProducts.map((product) => (
                            <tr key={product.id} className="hover:bg-[#FAF8F5]/60 transition-colors">
                              <td className="py-3 px-4">
                                <img
                                  src={product.image}
                                  alt={product.nameEn}
                                  className="w-12 h-12 rounded-xl object-cover border border-[#E5DFD3] shadow-xs"
                                />
                              </td>
                              <td className="py-3 px-4 font-semibold text-[#2D3B2D]">
                                {isRtl ? product.nameAr : product.nameEn}
                                <span className="block text-[11px] font-normal text-stone-400">
                                  {product.category}
                                </span>
                              </td>
                              <td className="py-3 px-4 font-bold text-stone-800">
                                ${product.price.toFixed(2)}
                              </td>
                              <td className="py-3 px-4 text-stone-600 font-medium">
                                {product.deals}
                              </td>
                              <td className="py-3 px-4">
                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                                  {isRtl ? 'مفعل' : 'Active'}
                                </span>
                              </td>
                              <td className="py-3 px-4">
                                <div className="flex items-center justify-center gap-2">
                                  <button
                                    onClick={() => handleOpenEditModal(product)}
                                    className="p-2 rounded-lg text-stone-600 hover:bg-[#EFECE6] hover:text-[#2D3B2D] transition-colors"
                                  >
                                    <Edit3 className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={() => handleDeleteProduct(product.id)}
                                    className="p-2 rounded-lg text-rose-500 hover:bg-rose-50 transition-colors"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>
        )}

      </main>

      { }
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-[#EBE6DC]">
            <div className="flex items-center justify-between pb-4 border-b border-[#F0EBE1]">
              <h3 className="text-lg font-bold text-[#2D3B2D]">
                {editingProduct
                  ? (isRtl ? 'تعديل بيانات المنتج' : 'Edit Product')
                  : (isRtl ? 'إضافة منتج جديد' : 'Add New Product')
                }
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {isRtl ? 'اسم المنتج (بالعربية)' : 'Product Name (Arabic)'}
                </label>
                <input
                  type="text"
                  value={productForm.nameAr}
                  onChange={(e) => setProductForm({ ...productForm, nameAr: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5DFD3] rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-[#2D3B2D]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {isRtl ? 'اسم المنتج (بالإنجليزية)' : 'Product Name (English)'}
                </label>
                <input
                  type="text"
                  value={productForm.nameEn}
                  onChange={(e) => setProductForm({ ...productForm, nameEn: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5DFD3] rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-[#2D3B2D]"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {isRtl ? 'القسم' : 'Category'}
                  </label>
                  <select
                    value={productForm.category}
                    onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#FAF8F5] border border-[#E5DFD3] rounded-xl text-xs focus:outline-none"
                  >
                    <option value="Serums">Serums</option>
                    <option value="Moisturizers">Moisturizers</option>
                    <option value="Sun Care">Sun Care</option>
                    <option value="Masks">Masks</option>
                    <option value="Cleansers">Cleansers</option>
                    <option value="Toners">Toners</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {isRtl ? 'السعر ($)' : 'Price ($)'}
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={productForm.price}
                    onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5DFD3] rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-[#2D3B2D]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {isRtl ? 'رابط صورة المنتج' : 'Image URL'}
                </label>
                <input
                  type="url"
                  value={productForm.image}
                  onChange={(e) => setProductForm({ ...productForm, image: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E5DFD3] rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-[#2D3B2D]"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-stone-200 text-xs font-semibold text-stone-600 hover:bg-stone-50"
                >
                  {isRtl ? 'إلغاء' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#2D3B2D] hover:bg-[#1E291E] text-white rounded-xl text-xs font-bold shadow-sm"
                >
                  {isRtl ? 'حفظ المنتج' : 'Save Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}