import React from 'react';
import { Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';

const AwardBadge = () => {
    const triggerConfetti = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;

        confetti({
            particleCount: 100,
            spread: 70,
            origin: { x, y },
            colors: ['#BA0C2F', '#000000'], // UGA Red (Bulldog Red) and Black (Arch Black)
            disableForReducedMotion: true
        });
    };

    return (
        <div
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-700 rounded-full text-xs font-bold cursor-pointer hover:bg-amber-100 transition-colors"
            onMouseEnter={triggerConfetti}
        >
            <Trophy size={14} className="fill-current" />
            <span>Best Paper Award</span>
        </div>
    );
};

export default AwardBadge;
