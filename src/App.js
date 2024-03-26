import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/footer/Footer';
import { Herosection } from './components/heroSection/Herosection';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>  
      <Herosection></Herosection>
      <Footer></Footer>    
      
    </div>
  );
}

export default App;
