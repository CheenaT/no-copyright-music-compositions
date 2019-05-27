import React from 'react';
import logo from './logo.svg';
import './style.scss';
import SongCard from './components/Song-Card';
import ListOfCompositions from './components/List-Of-Compositions';
import PageLogo from './images/dark-violin.png';

function App() {
  return (
    <div className="main">
      <header className="main-header">
        <img className="main__page-logo" src={PageLogo} alt="" width='100px' height='100px'/>
        <source/>
		    <SongCard/>

      </header>
      <ListOfCompositions className="main__list-of-compositions"/>
    </div>
  );
}

export default App;
