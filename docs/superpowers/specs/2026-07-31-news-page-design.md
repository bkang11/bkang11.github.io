# News page — design

**Date:** 2026-07-31
**Status:** Approved

## Problem

The site has no way to post short status updates. `src/pages/Blog.jsx` exists but is
unreachable dead code: it is not linked from the navbar, renders four hardcoded fake
posts, and still uses the pre-redesign `slate-*` palette and a `lucide` icon.

## Goal

A dated list of one-line updates ("Started at Adobe", "Best Paper at CogMI"), cheap
enough to write that it actually gets maintained.

## Decisions

**Format: one-line items.** No titles, no per-post pages, no body text. Adding an
update is one line of data.

**Placement: its own `/news` page**, linked in the navbar between Research and CV.
Keeps the home page's one-screen hero composition intact and lets the list grow for
years without a stale-looking home page.

## Data

`src/data/news.js` exports a plain array, newest first:

```js
export const news = [
  { date: '2026-07', text: 'Started as People Data Scientist Intern at Adobe.' },
  { date: '2026-04', text: 'Presented three papers at SIOP 2026.',
    link: { href: '#/research', label: 'Research' } },
];
```

- `date` — `YYYY-MM` string. Sorts descending as a plain string; no `Date` parsing
  and no timezone off-by-one. Rendered as a month abbreviation.
- `text` — the update. One sentence.
- `link` — optional `{ href, label }`. Internal links use the `#/path` hash form
  because the app uses `HashRouter`.

The rest of the site stores content as inline arrays (`presentations`,
`experienceData`, `awardsData`), so this introduces no new authoring concept. It
lives in its own file rather than inline in the page because it is the one thing
edited repeatedly; the author should not scroll past JSX to add a line.

## Rendering

`src/pages/News.jsx`, reusing the Research page's layout language so it reads as
part of the existing site:

- `max-w-3xl mx-auto px-7 pt-24 pb-20` container on `bg-[#F7F4EE]`
- 42px Lora `h1` with `-0.02em` tracking
- Items grouped by year, using the same `reduce` pattern as `presentationsByYear`
- Year headings as uppercase tracked labels (`text-[11px] uppercase tracking-widest`)
- Rows in `divide-y divide-[#E2DDD5]`, each a `grid grid-cols-[56px_1fr] gap-8`
  with the month left and the text right — the same grid the publications list uses

## Routing and navigation

- Add `/news` route in `App.jsx`.
- Add `{ name: 'News', href: '/news' }` to the `links` array in `Navbar.jsx`. It
  inherits active styling and `aria-current="page"` from the existing map.
- Delete `Blog.jsx` and the `/blog` route.

## Seed content

Populate from facts already in the repo so the page is not empty on launch: Adobe
start, SIOP 2026 talks, SIOP Student Travel Award, ASCEND Award, M.S. conferred,
CogMI Best Paper. Months not stated in the repo are inferred and flagged to the
author for correction.

## Out of scope

No markdown pipeline, no RSS, no per-post pages, no tags, no pagination. A
longer-form writing surface is a separate feature.

## Verification

No test harness exists in this repo. Verification is the browser preview: the page
renders grouped by year, the navbar entry activates with `aria-current`, `/blog` no
longer resolves, lint stays at its pre-existing baseline, and the production build
succeeds.
