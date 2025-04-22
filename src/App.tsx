import { useEffect } from 'react';
import './styles/globals.css';
import "./index.css"
import "./App.css"
// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Packages from './components/Packages';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'Lumina Studio | Professional Photography';
    
    // Change favicon (optional)
    const link = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (link) {
      link.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23ffffff"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-10a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm7.85-2.85a1 1 0 0 0-1.41 0l-1.42 1.42a7.09 7.09 0 0 0-2-1.17 7.08 7.08 0 0 0-9.02 9.02 7.09 7.09 0 0 0 1.17 2l-1.42 1.42a1 1 0 1 0 1.41 1.41l1.42-1.42a7.09 7.09 0 0 0 2 1.17 7.08 7.08 0 0 0 9.02-9.02 7.09 7.09 0 0 0-1.17-2l1.42-1.42a1 1 0 0 0 0-1.41z"/></svg>';
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Packages />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;