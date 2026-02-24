import './App.css';

function App() {
  return (
    <div className="card">
      <h1>Web Tasarimi ve Programlama</h1>
      <h2>LAB-1</h2>

      <div className="info-container">
        <div className="info-item">
          <span className="info-label">Ad Soyad</span>
          <span className="info-value">Süleyman Sardoğan</span>
        </div>

        <div className="info-item">
          <span className="info-label">Öğrenci No</span>
          <span className="info-value">220541069</span>
        </div>
      </div>

      <p className="footer-text">Vite + React ile hazırlanmıştır.</p>
    </div>
  )
}

export default App
