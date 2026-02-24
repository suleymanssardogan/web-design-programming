import profilResmi from './assets/profil.jpg';
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      <header className="main-header">
        <h1 className="sr-only">Süleyman Sardoğan - Kişisel Portfolyo</h1>
        <nav aria-label="Ana navigasyon">
          <ul className="nav-links">
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      {/* a11y: Klavye kullanıcıları için skip-link */}
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>

      <main id="main-content" className="main-content">
        <section id="hakkimda" className="card section-glass">
          <h2>Hakkımda</h2>
          <figure className="profile-figure">
            <img
              src={profilResmi}
              alt="Süleyman Sardoğan'ın profil fotografi"
              className="profile-img"
            />
            <figcaption className="sr-only">Süleyman Sardoğan</figcaption>
          </figure>

          <p className="about-text">
            Merhaba, ben Süleyman Sardoğan. Fırat Üniversitesi Teknoloji Fakültesi
            Yazılım Mühendisliği 3. Sınıf öğrencisiyim. Web teknolojilerine ilgi duyuyor ve
            modern, erişilebilir projeler geliştiriyorum.
          </p>

          <div className="tech-stack">
            <h3>Kullandığım Teknolojiler</h3>
            <ul>
              <li>JavaScript / TypeScript</li>
              <li>React & Vite</li>
              <li>HTML5 Semantic & a11y Erişilebilirlik Standartları</li>
            </ul>
          </div>
        </section>

        <section id="projeler" className="card section-glass">
          <h2>Projelerim</h2>

          <div className="projects-grid">
            <article className="project-card">
              <h3>Modern Web Portfolyosu</h3>
              <p>Erişilebilirlik "a11y", semantik tasarımlar yapılmış portfolyo.</p>
              <p className="project-tech"><strong>Teknolojiler:</strong> React, TypeScript, HTML5, CSS3</p>
              <img src="" alt="" aria-hidden="true" style={{ display: 'none' }} />
            </article>

            <article className="project-card">
              <h3>Öğrenci Yönetim Sistemi</h3>
              <p>Üniversite derslerinde yapılan veritabanı yönetimli basit proje.</p>
              <p className="project-tech"><strong>Teknolojiler:</strong> C#, MSSQL, Entity Framework</p>
            </article>
          </div>
        </section>

        {/* UYGULAMA 4: Doğrulamalı İletişim Formu */}
        <section id="iletisim" className="card section-glass">
          <h2>İletişim</h2>

          <form action="#" method="POST" noValidate className="contact-form">
            <fieldset>
              <legend className="sr-only">İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit" className="submit-btn" aria-label="Mesajı gönder">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer className="main-footer">
        <p>&copy; 2026 Süleyman Sardoğan. Tum haklari saklidir.</p>
        <nav aria-label="Sosyal medya baglantilari" className="social-links">
          <ul>
            <li><a href="https://github.com/suleymanssardogan" target="_blank" rel="noopener noreferrer" aria-label="GitHub profilimi aç">GitHub</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profilimi aç">LinkedIn</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default App;
