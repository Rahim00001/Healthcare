import './App.css'
import AboutUs from './Components/AboutUs/AboutUs';
import FAQ from './Components/FAQ/FAQ';
import FirstAppoinment from './Components/FirstAppoinment/FirstAppoinment';
import Hero from './Components/Hero/Hero';
import NewNavbar from './Components/Navbar/NewNavbar';
import Services from './Components/Services/Services';
import Testimonial from './Components/Testimonial/Testimonial';
import NewFooter from './Components/Footer/NewFooter';
import Statistics from './Components/Statistics/Statistics';

function App() {

  return (
    <div className='bg-[#FBFBFB]'>
      <NewNavbar></NewNavbar>
      <Hero></Hero>
      <Statistics></Statistics>
      <AboutUs></AboutUs>
      <Services></Services>
      <Testimonial></Testimonial>
      <FAQ></FAQ>
      <FirstAppoinment></FirstAppoinment>
      <NewFooter></NewFooter>
    </div>
  )
}

export default App
