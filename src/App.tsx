import profilResmi from './assets/profil.jpg';
import './App.css';

function App() {
  return (
    <>
      <header>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      {/* Tab ile gezinmede kullanıcıyı direkt ana içeriğe aktaran a11y skip-link bileşeni */}
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <figure>
            <img
              src={profilResmi}
              alt="Süleyman Sardoğan'ın profil fotografi"
            />
            <figcaption>Süleyman Sardoğan</figcaption>
          </figure>
          <p>
            Merhaba, ben Süleyman Sardoğan. Fırat Üniversitesi Teknoloji Fakültesi
            Yazılım Mühendisliği 3. Sınıf öğrencisiyim. Web teknolojilerine ilgi duyuyor ve
            modern, erişilebilir projeler geliştiriyorum.
          </p>
          <ul>
            <li>JavaScript / TypeScript</li>
            <li>React & Vite</li>
            <li>HTML5 Semantic & a11y Erişilebilirlik Standartları</li>
          </ul>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>

          <article>
            <h3>Modern Web Portfolyosu</h3>
            <p>Erişilebilirlik "a11y", semantik tasarımlar yapılmış portfolyo.</p>
            <p><strong>Teknolojiler:</strong> React, TypeScript, HTML5, CSS3</p>
            {/* Dekoratif görsel - ekran okuyucular es geçer. */}
            <img src="" alt="" aria-hidden="true" style={{ display: 'none' }} />
          </article>

          <article>
            <h3>Öğrenci Yönetim Sistemi</h3>
            <p>Üniversite derslerinde yapılan veritabanı yönetimli basit proje.</p>
            <p><strong>Teknolojiler:</strong> C#, MSSQL, Entity Framework</p>
          </article>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          {/* form buraya gelecek */}
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Süleyman Sardoğan. Tum haklari saklidir.</p>
      </footer>
    </>
  );
}

export default App;
