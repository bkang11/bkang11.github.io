import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === '/';

    // Handle scroll for navbar styling
    useEffect(() => {
        const handleScroll = () => {
            // Dynamic styling: transparent on home until scroll, always solid on subpages

            if (isHome) {
                setScrolled(window.scrollY > 50);
            } else {
                setScrolled(true); // Always styled on subpages for readability
            }
        };

        // Initial check
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHome]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleScrollToTop = (e) => {
        if (location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    // Navigation Links
    // User wants "About" to scroll to top of main page, same as clicking the name.
    const navLinks = [
        { name: 'Experience', href: '/experience' },
        { name: 'Research', href: '/research' },
        // { name: 'Blog', href: '/blog', type: 'route' }, 
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                <Link
                    to="/"
                    onClick={handleScrollToTop}
                    className="text-xl font-bold tracking-tight flex items-center gap-3"
                >
                    {/* Profile Picture */}
                    <div className="h-10 w-10 rounded-full border-2 border-red-700 overflow-hidden shadow-sm">
                        <img src="/prof_pic.jpg" alt="Brandon Y. Kang" className="h-full w-full object-cover" />
                    </div>
                    <span className={scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}>Brandon Y. Kang</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {/* Explicit About Link - now goes to top of home */}
                    <Link
                        to="/"
                        onClick={handleScrollToTop}
                        className={`text-sm font-medium hover:text-red-600 transition-colors ${scrolled ? 'text-slate-600' : 'text-slate-200'} cursor-pointer`}
                    >
                        About
                    </Link>

                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className={`text-sm font-medium hover:text-red-600 transition-colors ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="/cv.pdf"
                        className="px-4 py-2 bg-red-700 text-white rounded-full text-sm font-medium hover:bg-red-800 transition-colors shadow-lg shadow-red-900/20"
                    >
                        Download CV
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden p-2 text-slate-600">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col gap-4 border-t border-slate-100">
                    <Link
                        to="/"
                        onClick={handleScrollToTop}
                        className="text-slate-600 font-medium py-2"
                    >
                        About
                    </Link>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="text-slate-600 font-medium py-2"
                            onClick={() => {
                                setIsMenuOpen(false);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <a href="/cv.pdf" className="text-red-700 font-medium py-2">Download CV</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
