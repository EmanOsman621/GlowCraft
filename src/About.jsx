import productsImg from "./about-products.png";

const Badge = ({ children }) => (
  <span className="badge">
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  </span>
);

const FEATURES = [
  {
    label: ["Natural", "Ingredients"],
    icon: (
      <>
        <path d="M12 21v-9" />
        <path d="M12 12c0-4-3-6-7-6 0 4 3 6 7 6z" />
        <path d="M12 14c0-3.500 2.500-5.500 7-5.500 0 3.500-2.500 5.500-7 5.500z" />
      </>
    ),
  },
  {
    label: ["Expert", "Guidance"],
    icon: (
      <>
        <circle cx="12" cy="10" r="6" />
        <path d="M12 7.500l1 2 2.200.3-1.600 1.500.4 2.200-2-1.100-2 1.100.4-2.200L8.800 9.800 11 9.500z" />
        <path d="M9 15.500L8 21l4-2 4 2-1-5.500" />
      </>
    ),
  },
  {
    label: ["Trusted", "Quality"],
    icon: <path d="M12 20s-7-4.500-7-10a4 4 0 0 1 7-2.500A4 4 0 0 1 19 10c0 5.500-7 10-7 10z" />,
  },
];

const REASONS = [
  "High-quality, natural products",
  "Personalized skincare recommendations",
  "Safe & non-toxic ingredients",
  "A kinder, healthier you",
];

export default function About() {
  return (
    <main className="about">
      <div className="about-grid">
        {/* Left */}
        <section className="about-left">
          <h1>About GlowCraft</h1>
          <p>
            GlowCraft is your go-to natural skincare shopping experience. We believe
            that healthy glowing skin is not a luxury — it's a lifestyle.
          </p>

          <div className="features">
            {FEATURES.map((f) => (
              <div className="feature" key={f.label.join(" ")}>
                <Badge>{f.icon}</Badge>
                <span>{f.label[0]}<br />{f.label[1]}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Middle: image */}
        <div className="about-image">
          <img src={productsImg} alt="GlowCraft serum, cleanser and moisturizer" />
        </div>

        {/* Right */}
        <section className="about-right">
          <h2>Our Mission</h2>
          <p>To make skincare simple, accessible, and empowering for everyone.</p>

          <h2 className="why">Why Choose Us?</h2>
          <ul className="checklist">
            {REASONS.map((r) => (
              <li key={r}>
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" fill="currentColor" />
                  <path d="M7 12.500l3.200 3.200L17 9" fill="none" stroke="#fff"
                        strokeWidth="2.200" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {r}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
