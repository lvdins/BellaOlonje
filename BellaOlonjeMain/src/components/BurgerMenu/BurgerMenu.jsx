import { stack as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./BurgerMenu.css";

function BurgerMenu() {
  return (
    <Menu right>
      <Link to="/" className="bm-link-item-list">
        Home
      </Link>
      <Link to="/about" className="bm-link-item-list">
        Product
      </Link>
      <Link to="/404" className="bm-link-item-list">
        Faq
      </Link>
      <Link to="/404" className="bm-link-item-list">
        Contact
      </Link>
    </Menu>
  );
}

export default BurgerMenu;
