import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

const archiveData = [
  { 
    id: 1, 
    img: 'angle_001.png', 
    title: 'Super Natural Voices', 
    description: 'Installation view, Mono Lisboa, Lisbon',
    date: '2026'
  },
  { 
    id: 2, 
    img: 'angle_002.png', 
    title: 'The Missing Angle #01', 
    description: 'Virtual Archaeology Archive',
    date: '2026'
  },
  { 
    id: 3, 
    img: 'angle_003.png', 
    title: 'Korean Aesthetic in Meta', 
    description: 'Digital Restoration Project',
    date: '2026'
  }
];

function App() {
  const location = useLocation();

  const Home = () => {
    // 첫 번째 데이터와 나머지 데이터를 나눕니다.
    const [hero, ...subs] = archiveData;

    return (
      <div className="image-list-container">
        {/* 1. 메인 큰 사진 */}
        <section className="hero-item">
          <img src={hero.img} alt={hero.title} className="hero-image" />
          <div className="image-info">
            <span className="info-dash">—</span>
            <strong>{hero.title}</strong>, {hero.date}, {hero.description}
          </div>
        </section>

        {/* 2. 아래로 나열되는 작은 사진들 */}
        <section className="sub-items-wrapper">
          {subs.map((item) => (
            <div key={item.id} className="sub-item">
              <img src={item.img} alt={item.title} className="sub-image" />
              <div className="image-info">
                <span className="info-dash">—</span>
                <strong>{item.title}</strong>, {item.date}, {item.description}
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  };

  return (
    <div className="app-container">
      <div className="fixed-interface">
        <Link to="/" className="logo">AGLE</Link>
        <nav className="nav-menu">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Selected Work</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>Information</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        </nav>
      </div>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div style={{padding: '200px 40px'}}><h1>Information</h1></div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;