# Florencia Scavone — Portfolio

A personal portfolio website built with Next.js, Tailwind CSS, and TypeScript. It includes internationalization support, a dark mode theme system, contact form integration, and Jest-based tests.

## Features

- Locale-aware app router with English and Spanish support using `next-intl`
- Responsive portfolio sections for About, Work, Skills, Education, Projects, and Contact
- Theme switching support via a custom dark mode implementation
- Contact form integration with Formspree
- Client-side modal component for featured projects
- Jest + React Testing Library test coverage for UI behavior and theme utilities

## Tech Stack

- Next.js 16.2.7
- React 18.2.0
- TypeScript 5
- Tailwind CSS v4
- `next-intl` for localization
- `framer-motion` for animated interactions
- Jest + React Testing Library for tests

## Scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run start` — start the production server
- `npm run lint` — run ESLint
- `npm test` — run Jest tests

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the portfolio locally.

## Testing

```bash
npm test
```

## Notes

The project is configured with a custom Jest setup and uses a mocked `next/image` implementation for tests.
