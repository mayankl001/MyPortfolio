import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components"; // <-- Ensure Footer imported

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary overflow-x-hidden max-w-full'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>

        {/* Bottom Footer Component */}
        <Footer /> 
      </div>
    </BrowserRouter>
  );
}

export default App;