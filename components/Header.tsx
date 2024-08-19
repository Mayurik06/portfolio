import { useState } from 'react';
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
<nav className="p-4">
      <div className="container mx-auto flex justify-between items-center w-11/12">
        <div className="text-white text-2xl font-bold">
          <Link href="/">MAYURI</Link>
        </div>
        <div className="hidden md:flex space-x-10">
          <Link href="#home" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="#about" className="text-gray-300 hover:text-white">
        About
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
           =
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-2">
          <Link href="#home" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="#about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </div>
      )}
    </nav>
    </>
  );
}
