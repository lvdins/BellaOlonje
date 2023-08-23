import "./Header.scss";
import { Link, NavLink, useMatch } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Logo from "../../assets/logo.png";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function CustomNavLink({ to, children, activeClassName, ...rest }) {
  let location = useLocation();
  return (
    <NavLink
      to={to}
      className={location.pathname === to ? activeClassName : ""}
      {...rest}
    >
      {children}
    </NavLink>
  );
}

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

const Header = () => {
  const scrollDirection = useScrollDirection();

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Product", link: "ImageTextLayout" },
    { label: "Faq", link: "/faq" },
    { label: "Contact", link: "/contact" },
  ];

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
          {menuItems.map((item, index) => {
            if (item.label === "Home") {
              return (
                <Link
                  onClick={() => {
                    setTimeout(
                      () => window.scrollTo({ top: 0, behavior: "smooth" }),
                      0
                    );
                  }}
                  to="/"
                  key={index}
                  className="menu-items"
                >
                  {item.label}
                </Link>
              );
            } else if (item.label === "Product") {
              return (
                <ScrollLink
                  key={index}
                  to={item.link}
                  smooth={true}
                  duration={500}
                  className="menu-items"
                >
                  {item.label}
                </ScrollLink>
              );
            } else {
              return (
                <CustomNavLink
                  key={index}
                  to={item.link}
                  activeClassName="active"
                >
                  {item.label}
                </CustomNavLink>
              );
            }
          })}
        </div>
      </header>
    </>
  );
};

export default Header;
