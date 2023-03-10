import { useState } from 'react';
import './App.css';
import SideTrends from './components/sideTrends';
import SideMenu from './components/sideMenu';
import Content from './components/content';
import HamburgerMenu from './components/hamburgerMenu';
import Modal from './components/modal';

// import FooterMenu from './components/footerMenu';

function App() {
  const [isModalVisible, setModalVisibility] = useState(false)


  return (
    <div className="App">
     <SideMenu />
      <Content setModalVisibility={setModalVisibility}/>
      <SideTrends />

      {isModalVisible && <Modal setModalVisibility = {setModalVisibility} />}
    </div>
  )
}

export default App
