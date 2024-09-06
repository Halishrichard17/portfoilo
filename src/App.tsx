
import './App.css';
import Header from './pages/header';
import Home from './pages/home';
import Blog from './pages/blog';
import Exp from './pages/project';
import ContactPage from './pages/contact';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/services';
function App() {
 

  return (
    <>
    <Header ></Header>
    <div className="container">
    <Router>
    
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="/exp" element={<Exp />} />
           
          </Routes>
    </Router>
    
     <hr className='bg-light p-2'/>
     <Blog></Blog>
     <hr className='bg-light p-2'/>
     <Exp></Exp>
     <hr className='bg-light p-2'/>
     <Services></Services>
     <hr className='bg-light p-2'/>
     <ContactPage></ContactPage>
     </div>
    </>
  )
}

export default App
