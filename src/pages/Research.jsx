import React, { useEffect, useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const technicalReports = [
    {
        title: 'Development of A Bi-Directional Computational Model of Dyadic Trust in Human-AI Infantry Teaming Contexts',
        authors: 'Outland, N., Doshi, P., Camelio, J., Schechter, A., Navare, B., Kang, B., Stryker, S., Frericks, J., Hicks, J., & Fouse, A.',
        venue: 'CCDC Data and Analysis Center',
        year: '2023',
    },
];

const publications = [
    {
        title: "Trust and Collaboration Testing in Controlled Human-Robot Environments",
        authors: "Frericks, J., Kang, B. Y., Outland, N., Doshi, P., Johnsen, K., & Schecter, A.",
        venue: "IEEE 6th International Conference on Cognitive Machine Intelligence (CogMI)",
        type: "Conference Paper",
        year: "2024",
        link: "https://doi.ieeecomputersociety.org/10.1109/CogMI62246.2024.00026",
        award: true,
    },
    {
        title: "The Stable Individual Differences Driving Employee Coachability Behaviours",
        authors: "Weiss, J. A., Outland, N., Plummer, G., Zervos, L., Carmichael-Tanaka, N., & Kang, B.",
        venue: "International Journal of Evidence Based Coaching & Mentoring",
        type: "Journal Article",
        year: "2023",
        link: "https://doi.org/10.24384/d24j-fh23",
    },
    {
        title: "Applying an intersectional lens to consider disparities in historically marginalized women's access to caregiving resources",
        authors: "Carmichael-Tanaka, N. & Kang, B. Y.",
        venue: "Industrial and Organizational Psychology",
        type: "Journal Article",
        year: "2023",
        link: "https://doi.org/10.1017/iop.2023.18",
    },
];

const activeProjects = [
    {
        name: 'Willingness to Work with AI Teammate Scale',
        status: 'In Progress',
        target: "SIOP Annual Conference '26",
    },
    {
        name: 'LLM Efficacy for Thematic Content Analysis',
        status: 'In Progress',
        target: "SIOP Annual Conference '26",
    },
    {
        name: 'Human-Autonomy Trust Dynamics',
        status: 'In Review',
        target: "INGRoup Annual Conference '25",
    },
];

const presentations = [
    // 2026
    { title: 'Examining the Efficacy of Large Language Models for Thematic Content Analysis', year: '2026', type: 'Symposium', venue: 'SIOP Annual Conference' },
    { title: 'Getting your first I-O internship: What Graduate Students Should Know', year: '2026', type: 'Panel', venue: 'SIOP Annual Conference' },
    { title: 'Willingness to Work with AI Teammate Scale: Development and Validation', year: '2026', type: 'Symposium', venue: 'SIOP Annual Conference' },
    // 2025
    { title: 'AI integration in financial services: How task attributes, collaboration modes, and experience shape trust', year: '2025', type: 'Panel', venue: 'AFS Australia–New Zealand Symposium' },
    { title: 'AI integration in financial services: How task attributes, collaboration modes, and experience shape trust', year: '2025', type: 'Panel', venue: 'CFP Board Connections Conference' },
    { title: 'Trust in AI in financial planning: A psychological perspective on tasks and collaboration', year: '2025', type: 'Presentation', venue: 'World Finance Conference' },
    { title: 'Identifying Correlates of Trust in Human-Robot Teams', year: '2025', type: 'Presentation', venue: 'INGRoup Annual Conference' },
    { title: 'Exploring Human-Autonomy Trust Dynamics in a Controlled Environment', year: '2025', type: 'Symposium', venue: 'INGRoup Annual Conference' },
    { title: 'An Analysis of Textbook Coverage of Cultural Differences in Cognitive Tests', year: '2025', type: 'Poster', venue: 'SIOP Annual Conference' },
    { title: 'Prioritizing Human Sustainability in a Tooled-Up World', year: '2025', type: 'Fishbowl', venue: 'SIOP Annual Conference' },
    { title: 'Designing a Virtual Environment for Examining Human-Robot Interactions', year: '2025', type: 'Symposium', venue: 'SIOP Annual Conference' },
    // 2024
    { title: '(A)I can be your teammate! Exploring the Impacts of AI in Organizational Teams', year: '2024', type: 'Symposium (Co-Chair)', venue: 'SIOP Annual Conference' },
    { title: 'Updates to a Computational Model of Trust Calibration', year: '2024', type: 'Symposium', venue: 'SIOP Annual Conference' },
    { title: 'Development and Validation of the Artificial Intelligence Salience Scale', year: '2024', type: 'Poster', venue: 'SIOP Annual Conference' },
    { title: 'Happy Worker, Happy Life?', year: '2024', type: 'Poster', venue: 'SIOP Annual Conference' },
    // 2023
    { title: 'An Agent Architecture to Simulate Human-AI Trust Dynamics', year: '2023', type: 'Presentation', venue: 'EAWOP Small Group Meeting' },
    { title: 'A Social Networks Approach to Leadership and Team Turnover', year: '2023', type: 'Poster', venue: 'SIOP Annual Conference' },
    { title: 'Development of an Artificial Intelligent Teammate', year: '2023', type: 'Symposium', venue: 'SIOP Annual Conference' },
    { title: 'The Calibration of Trust Between Humans and AI Agents', year: '2023', type: 'Symposium', venue: 'SIOP Annual Conference' },
    // 2022
    { title: 'Something Old and Something New — Trust Dynamics of AI as a Teammate', year: '2022', type: 'Symposium', venue: 'Academy of Management Annual Conference' },
    { title: 'Perceptions of Artificial Intelligence', year: '2022', type: 'Poster', venue: 'SIOP Annual Conference' },
    { title: 'Fear and Acceptance of AI at Work', year: '2022', type: 'Poster', venue: 'SIOP Annual Conference', topTen: true },
    // 2021
    { title: 'Good Cop/Bad Cop: A Deep Dive into Police Officer Personality', year: '2021', type: 'Symposium', venue: 'SIOP Annual Conference' },
    // 2020
    { title: 'The Moderating Effect of Promotion Expectations on Job Satisfaction by Industry Type', year: '2020', type: 'Poster', venue: 'UGA CURO Symposium' },
];

const TopTenBadge = () => (
    <span style={{ color: '#B45309' }} className="ml-2 cursor-default select-none">
        ★ Top Ten Poster
    </span>
);

const BestPaperBadge = () => {
    const ref = useRef(null);
    const fire = () => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        confetti({
            particleCount: 40,
            spread: 70,
            startVelocity: 22,
            decay: 0.88,
            scalar: 0.75,
            ticks: 90,
            origin: {
                x: (rect.left + rect.width / 2) / window.innerWidth,
                y: (rect.top + rect.height / 2) / window.innerHeight,
            },
            colors: ['#BA0C2F', '#FFD700', '#4CAF50', '#60A5FA', '#F97316', '#E879F9'],
        });
    };
    return (
        <span
            ref={ref}
            onMouseEnter={fire}
            style={{ color: '#BA0C2F' }}
            className="ml-2 cursor-default select-none"
        >
            ★ Best Paper
        </span>
    );
};

