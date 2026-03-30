import { Routes, Route, Link } from 'react-router-dom' // ★ 추가
import { useState } from 'react'
import './App.css'

// 전시 데이터 (기존 데이터 유지)
const exhibitions = [
  { id: 1, title: 'The Missing Angle #01', date: '2026.02', category: 'Virtual Archaeology', description: '가상 고고학의 첫 번째 프로젝트. 잊혀진 각도를 찾아 복원하는 과정을 담았습니다.' },
  { id: 2, title: 'Korean Aesthetic in Meta', date: '2026.03', category: 'Hyper-Realistic', description: '메타버스 공간에서 한국 고유의 미학을 현대적으로 재해석한 작품입니다.' },
  { id: 3, title: 'Digital Restoration', date: '2026.04', category: 'Artifact Archive' , description: '파손된 유물을 디지털 기술로 정교하게 복원한 아카이브입니다.' },
];

// --- 나중에 파일로 분리할 페이지들 ---
const Archive = () => <div className="page-content"><h1>ARCHIVE</h1><p>AGLE의 모든 기록물입니다.</p></div>
const Exhibition = () => <div className="page-content"><h1>EXHIBITION</h1><p>현재 진행 중인 전시입니다.</p></div>
const About = () => <div className="page-content"><h1>ABOUT</h1><p>가상 고고학을 통해 누락된 각도를 찾습니다.</p></div>

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  // 메인 홈 화면 컴포넌트 (기존 코드)
  const Home = () => (
    <main className="hero-section">
      <div className="title-group">
        <h1 className="main-title">THE MISSING ANGLE</h1>
        <p className="sub-title">Exploring the intersection of tradition and virtual space.</p>
      </div>
{/* 메인 히어로 이미지 */}
<div className="main-image-wrapper">
        <img src="angle_test_01.png" alt="AGLE Main Artifact" className="main-image" />
      </div>

      {/* 전시 그리드 리스트 */}
      <section className="exhibition-grid">
        {exhibitions.map((item) => (
          <div key={item.id} className="exhibition-card" onClick={() => setSelectedItem(item)}>
            <div className="card-image-wrapper">
              <img src={`angle_test_${item.id}.png`} alt={item.title} className="main-image" />
            </div>
            <div className="card-info">
              <span className="category">{item.category}</span>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-date">{item.date}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );

  return (
    <div className="app-container">
      {/* 상단 네비게이션: 이제 <a> 대신 <Link>를 사용합니다 */}
      <nav className="navbar">
        <Link to="/" className="logo">AGLE</Link>
        <div className="menu">
          <Link to="/archive">ARCHIVE</Link>
          <Link to="/exhibition">EXHIBITION</Link>
          <Link to="/about">ABOUT</Link>
        </div>
      </nav>

      {/* 주소에 따라 바뀌는 영역 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/exhibition" element={<Exhibition />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* 모달 창 (기존 코드 그대로 유지) */}
      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedItem(null)}>X</button>
            <div className="modal-body">
              <img src={`angle_test_${selectedItem.id}.png`} alt={selectedItem.title} className="modal-image" />
              <div className="modal-text">
                <span className="category">{selectedItem.category}</span>
                <h2 className="modal-title">{selectedItem.title}</h2>
                <p className="modal-date">{selectedItem.date}</p>
                <p className="modal-description">{selectedItem.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="footer">© 2026 AGLE. All rights reserved.</footer>
    </div>
  );
}

export default App;