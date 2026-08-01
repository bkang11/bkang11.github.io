import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { newsSorted, monthOf, yearOf } from '../data/news';

const newsByYear = newsSorted.reduce((acc, item) => {
    (acc[yearOf(item.date)] = acc[yearOf(item.date)] || []).push(item);
    return acc;
}, {});
const newsYears = Object.keys(newsByYear).sort((a, b) => b - a);

const News = () => {
    useEffect(() => {
        document.title = 'Brandon Y. Kang | News';
    }, []);

    return (
        <div className="min-h-screen bg-[#F7F4EE] font-sans selection:bg-red-100">
            <Navbar />

            <div className="max-w-3xl mx-auto px-7 pt-24 pb-20">
                <h1
                    className="font-serif text-gray-900 font-normal mb-14"
                    style={{ fontSize: '42px', letterSpacing: '-0.02em' }}
                >
                    News
                </h1>

                {newsYears.map((year) => (
                    <div key={year} className="mb-14">
                        <div className="text-[11px] font-sans uppercase tracking-widest text-gray-400 mb-6">
                            {year}
                        </div>
                        <div className="divide-y divide-[#E2DDD5]">
                            {newsByYear[year].map((item, idx) => (
                                <div key={idx} className="py-6 grid grid-cols-[56px_1fr] gap-8">
                                    <div className="text-[11px] font-sans text-gray-400 pt-1">
                                        {monthOf(item.date)}
                                    </div>
                                    <div>
                                        <p className="text-[15px] font-sans text-gray-700 leading-relaxed">
                                            {item.text}
                                        </p>
                                        {item.link && (
                                            <a
                                                href={item.link.href}
                                                {...(item.link.href.startsWith('http')
                                                    ? { target: '_blank', rel: 'noreferrer' }
                                                    : {})}
                                                style={{ color: '#BA0C2F' }}
                                                className="mt-1.5 inline-block text-[12px] font-sans hover:opacity-70 transition-opacity"
                                            >
                                                {item.link.label} →
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default News;
