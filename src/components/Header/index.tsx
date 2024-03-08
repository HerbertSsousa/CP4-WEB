import './style.css';

interface HeaderProps {
  Title: string;
  logo?: string;
}

function Header({ Title, logo }: HeaderProps) {
  return (
    <header className="header">
      <div className='logoContainer'>
        {logo && <img className="logo" src={logo} alt="Logo" />}
        <h1>{Title}</h1>
      </div>
      <div className="arrumar">
        <ul id="alinha">
          <a href="#">Produtos</a>
          <a href="#">Industrias</a>
          <a href="#">Suporte</a>
          <a href="#">Empresa</a>
        </ul>
      </div>
    </header>
  );
}

export default Header;