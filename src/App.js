
import './App.css';
import {useState} from 'react';
import Header from './components/Header';
import MainContent from './components/mainContent/MainContent';
import SideBarContext from "./context/SideBarContext";
function App() {
  const [showSideBar, setShowSideBar] = useState(true);
  return (
    <div className="bg-[#f5f7ff] ">
      <SideBarContext.Provider value={[showSideBar, setShowSideBar]} >
      <Header />
      <MainContent />
      </SideBarContext.Provider>
    </div>
  );
}

export default App;
