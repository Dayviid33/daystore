// Shared SVG icons used across the site instead of emoji, so they render
// consistently across devices/browsers instead of varying by OS emoji font.
const ICONS = {

    moon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,

    sun: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,

    heartOutline: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z"></path></svg>`,

    heartFilled: `<svg viewBox="0 0 24 24" width="18" height="18" fill="#ef4444" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z"></path></svg>`,

    star: `<svg viewBox="0 0 24 24" width="14" height="14" fill="#f59e0b" stroke="#f59e0b" stroke-width="1" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,

    check: `<svg viewBox="0 0 24 24" width="18" height="18" fill="rgba(34,197,94,.12)" stroke="#16a34a" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M8 12.5l2.5 2.5L16 9" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg>`,

    cross: `<svg viewBox="0 0 24 24" width="18" height="18" fill="rgba(239,68,68,.12)" stroke="#ef4444" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M9 9l6 6M15 9l-6 6" stroke-width="2.2" stroke-linecap="round" fill="none"></path></svg>`

};