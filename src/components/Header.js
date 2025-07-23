//  Import the Bars3Icon from heroicons
import { Bars3Icon } from "@heroicons/react/24/solid"; // Icon from heroicons.com
import { useState } from "react"; // React hook for state

// Define the Header component
function Header() {
  // State to track whether the mobile menu is open or closed
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="flex justify-between px-5 py-2 bg-[#9983AF]">
      {/* Website title or logo */}
      <a className="font-bold text-black hover:text-white transition" href="#">
        Bhavani Ambrose
      </a>
      {/* Desktop navigation menu */}
      <nav className="hidden md:block">
        <ul className="flex text-white">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      {/* Mobile navigation menu (visible when toggleMenu is true) */}
      {toggleMenu && (
        <nav className="block md:hidden">
          <ul className="flex flex-col text-white mobile-nav">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Resume</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      )}
      {/* Bar icon button (toggles mobile menu) */}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="block md:hidden"
      >
        <Bars3Icon className="text-white h-5" />
      </button>
    </header>
  );
}

export default Header;
