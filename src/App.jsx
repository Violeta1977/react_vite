import './App.css';
import { Features } from './components/features/Features';
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';


function App() {
  return (
    <>
      <Header />
      
      <main>
        <Hero />
        <Features />

        
        
        <section>
          <a href="#">Sponsor Vite</a>
          <a href="#">Sponser Evan You</a>
        </section>
      </main>

      <footer>
        <p>Released under the MIT License. (2c4ef113)</p>
        <p>Copyright &copy; 2019-present Evan You & Vite Contributors</p>
      </footer>
    </>
  );
}


export default App;
