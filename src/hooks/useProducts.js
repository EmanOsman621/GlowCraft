import { useEffect, useState } from "react";
import { getProducts } from "../services/productsApi";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let active = true;
    getProducts()
      .then((d) => active && (setProducts(d), setStatus("ok")))
      .catch(() => active && setStatus("error"));
    return () => {
      active = false;
    };
  }, []);

  return { products, status };
}
