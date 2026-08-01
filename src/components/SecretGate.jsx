// SecretGate.jsx — password modal for the hidden Rocketpop beta.
// Default export: <SecretGate>...</SecretGate> wrapper (click children to open).
// Named export: <SecretGateModal open onClose /> — controlled, for SVG triggers
// like the New Zealand shape on the About map.
//
// Built on react-aria-components: ModalOverlay/Modal/Dialog give us the focus
// trap, Escape-to-close, scroll lock, focus restore, and dialog semantics that
// a hand-rolled div can't.
//
// Password: "mars-window-2026" — only its SHA-256 hash lives in this file.
// To change it, run in any browser console:
//   crypto.subtle.digest('SHA-256', new TextEncoder().encode('your-new-pass'))
//     .then(b => console.log([...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')))

import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogTrigger,
    Heading,
    Input,
    Label,
    Modal,
    ModalOverlay,
    Pressable,
    TextField,
} from 'react-aria-components';

const PASS_HASH = '0fa3135faddb36f9c481379fc0ab3d452125965591381bfe856ae1b944b1ef29';
const GAME_URL = '/rocketpop-beta-x7k2.html'; // file in public/

async function sha256Hex(str) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
    return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

const GateDialog = () => {
    const [pw, setPw] = useState('');
    const [shake, setShake] = useState(false);
    const [wrong, setWrong] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        if (await sha256Hex(pw.trim()) === PASS_HASH) {
            window.location.href = GAME_URL;
        } else {
            setShake(true);
            setWrong(true);
            setTimeout(() => setShake(false), 500);
            setPw('');
        }
    };

    return (
        <Dialog
            className="outline-none bg-[#F7F4EE] border border-[#E2DDD5] px-7 py-6 w-[300px]"
            style={{
                boxShadow: '0 20px 50px rgba(0,0,0,.25)',
                transform: shake ? 'translateX(-6px)' : 'none',
                transition: 'transform .1s',
            }}
        >
            <form onSubmit={submit}>
                <div className="text-[9px] font-sans uppercase tracking-widest text-gray-400 mb-2">
                    You found something
                </div>
                <Heading
                    slot="title"
                    className="font-serif font-normal text-gray-900 text-[18px] leading-snug mb-4"
                >
                    Say the secret word.
                </Heading>
                <TextField
                    value={pw}
                    onChange={setPw}
                    type="password"
                    autoFocus
                    className="block"
                >
                    <Label className="sr-only">Password</Label>
                    <Input
                        placeholder="password"
                        // Explicit rather than relying on implicit form submission,
                        // which RAC's Input does not reliably trigger.
                        onKeyDown={(e) => { if (e.key === 'Enter') submit(e); }}
                        className="w-full border border-[#E2DDD5] bg-white px-3 py-2 text-[12px] font-sans text-gray-700 outline-none focus:border-gray-400"
                    />
                </TextField>
                {wrong && (
                    <div
                        role="alert"
                        className="mt-2 text-[11px] font-sans"
                        style={{ color: '#BA0C2F' }}
                    >
                        Not it. Try again.
                    </div>
                )}
                <Button
                    type="submit"
                    className="mt-3 w-full py-2 text-[11px] font-sans text-white outline-none data-[hovered]:opacity-85 data-[focus-visible]:ring-2 data-[focus-visible]:ring-gray-900 data-[focus-visible]:ring-offset-2 data-[focus-visible]:ring-offset-[#F7F4EE] transition-opacity"
                    style={{ background: '#BA0C2F' }}
                >
                    Enter
                </Button>
            </form>
        </Dialog>
    );
};

// Entry/exit fade lives in index.css, keyed off RAC's data-entering/data-exiting.
const overlayClass = 'secret-gate-overlay fixed inset-0 z-[100] flex items-center justify-center';

export const SecretGateModal = ({ open, onClose }) => (
    <ModalOverlay
        isOpen={open}
        onOpenChange={(isOpen) => { if (!isOpen) onClose(); }}
        isDismissable
        className={overlayClass}
        style={{ background: 'rgba(30,26,20,.45)', backdropFilter: 'blur(2px)' }}
    >
        <Modal>
            <GateDialog />
        </Modal>
    </ModalOverlay>
);

const SecretGate = ({ children }) => (
    <DialogTrigger>
        <Pressable>
            <span role="button" tabIndex={0} style={{ cursor: 'pointer' }}>{children}</span>
        </Pressable>
        <ModalOverlay
            isDismissable
            className={overlayClass}
            style={{ background: 'rgba(30,26,20,.45)', backdropFilter: 'blur(2px)' }}
        >
            <Modal>
                <GateDialog />
            </Modal>
        </ModalOverlay>
    </DialogTrigger>
);

export default SecretGate;
