import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';

function NavBar() {
  return (
    <>
      <header className='text-gray-400 bg-gray-900 body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <Logo textoLogo='Ecommerce' />
          <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive
                  ? 'mx-5 bg-indigo-500 text-white hover:text-white hover:bg-indigo-500 hover:cursor-pointer rounded p-2'
                  : 'mx-5 bg-gray-900 hover:text-white hover:bg-indigo-500 hover:cursor-pointer rounded p-2'
              }
            >
              Inicio
            </NavLink>

            <NavLink
              to='/category/gorra'
              className={({ isActive }) =>
                isActive
                  ? 'mx-5 bg-indigo-500 text-white hover:text-white hover:bg-indigo-500 hover:cursor-pointer rounded p-2'
                  : 'mx-5 bg-gray-900 hover:text-white hover:bg-indigo-500 hover:cursor-pointer rounded p-2'
              }
            >
              Gorras
            </NavLink>
            <NavLink
              to='/category/polera'
              className={({ isActive }) =>
                isActive
                  ? 'mx-5 bg-indigo-500 text-white hover:text-white hover:bg-indigo-500 hover:cursor-pointer rounded p-2'
                  : 'mx-5 bg-gray-900 hover:text-white hover:bg-indigo-500 hover:cursor-pointer rounded p-2'
              }
            >
              Poleras
            </NavLink>
            <NavLink
              to='/category/zapatillas'
              className={({ isActive }) =>
                isActive
                  ? 'mx-5 bg-indigo-500 text-white hover:text-white hover:bg-indigo-500 hover:cursor-pointer rounded p-2'
                  : 'mx-5 bg-gray-900 hover:text-white hover:bg-indigo-500 hover:cursor-pointer rounded p-2'
              }
            >
              Zapatillas
            </NavLink>
          </nav>
          <CartWidget />
        </div>
      </header>
    </>
  );
}

export default NavBar;
