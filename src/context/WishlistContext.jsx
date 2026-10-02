import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext"; // بتاع صاحب رقم 5: لازم يرجّع { user } (null لو زائر)

const API = "http://localhost:3001";
const WishlistContext = createContext(null);
export const MAX_COMPARE = 3;

const readLocal = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
};

export function WishlistProvider({ children }) {
  const { user } = useAuth();
  // items: [{ id, userId, productId }]  (الزائر: [{ productId }] في localStorage)
  const [items, setItems] = useState([]);
  const [compareIds, setCompareIds] = useState(() => readLocal("compare"));

  useEffect(() => {
    if (!user) {
      setItems(readLocal("wishlist_guest"));
      return;
    }
    fetch(`${API}/wishlist?userId=${user.id}`)
      .then((r) => r.json())
      .then(setItems)
      .catch(() => setItems([]));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("compare", JSON.stringify(compareIds));
  }, [compareIds]);

  const wishlistIds = items.map((i) => String(i.productId));
  const isWished = (productId) => wishlistIds.includes(String(productId));
  const isCompared = (productId) => compareIds.includes(String(productId));

  const toggleWishlist = async (productId) => {
    const found = items.find((i) => String(i.productId) === String(productId));

    if (!user) {
      const next = found
        ? items.filter((i) => i !== found)
        : [...items, { productId }];
      localStorage.setItem("wishlist_guest", JSON.stringify(next));
      setItems(next);
      return;
    }

    try {
      if (found) {
        await fetch(`${API}/wishlist/${found.id}`, { method: "DELETE" });
        setItems((prev) => prev.filter((i) => i.id !== found.id));
      } else {
        const res = await fetch(`${API}/wishlist`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: user.id, productId }),
        });
        const created = await res.json();
        setItems((prev) => [...prev, created]);
      }
    } catch (err) {
      console.error("Wishlist error:", err);
    }
  };

  const clearWishlist = async () => {
    if (user) {
      await Promise.all(
        items.map((i) => fetch(`${API}/wishlist/${i.id}`, { method: "DELETE" }))
      );
    } else {
      localStorage.setItem("wishlist_guest", "[]");
    }
    setItems([]);
  };

  // بيرجّع false لو وصلنا للحد الأقصى (3 منتجات)
  const toggleCompare = (productId) => {
    const id = String(productId);
    if (compareIds.includes(id)) {
      setCompareIds(compareIds.filter((c) => c !== id));
      return true;
    }
    if (compareIds.length >= MAX_COMPARE) return false;
    setCompareIds([...compareIds, id]);
    return true;
  };

  const clearCompare = () => setCompareIds([]);

  return (
    <WishlistContext.Provider
      value={{
        wishlistIds,
        isWished,
        toggleWishlist,
        clearWishlist,
        compareIds,
        isCompared,
        toggleCompare,
        clearCompare,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used inside <WishlistProvider>");
  return ctx;
}
