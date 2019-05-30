import React from 'react';
import logo from './logo.svg';
import './style.scss';
import SongCard from './components/Song-Card';
import PageLogo from './images/dark-violin.png';

function App() {
  return (
    <div className="main">
      <header className="main-header">
        <div className="header__account-id">Cheena's playlist</div>
        <img className="main__page-logo" src={PageLogo} alt="" width='100px' height='100px'/>
        <source/>
		    <SongCard/>
      </header>
    </div>
  );
}

export default App;
