// import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div>
        <div className="section-title">Contact Us</div>
        <div className="main-card">
          <header className="navbar">
            <div className="logo">GlowCraft</div>
            <nav className="nav-links">
              <span>Home</span>
              <span>Products</span>
              <span>About</span>
              <span>Contact</span>
            </nav>
            <div className="nav-icons">
              <span>🔍</span>
              <span>♡</span>
              <span>🛒</span>
              <span>👤</span>
            </div>
          </header>

          <div className="contact-grid">
            {/* نموذج التواصل */}
            <div className="contact-form">
              <h2>Get in Touch</h2>
              <p className="subtitle" style={{marginBottom: '20px'}}>We'd love to hear from you!</p>
              
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="name@example.com" />
                </div>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="Write your message..." style={{width: '100%', padding: '10px', background: 'var(--input-bg)', border: '1px solid var(--border-color)', borderRadius: '6px', boxSizing: 'border-box'}}></textarea>
              </div>

              <button className="submit-btn" style={{width: 'auto', padding: '10px 30px'}}>Send Message</button>
            </div>

            {/* معلومات التواصل الجانبية */}
            <div className="contact-info">
              <div className="info-item">
                <span>📍</span>
                <div>
                  <h4>Our Location</h4>
                  <p>Cairo, Egypt</p>
                </div>
              </div>

              <div className="info-item">
                <span>✉️</span>
                <div>
                  <h4>Email Us</h4>
                  <p>support@glowcraft.com</p>
                </div>
              </div>

              <div className="info-item">
                <span>📞</span>
                <div>
                  <h4>Call Us</h4>
                  <p>+20 123 456 789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
