import './App.css'
import AboutUs from './Components/AboutUs/AboutUs';
import Hero from './Components/Hero/Hero';
import NewNavbar from './Components/Navbar/NewNavbar';
import Services from './Components/Services/Services';
import Testimonial from './Components/Testimonial/Testimonial';

function App() {

  return (
    <div className='bg-[#FBFBFB]'>
      <NewNavbar></NewNavbar>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <Services></Services>
      <Testimonial></Testimonial>
    </div>
  )
}

export default App
