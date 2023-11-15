import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';

function NavBar() {
  return (
    <>
      <header className='text-gray-400 bg-gray-900 body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <Logo textoLogo='Ecommerce' />
          <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
            <a className='mr-5 hover:text-white hover:bg-gray-700 hover:cursor-pointer rounded p-2'>
              Inicio
            </a>
            <a className='mr-5 hover:text-white hover:bg-gray-700 hover:cursor-pointer rounded p-2'>
              Gorras
            </a>
            <a className='mr-5 hover:text-white hover:bg-gray-700 hover:cursor-pointer rounded p-2'>
              Poleras
            </a>
          </nav>
          <CartWidget />
        </div>
      </header>
    </>
  );
}

export default NavBar;
