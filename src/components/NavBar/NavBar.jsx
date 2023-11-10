import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <>
      <h6>Ecommerce</h6>
      <ul>
        <li>
          <a href='#'>Inicio</a>
        </li>
        <li>
          <a href='#'>Productos</a>
        </li>
        <li>
          <a href='#'>Contacto</a>
        </li>
      </ul>
      <CartWidget />
    </>
  );
}

export default NavBar;
