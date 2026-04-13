// pages/Archive.jsx
const Home = () => {
    return (
        <main>
        {/* 디올 스타일 메인 비주얼 */}
        <section className="hero-section">
          <video className="hero-video" autoPlay muted loop playsInline>
            <source src="/dormant_W1.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay">
            <p style={{fontSize: '12px', letterSpacing: '0.2em'}}>AGLE 2026 COLLECTION</p>
            <h1 className="hero-title">THE MISSING ANGLE</h1>
            <button style={{background: 'none', border: '1px solid #fff', color: '#fff', padding: '10px 30px', cursor: 'pointer'}}>더 알아보기</button>
          </div>
        </section>
  
        {/* 하단 그리드 섹션 */}
        <section className="grid-container">
          <div className="grid-item"><img src="/angle_002.png" alt="1" /></div>
          <div className="grid-item"><img src="/angle_003.png" alt="2" /></div>
        </section>
      </main>
    );
  };
  
  export default Home; // 이 줄이 있어야 App.jsx에서 읽을 수 있어요!