const presentationsByYear = presentations.reduce((acc, p) => {
    (acc[p.year] = acc[p.year] || []).push(p);
    return acc;
}, {});
const talkYears = Object.keys(presentationsByYear).sort((a, b) => b - a);

const Research = () => {
    useEffect(() => {
        document.title = "Brandon Y. Kang | Research";
    }, []);

    const [openYears, setOpenYears] = useState({ [talkYears[0]]: true });

    const toggleYear = (year) => {
        setOpenYears(prev => ({ ...prev, [year]: !prev[year] }));
    };

    return (
        <div className="min-h-screen bg-[#F7F4EE] font-sans selection:bg-red-100">
            <Navbar />

            <div className="max-w-3xl mx-auto px-7 pt-24 pb-20">
                <h1
                    className="font-serif text-gray-900 font-normal mb-14"
                    style={{ fontSize: '42px', letterSpacing: '-0.02em' }}
                >
                    Research
                </h1>

                {/* Publications */}
                <div className="mb-14">
                    <div className="text-[11px] font-sans uppercase tracking-widest text-gray-400 mb-6">
                        Publications
                    </div>
                    <div className="divide-y divide-[#E2DDD5]">
                        {publications.map((pub, idx) => (
                            <div key={idx} className="py-7 grid grid-cols-[56px_1fr] gap-8">
                                <div className="text-[11px] font-sans text-gray-400 pt-0.5">{pub.year}</div>
                                <div>
                                    <div className="text-[11px] font-sans uppercase tracking-widest text-gray-400 mb-2">
                                        {pub.type}
                                        {pub.award && <BestPaperBadge />}
                                    </div>
                                    {pub.link ? (
                                        <a
                                            href={pub.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={`block font-serif leading-snug mb-2 hover:opacity-70 transition-opacity ${pub.award ? '' : 'text-gray-900'}`}
                                            style={{
                                                fontSize: '15px',
                                                color: pub.award ? '#BA0C2F' : undefined,
                                            }}
                                        >
                                            {pub.title}
                                        </a>
                                    ) : (
                                        <p
                                            className="font-serif text-gray-900 leading-snug mb-2"
                                            style={{ fontSize: '15px' }}
                                        >
                                            {pub.title}
                                        </p>
                                    )}
                                    <p className="text-[12px] font-sans text-gray-500 leading-relaxed">{pub.authors}</p>
                                    <p className="text-[12px] font-sans text-gray-400 italic mt-0.5">{pub.venue}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technical Reports */}
                <div className="mb-14">
                    <div className="text-[11px] font-sans uppercase tracking-widest text-gray-400 mb-6">
                        Technical Reports
                    </div>
                    <div className="divide-y divide-[#E2DDD5]">
                        {technicalReports.map((rep, idx) => (
                            <div key={idx} className="py-7 grid grid-cols-[56px_1fr] gap-8">
                                <div className="text-[11px] font-sans text-gray-400 pt-0.5">{rep.year}</div>
                                <div>
                                    <p
                                        className="font-serif text-gray-900 leading-snug mb-2"
                                        style={{ fontSize: '15px' }}
                                    >
                                        {rep.title}
                                    </p>
                                    <p className="text-[12px] font-sans text-gray-500 leading-relaxed">{rep.authors}</p>
                                    <p className="text-[12px] font-sans text-gray-400 italic mt-0.5">{rep.venue}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Active Projects */}
                <div className="mb-14">
                    <div className="text-[11px] font-sans uppercase tracking-widest text-gray-400 mb-6">
                        Recent Projects
                    </div>
                    <div
                        className="grid md:grid-cols-3 gap-px"
                        style={{ backgroundColor: '#E2DDD5' }}
                    >
                        {activeProjects.map((p, i) => (
                            <div key={i} className="bg-[#F7F4EE] p-5">
                                <div className="text-[11px] font-sans uppercase tracking-widest text-gray-400 mb-3">
                                    {p.status}
                                </div>
                                <div className="text-[15px] font-sans text-gray-800 leading-snug mb-3">{p.name}</div>
                                <div className="text-[12px] font-sans text-gray-400">→ {p.target}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Conference Talks */}
                <div>
                    <div className="text-[11px] font-sans uppercase tracking-widest text-gray-400 mb-6">
                        Talks & Presentations
                    </div>
                    <div>
                        {talkYears.map((year) => {
                            const isOpen = !!openYears[year];
                            const items = presentationsByYear[year];
                            return (
                                <div key={year} className="border-t border-[#E2DDD5]">
                                    <button
                                        onClick={() => toggleYear(year)}
                                        className="w-full py-3 flex items-center justify-between text-left group"
                                    >
                                        <span className="text-[13px] font-sans text-gray-500 group-hover:text-gray-800 transition-colors">
                                            {year}
                                            <span className="text-gray-400 ml-2 text-[10px]">
                                                {items.length} {items.length === 1 ? 'talk' : 'talks'}
                                            </span>
                                        </span>
                                        <span className="text-[14px] text-gray-400 leading-none group-hover:text-gray-700 transition-colors">
                                            {isOpen ? '−' : '+'}
                                        </span>
                                    </button>
                                    {isOpen && (
                                        <div className="pb-3 divide-y divide-[#E2DDD5]">
                                            {items.map((p, i) => (
                                                <div key={i} className="py-3 grid grid-cols-[1fr_auto] gap-6 items-start">
                                                    <div>
                                                        <span className="text-[11px] font-sans uppercase tracking-widest text-gray-400 mr-2">
                                                            {p.type}
                                                        </span>
                                                        {p.topTen && <TopTenBadge />}
                                                        <span className="text-[13px] font-sans text-gray-700 leading-snug">
                                                            {p.title}
                                                        </span>
                                                    </div>
                                                    <div className="text-[12px] font-sans text-gray-400 whitespace-nowrap text-right">
                                                        {p.venue.split(',')[0].replace(' Annual Conference', '').replace(' Annual', '')}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                        <div className="border-t border-[#E2DDD5]" />
                    </div>
                    <div className="mt-4 flex justify-end">
                        <a
                            href="/cv.pdf"
                            style={{ color: '#BA0C2F' }}
                            className="text-[13px] font-sans hover:opacity-70 transition-opacity"
                        >
                            Full CV →
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Research;
