import { MenuIcon, X } from "lucide-react";
import { useState } from "react";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Botão de Menu */}
      <button
        className="p-4 focus:outline-none md:hidden"
        onClick={toggleMenu}
        type="button"
      >
        <MenuIcon />
      </button>

      {/* Drawer Menu */}
      <div
        className={`fixed top-0 right-0 w-full bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="h-16 p-4 flex flex-row items-center justify-between border-b-2 border-b-gray-100">
          <span className="text-2xl font-bold">{"<MC/>"}</span>
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
            type="button"
          >
            <X size={32} />
          </button>
        </div>

        {/* Itens do Menu */}
        <nav className="mt-16">
          <ul className="space-y-4 px-4 list-none">
            <li>
              <a
                href="/"
                className="text-lg font-semibold none text-gray-600"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-lg font-semibold"
                onClick={toggleMenu}
              >
                Sobre
              </a>
            </li>
            <li>
              <a href="#experience" className="text-lg font-semibold">
                Minha experiencia
              </a>
            </li>
            <li>
              <a href="/" className="text-lg font-semibold">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
