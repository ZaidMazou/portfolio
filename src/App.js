import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Spacer from "./components/Spacer";
import TopSlider from "./components/TopSlider";
import Works from "./components/Works";

function App() {
  return (
    <>
      <Navbar/>
      <Logo/>
      <Header/>
      <TopSlider/>
      <Spacer title={'About me'}/>
      <About/>
      <Spacer title={'Expérience'}/>
      <Experience/>
      <Spacer title={'Travaux'}/>
      <Works/>
      <Spacer title={'Contact'}/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
