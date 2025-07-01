import '../utils/styles/NavBar.css';
import { NavLink } from 'react-router-dom';
import { CALCULATOR_ROUTE, HOMEPAGE_ROUTE } from '../utils/consts';
import LOGO from '../static/logo.png'
import { useState, useEffect } from 'react';

function NavBar() {
  const [hideNav, setHideNav] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div 
      className='navigation_container' 
      style={{
        top: hideNav ? '-300px' : '0',
        transition: 'top 0.6s ease',
        position: 'fixed',
        width: '100%',
        zIndex: 1000,
      }}
    >
      <nav className='navbar'>
        <ul>
          <li><NavLink to={HOMEPAGE_ROUTE}><img src={LOGO} alt="Logo" loading='lazy'/></NavLink></li>
          <li><a href={`${HOMEPAGE_ROUTE}#advantage`}>Преимущества</a></li>
          <li><a href={`${HOMEPAGE_ROUTE}#catalog`}>Продукция</a></li>
          <li><a href={`${HOMEPAGE_ROUTE}#contacts`}>Контакты</a></li>
          <li><NavLink to={CALCULATOR_ROUTE}>Калькулятор</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;