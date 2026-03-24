import { useState } from 'react' // ★ useState를 불러옵니다.
import './App.css'

// 전시 데이터 (저번과 동일)
const exhibitions = [
  { id: 1, title: 'The Missing Angle #01', date: '2026.02', category: 'Virtual Archaeology', description: '가상 고고학의 첫 번째 프로젝트. 잊혀진 각도를 찾아 복원하는 과정을 담았습니다.' },
  { id: 2, title: 'Korean Aesthetic in Meta', date: '2026.03', category: 'Hyper-Realistic', description: '메타버스 공간에서 한국 고유의 미학을 현대적으로 재해석한 작품입니다.' },
  { id: 3, title: 'Digital Restoration', date: '2026.04', category: 'Artifact Archive' , description: '파손된 유물을 디지털 기술로 정교하게 복원한 아카이브입니다.' },
];

function App() {
  // ★ 현재 선택된 전시물의 데이터를 저장하는 상태입니다. (처음엔 null)
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="app-container">
      {/* 상단 네비게이션 (저번과 동일) */}
      <nav className="navbar">
        <div className="logo">AGLE</div>
        <div className="menu">ARCHIVE / EXHIBITION / ABOUT</div>
      </nav>

      {/* 메인 히어로 섹션 (저번과 동일) */}
      <main className="hero-section">
        <div className="title-group">
          <h1 className="main-title">THE MISSING ANGLE</h1>
          <p className="sub-title">Exploring the intersection of tradition and virtual space.</p>
        </div>
        
        <div className="content-box">
          <div className="main-image-wrapper">
            <img src="angle_test_01.png" alt="AGLE Main Artifact" className="main-image" />
          </div>
        </div>

        {/* 전시 리스트 섹션 */}
        <section className="exhibition-grid">
          {exhibitions.map((item) => (
            // ★ 카드를 클릭하면 setSelectedItem 함수를 통해 해당 item 데이터를 상태에 저장합니다.
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

      {/* ★ selectedItem에 데이터가 있을 때만 모달 창을 보여줍니다. (조건부 렌더링) ★ */}
      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          {/* 모달 내부 클릭 시 닫히지 않도록 stopPropagation 추가 */}
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

      {/* 하단 정보 (저번과 동일) */}
      <footer className="footer">
        © 2026 AGLE. All rights reserved.
      </footer>
    </div>
  )
}

export default App