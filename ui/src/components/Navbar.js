import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";
import logo from "../static/logo.svg";
import "../styles/navbar.css";

const Navbar = () => {
  const pages = ["Home", "Services", "Contact"];

  const [activePage, setPage] = useState("Home");

  const [navChange, setNavChange] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 500) {
      setNavChange(true);
    } else {
      setNavChange(false);
    }
  });

  const Menu = () => {
    if (window.innerWidth < 640) {
      return (
        <div
          className={openMenu ? "menu-close" : "menu"}
          onClick={(e) => setOpenMenu(!openMenu)}
        >
          {openMenu ? (
            <div className="menu-list">
              {pages.map((page) => {
                return (
                  <NavLink
                    key={page}
                    to={`${page.toLowerCase()}`}
                    className={
                      page === activePage ? "label-og active-page" : "label-og"
                    }
                    onClick={(e) => setPage(page)}
                  >
                    {page}
                  </NavLink>
                );
              })}
            </div>
          ) : null}
        </div>
      );
    } else {
      return (
        <div className="menu">
          {pages.map((page) => {
            return (
              <NavLink
                key={page}
                to={`${page.toLowerCase()}`}
                className={
                  navChange
                    ? page === activePage
                      ? "label-alt active-alt"
                      : "label-alt"
                    : page === activePage
                    ? "label-og active-page"
                    : "label-og"
                }
                onClick={(e) => setPage(page)}
              >
                {page}
              </NavLink>
            );
          })}
        </div>
      );
    }
  };

  return (
    <Box className={navChange ? "box box-color" : "box"}>
      <div className={navChange ? "base-card-alt" : "base-card"}>
        <div className={navChange ? "top-card-alt" : "top-card"}>
          <img src={logo} className={navChange ? "logo-alt" : "logo"} />
        </div>
      </div>
      <Menu />
    </Box>
  );
};

export default Navbar;
