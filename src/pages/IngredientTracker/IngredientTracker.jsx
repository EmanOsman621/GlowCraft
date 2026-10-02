import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useProducts from "../../hooks/useProducts";
import { useWishlist } from "../../context/WishlistContext";
import { localized } from "../../utils/localized";
import { CheckIcon, LeafIcon, HeartIcon } from "../../components/Icons";
import "./IngredientTracker.css";
import { assetUrl } from "../../utils/assetUrl";
function addMonths(dateStr, months) {
  const d = new Date(dateStr);
  d.setMonth(d.getMonth() + Number(months));
  return d;
}

export default function IngredientTracker() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const { products, status } = useProducts();
  const { isWished, toggleWishlist } = useWishlist();
  const [openedOn, setOpenedOn] = useState("");

  if (status === "loading") return <p className="tracker-msg">{t("common.loading")}</p>;
  if (status === "error" || products.length === 0)
    return <p className="tracker-msg">{t("common.error")}</p>;

  const product = products.find((p) => String(p.id) === id) || products[0];
  const name = localized(product, "name", lang);
  const ingredients = localized(product, "ingredients", lang) || [];
  const benefits = localized(product, "benefits", lang) || [];

  const expiry = openedOn && product.pao ? addMonths(openedOn, product.pao) : null;
  const daysLeft = expiry ? Math.ceil((expiry - new Date()) / 86400000) : null;
  const state = daysLeft === null ? null : daysLeft < 0 ? "expired" : daysLeft <= 30 ? "soon" : "good";

  return (
    <section className="tracker">
      <div className="tracker-hero">
        <div>
          <h1>{t("tracker.title")}</h1>
          <p>{t("tracker.subtitle")}</p>
        </div>
        <LeafIcon className="tracker-leaf" />
      </div>

      <label className="tracker-select">
        <span>{t("tracker.choose")}</span>
        <select value={product.id} onChange={(e) => navigate(`/tracker/${e.target.value}`)}>
          {products.map((p) => (
            <option key={p.id} value={p.id}>{localized(p, "name", lang)}</option>
          ))}
        </select>
      </label>

      <article className="tracker-card">
        <div className="tracker-media">
        <img src={assetUrl(product.image)} alt={name} />
        </div>

        <div className="tracker-main">
          <div className="tracker-title-row">
            <h2>{name}</h2>
            <button
              type="button"
              className="tracker-heart"
              onClick={() => toggleWishlist(product.id)}
              aria-pressed={isWished(product.id)}
              aria-label="wishlist"
            >
              <HeartIcon filled={isWished(product.id)} />
            </button>
          </div>

          <div className="tracker-cols">
            <div>
              <h3>{t("tracker.ingredients")}</h3>
              <ul className="dots">
                {ingredients.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
            <div>
              <h3>{t("tracker.benefits")}</h3>
              <ul className="checks">
                {benefits.map((b) => (
                  <li key={b}><CheckIcon width={16} height={16} /> {b}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="tracker-bottom">
            <div>
              <h3>{t("tracker.howToUse")}</h3>
              <p>{localized(product, "howToUse", lang)}</p>
              <Link to={`/products/${product.id}`} className="tracker-btn">{t("tracker.viewProduct")}</Link>
            </div>

            <div className="tracker-pao">
              <div className="pao-head">
                <span className="pao-jar">{product.pao}M</span>
                <p>{t("tracker.paoText", { months: product.pao })}</p>
              </div>
              <label>
                <span>{t("tracker.openedOn")}</span>
                <input
                  type="date"
                  value={openedOn}
                  max={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setOpenedOn(e.target.value)}
                />
              </label>
              {expiry && (
                <p className={`pao-result ${state}`} role="status">
                  {t(`tracker.state.${state}`, { date: expiry.toLocaleDateString(lang), days: Math.abs(daysLeft) })}
                </p>
              )}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}