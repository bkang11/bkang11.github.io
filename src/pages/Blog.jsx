import React from 'react';
import { FileText } from 'lucide-react';
import Navbar from '../components/Navbar';

const Blog = () => {
    // Placeholder posts based on the file names I saw in legacy_backup/_posts
    const posts = [
        { title: "Table of Contents", date: "March 20, 2023", desc: "A guide to adding TOCs to your posts." },
        { title: "Distill", date: "December 22, 2018", desc: "Using Distill for scientific communication." },
        { title: "Code Syntax Highlighting", date: "July 15, 2015", desc: "How to format code blocks effectively." },
        { title: "Formatting and Links", date: "March 15, 2015", desc: "Basics of markdown formatting." },
        // ... mapped from legacy files
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-red-200">
            <Navbar />

            <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
                <div className="flex items-center gap-3 mb-10">
                    <FileText className="text-red-700" size={32} />
                    <h1 className="text-4xl font-bold text-slate-900">Blog</h1>
                </div>

                <div className="grid gap-6">
                    {posts.map((post, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-red-200 transition-colors cursor-pointer group">
                            <span className="text-sm text-slate-400 font-mono mb-2 block">{post.date}</span>
                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-red-700 transition-colors">{post.title}</h3>
                            <p className="text-slate-600">{post.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
