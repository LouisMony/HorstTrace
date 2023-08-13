//GENERAL
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

//COMP
import Home from './pages/Home';
import Contact from './pages/Contact';
import Component__Navbar from './components/Component__Navbar';

//STYLE 
import './index.scss';

function App(){

  const location = useLocation();

  return (
    <>
      <Component__Navbar/>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </AnimatePresence>
      
    </>
  );
}

export default App;

