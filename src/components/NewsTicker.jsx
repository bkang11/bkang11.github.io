// NewsTicker.jsx — the thin scrolling strip under the navbar on the home page.
//
// Motion notes: continuously moving content needs a way to stop it (WCAG 2.2.2),
// so this pauses on hover, on keyboard focus anywhere inside, and via the button.
// Under prefers-reduced-motion the animation is dropped entirely and the strip
// becomes a normal horizontal scroller — see .ticker rules in index.css.

import { useState } from 'react';
import { Button } from 'react-aria-components';
import { newsSorted, monthYearOf } from '../data/news';

const ITEMS = newsSorted.slice(0, 5);

// The strip is a teaser; the full sentence lives on /news.
const truncate = (s, n = 90) => (s.length > n ? `${s.slice(0, n - 1).trimEnd()}…` : s);

const PauseIcon = () => (
    <svg width="8" height="9" viewBox="0 0 8 9" fill="currentColor" aria-hidden="true">
        <rect x="0" y="0" width="2.5" height="9" />
        <rect x="5.5" y="0" width="2.5" height="9" />
    </svg>
);

const PlayIcon = () => (
    <svg width="8" height="9" viewBox="0 0 8 9" fill="currentColor" aria-hidden="true">
        <path d="M0 0 L8 4.5 L0 9 Z" />
    </svg>
);

// One full pass of the item list. Rendered twice inside the track so that
// translating by -50% lands exactly on the start of the second copy.
const Sequence = () => (
    <div className="flex items-baseline">
        {ITEMS.map((item, i) => (
            <span key={i} className="flex items-baseline whitespace-nowrap">
                <span className="text-[10px] font-sans uppercase tracking-widest text-gray-400">
                    {monthYearOf(item.date)}
                </span>
                <span className="ml-2.5 text-[12px] font-sans text-gray-600">
                    {truncate(item.text)}
                </span>
                <span aria-hidden="true" className="mx-5 text-gray-300">
                    ·
                </span>
            </span>
        ))}
    </div>
);

const NewsTicker = () => {
    const [paused, setPaused] = useState(false);

    return (
        <section
            aria-label="Recent updates"
            data-paused={paused ? 'true' : 'false'}
            className="ticker border-b border-[#E2DDD5]/60 bg-[#F2EFE7]"
        >
            <div className="max-w-3xl mx-auto px-7 h-9 flex items-center gap-3">
                <div className="ticker-viewport flex-1 overflow-hidden">
                    <div
                        className="ticker-track"
                        style={{ '--ticker-duration': `${ITEMS.length * 9}s` }}
                    >
                        <Sequence />
                        <div className="ticker-dup" aria-hidden="true">
                            <Sequence />
                        </div>
                    </div>
                </div>

                <Button
                    onPress={() => setPaused((p) => !p)}
                    aria-label={paused ? 'Resume scrolling updates' : 'Pause scrolling updates'}
                    className="shrink-0 p-1 -m-1 text-gray-400 outline-none data-[hovered]:text-gray-700 data-[focus-visible]:ring-2 data-[focus-visible]:ring-gray-900 data-[focus-visible]:ring-offset-2 data-[focus-visible]:ring-offset-[#F2EFE7] transition-colors"
                >
                    {paused ? <PlayIcon /> : <PauseIcon />}
                </Button>
            </div>
        </section>
    );
};

export default NewsTicker;
