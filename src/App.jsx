import Contact from './components/Contact'
import Footer from './components/Footer'
import Info from './components/Info'
import Nav from './components/Nav';
import { animate } from "animejs";
import Work from './components/Work'

export default function App() {
  return (
    <div className="container px-2 py-5 bg-[#101010] mx-auto  text-white md:px-10 sm:px-1 sm:py-3
      ">
         <Nav  />
          <Info  />
          <Work  />
          <Contact  />
          <Footer />
      </div>
  );
}
