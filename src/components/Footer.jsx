import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const OrcidIcon = ({ size = 24 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-current"
    >
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.306v7.444h2.297c3.325 0 3.812-3.681 3.812-4.978 0-1.897-.981-3.772-3.812-3.772h-2.297z" />
    </svg>
);

const SocialLink = ({ href, icon, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="p-3 bg-slate-800 rounded-full hover:bg-red-700 hover:text-white transition-colors"
        aria-label={label}
    >
        {icon}
    </a>
);

const Footer = () => {
    return (
        <footer id="contact" className="bg-slate-900 text-slate-400 py-16 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-white mb-6">Let's Connect</h2>
                <p className="mb-8">
                    Always open to discussing new research collaborations or industry opportunities in human-AI collaboration and people science.
                </p>
                <div className="flex justify-center gap-6 mb-12">
                    <SocialLink
                        href="mailto:brandonkang11@gmail.com"
                        icon={<Mail size={24} />}
                        label="Email"
                    />
                    <SocialLink href="https://www.linkedin.com/in/bkang11" icon={<Linkedin size={24} />} label="LinkedIn" />
                    <SocialLink href="https://orcid.org/0000-0002-2088-5649" icon={<OrcidIcon size={24} />} label="ORCID" />
                </div>
                <p className="text-sm">
                    © {new Date().getFullYear()} Brandon Y. Kang. Built with React & Tailwind.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
