import './App.css';
import { Header } from './components/header/Header';


function App() {
  return (
    <>
      <Header />

      <main>
        <section>
          <div>
            <h1>Vite <br />Next Generation <br />Frontend Tooling</h1>
            <p>Get ready for a development environment that can <br /> finally catch up with you.</p>
            <div>
              <a href="#">Get Started</a>
              <a href="#">Why Vite?</a>
              <a href="#">View on Github</a>
              <a href="#">⚡️ ViteConf 24!</a>
            </div>
          </div>
          <img src="#" alt="Vite img" />
        </section>
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
