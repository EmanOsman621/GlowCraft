import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useProducts from "../../hooks/useProducts";
import { useWishlist, MAX_COMPARE } from "../../context/WishlistContext";
import { localized } from "../../utils/localized";
import ComparePanel from "../../components/ComparePanel";
import "./Compare.css";

export default function Compare() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const { products, status } = useProducts();
  const { wishlistIds, compareIds, toggleCompare } = useWishlist();

  if (status === "loading") return <p className="cmp-msg">{t("common.loading")}</p>;
  if (status === "error") return <p className="cmp-msg">{t("common.error")}</p>;

  const suggestions = products.filter(
    (p) => wishlistIds.includes(String(p.id)) && !compareIds.includes(String(p.id))
  );

  return (
    <section className="cmp">
      {suggestions.length > 0 && compareIds.length < MAX_COMPARE && (
        <div className="cmp-suggest">
          <span>{t("compare.addFromWishlist")}</span>
          {suggestions.map((p) => (
            <button key={p.id} onClick={() => toggleCompare(p.id)}>+ {localized(p, "name", lang)}</button>
          ))}
        </div>
      )}
      <ComparePanel products={products} />
      <p className="cmp-back"><Link to="/wishlist">{t("compare.goWishlist")}</Link></p>
    </section>
  );
}
