'use client';
import { X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ['home', 'about', 'service', 'skill', 'project', 'experience', 'hire', 'contact'];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#030934] z-50 p-5 md:px-20 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        <Link href="/" className="text-2xl font-extrabold font-sans tracking-wide hover:text-cyan-300 transition duration-300 overline text-cyan-100">
            Softpro
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-2 lg:space-x-4 px-4 rounded-full gap-4">
            {navLinks.map((link, idx) => (
            <a
                key={idx}
                href={`#${link}`}
                className="text-white text-lg px-3 py-2 rounded-full hover:bg-cyan-400 hover:text-[#030934] transition"
                style={{ '--i': idx + 1 } as React.CSSProperties}
            >
                {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
            ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
            <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            title={menuOpen ? 'Close menu' : 'Open menu'}
            className="text-3xl focus:outline-none text-white hover:text-cyan-400 transition"
            >
            ☰
            </button>
        </div>

        {/* Mini Mobile Navbar */}
        <div
            className={`fixed top-0 left-0 overflow-y-auto w-full h-screen bg-[#030934] flex flex-col items-center justify-evenly z-40 py-10 transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            {navLinks.map((link, idx) => (
            <a
                key={idx}
                href={`#${link}`}
                onClick={() => setMenuOpen(false)}
                className="w-full hover:bg-cyan-300/10 text-center text-white py-3 px-4 rounded-lg text-xl hover:text-cyan-400 transition"
                style={{ '--i': idx + 1 } as React.CSSProperties}
            >
                {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
            ))}
        </div>
        {menuOpen && <X className="z-50 block lg:hidden cursor-pointer text-5xl font-bold focus:outline-none text-white hover:text-cyan-400 transition" onClick={() => setMenuOpen(false)}/>}
      </div>
    </header>
  );
}