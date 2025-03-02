import 'react';
import './Header.css';

const Header = () => {

  
  const navItems = [
    { id: 1, name:'ACB', href: 'home' },
    { id: 2, name: 'MINICOPA ENDESA', href: '#' },
    { id: 3, name: 'LIGA ENDESA', href: '#' },
    { id: 4, name: 'CLUBES', href: 'clubes' },
    { id: 5, name: 'COPA DEL REY', href: 'copa' },
    { id: 6, name: 'SUPERCOPA ENDESA', href: '#' },
  ];

  return (
    <header className="header">
      <div className="teams-bar">
        <img className="madrid" src="\images\teams\real-madrid.png" alt="Real Madrid"/>
        <img className="girona" src="\images\teams\girona.png" alt="girona" />
        <img className="baskonia" src="\images\teams\baskonia.png" alt="Baskonia" />
        <img className="manresa" src="\images\teams\manresa.png" alt="Manresa" />
        <img className="zaragoza" src="\images\teams\zaragoza.png" alt="Zaragoza" />
        <img className="granada" src="\images\teams\granada.png" alt="Granada" />
        <img className="gran-canaria" src="\images\teams\gran-canaria.png" alt="Gran Canaria" />
        <img className="lleida" src="\images\teams\lleida.png" alt="Lleida" />
        <img className="joventut" src="\images\teams\joventut.png" alt="Joventut" />
        <img className="tenerife" src="\images\teams\tenerife.png" alt="Tenerife" />
        <img className="coruña" src="\images\teams\coruña.webp" alt="Coruña" />
        <img className="andorra" src="\images\teams\andorra.png" alt="Andorra" />
        <img className="barcelona" src="\images\teams\barcelona.png" alt="Barcelona" />
        <img className="breogan" src="\images\teams\breogan.png" alt="Breogán" />
        <img className="bilbao" src="\images\teams\bilbao.png" alt="Bilbao" />
        <img className="murcia" src="\images\teams\murcia.png" alt="UCAM-Murcia" />
        <img className="unicaja" src="\images\teams\unicaja.png" alt="Unicaja" />
        <img className="valencia" src="\images\teams\valencia.png" alt="Valencia" />

        <img className="endesa3" src="\images\teams\endesa2.png" alt="endesa2" />
        <img className="copa" src="\images\teams\copa.png" alt="copa" />
        <img className="super-copa" src="\images\teams\supercopa.png" alt="copa" />


      </div>

      <div className="main-header">
        <div className="logo-container">
          <div><img className="logo-endesa" src="\images\liga-endesa.png" alt="" /></div>
          <div><img className="logo-acb" src="\images\logo-acb.png" alt="" /></div>
        </div>
      </div>
      

      <nav className="navigation">
        <div className="nav-container">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={item.href} className="nav-link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;