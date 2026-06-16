import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-[#E2DDD5] bg-[#F7F4EE]">
            <div className="max-w-3xl mx-auto px-7 py-5 flex justify-between items-center gap-4">
                <p className="text-[10px] font-sans text-gray-400 leading-relaxed">
                    Brandon Y. Kang{' '}
                    <span className="text-[#E2DDD5]">·</span>{' '}
                    PhD student, I-O Psychology, University of Georgia
                </p>
                <div className="flex items-center gap-4 shrink-0">
                    <a
                        href="https://www.linkedin.com/in/bkang11"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] font-sans text-gray-400 hover:text-gray-700 transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://orcid.org/0000-0002-2088-5649"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] font-sans text-gray-400 hover:text-gray-700 transition-colors"
                    >
                        ORCID
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
