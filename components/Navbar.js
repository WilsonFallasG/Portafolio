import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-black fixed-top ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container max-width: 768px">
        <div className="navbar-brand"><img src="W.png" width="40" height="25" /></div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li>
              <Link href="/" passHref>
                <div className="nav-link active">Inicio</div>
              </Link>
            </li>
            <li>
              <Link href="/contacto" passHref>
                <div className="nav-link active">Contacto</div>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <div className="nav-link active">About</div>
              </Link>
            </li>
            <li>
              <Link href="/contratacion" passHref>
                <div className="nav-link active">Contrateme</div>
              </Link>
            </li>
           
            <li>
              <Link href="/github" passHref>
                <div className="nav-link active">Github</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
