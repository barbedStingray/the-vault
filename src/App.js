import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom'

import NavigationBar from './navigation/NavigationBar';
import MenuScreen from './menuScreen/MenuScreen'
import GameSetup from './gameSetup/GameSetup';


function App() {

  const location = useLocation()

  return (
    <div className="theVault-app">
      <h1>The Vault</h1>
      <NavigationBar />
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<MenuScreen/>} />
        <Route path='/gameSetup' element={<GameSetup/>} />

      </Routes>

    </div>
  );
}

export default App;
