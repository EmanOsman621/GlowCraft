export default function Login() {
  return (
    <div>
      <div className="main-card">
        {/* شريط التنقل العلوي */}
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

        {/* الكرتين بجانب بعض (Login & Register) */}
        <div className="auth-grid">
          {/* نموذج تسجيل الدخول */}
          <div className="auth-box">
            <h2>Login</h2>
            <p className="subtitle">
              Welcome Back!
              <br />
              Sign in to your GlowCraft account
            </p>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="name@example.com" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="••••••••" />
            </div>

            <button className="submit-btn">Login</button>
          </div>

          {/* نموذج إنشاء حساب */}
          <div className="auth-box">
            <h2>Register</h2>
            <p className="subtitle">
              Create Your Account
              <br />
              Join GlowCraft for a better discount journey
            </p>

            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Eman Osman" />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="name@example.com" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="••••••••" />
            </div>

            <button className="submit-btn">Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
