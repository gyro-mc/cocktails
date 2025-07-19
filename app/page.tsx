import About from "./components/about";
import Art from "./components/art";
import CockTails from "./components/cocktails";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Menu from "./components/menu";
import NavBar from "./components/navBar";


export default function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <CockTails />
      <About/>
      <Art/>
      <Menu/>
      <Contact/>
    </main>
  );
}
