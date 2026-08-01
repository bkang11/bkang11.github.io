import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import NewsTicker from '../components/NewsTicker';
import Footer from '../components/Footer';

const Home = () => {
    useEffect(() => {
        document.title = "Brandon Y. Kang";
    }, []);

    return (
        <div className="min-h-screen bg-[#F7F4EE] flex flex-col font-sans selection:bg-red-100">
            <Navbar />

            {/* --nav-h is measured and published by Navbar, so this stays correct
                when the links wrap to a second row on narrow screens. */}
            <div className="mt-[var(--nav-h)]">
                <NewsTicker />
            </div>

            {/* Hero */}
            <div className="flex-1 flex flex-col justify-center max-w-3xl mx-auto w-full px-7 pt-12 pb-10">
                <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 items-start">
                    {/* Left: headline + bio */}
                    <div className="flex-1 min-w-0">
                        <h1
                            className="font-serif text-gray-900 leading-[1.05]"
                            style={{ fontSize: 'clamp(32px, 5.5vw, 52px)', letterSpacing: '-0.02em' }}
                        >
                            People scientist.<br />
                            Building tools for<br />
                            the <span style={{ color: '#BA0C2F' }}>future of work.</span>
                        </h1>

                        <p className="mt-6 text-[16px] font-sans text-gray-500 leading-relaxed">
                            I study how people and AI systems work together — building measurement tools,
                            running experiments, and shipping research at the intersection of psychology
                            and organizational life.
                        </p>
                    </div>

                    {/* Right on desktop, stacked under the bio on mobile.
                        The 1.85x crop is done by oversizing the image rather than
                        with transform: scale(). Same framing — the box keeps the
                        container's aspect ratio, so object-cover picks the same
                        region — but scaling a clipped layer left a 1px seam where
                        the compositor's raster tiles met. */}
                    <div className="shrink-0 relative overflow-hidden w-[165px] h-[220px] sm:w-[200px] sm:h-[300px]">
                        <img
                            src="/winterpic.jpeg"
                            alt="Brandon Y. Kang"
                            className="absolute w-[185%] h-[185%] max-w-none object-cover"
                            style={{ left: '-42.5%', top: '-46.75%', objectPosition: 'center 55%' }}
                        />
                    </div>
                </div>

                <div className="mt-10 pt-8 border-t border-[#E2DDD5] grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div>
                        <div className="text-[11px] font-sans uppercase tracking-widest text-gray-400 mb-2">
                            Human-AI Collaboration
                        </div>
                        <p className="text-[14px] font-sans text-gray-500 leading-relaxed">
                            Trust calibration, AI adoption barriers, and designing effective human-AI teams.
                        </p>
                    </div>
                    <div>
                        <div className="text-[11px] font-sans uppercase tracking-widest text-gray-400 mb-2">
                            Team Dynamics
                        </div>
                        <p className="text-[14px] font-sans text-gray-500 leading-relaxed">
                            How composition, leadership, and network structure drive team performance and turnover.
                        </p>
                    </div>
                    <div>
                        <div className="text-[11px] font-sans uppercase tracking-widest text-gray-400 mb-2">
                            People Analytics
                        </div>
                        <p className="text-[14px] font-sans text-gray-500 leading-relaxed">
                            Leveraging data to inform talent decisions, scale measurement, and organizational strategy.
                        </p>
                    </div>
                </div>
            </div>

            {/* Credential row */}
            <div className="border-t border-[#E2DDD5] max-w-3xl mx-auto w-full px-7 py-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                        <div className="text-[12px] font-sans uppercase tracking-widest text-gray-400 mb-1.5">where</div>
                        <div className="text-[13px] font-sans text-gray-600 leading-relaxed">
                            PhD student · I-O Psychology<br />
                            University of Georgia
                        </div>
                    </div>
                    <div>
                        <div className="text-[12px] font-sans uppercase tracking-widest text-gray-400 mb-1.5">current</div>
                        <div className="text-[13px] font-sans text-gray-600 leading-relaxed">
                            Adobe · People Data Scientist<br />
                            Summer 2026
                        </div>
                    </div>
                    <div>
                        <div className="text-[12px] font-sans uppercase tracking-widest text-gray-400 mb-1.5">published</div>
                        <div className="text-[13px] font-sans text-gray-600 leading-relaxed">
                            ★ IEEE CogMI Best Paper<br />
                            2024
                        </div>
                    </div>
                    <div className="flex items-end justify-start md:justify-end">
                        <a
                            href="mailto:brandonkang11@gmail.com"
                            style={{ color: '#BA0C2F' }}
                            className="text-[13px] font-sans hover:opacity-70 transition-opacity"
                        >
                            Open to industry →
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;
