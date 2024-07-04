import './App.css'
import AboutUs from './Components/AboutUs/AboutUs';
import FAQ from './Components/FAQ/FAQ';
import FirstAppoinment from './Components/FirstAppoinment/FirstAppoinment';
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
      <FAQ></FAQ>
      <FirstAppoinment></FirstAppoinment>
    </div>
  )
}

export default App
