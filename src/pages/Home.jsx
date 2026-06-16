import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    useEffect(() => {
        document.title = "Brandon Y. Kang";
    }, []);

    return (
        <div className="min-h-screen bg-[#F7F4EE] flex flex-col font-sans selection:bg-red-100">
            <Navbar />

            {/* Hero */}
            <div className="flex-1 flex flex-col justify-center max-w-3xl mx-auto w-full px-7 pt-24 pb-10">
                <div className="flex gap-10 items-start">
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

                    {/* Right: vertical photo */}
                    <div className="shrink-0 hidden sm:block overflow-hidden" style={{ width: '200px', height: '300px' }}>
                        <img
                            src="/winterpic.jpeg"
                            alt="Brandon Y. Kang"
                            className="w-full h-full object-cover"
                            style={{ objectPosition: 'center 55%', transform: 'scale(1.85)', transformOrigin: 'center 55%' }}
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
