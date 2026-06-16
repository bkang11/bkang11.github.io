import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const experienceData = [
    {
        year: '2026',
        company: 'Adobe',
        role: 'People Data Scientist Intern',
        dates: 'Summer 2026',
        current: true,
        bullets: null,
    },
    {
        year: '2025',
        company: 'T-Mobile',
        role: 'People Science Analyst Intern',
        dates: 'May – Aug 2025',
        bullets: [
            'Designed and implemented an enterprise-wide manager effectiveness assessment program, analyzing surveys from 45,000+ employees in R to validate a new performance framework and provide targeted developmental recommendations.',
            'Built a custom GenAI tool to serve as a scalable assessment and development platform, providing managers with validated LLM-powered role-play scenarios to strengthen leadership skills.',
            'Presented data-driven findings and a strategic framework to executive stakeholders, influencing long-term L&D strategy by proposing a new framework classifying managers into performance quadrants to enable a systematic process of targeted training and re-evaluation.',
            'Spearheaded a key research initiative into manager effectiveness, translating mixed-methods findings into actionable recommendations to enhance leadership development across the enterprise.',
            'Built a dynamic dashboard for team classification and developmental pathing, enabling more targeted and effective talent development strategies.',
            'Collaborated with key stakeholders on an organizational network analysis (ONA) initiative to map informal networks and identify opportunities for enhanced collaboration.',
            'Identified critical usability challenges in an executive reporting dashboard and proposed strategic improvements to enhance user interaction.',
        ],
    },
    {
        year: '2022',
        company: 'Coachability Consultants, Inc.',
        role: 'Analytics & Organizational Effectiveness Intern',
        dates: 'May – Sept 2022',
        bullets: [
            'Managed survey development and deployment in Qualtrics.',
            'Increased the efficiency of the reporting process by streamlining data analysis and visualization pipelines, reducing the time required to deliver client-facing materials.',
            'Analyzed survey data on employee coachability, leading to data-informed talent development strategies.',
        ],
    },
    {
        year: '2020',
        company: 'PricewaterhouseCoopers (PwC)',
        role: 'TAX People and Organization Intern — People Analytics',
        dates: 'July 2020',
        bullets: [
            'Gained training and experience using Tableau and Alteryx.',
            'Gained proficiency in Scrum methodologies and applied them to software platform development.',
            "Expanded knowledge of PwC's practices and gained an in-depth understanding of PwC's Tax practice, Saratoga Benchmarking program, People Analytics group, and survey deployment.",
            'Enhanced awareness of human-centered design methods through digital training and simulations.',
        ],
    },
    {
        year: '2019',
        company: 'SPANX',
        role: 'Learning and Development Intern',
        dates: 'May – Aug 2019',
        bullets: [
            'Performed market research on notable human resource information systems and provided a recommendation for integrating an HRIS platform into current HR workflows.',
            'Designed and implemented interactive learning programs that improved employee engagement and retention across diverse formats, including learning management systems, microlearning, and resource groups.',
            'Revamped the employee rewards system to enhance employee engagement.',
            'Constructed a recommendation for integrating new human resource information systems into HR workflows.',
            'Planned and executed a learning event to boost employee knowledge of company travel procedures.',
            'Collaborated with a cross-functional intern class to develop a recommendation for elevating Spanx\'s consumer experience tools and enriching customer service channels through digital messaging.',
        ],
    },
];

const awardsData = [
    {
        year: 'Spring 2026',
        name: 'ASCEND Award',
        org: 'Franklin College of Arts and Sciences, University of Georgia',
        description: 'Awarded a $3,000 grant to support professional development and career exploration beyond academia.',
    },
    {
        year: 'March 2026',
        name: 'SIOP Student Travel Award',
        org: 'Society for Industrial and Organizational Psychology',
        description: 'Awarded a $500 travel grant to present accepted research at the SIOP 2026 Annual Conference.',
    },
    {
        year: 'October 2024',
        name: 'IEEE CogMI Best Paper Award',
        org: 'IEEE Sixth International Conference on Cognitive Machine Intelligence',
        description: 'Recognized as one of two Best Paper Award recipients, selected by the program committee from all submitted works.',
    },
];

