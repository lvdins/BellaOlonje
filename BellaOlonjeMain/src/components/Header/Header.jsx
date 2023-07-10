import "./Header.css";
import { Link } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Logo from "../../assets/logo.png";
import { useState, useEffect } from "react";

const Header = () => {
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Product", link: "/about" },
    { label: "Faq", link: "/about" },
    { label: "Contact", link: "/a" },
  ];

  const scrollDirection = useScrollDirection();

  return (
    <>
      <div className="menu">
        <BurgerMenu />
      </div>
      <HeaderScroll />
      <header
        className={`header ${scrollDirection === "down" ? "hide" : "show"}`}
      >
        <Link to={"/"}>
          <img className="logo" src={Logo} alt="BellaLogo" />
        </Link>

        <div className="menu-items">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.link}>
              {item.label}
            </Link>
          ))}
        </div>
      </header>
    </>
  );
};

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = 0;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      setScrollDirection(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, []);

  return scrollDirection;
}

function HeaderScroll() {
  const scrollDirection = useScrollDirection();

  return (
    <div
      className={`headerscroll ${scrollDirection === "down" ? "hide" : "show"}`}
    >
      <div></div>
    </div>
  );
}

export default Header;
