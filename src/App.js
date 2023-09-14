import About from "./components/About";
import Experience from "./components/Experience";
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
    </>
  );
}

export default App;
