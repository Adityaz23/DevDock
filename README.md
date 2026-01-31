This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Strucutre :-
```
├── 📁 app
│   ├── 📁 admin
│   │   └── 📄 page.tsx
│   ├── 📁 explore
│   │   └── 📄 page.tsx
│   ├── 📁 products
│   │   ├── 📁 [slug]
│   │   │   └── 📄 page.tsx
│   │   └── 📄 page.tsx
│   ├── 📁 submit
│   │   └── 📄 page.tsx
│   ├── 📄 favicon.ico
│   ├── 🎨 globals.css
│   ├── 📄 layout.tsx
│   └── 📄 page.tsx
├── 📁 components
│   ├── 📁 common
│   │   ├── 📄 common-header.tsx
│   │   ├── 📄 custom-user-button.tsx
│   │   ├── 📄 empty-state.tsx
│   │   ├── 📄 footer.tsx
│   │   └── 📄 header.tsx
│   ├── 📁 forms
│   │   └── 📄 form-field.tsx
│   ├── 📁 landing-page
│   │   ├── 📄 featured.tsx
│   │   ├── 📄 hero-section.tsx
│   │   ├── 📄 recently-launched.tsx
│   │   └── 📄 stats-card.tsx
│   ├── 📁 products
│   │   ├── 📄 product-skeleton.tsx
│   │   ├── 📄 product-submit-form.tsx
│   │   ├── 📄 productExplorer.tsx
│   │   ├── 📄 products.tsx
│   │   └── 📄 voting-buttons.tsx
│   └── 📁 ui
│       ├── 📄 badge.tsx
│       ├── 📄 button.tsx
│       ├── 📄 card.tsx
│       ├── 📄 dropdown-menu.tsx
│       ├── 📄 form.tsx
│       ├── 📄 input.tsx
│       ├── 📄 label.tsx
│       ├── 📄 skeleton.tsx
│       └── 📄 textarea.tsx
├── 📁 db
│   ├── 📄 data.ts
│   ├── 📄 index.ts
│   ├── 📄 schema.ts
│   └── 📄 seed.ts
├── 📁 drizzle
│   ├── 📁 meta
│   │   ├── ⚙️ 0000_snapshot.json
│   │   ├── ⚙️ 0001_snapshot.json
│   │   └── ⚙️ _journal.json
│   ├── 📄 0000_sour_sheva_callister.sql
│   └── 📄 0001_youthful_brood.sql
├── 📁 lib
│   ├── 📁 products
│   │   ├── 📄 product-action.ts
│   │   ├── 📄 product-select.ts
│   │   └── 📄 product-validate.ts
│   └── 📄 utils.ts
├── 📁 public
│   ├── 📄 favicon.ico
│   ├── 🖼️ file.svg
│   ├── 🖼️ globe.svg
│   ├── 🖼️ next.svg
│   ├── 🖼️ vercel.svg
│   └── 🖼️ window.svg
├── 📁 types
│   └── 📄 index.ts
├── ⚙️ .gitignore
├── 📝 README.md
├── 📄 bun.lock
├── ⚙️ components.json
├── 📄 drizzle.config.ts
├── 📄 eslint.config.mjs
├── 📄 next.config.ts
├── ⚙️ package-lock.json
├── ⚙️ package.json
├── 📄 postcss.config.mjs
├── 📄 proxy.ts
└── ⚙️ tsconfig.json

This is still not completed the file struture will need to be updated
```

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
