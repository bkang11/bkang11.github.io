import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import AwardBadge from '../components/AwardBadge';
import Footer from '../components/Footer';
import { BookOpen } from 'lucide-react';

const Research = () => {
    // Navbar handles scroll logic
    useEffect(() => {
        document.title = "Brandon Y. Kang | Research";
    }, []);

    const publications = [
        {
            title: "Trust and Collaboration Testing in Controlled Human-Robot Environments",
            authors: "Frericks, John and Kang, Brandon and Outland, Neal and Doshi, Prashant and Johnsen, Kyle and Schecter, Aaron",
            venue: "2024 IEEE 6th International Conference on Cognitive Machine Intelligence (CogMI)",
            type: "Conference Paper",
            year: "2024",
            link: "https://doi.ieeecomputersociety.org/10.1109/CogMI62246.2024.00026",
            award: true
        },
        {
            title: "The Stable Individual Differences Driving Employee Coachability Behaviours",
            authors: "Weiss, J. A. and Outland, N. and Plummer, G. and Zervos, L. and Carmichael-Tanaka, N. and Kang, B. Y.",
            venue: "International Journal of Evidence Based Coaching & Mentoring",
            type: "Journal Article",
            year: "2023",
            link: "https://doi.org/10.24384/d24j-fh23"
        },
        {
            title: "Applying an intersectional lens to consider disparities in historically marginalized women’s access to caregiving resources",
            authors: "Carmichael-Tanaka N. and Kang, B. Y.",
            venue: "Industrial and Organizational Psychology",
            type: "Journal Article",
            year: "2023",
            link: "https://doi.org/10.1017/iop.2023.18"
        }
    ];

    const presentations = [
        {
            title: "Examining the Efficacy of Large Language Models for Thematic Content Analysis",
            year: "2026",
            authors: "Kang, B. Y., Perez, N., Leone, S., & Bullock, B.",
            type: "Symposium Presentation",
            venue: "SIOP Annual Conference, New Orleans, LA, USA"
        },
        {
            title: "Getting your first I-O internship: What graduate students should know",
            year: "2026",
            authors: "Knight, C., Reiter-Palmon, R., Ossino, A., Brown, G., Kang, B. Y., & Johnson, L.",
            type: "Panel",
            venue: "SIOP Annual Conference, New Orleans, LA, USA"
        },
        {
            title: "Willingness to Work with AI Teammate Scale: Development and Validation",
            year: "2026",
            authors: "Kang, B. Y., & Outland, N.",
            type: "Symposium Presentation",
            venue: "SIOP Annual Conference, New Orleans, LA, USA"
        },
        {
            title: "Identifying Correlates of Trust in Human-Robot Teams: The Effects of Task, Personality, and Preferences",
            year: "2025",
            authors: "Schecter, A., Outland, N., Kang, B. Y., Frericks, J., Johnsen, K., Doshi, P.",
            type: "Conference Presentation",
            venue: "Interdisciplinary Network for Group Research Annual Conference, Rotterdam, The Netherlands"
        },
        {
            title: "Exploring Human-Autonomy Trust Dynamics in a Controlled Environment",
            year: "2025",
            authors: "Kang, B. Y., Stryker, S., Frericks, J., Outland, N., Schecter, A., Johnsen, K., Doshi, P., & Challa, A.",
            type: "Symposium Presentation",
            venue: "Interdisciplinary Network for Group Research Annual Conference, Rotterdam, The Netherlands"
        },
        {
            title: "An Analysis of Textbook Coverage of Cultural Differences in Cognitive Tests",
            year: "2025",
            authors: "Hoffman, B. J., Stryker, S. R., & Kang, B. Y.",
            type: "Poster",
            venue: "SIOP Annual Conference, Denver, CO, USA"
        },
        {
            title: "Prioritizing Human Sustainability in a Tooled-Up World",
            year: "2025",
            authors: "Szpaichler, S. (Chair), Kang, B. Y. (Speaker), Monitto, V. (Speaker), Stryker, S. R., Squires, B., Tucker, T.",
            type: "Fishbowl",
            venue: "SIOP Annual Conference, Denver, CO, USA"
        },
        {
            title: "Designing a Virtual Environment for Examining Human-Robot Interactions",
            year: "2025",
            authors: "Stryker, S. R., Kang, B. Y., Outland, N.",
            type: "Symposium Presentation",
            venue: "SIOP Annual Conference, Denver, CO, USA"
        },
        {
            title: "(A)I can be your teammate! Exploring the Impacts of AI in Organizational Teams",
            year: "2024",
            authors: "Kang, B. Y. (Co-Chair), Outland, N. (Co-Chair), & Cooke, N. (Discussant)",
            type: "Symposium",
            venue: "SIOP Annual Conference, Chicago, IL, USA"
        },
        {
            title: "Updates to a Computational Model of the Calibration of Trust between Human and AI Agents",
            year: "2024",
            authors: "Kang, B. Y. & Outland, N.",
            type: "Symposium Presentation",
            venue: "SIOP Annual Conference, Chicago, IL, USA"
        },
        {
            title: "Happy Worker, Happy Life? A Meta-Analysis of Job Satisfaction & Subjective Well-Being",
            year: "2024",
            authors: "Stryker, S. R., Kang, B. Y., Lumbreras, J. M., & Hoffman, B. J.",
            type: "Poster",
            venue: "SIOP Annual Conference, Chicago, IL, USA"
        },
        {
            title: "Development and Validation of the AI Salience Scale",
            year: "2023",
            authors: "Kang, B. Y., & Doddato, F.",
            type: "Poster",
            venue: "SIOP Annual Conference, Chicago, IL, USA"
        },
        {
            title: "An Agent Architecture to Simulate Human-AI Trust Dynamics",
            year: "2023",
            authors: "Outland, N. & Kang, B. Y.",
            type: "Conference Presentation",
            venue: "EAWOP Small Group Meeting, Amsterdam, Netherlands"
        },
        {
            title: "A Social Networks Approach to Leadership and Team Turnover",
            year: "2023",
            authors: "Kim, Y.J., Hoffman, B., Outland, N., & Kang, B. Y.",
            type: "Poster",
            venue: "SIOP Annual Conference, Boston, MA, USA"
        },
        {
            title: "Development of an Artificial Intelligent Teammate",
            year: "2023",
            authors: "Outland, N. & Kang, B. Y.",
            type: "Symposium Presentation",
            venue: "SIOP Annual Conference, Boston, MA, USA"
        },
        {
            title: "The Calibration of Trust Between Humans and AI Agents",
            year: "2023",
            authors: "Outland, N., Kang, B. Y., Stryker, S., & Hess, R.",
            type: "Symposium Presentation",
            venue: "SIOP Annual Conference, Boston, MA, USA"
        },
        {
            title: "Something Old and Something New: Trust Dynamics of Artificial Intelligence as a Teammate",
            year: "2022",
            authors: "Outland, N. & Kang, B. Y.",
            type: "Symposium Presentation",
            venue: "Academy of Management Annual Conference, Seattle, WA, USA"
        },
        {
            title: "Perceptions of Artificial Intelligence",
            year: "2022",
            authors: "Kang, B. Y., & Outland, N.",
            type: "Poster",
            venue: "SIOP Annual Conference, Seattle, WA, USA"
        },
        {
            title: "Fear and Acceptance of AI at Work",
            year: "2022",
            authors: "Hess, R. A., Kang, B. Y., Richardson, J. M., Stryker, S. R., & Outland, N. B.",
            type: "Poster",
            venue: "SIOP Annual Conference, Seattle, WA, USA",
            award: "Top 10 Poster"
        },
        {
            title: "Good Cop/Bad Cop: A Deep Dive into Police Officer Personality",
            year: "2021",
            authors: "Harmata, R., Sherman, R., & Kang, B. Y.",
            type: "Symposium Presentation",
            venue: "SIOP Annual Conference, New Orleans, LA, USA"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-red-200">
            <Navbar />

            <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
                <div className="flex items-center gap-3 mb-10">
                    <BookOpen className="text-red-700" size={32} />
                    <h1 className="text-4xl font-bold text-slate-900">Research & Publications</h1>
                </div>

                {/* Publications Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Publications</h2>
                    <div className="space-y-6">
                        {publications.map((pub, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                    <span className="px-2 py-0.5 rounded text-xs font-semibold bg-red-50 text-red-700 border border-red-100">{pub.type}</span>
                                    {pub.award && <AwardBadge label={typeof pub.award === 'string' ? pub.award : undefined} />}
                                    <span className="text-sm text-slate-400 font-mono">{pub.year}</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">
                                    {pub.link ? (
                                        <a href={pub.link} target="_blank" rel="noreferrer" className="hover:text-red-700 underline decoration-slate-200 underline-offset-4 decoration-2 hover:decoration-red-700 transition-all">
                                            {pub.title}
                                        </a>
                                    ) : (
                                        pub.title
                                    )}
                                </h3>
                                <p className="text-slate-700 mb-1 text-sm">{pub.authors}</p>
                                <p className="text-slate-500 italic text-sm">{pub.venue}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Presentations Section */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Presentations</h2>
                    <div className="space-y-6">
                        {presentations.map((pres, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-2 py-0.5 rounded text-xs font-semibold bg-red-50 text-red-700 border border-red-100">{pres.type}</span>
                                    {pres.award && <AwardBadge label={typeof pres.award === 'string' ? pres.award : undefined} />}
                                    <span className="text-sm text-slate-400 font-mono">{pres.year}</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{pres.title}</h3>
                                <p className="text-slate-700 mb-1 text-sm">{pres.authors}</p>
                                <p className="text-slate-500 italic text-sm">{pres.venue}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Research;
