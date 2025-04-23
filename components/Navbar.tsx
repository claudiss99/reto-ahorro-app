import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/">
          <img src="/logo.png" alt="Logo" className="logo" />
        </a>
      </div>
      <div className="navbar-center">
        <a href="/">Inicio</a>
        <a href="/tips">Tips</a>
        <a href="/retos">Retos</a>
      </div>
      <div className="navbar-right">
        <button>Registrarse</button>
        <button>Iniciar sesión</button>
      </div>
    </nav>
  );
};

export default Navbar;
