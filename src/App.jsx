import './App.css';
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';


function App() {
  return (
    <>
      <Header />
      <Hero />

      <main>
        
        <section>
          <div>
            <div>💡</div>
            <h2>Instant Server Start</h2>
            <p>On demand file serving over native ESM, no bundling required!</p>
          </div>
          <div>
            <div>⚡️</div>
            <h2>Lightning Fast HMR</h2>
            <p>Hot Module Replacement (HMR) that stays fast regardless of app size.</p>
          </div>
          <div>
            <div>🛠️</div>
            <h2>Rich Features</h2>
            <p>Out-of-the-box support for TypeScript, JSX, CSS and more.</p>
          </div>
          <div>
            <div>📦</div>
            <h2>Optimized Build</h2>
            <p>Pre-configured Rollup build with multi-page and library mode support.</p>
          </div>
          <div>
            <div>🔩</div>
            <h2>Universal Plugins</h2>
            <p>Rollup-superset plugin interface shared between dev and build.</p>
          </div>
          <div>
            <div>🔑</div>
            <h2>Fully Typed APIs</h2>
            <p>Flexible programmatic APIs with full TypeScript typing.</p>
          </div>
        </section>
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
