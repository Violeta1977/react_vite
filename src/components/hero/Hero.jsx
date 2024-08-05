import logo from '/vite.svg';

export function Hero(){
const imgStyle={
    height:'15rem',
};

    return(
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
          <img src={logo} style={imgStyle} alt="Vite img" />
        </section>
    );
}