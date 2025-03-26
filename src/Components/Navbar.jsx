
  import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 sticky top-0 z-50 bg-transparent">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src="/src/assets/Logo1.png" alt="logo" className="w-28 h-28" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg font-semibold">
          {["Home", "About", "Technologies", "Projects", "Contact"].map(
            (item, index) => (
              <div key={index} className="relative group">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-orange-400 transition-all duration-300 cursor-none "
                >
                  {item}
                </a>
                {/* Smooth Left-to-Right Animated Bar */}
                <div className="absolute left-0 bottom-0 w-full h-1 bg-orange-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 "></div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 p-4 rounded-lg md:hidden">
          {["Home", "About", "Technologies", "Projects", "Contact"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-orange-400 py-2"
              >
                {item}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
