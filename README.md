# ÀṢÍRÍ

**African Luxury Fashion E-Commerce**

Àṣírí — meaning "secret" in Yoruba — represents the hidden treasures of African craftsmanship, revealed through contemporary luxury fashion.

---

## About

ÀṢÍRÍ is a luxury African fashion e-commerce platform inspired by world-class brands like Louis Vuitton. The platform celebrates the rich tapestry of African heritage through contemporary fashion, featuring collections rooted in Kente, Aso Oke, Ankara, Maasai beadwork, Bogolan mudcloth, and more.

Each piece tells a story woven across generations.

---

## Tech Stack

### Frontend
- **React 18+** — UI library
- **TypeScript** — type safety
- **Vite** — build tool and dev server
- **React Router** — client-side navigation
- **SCSS Modules** — component-scoped styling

### Backend (coming soon)
- **Node.js** — runtime
- **NestJS** — framework with TypeScript
- **REST API** — client-server communication
- **Database** — TBD
- **Payments** — TBD

---

## Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Cream | `#F5F0E8` | Page background |
| Sand | `#E8DFD0` | Secondary backgrounds |
| Terracotta | `#C45D3E` | Primary accent |
| Burnt Orange | `#D4763A` | Secondary accent |
| Gold | `#C9A962` | Luxury highlights |
| Deep Brown | `#2A1810` | Primary text |
| Charcoal | `#1A1A1A` | Dark backgrounds |
| Kente Green | `#2D5A3D` | Heritage accent |
| Indigo | `#1E3A5F` | Cool accent |

### Typography
- **Display:** Cormorant Garamond (headings, logo)
- **Body:** Outfit (text, navigation, buttons)

---

## MVP — 4 Core Systems

1. **Product Catalog** — items, variants, categories, images
2. **Content / Storytelling** — brand story, artisan stories, editorial pages
3. **Commerce Engine** — cart, checkout, payments
4. **User System** — auth, profiles, wishlist, order history

---

## Project Structure

```
asiri/
├── public/
├── src/
│   ├── assets/              # Images, fonts, icons
│   ├── components/          # Reusable UI components
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── ProductCard/
│   │   └── Button/
│   ├── pages/               # Route-level pages
│   │   ├── Home/
│   │   ├── Products/
│   │   ├── ProductDetail/
│   │   ├── Cart/
│   │   ├── Checkout/
│   │   ├── Auth/
│   │   ├── Story/
│   │   └── Account/
│   ├── hooks/               # Custom React hooks
│   ├── services/            # API communication
│   ├── types/               # TypeScript interfaces
│   ├── context/             # Global state (cart, auth)
│   ├── styles/              # Global SCSS
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   ├── _reset.scss
│   │   └── global.scss
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Development Methodology

1. **Solutions Architecture** — define system structure before writing code
2. **Separation of Concerns** — modules, layers, clear responsibilities
3. **Code Security** — validate inputs, handle auth, least privilege
4. **Code Efficiency** — optimise only once correctness is proven
5. **Code Refactoring** — continuously clean up and improve readability

---

## Getting Started

### Prerequisites
- Node.js v22+
- npm 11+

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/asiri.git

# Navigate to the project
cd asiri

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

---

## UX Decisions

- **Wishlist** — slide-in side panel (not a separate page)
- **Search** — overlay on current page
- **Cart** — full page at `/cart`

---

## Author

**Martial**

---

## License

All rights reserved. © 2025 ÀṢÍRÍ
