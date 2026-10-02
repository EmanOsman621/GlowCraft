import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useWishlist } from "../context/WishlistContext";
import { localized } from "../utils/localized";
import "./ComparePanel.css";
import { assetUrl } from "../utils/assetUrl";
const join = (v) => (Array.isArray(v) ? v.join(", ") : v || "-");

export default function ComparePanel({ products, showButton = false }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const { compareIds, toggleCompare, clearCompare } = useWishlist();

  const selected = compareIds
    .map((id) => products.find((p) => String(p.id) === id))
    .filter(Boolean);

  const rows = [
    { key: "price", get: (p) => `$${Number(p.price).toFixed(2)}` },
    { key: "skinType", get: (p) => join(localized(p, "skinType", lang)) },
    { key: "benefits", get: (p) => join(localized(p, "benefits", lang)) },
    { key: "ingredients", get: (p) => join(localized(p, "ingredients", lang)) },
    { key: "pao", get: (p) => (p.pao ? `${p.pao}M` : "-") },
  ];

  return (
    <div className="cp">
      <div className="cp-head">
        <div>
          <h2>{t("compare.title")}</h2>
          <p>{t("compare.subtitle", { max: 3 })}</p>
        </div>
        <div className="cp-head-actions">
          {selected.length > 0 && (
            <button className="cp-clear" onClick={clearCompare}>{t("compare.clear")}</button>
          )}
          {showButton && (
            <Link to="/compare" className="cp-btn">{t("wishlist.compareNow")}</Link>
          )}
        </div>
      </div>

      {selected.length < 2 && <p className="cp-hint">{t("compare.needTwo")}</p>}

      {selected.length > 0 && (
        <div className="cp-scroll">
          <table className="cp-table">
            <thead>
              <tr>
                <th></th>
                {selected.map((p) => (
                  <th key={p.id}>
                    <button className="cp-x" onClick={() => toggleCompare(p.id)} aria-label={t("compare.remove")}>✕</button>
                    <img src={assetUrl (p.image)} alt={localized(p, "name", lang)} />
                    <Link to={`/tracker/${p.id}`}>{localized(p, "name", lang)}</Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.key}>
                  <th scope="row">{t(`compare.rows.${r.key}`)}</th>
                  {selected.map((p) => <td key={p.id}>{r.get(p)}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
