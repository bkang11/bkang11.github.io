// SecretGate.jsx — password modal for the hidden Rocketpop beta.
// Default export: <SecretGate>...</SecretGate> wrapper (click children to open).
// Named export: <SecretGateModal open onClose /> — controlled, for SVG triggers
// like the New Zealand shape on the About map.
//
// Password: "mars-window-2026" — only its SHA-256 hash lives in this file.
// To change it, run in any browser console:
//   crypto.subtle.digest('SHA-256', new TextEncoder().encode('your-new-pass'))
//     .then(b => console.log([...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')))

import React, { useState } from 'react';

const PASS_HASH = '0fa3135faddb36f9c481379fc0ab3d452125965591381bfe856ae1b944b1ef29';
const GAME_URL = '/rocketpop-beta-x7k2.html'; // file in public/

async function sha256Hex(str) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
    return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

export const SecretGateModal = ({ open, onClose }) => {
    const [pw, setPw] = useState('');
    const [shake, setShake] = useState(false);
    if (!open) return null;

    const submit = async (e) => {
        e.preventDefault();
        if (await sha256Hex(pw.trim()) === PASS_HASH) {
            window.location.href = GAME_URL;
        } else {
            setShake(true);
            setTimeout(() => setShake(false), 500);
            setPw('');
        }
    };

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ background: 'rgba(30,26,20,.45)', backdropFilter: 'blur(2px)' }}
        >
            <form
                onSubmit={submit}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#F7F4EE] border border-[#E2DDD5] px-7 py-6 w-[300px]"
                style={{
                    boxShadow: '0 20px 50px rgba(0,0,0,.25)',
                    transform: shake ? 'translateX(-6px)' : 'none',
                    transition: 'transform .1s',
                }}
            >
                <div className="text-[9px] font-sans uppercase tracking-widest text-gray-400 mb-2">
                    You found something
                </div>
                <div className="font-serif text-gray-900 text-[18px] leading-snug mb-4">
                    Say the secret word.
                </div>
                <input
                    autoFocus
                    type="password"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                    placeholder="password"
                    className="w-full border border-[#E2DDD5] bg-white px-3 py-2 text-[12px] font-sans text-gray-700 outline-none focus:border-gray-400"
                />
                <button
                    type="submit"
                    className="mt-3 w-full py-2 text-[11px] font-sans text-white hover:opacity-85 transition-opacity"
                    style={{ background: '#BA0C2F' }}
                >
                    Enter
                </button>
            </form>
        </div>
    );
};

const SecretGate = ({ children }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <span onClick={() => setOpen(true)} style={{ cursor: 'pointer' }}>{children}</span>
            <SecretGateModal open={open} onClose={() => setOpen(false)} />
        </>
    );
};

export default SecretGate;
