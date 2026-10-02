import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useProducts from "../../hooks/useProducts";
import { useWishlist, MAX_COMPARE } from "../../context/WishlistContext";
import { localized } from "../../utils/localized";
import ComparePanel from "../../components/ComparePanel";
import { HeartIcon, TrashIcon, CompareIcon } from "../../components/Icons";
import "./Wishlist.css";
import { assetUrl } from "../../utils/assetUrl";
export default function Wishlist() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const { products, status } = useProducts();
  const { wishlistIds, toggleWishlist, clearWishlist, isCompared, toggleCompare } = useWishlist();
  const [limitMsg, setLimitMsg] = useState(false);

  if (status === "loading") return <p className="wl-msg">{t("common.loading")}</p>;
  if (status === "error") return <p className="wl-msg">{t("common.error")}</p>;

  const list = products.filter((p) => wishlistIds.includes(String(p.id)));

  const handleCompare = (id) => setLimitMsg(!toggleCompare(id));

  return (
    <section className="wl-page">
      <div className="wl-panel">
        <header className="wl-head">
          <div>
            <h2>{t("wishlist.title")}</h2>
            <p>{t("wishlist.count", { count: list.length })}</p>
          </div>
          {list.length > 0 && (
            <button className="wl-clear" onClick={clearWishlist}>{t("wishlist.clear")}</button>
          )}
        </header>

        {list.length === 0 ? (
          <div className="wl-empty">
            <p>{t("wishlist.empty")}</p>
            <Link to="/products" className="wl-btn">{t("wishlist.browse")}</Link>
          </div>
        ) : (
          <ul className="wl-list">
            {list.map((p) => (
              <li key={p.id} className="wl-item">
                <Link to={`/products/${p.id}`} className="wl-thumb">
                  <img src={assetUrl(p.image)} alt={localized(p, "name", lang)} />
                </Link>
                <div className="wl-info">
                  <Link to={`/tracker/${p.id}`}>{localized(p, "name", lang)}</Link>
                  <span>${Number(p.price).toFixed(2)}</span>
                </div>
                <HeartIcon filled className="wl-heart" />
                <button
                  className={`wl-icon ${isCompared(p.id) ? "on" : ""}`}
                  onClick={() => handleCompare(p.id)}
                  aria-pressed={isCompared(p.id)}
                  title={isCompared(p.id) ? t("wishlist.inCompare") : t("wishlist.addCompare")}
                >
                  <CompareIcon />
                </button>
                <button className="wl-icon" onClick={() => toggleWishlist(p.id)} aria-label={t("wishlist.remove")}>
                  <TrashIcon />
                </button>
              </li>
            ))}
          </ul>
        )}

        {limitMsg && <p className="wl-warn" role="alert">{t("compare.limit", { max: MAX_COMPARE })}</p>}
      </div>

      <ComparePanel products={products} showButton />
    </section>
  );
}
