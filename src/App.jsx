import './App.scss';
import Cloud from './components/Cloud/Cloud';
import Courses from './components/Courses/Courses';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import News from './components/News/News';
import Sefeatures from './components/Sefeatures/Sefeatures';
import Success from './components/Success/Success';
import Testimonial from './components/Testimonial/Testimonial';
import Totc from './components/Totc/Totc';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Success/>
      <Cloud/>
      <Totc/>
      <Features/>
      <Sefeatures/>
      <Courses/>
      <Testimonial/>
      <News/>
      <Footer/>
    </div>
  );
}

export default App;
