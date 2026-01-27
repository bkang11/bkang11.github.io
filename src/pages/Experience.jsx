import React, { useEffect } from 'react';
import { Briefcase, Mail } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Experience = () => {
    // Navbar component handles its own scroll logic for styling
    useEffect(() => {
        document.title = "Brandon Y. Kang | Experience";
    }, []);

    const experienceData = [
        {
            title: "People Science Analyst Intern",
            institution: "T-Mobile",
            year: "May 2025 – Aug 2025",
            description: null
        },
        {
            title: "Analytics & Organizational Effectiveness Intern",
            institution: "Coachability Consultants, Inc.",
            year: "May 2022 – Sept 2022",
            description: [
                "Managed survey development and deployment.",
                "Streamlined data analysis pipelines for automated analysis and visualization.",
                "Analyzed client data to produce actionable insights and recommendations."
            ]
        },
        {
            title: "People & Organizational Intern - People Analytics & Insights Team",
            institution: "PricewaterhouseCoopers (PwC)",
            year: "July 2020",
            description: [
                "Gained training and experience using Tableau and Alteryx.",
                "Gained proficiency in Scrum methodologies and applied them to software platform development.",
                "Expanded knowledge of PwC’s practices and gained an in-depth understanding of PwC’s Tax practice, Saratoga Benchmarking program, People Analytics group, and survey deployment.",
                "Enhanced awareness of human-centered design methods through digital training and simulations."
            ]
        },
        {
            title: "Learning and Development Intern",
            institution: "SPANX",
            year: "May 2019 – Aug 2019",
            description: [
                "Performed market research on notable human resource information systems and provided a recommendation for integrating an HRIS platform into current HR workflows.",
                "Designed and implemented interactive learning programs that improved employee engagement and retention.",
                "Revamped the employee rewards system to enhance employee engagement.",
                "Planned and executed a learning event to boost employee knowledge of company travel procedures.",
                "Collaborated with a cross-functional intern class to improve Spanx’s consumer experience through digital messaging."
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-red-200">
            <Navbar />

            <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
                <div className="flex items-center gap-3 mb-10">
                    <Briefcase className="text-red-700" size={32} />
                    <h1 className="text-4xl font-bold text-slate-900">Professional Experience</h1>
                </div>

                <div className="space-y-12 border-l-2 border-slate-200 pl-8 ml-4">
                    {experienceData.map((item, idx) => (
                        <div key={idx} className="relative">
                            <span className="absolute -left-[41px] top-1.5 h-5 w-5 rounded-full border-4 border-white bg-red-600 shadow-sm"></span>
                            <div className="mb-2">
                                <h3 className="font-bold text-xl text-slate-900">{item.title}</h3>
                                <div className="text-red-700 font-medium text-lg">{item.institution}</div>
                            </div>
                            <span className="text-sm text-slate-400 font-mono mb-4 block">{item.year}</span>

                            {item.description && (
                                <ul className="list-disc list-outside ml-4 space-y-2 text-slate-700 leading-relaxed max-w-3xl marker:text-red-300">
                                    {item.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>


            </div>
            {/* Footer */}
            <Footer />
        </div >
    );
};

export default Experience;
