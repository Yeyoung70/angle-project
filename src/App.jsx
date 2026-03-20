import './App.css'

// 1. 전시 데이터 (나중에 이 내용만 바꾸면 화면이 자동으로 업데이트돼요!)
const exhibitions = [
  { id: 1, title: 'The Missing Angle #01', date: '2026.02', category: 'Virtual Archaeology' },
  { id: 2, title: 'Korean Aesthetic in Meta', date: '2026.03', category: 'Hyper-Realistic' },
  { id: 3, title: 'Digital Restoration', date: '2026.04', category: 'Artifact Archive' },
];

function App() {
  return (
    <div className="app-container">
      {/* 상단 네비게이션 */}
      <nav className="navbar">
        <div className="logo">AGLE</div>
        <div className="menu">ARCHIVE / EXHIBITION / ABOUT</div>
      </nav>

    {/* 메인 히어로 섹션 */}
    <main className="hero-section">
        <div className="title-group">
          <h1 className="main-title">THE MISSING ANGLE</h1>
          <p className="sub-title">Exploring the intersection of tradition and virtual space.</p>
        </div>
        
        {/* 메인 이미지 영역 (C4D 작업물이 들어갈 자리) */}
        <div className="content-box">
          {/* ★ 이 부분을 아래처럼 수정하세요! ★ */}
          <div className="main-image-wrapper">
            {/* public 폴더에 넣은 파일은 '/' 한 번이면 바로 불러옵니다. */}
            <img 
              src="angle_test_01.png"  // ★ 본인의 파일 이름으로 바꾸세요! (예: /agle-hero.png)
              alt="AGLE Main Artifact" 
              className="main-image"
            />
          </div>
        </div>

    {/* --- 여기서부터 전시 리스트 섹션이 시작됩니다 --- */}
    <section className="exhibition-grid">
        {exhibitions.map((item) => (
          <div key={item.id} className="exhibition-card">
            {/* ★ 이 부분을 아래처럼 수정하세요! ★ */}
            <div className="main-image-wrapper">
              {/* public 폴더에 넣은 파일은 '/' 한 번이면 바로 불러옵니다. */}
              {/* map() 함수에서 가져온 item.id를 활용해서 이미지 파일 이름을 매칭할게요. */}
              {/* public 폴더에 item.id로 이름을 붙인 이미지를 넣어주세요! (예: /public/artifact-1.png, /public/artifact-2.png, /public/artifact-3.png) */}
              <img 
                src={`angle_test_${item.id}.png`} // ★ 백틱과 ${}를 활용해서 item.id를 파일 이름에 넣습니다!
                alt={item.title} 
                className="main-image"
              />
            </div>
            
            <div className="card-info">
              <span className="category">{item.category}</span>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-date">{item.date}</p>
            </div>
          </div>
        ))}
      </section>
      {/* --- 여기까지 전시 리스트 섹션 끝 --- */}

      </main>

      {/* 하단 정보 */}
      <footer className="footer">
        © 2026 AGLE. All rights reserved.
      </footer>
    </div>
  )
}

export default App