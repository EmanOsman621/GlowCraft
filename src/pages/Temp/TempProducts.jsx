// ملف مؤقت للتجربة بس! امسحيه لما صفحة Products الحقيقية تترفع
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useProducts from "../../hooks/useProducts";
import { useWishlist } from "../../context/WishlistContext";
import { localized } from "../../utils/localized";
import { HeartIcon } from "../../components/Icons";
import { assetUrl } from "../../utils/assetUrl";
export default function TempProducts() {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const { products, status } = useProducts();
  const { isWished, toggleWishlist } = useWishlist();

  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>Error</p>;

  const list = id ? products.filter((p) => String(p.id) === id) : products;

  return (
    <section style={{ padding: 24 }}>
      <h1>{id ? "Product (temporary)" : "All Products (temporary)"}</h1>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {list.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16, width: 220 }}>
            <Link to={`/products/${p.id}`}>
              <img src={assetUrl(p.image)} alt={localized(p, "name", lang)} style={{ width: "100%" }} />
            </Link>
            <h3>{localized(p, "name", lang)}</h3>
            <p>${Number(p.price).toFixed(2)}</p>
            <button
              onClick={() => toggleWishlist(p.id)}
              aria-label="wishlist"
              style={{ background: "none", border: "none", cursor: "pointer", color: "#c0392b" }}
            >
              <HeartIcon filled={isWished(p.id)} />
            </button>
            <Link to={`/tracker/${p.id}`} style={{ marginInlineStart: 12 }}>Tracker</Link>
          </div>
        ))}
      </div>
    </section>
  );
}