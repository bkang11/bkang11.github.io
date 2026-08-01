// Status updates, newest first.
//
// To add one, put a new object at the top:
//   { date: '2026-09', text: 'Something happened.' }
//
// date  — 'YYYY-MM'. Sorts as a plain string, renders as a month abbreviation.
// text  — one sentence.
// link  — optional { href, label }. Internal links use the '#/path' hash form,
//         since the app uses HashRouter.

export const news = [
    {
        date: '2026-05',
        text: 'Started as a People Data Scientist Intern at Adobe.',
    },
    {
        date: '2026-05',
        text: 'Earned my M.S. in Industrial-Organizational Psychology from UGA.',
    },
    {
        date: '2026-04',
        text: 'Presented three papers at the SIOP Annual Conference, on LLMs for thematic content analysis, the Willingness to Work with AI Teammate Scale, and a panel on landing a first I-O internship.',
        link: { href: '#/research', label: 'Research' },
    },
    {
        date: '2026-04',
        text: 'Received the ASCEND Award from the Franklin College of Arts and Sciences, a $3,000 grant for professional development beyond academia.',
    },
    {
        date: '2026-03',
        text: 'Received a SIOP Student Travel Award to present at the 2026 Annual Conference.',
    },
    {
        date: '2024-10',
        text: 'Our paper on trust and collaboration in human-robot teams won Best Paper at IEEE CogMI.',
        link: {
            href: 'https://doi.ieeecomputersociety.org/10.1109/CogMI62246.2024.00026',
            label: 'Paper',
        },
    },
];

// ---- Derived below. Nothing to edit past this line. ----

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// 'YYYY-MM' sorts correctly as a plain string — no Date parsing, no timezone drift.
// Sort is stable, so items sharing a month keep their order in the array above.
export const newsSorted = [...news].sort((a, b) => b.date.localeCompare(a.date));

export const monthOf = (date) => MONTHS[Number(date.slice(5, 7)) - 1] ?? '';
export const yearOf = (date) => date.slice(0, 4);
export const monthYearOf = (date) => `${monthOf(date)} ${yearOf(date)}`;
