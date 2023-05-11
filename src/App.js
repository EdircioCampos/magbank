import {useState} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CenteredButton from './components/CenteredButton';
import CardList from './components/CardList';
import CreditCard from './components/CreditCard';

import posts from './data/posts';
import AccountModal from './components/AccountModal';
import Institutional from './components/Institutional';

function App() {

  const[showModal, setShowModal] = useState(false);

  return (
    <div className='App'>
      <Navigation handleCreateAccount={() => setShowModal(true)}/>
      <Hero />
      <CreditCard />
      <CardList posts={posts}/>
      <CenteredButton>
        Abra sua conta
      </CenteredButton>
      <Institutional />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)}/>
    </div>
    
  );
}

export default App;
