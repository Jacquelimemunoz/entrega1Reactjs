import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h1>Mi E-commerce</h1>
      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
      <CartWidget />
    </nav>
  );
};