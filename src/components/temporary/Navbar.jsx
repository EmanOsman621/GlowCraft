// مؤقت: الـ Navbar الحقيقي هيعمله حد من الفريق. لما يرفعه بدّلي الاستيراد في App.jsx
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useWishlist } from "../../context/WishlistContext";
import { SearchIcon, HeartIcon, CompareIcon, UserIcon } from "../Icons";
import "./layout.css";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { wishlistIds, compareIds } = useWishlist();

  const toggleLang = () => {
    const next = i18n.language.startsWith("ar") ? "en" : "ar";
    i18n.changeLanguage(next);
    document.documentElement.lang = next;
    document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
  };

  return (
    <header className="nav">
      <Link to="/" className="nav-logo">GlowCraft</Link>
      <nav className="nav-links">
        <NavLink to="/">{t("nav.home")}</NavLink>
        <NavLink to="/products">{t("nav.products")}</NavLink>
        <NavLink to="/about">{t("nav.about")}</NavLink>
        <NavLink to="/contact">{t("nav.contact")}</NavLink>
      </nav>
      <div className="nav-icons">
        <button aria-label={t("nav.search")}><SearchIcon /></button>
        <Link to="/wishlist" aria-label={t("wishlist.title")}>
          <HeartIcon />
          {wishlistIds.length > 0 && <span className="nav-badge">{wishlistIds.length}</span>}
        </Link>
        <Link to="/compare" aria-label={t("compare.title")}>
          <CompareIcon />
          {compareIds.length > 0 && <span className="nav-badge">{compareIds.length}</span>}
        </Link>
        <Link to="/login" aria-label={t("nav.account")}><UserIcon /></Link>
        <button className="nav-lang" onClick={toggleLang}>
          {i18n.language.startsWith("ar") ? "EN" : "عربي"}
        </button>
      </div>
    </header>
  );
}