const educationData = [
    {
        year: 'exp. 2027',
        degree: 'Ph.D., Industrial-Organizational Psychology',
        school: 'University of Georgia',
    },
    {
        year: '2026',
        degree: 'M.S., Industrial-Organizational Psychology',
        school: 'University of Georgia · May 2026',
    },
    {
        year: '2021',
        degree: 'B.S., Psychology',
        school: 'University of Georgia',
    },
];

const Experience = () => {
    useEffect(() => {
        document.title = "Brandon Y. Kang | Experience";
    }, []);

    return (
        <div className="min-h-screen bg-[#F7F4EE] font-sans selection:bg-red-100">
            <Navbar />

            <div className="max-w-3xl mx-auto px-7 pt-24 pb-20">
                <h1
                    className="font-serif text-gray-900 font-normal mb-14"
                    style={{ fontSize: '42px', letterSpacing: '-0.02em' }}
                >
                    Experience
                </h1>

                {/* Section label */}
                <div className="text-[11px] font-sans uppercase tracking-widest text-gray-400 mb-6">
                    Industry
                </div>

                {/* Experience entries */}
                <div className="divide-y divide-[#E2DDD5]">
                    {experienceData.map((item, idx) => (
                        <div key={idx} className="py-8 grid grid-cols-[80px_1fr] gap-8">
                            <div className="text-[13px] font-sans text-gray-400 pt-0.5">
                                {item.year}
                                {item.current && (
                                    <span
                                        className="block mt-1 text-[9px] uppercase tracking-widest"
                                        style={{ color: '#BA0C2F' }}
                                    >
                                        current
                                    </span>
                                )}
                            </div>
                            <div>
                                <div
                                    className="font-serif text-gray-900 leading-tight mb-1"
                                    style={{ fontSize: '20px' }}
                                >
                                    {item.company}
                                </div>
                                <div className="text-[13px] font-sans text-gray-500 mb-0.5">{item.role}</div>
                                <div className="text-[12px] font-sans text-gray-400 mb-4">{item.dates}</div>
                                {item.bullets && (
                                    <ul className="space-y-1.5">
                                        {item.bullets.map((b, i) => (
                                            <li key={i} className="flex gap-3 text-[14px] font-sans text-gray-600 leading-relaxed">
                                                <span className="text-[#E2DDD5] shrink-0 mt-px">—</span>
                                                <span>{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Education */}
                <div className="mt-14">
                    <div className="text-[11px] font-sans uppercase tracking-widest text-gray-400 mb-6">
                        Education
                    </div>
                    <div className="divide-y divide-[#E2DDD5]">
                        {educationData.map((item, idx) => (
                            <div key={idx} className="py-6 grid grid-cols-[80px_1fr] gap-8">
                                <div className="text-[13px] font-sans text-gray-400 pt-0.5">{item.year}</div>
                                <div>
                                    <div className="text-[15px] font-sans text-gray-800 leading-snug mb-0.5">{item.degree}</div>
                                    <div className="text-[13px] font-sans text-gray-400">{item.school}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Honors & Awards */}
                <div className="mt-14">
                    <div className="text-[11px] font-sans uppercase tracking-widest text-gray-400 mb-6">
                        Honors &amp; Awards
                    </div>
                    <div className="divide-y divide-[#E2DDD5]">
                        {awardsData.map((item, idx) => (
                            <div key={idx} className="py-6 grid grid-cols-[80px_1fr] gap-8">
                                <div className="text-[13px] font-sans text-gray-400 pt-0.5 leading-snug">{item.year}</div>
                                <div>
                                    <div className="text-[15px] font-sans text-gray-800 leading-snug mb-0.5">{item.name}</div>
                                    <div className="text-[13px] font-sans text-gray-400 mb-2">{item.org}</div>
                                    <p className="text-[14px] font-sans text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 flex justify-end">
                    <a
                        href="mailto:brandonkang11@gmail.com"
                        style={{ color: '#BA0C2F' }}
                        className="text-[11px] font-sans hover:opacity-70 transition-opacity"
                    >
                        Open to full-time roles →
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Experience;
