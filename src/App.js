import About from "./components/About";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Spacer from "./components/Spacer";
import TopSlider from "./components/TopSlider";

function App() {
  return (
    <>
      <Navbar/>
      <Logo/>
      <Header/>
      <TopSlider/>
      <Spacer title={'About me'}/>
      <About/>
    </>
  );
}

export default App;
