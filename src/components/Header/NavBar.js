import React, { useContext } from "react";
import { Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { ItemProvideContext } from "../ContextApi/ItemProvider";

const NavBar = (props) => {
  const cartCtx = useContext(ItemProvideContext);

  return (
    <header className="bg-gray-800 shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center">
          <h2 className="text-xl font-bold text-white">
            <NavLink to={"/"} className="no-underline text-white">
              𝕆𝕡𝕥𝕚𝕔𝕒𝕝 𝕊𝕞𝕒𝕣𝕥
            </NavLink>
          </h2>
        </div>
        <div className="hidden md:flex space-x-6">
          <NavLink
            to={"/"}
            className="text-white hover:text-blue-400 no-underline"
          >
            HOME
          </NavLink>
          <NavLink
            to={"/store"}
            className="text-white hover:text-blue-400 no-underline"
          >
            COLLECTIONS
          </NavLink>
          <NavLink
            to={"/store/yourorders"}
            className="text-white hover:text-blue-400 no-underline"
          >
            YOURORDERS
          </NavLink>

          <NavLink
            to={"/about"}
            className="text-white hover:text-blue-400 no-underline"
          >
            ABOUT
          </NavLink>
          <NavLink
            to={"/contact"}
            className="text-white hover:text-blue-400 no-underline"
          >
            CONTACT
          </NavLink>
          <NavLink
            to="/auth"
            className="text-white hover:text-blue-400 no-underline"
          >
            LOGIN / SIGN UP
          </NavLink>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={props.cartHandler}
            type="button"
            className="relative flex items-center p-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
          >
            <ion-icon name="cart-outline" size="large"></ion-icon>
            <span className="ml-2">Your Cart</span>
            <Badge className="ml-2">{cartCtx.count}</Badge>
          </button>
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu.classList.toggle("hidden");
              }}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div className="hidden md:hidden bg-gray-800" id="mobile-menu">
        <ul className="flex flex-col items-center">
          <li>
            <NavLink
              to={"/"}
              className="block py-2 px-4 text-sm text-white hover:bg-gray-700 no-underline"
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/store"}
              className="block py-2 px-4 text-sm text-white hover:bg-gray-700 no-underline"
            >
              COLLECTIONS
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/store/yourorders"}
              className="block py-2 px-4 text-sm text-white hover:bg-gray-700 no-underline"
            >
              YOURORDERS
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className="block py-2 px-4 text-sm text-white hover:bg-gray-700 no-underline"
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className="block py-2 px-4 text-sm text-white hover:bg-gray-700 no-underline"
            >
              CONTACT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/auth"
              className="block py-2 px-4 text-sm text-white hover:bg-gray-700 no-underline"
            >
              LOGIN / SIGN UP
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
