import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Home = () => (
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

  return (
    <div className="app-container">
      {/* 상단 헤더 */}
      <header className="header">
        <div className="nav-left" onClick={() => setIsMenuOpen(true)}>
          MENU
        </div>
        
        <Link to="/" className="logo-center">AGLE</Link>
        
        <div className="nav-right">
          <span>SEARCH</span>
          <span>ACCOUNT</span>
          <span>CART</span>
        </div>
      </header>

      {/* 왼쪽에서 나오는 사이드 메뉴 */}
      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <div style={{textAlign: 'right', cursor: 'pointer', marginBottom: '40px'}} onClick={() => setIsMenuOpen(false)}>CLOSE ✕</div>
        <Link to="/" className="side-menu-item" onClick={() => setIsMenuOpen(false)}>NEW</Link>
        <Link to="/archive" className="side-menu-item" onClick={() => setIsMenuOpen(false)}>ARCHIVE</Link>
        <Link to="/exhibition" className="side-menu-item" onClick={() => setIsMenuOpen(false)}>EXHIBITION</Link>
        <Link to="/about" className="side-menu-item" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
        
        <div style={{marginTop: '100px', fontSize: '12px', color: '#888'}}>
          <p>infomation</p>
          <p>contact</p>
        </div>
      </div>

      {/* 메뉴 열렸을 때 배경 어둡게 */}
      <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}></div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<div style={{paddingTop: '100px'}}>Archive Page</div>} />
      </Routes>
      
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h4>NEWSLETTER</h4>
            <p style={{fontSize: '12px', color: '#666', lineHeight: '1.6'}}>
              AGLE의 최신 소식과 독점 콘텐츠를 받아보세요.
            </p>
          </div>
          <div className="footer-column">
            <h4>CONTACT</h4>
            <ul>
              <li>고객센터</li>
              <li>FAQ</li>
              <li>부티크 찾기</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>SERVICES</h4>
            <ul>
              <li>배송 및 반품</li>
              <li>선물 포장 서비스</li>
              <li>가상 아카이브 투어</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>THE HOUSE</h4>
            <ul>
              <li>가상 고고학이란?</li>
              <li>채용 정보</li>
              <li>지속 가능성</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="legal-info">
            <p>상호명: AGLE (The Missing Angle) | 대표자: [예영] | 사업자등록번호: 000-00-00000</p>
            <p>통신판매업신고: 제2026-서울-0000호 | 주소: 서울특별시 중구 답십리 (가상 고고학 연구소)</p>
            <p>© 2026 AGLE. 모든 권리 보유. 이용약관 | 개인정보처리방침</p>
          </div>
          <div className="country-selector">
            대한민국 (한국어)
          </div>
        </div>
      </footer>

    </div>

    

    
  );
}

export default App;