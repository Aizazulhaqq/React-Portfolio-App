import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter >
    <main className="flex-shrink-0">
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
