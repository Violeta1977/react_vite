import logo from '/vite.svg';
import './Hero.css';

export function Hero(){
const imgStyle={
    height:'24rem',
    widht:'100%',
};

const title=Math.random()>0.5
? 'Vite Next Generation Frontend Tooling'
: 'Finito!!!';

    return(
        <section className='hero'>
          <div className='textContent'>
            <h1 className='title'>{title}</h1>
            <p className='description'>Get ready for a development environment that can <br /> finally catch up with you.</p>
            <div className='btnList'>
              <a className='btn' href="#">Get Started</a>
              <a className='btn' href="#">Why Vite?</a>
              <a className='btn' href="#">View on Github</a>
              <a className='btn' href="#">⚡️ ViteConf 24!</a>
            </div>
          </div>
          <img src={logo} style={imgStyle} alt="Vite img" />
        </section>
    );
}