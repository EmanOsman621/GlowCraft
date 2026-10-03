import { useState } from "react";
import {
  Search, Heart, ShoppingBag, User, ShoppingCart, Truck, Leaf,
  Droplet, ArrowRight, ChevronRight, Facebook, Twitter, Instagram,
} from "lucide-react";
import { IMG } from "./images";
import "./App.css";

function Photo({ src, alt, ...rest }) {
  const list = Array.isArray(src) ? src : [src];
  const [i, setI] = useState(0);
  if (i >= list.length) return null;
  return (
    <img
      key={list[i]}
      src={list[i]}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setI(i + 1)}
      {...rest}
    />
  );
}

const navLinks = ["Home", "Products", "About", "Contact"];

const features = [
  { icon: Truck, title: "Free Shipping", text: "On orders over $50" },
  { icon: Leaf, title: "Natural Ingredients", text: "Safe & Effective" },
  { icon: Droplet, title: "Skincare Experts", text: "Trusted by 10K+" },
];

const offers = [
  { name: "Vitamin C Serum", price: "$24.99", old: "$31.99", img: IMG.offers.serum },
  { name: "Moisturizing Cream", price: "$18.99", old: "$23.99", img: IMG.offers.cream },
  { name: "Sunscreen SPF 50", price: "$16.99", old: "$21.99", img: IMG.offers.sunscreen },
  { name: "Clay Mask", price: "$12.99", old: "$16.99", img: IMG.offers.mask },
];

const best = [
  { name: "Gentle Cleanser", img: IMG.best[0] },
  { name: "Glow Serum", img: IMG.best[1] },
  { name: "Daily Moisturizer", img: IMG.best[2] },
  { name: "Hydrating Sunscreen", img: IMG.best[3] },
  { name: "Rose Face Mask", img: IMG.best[4] },
];

const categories = [
  { name: "Cleansers", img: IMG.cats.cleansers },
  { name: "Serums", img: IMG.cats.serums },
  { name: "Moisturizers", img: IMG.cats.moisturizers },
  { name: "Sunscreens", img: IMG.cats.sunscreens },
  { name: "Masks", img: IMG.cats.masks },
];

function Header() {
  return (
    <header className="header">
      <a className="logo" href="/">GlowCraft</a>
      <nav className="nav">
        {navLinks.map((l, i) => (
          <a key={l} href="/" className={i === 0 ? "active" : ""}>{l}</a>
        ))}
      </nav>
      <div className="icons">
        <Search size={20} /><Heart size={20} /><ShoppingBag size={20} /><User size={20} />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <Photo className="bg-img" src={IMG.hero} alt="GlowCraft skincare products" loading="eager" />
      <div className="hero-text">
        <h1>Discover Your<br />Natural Glow</h1>
        <p>Personalized skincare for healthier,<br />brighter and happier skin.</p>
        <div className="hero-btns">
          <button className="btn btn-primary">Shop Now <ArrowRight size={16} /></button>
          <button className="btn btn-outline">Find My Routine</button>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="features">
      {features.map(({ icon: Icon, title, text }) => (
        <div className="feature" key={title}>
          <Icon size={34} strokeWidth={1.5} />
          <div><strong>{title}</strong><span>{text}</span></div>
        </div>
      ))}
    </section>
  );
}

function Offers() {
  return (
    <section className="section">
      <div className="section-head">
        <h2>Weekly Offers</h2>
        <a href="/" className="view-all">View All <ChevronRight size={16} /></a>
      </div>
      <div className="grid-4">
        {offers.map((p) => (
          <article className="card" key={p.name}>
            <div className="card-img">
              <span className="badge">-20%</span>
              <Photo src={p.img} alt={p.name} />
            </div>
            <h3>{p.name}</h3>
            <div className="price-row">
              <span className="price">{p.price}</span>
              <span className="old">{p.old}</span>
              <button className="cart-btn" aria-label={`Add ${p.name} to cart`}><ShoppingCart size={18} /></button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Best() {
  return (
    <section className="section">
      <h2>Best Selling Products</h2>
      <div className="grid-5">
        {best.map((b) => (
          <div className="tile" key={b.name}>
            <Photo src={b.img} alt={b.name} />
          </div>
        ))}
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="section">
      <h2>Shop by Category</h2>
      <div className="grid-5 cats">
        {categories.map((c) => (
          <a href="/" className="cat" key={c.name}>
            <div className="cat-circle"><Photo src={c.img} alt={c.name} /></div>
            <span>{c.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Quiz() {
  return (
    <section className="quiz">
      <Photo className="bg-img" src={IMG.quiz} alt="Woman with glowing skin" />
      <div className="quiz-text">
        <h2>Don’t know your skin type?</h2>
        <p>Take our skin quiz and find your perfect routine.</p>
        <button className="btn btn-primary">Find My Routine <ArrowRight size={16} /></button>
      </div>
    </section>
  );
}

const Pin = () => <span className="pin">P</span>;

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="logo light">GlowCraft</div>
          <p className="tagline">Your skin. Our priority.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          {["Home", "Products", "About", "Contact"].map((l) => <a key={l} href="/">{l}</a>)}
        </div>
        <div>
          <h4>Customer Care</h4>
          {["FAQ", "Shipping", "Returns", "Support"].map((l) => <a key={l} href="/">{l}</a>)}
        </div>
        <div>
          <h4>Follow Us</h4>
          <div className="social">
            <Facebook size={22} fill="#fff" /><Twitter size={22} fill="#fff" />
            <Instagram size={22} /><Pin />
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <span>© 2025 GlowCraft. All rights reserved.</span>
        <div className="pay">
          <span className="pay-box visa">VISA</span>
          <span className="pay-box mc"><i /><i /></span>
          <span className="pay-box paypal">PayPal</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="page">
      <Header />
      <Hero />
      <Features />
      <Offers />
      <Best />
      <Categories />
      <Quiz />
      <Footer />
    </div>
  );
}
