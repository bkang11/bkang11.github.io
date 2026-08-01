import React, { useLayoutEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const navRef = useRef(null);

    // The bar is fixed, so anything sitting directly beneath it needs to know how
    // tall it is. That changes with viewport — the links wrap on narrow screens —
    // so publish the measured height instead of hardcoding an offset.
    useLayoutEffect(() => {
        const el = navRef.current;
        if (!el) return undefined;
        const publish = () =>
            document.documentElement.style.setProperty('--nav-h', `${el.offsetHeight}px`);
        publish();
        const observer = new ResizeObserver(publish);
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const links = [
        { name: 'About', href: '/about' },
        { name: 'Experience', href: '/experience' },
        { name: 'Research', href: '/research' },
        { name: 'News', href: '/news' },
        { name: 'CV', href: '/cv.pdf', external: true },
    ];

    const linkClass = (href) => {
        const active = location.pathname === href;
        return `transition-colors ${active ? 'text-gray-900' : 'text-gray-400 hover:text-gray-700'}`;
    };

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 right-0 z-50 bg-[#F7F4EE]/95 backdrop-blur-sm border-b border-[#E2DDD5]/60"
        >
            {/* Wraps to two rows on narrow screens: the name and the five links
                need ~383px on one line and only ~319px exist at 375px. Letting the
                links drop to their own row beats breaking the name mid-phrase. */}
            <div className="max-w-3xl mx-auto px-7 py-3.5 flex flex-wrap justify-between items-center gap-x-6 gap-y-1.5">
                <div className="flex items-center whitespace-nowrap">
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
                <div className="flex items-center gap-4 sm:gap-6">
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
                                aria-current={location.pathname === link.href ? 'page' : undefined}
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
