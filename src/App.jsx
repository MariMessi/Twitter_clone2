
import './App.css';
import SideTrends from './components/sideTrends';
import SideMenu from './components/sideMenu';
import Content from './components/content';
import HamburgerMenu from './components/hamburgerMenu';

// import FooterMenu from './components/footerMenu';

function App() {


  return (
    <div className="App">
     <SideMenu />
      <Content />
      <SideTrends />
    </div>
  )
}

export default App
