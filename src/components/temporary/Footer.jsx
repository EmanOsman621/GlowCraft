// مؤقت: الـ Footer الحقيقي هيعمله حد من الفريق
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./layout.css";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <p className="brand">GlowCraft</p>
          <p>{t("footer.tagline")}</p>
        </div>
        <div>
          <h4>{t("footer.quick")}</h4>
          <ul>
            <li><Link to="/">{t("nav.home")}</Link></li>
            <li><Link to="/products">{t("nav.products")}</Link></li>
            <li><Link to="/tracker">{t("tracker.short")}</Link></li>
            <li><Link to="/contact">{t("nav.contact")}</Link></li>
          </ul>
        </div>
        <div>
          <h4>{t("footer.care")}</h4>
          <ul>
            <li>{t("footer.faqs")}</li>
            <li>{t("footer.shipping")}</li>
            <li>{t("footer.returns")}</li>
          </ul>
        </div>
        <div>
          <h4>{t("footer.follow")}</h4>
          <ul><li>Instagram</li><li>Facebook</li><li>TikTok</li></ul>
        </div>
      </div>
      <p className="footer-copy">© 2026 GlowCraft. {t("footer.rights")}</p>
    </footer>
  );
}
