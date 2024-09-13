import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/Context";

const Navbar = () => {

  const { changeTheme } = useGlobalContext()

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 transition-transform duration-300 bg-gray-100 dark:bg-zinc-950 text-black dark:text-white shadow-md border-b border-gray-300 dark:border-zinc-900 ${
          isVisible ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        {/* Logo */}
        <NavLink to={"/"}>
          <img src="favicon.ico" alt="Logo" className="w-10 h-10" />
        </NavLink>

        {/* Enlaces */}
        <ul className="flex space-x-6 font-bold">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  isActive
                    ? "text-black dark:text-white border-b-2 border-rose-500"
                    : "text-gray-500"
                }`
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/favs"}
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  isActive
                    ? "text-black dark:text-white border-b-2 border-rose-500"
                    : "text-gray-500"
                }`
              }
            >
              FAVORITOS
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contacto"}
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  isActive
                    ? "text-black dark:text-white border-b-2 border-rose-500"
                    : "text-gray-500"
                }`
              }
            >
              CONTACTO
            </NavLink>
          </li>
        </ul>

        {/* Botón de cambio de tema */}
        <button
          onClick={changeTheme}
          className="relative flex items-center justify-center w-12 h-6 rounded-full bg-stone-900 dark:bg-orange-600 focus:outline-none"
        >
          {/* Toggle */}
          <span
            className={`absolute left-1 w-4 h-4 bg-white rounded-full transition-transform transform dark:translate-x-6`}
          />
        </button>
      </nav>

      {/* Añadir un espacio debajo del navbar */}
      <div className="pt-20 bg-zinc-200 dark:bg-zinc-900"></div>
    </>
  );
};

export default Navbar;
