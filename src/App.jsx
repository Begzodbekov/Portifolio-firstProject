import { Route, Routes } from 'react-router-dom';
import './App.scss';
// import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import Careers from './pages/Careers/Careers';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Header from './components/Header/Header';
import Checkout from './pages/Checkout/Checkout';
import Cdetail from './pages/Cdetail/Cdetail';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/course-detail'element={<Cdetail/>}></Route>
        
      </Routes>
      <Footer/>
      


    </div>
  );
}

export default App;
