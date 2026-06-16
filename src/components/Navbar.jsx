import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    const links = [
        { name: 'About', href: '/about' },
        { name: 'Experience', href: '/experience' },
        { name: 'Research', href: '/research' },
        { name: 'CV', href: '/cv.pdf', external: true },
    ];

    const linkClass = (href) => {
        const active = location.pathname === href;
        return `transition-colors ${active ? 'text-gray-900' : 'text-gray-400 hover:text-gray-700'}`;
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F7F4EE]/95 backdrop-blur-sm border-b border-[#E2DDD5]/60">
            <div className="max-w-3xl mx-auto px-7 py-3.5 flex justify-between items-center">
                <div className="flex items-center">
                    <Link to="/" className="text-[12px] font-sans text-gray-700 hover:text-gray-900 transition-colors tracking-tight">
                        Brandon Y. Kang
                    </Link>
                    {isHome && (
                        <span className="text-[12px] font-sans text-gray-400 hidden sm:inline">
                            {' '}·{' '}
                            <a
                                href="mailto:brandonkang11@gmail.com"
                                className="hover:text-gray-600 transition-colors"
                            >
                                brandonkang11@gmail.com
                            </a>
                        </span>
                    )}
                </div>
                <div className="flex items-center gap-6">
                    {links.map((link) =>
                        link.external ? (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[12px] font-sans text-gray-400 hover:text-gray-700 transition-colors"
                            >
                                {link.name}
                            </a>
                        ) : (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`text-[12px] font-sans ${linkClass(link.href)}`}
                            >
                                {link.name}
                            </Link>
                        )
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
