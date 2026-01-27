import React, { useState, useEffect } from 'react';
import {
    BookOpen,
    Briefcase,
    GraduationCap,
    Mail,
    FileText,
    Linkedin,
    ChevronDown,
    Brain,
    Users,
    Database
} from 'lucide-react';
import Navbar from '../components/Navbar';
import AwardBadge from '../components/AwardBadge';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';



const Home = () => {
    // Removed isMenuOpen, scrolled state and related useEffect/toggleMenu as Navbar component will handle its own state.

    useEffect(() => {
        document.title = "Brandon Y. Kang | Home";
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-red-200">

            {/* Navigation */}
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/30 text-red-300 text-xs font-semibold mb-6 border border-red-800">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        Ph.D. Student @ University of Georgia
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                        Bridging the gap between <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-300">Psychology</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Artificial Intelligence</span> at <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Work</span>.
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
                        I translate the complexities of human behavior into data-driven strategies that make the workplace more effective, engaging, and ready for a future with AI.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="mailto:brandonkang11@gmail.com"
                            className="px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors flex items-center gap-2 cursor-pointer"
                        >
                            <Mail size={18} /> Get in Touch
                        </a>
                        <a href="https://www.linkedin.com/in/bkang11" target="_blank" rel="noreferrer" className="px-6 py-3 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition-colors flex items-center gap-2 border border-slate-700">
                            <Linkedin size={18} /> LinkedIn
                        </a>
                    </div>
                </div>
            </section>

            {/* Research Interests (Cards) */}
            <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 -mt-24 relative z-20">
                    <InterestCard
                        icon={<Users className="text-red-600" size={32} />}
                        title="Team Dynamics"
                        desc="Investigating how team composition and leadership structures drive team performance and reduce turnover."
                    />
                    <InterestCard
                        icon={<Brain className="text-blue-600" size={32} />}
                        title="Human-AI Collaboration"
                        desc="Exploring psychological barriers to AI adoption and strategies to repair trust in Human-AI teams."
                    />
                    <InterestCard
                        icon={<Database className="text-emerald-600" size={32} />}
                        title="People Science"
                        desc="Leveraging advanced analytics to drive data-informed strategies and organizational assessment."
                    />
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-12">
                        <Briefcase className="text-red-700" size={28} />
                        <h2 className="text-3xl font-bold text-slate-900">Professional Experience</h2>
                    </div>

                    <div className="space-y-12 border-l-2 border-slate-200 pl-8 ml-4">
                        <ExperienceItem
                            role="People Science Analyst Intern"
                            company="T-Mobile"
                            date="May 2025 – Aug 2025"
                        />
                        <ExperienceItem
                            role="Analytics & Organizational Effectiveness Intern"
                            company="Coachability Consultants, Inc."
                            date="May 2022 – Sept 2022"
                        />
                        <ExperienceItem
                            role="People & Organizational Intern"
                            company="PricewaterhouseCoopers (PwC)"
                            date="July 2020"
                        />
                        <ExperienceItem
                            role="Learning and Development Intern"
                            company="SPANX"
                            date="May 2019 – Aug 2019"
                        />
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="py-20 px-6 bg-slate-50">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-12">
                        <GraduationCap className="text-red-700" size={28} />
                        <h2 className="text-3xl font-bold text-slate-900">Education</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <h3 className="font-bold text-lg">Ph.D. in I-O Psychology</h3>
                            <p className="text-slate-600">University of Georgia</p>
                            <p className="text-sm text-slate-400 mt-2">Expected 2027</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <h3 className="font-bold text-lg">M.S. in I-O Psychology</h3>
                            <p className="text-slate-600">University of Georgia</p>
                            <p className="text-sm text-slate-400 mt-2">Expected 2026</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 md:col-span-2">
                            <h3 className="font-bold text-lg">B.S. in Psychology</h3>
                            <p className="text-slate-600">University of Georgia</p>
                            <p className="text-sm text-slate-400 mt-2">2021</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Selected Publications */}
            <section id="publications" className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center gap-3 mb-12">
                        <BookOpen className="text-red-700" size={28} />
                        <h2 className="text-3xl font-bold text-slate-900">Recent Research</h2>
                    </div>

                    <div className="grid gap-6">
                        <PublicationCard
                            title="Trust and Collaboration Testing in Controlled Human-Robot Environments"
                            authors="Frericks, J., Kang, B. Y., Outland, N., et al."
                            venue="2024 IEEE 6th International Conference on Cognitive Machine Intelligence (CogMI)"
                            type="Conference Paper"
                            link="https://doi.ieeecomputersociety.org/10.1109/CogMI62246.2024.00026"
                            award={true}
                        />
                        <PublicationCard
                            title="Applying an intersectional lens to consider disparities in historically marginalized women's access to caregiving resources"
                            authors="Carmichael-Tanaka, N., & Kang, B. Y."
                            venue="Industrial and Organizational Psychology (2023)"
                            type="Journal Article"
                            link="https://doi.org/10.1017/iop.2023.18"
                        />
                        <PublicationCard
                            title="Exploring Human-Autonomy Trust Dynamics in a Controlled Environment"
                            authors="Kang, B. Y., Stryker, S., Frericks, J., Outland, N., Schecter, A., et al."
                            venue="INGRoup Annual Conference 2025"
                            type="Symposium Presentation"
                        />
                        <PublicationCard
                            title="Prioritizing Human Sustainability in a Tooled-Up World"
                            authors="Szpaichler, S. (Chair), Kang, B. Y. (Speaker), et al."
                            venue="SIOP Annual Conference 2025"
                            type="Fishbowl"
                        />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

// Sub-components for cleaner code
const InterestCard = ({ icon, title, desc }) => (
    <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
        <div className="mb-6 p-3 bg-slate-50 rounded-lg inline-block">{icon}</div>
        <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
);

const ExperienceItem = ({ role, company, date }) => (
    <div className="relative">
        <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-red-600 shadow-sm"></span>
        <div className="mb-1 flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
            <h3 className="font-bold text-lg text-slate-900">{role}</h3>
            <span className="hidden md:inline text-slate-300">•</span>
            <span className="text-red-700 font-medium">{company}</span>
        </div>
        <span className="text-sm text-slate-400 font-mono mb-3 block">{date}</span>
    </div>
);

const PublicationCard = ({ title, authors, venue, type, link, award }) => {
    const CardContent = () => (
        <div className="flex justify-between items-start gap-4">
            <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 text-slate-600">{type}</span>
                    {award && <AwardBadge />}
                </div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-red-700 transition-colors">{title}</h3>
                <p className="text-slate-600 text-sm mb-1">{authors}</p>
                <p className="text-slate-400 text-sm italic">{venue}</p>
            </div>
            {link && <div className="text-slate-300 group-hover:text-red-600"><ChevronDown className="-rotate-90" /></div>}
        </div>
    );

    if (link && link !== "#") {
        return (
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="group block bg-white p-6 rounded-lg border border-slate-200 hover:border-red-200 hover:shadow-md transition-all"
            >
                <CardContent />
            </a>
        );
    }

    return (
        <div className="group block bg-white p-6 rounded-lg border border-slate-200 hover:border-red-200 hover:shadow-md transition-all">
            <CardContent />
        </div>
    );
};



export default Home;
