// ملف مؤقت للتجربة بس! لو صاحب رقم 5 لسه ما رفعش AuthContext حطه في src/context/
// وأول ما يرفع بتاعه امسح ده. غيّر user لـ { id: 1 } عشان تجرب وضع المسجّل.
import { createContext, useContext } from "react";
const AuthContext = createContext({ user: null });
export const AuthProvider = ({ children }) => (
  <AuthContext.Provider value={{ user: null }}>{children}</AuthContext.Provider>
);
export const useAuth = () => useContext(AuthContext);
