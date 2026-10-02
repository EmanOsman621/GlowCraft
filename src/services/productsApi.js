// لو صاحب رقم 2 عامل الملف ده بالفعل، استخدم بتاعه (نفس أسماء الدوال) وامسح ده
const API = "http://localhost:3001";

export async function getProducts() {
  const res = await fetch(`${API}/products`);
  if (!res.ok) throw new Error("Failed to load products");
  return res.json();
}

export async function getProduct(id) {
  const res = await fetch(`${API}/products/${id}`);
  if (!res.ok) throw new Error("Product not found");
  return res.json();
}
