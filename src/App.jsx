import './App.css'
import AboutUs from './Components/AboutUs/AboutUs';
import Hero from './Components/Hero/Hero';
import NewNavbar from './Components/Navbar/NewNavbar';
import Services from './Components/Services/Services';

function App() {

  return (
    <div className='bg-[#FBFBFB]'>
      <NewNavbar></NewNavbar>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <Services></Services>
    </div>
  )
}

export default App
