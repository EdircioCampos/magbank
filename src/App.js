import './App.css';
import Navbar from './components/Navigation';
import Hero from './components/Hero';
import CenteredButton from './components/CenteredButton';
import CardList from './components/CardList';
import CreditCard from './components/CreditCard';

import posts from './data/posts';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <CreditCard />
      <CardList posts={posts}/>
      <CenteredButton>
        Abra sua conta
      </CenteredButton>
    </div>
    
  );
}

export default App;
