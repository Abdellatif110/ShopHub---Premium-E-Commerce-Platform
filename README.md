# 🛍️ ShopHub - Premium React E-Commerce Platform

![React](https://img.shields.io/badge/React-18.3.1-61dafb?style=for-the-badge&logo=react)
![React Router](https://img.shields.io/badge/React_Router-7.1.1-CA4245?style=for-the-badge&logo=react-router)
![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF?style=for-the-badge&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A modern, full-featured e-commerce web application built with React and React Router. Experience premium shopping with stunning dark theme aesthetics, smooth animations, and a fully responsive design.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [Pages & Routes](#-pages--routes)
- [Components](#-components)
- [Design System](#-design-system)
- [Responsive Design](#-responsive-design)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🛒 E-Commerce Functionality
- **Product Catalog** - Browse 40+ premium products across multiple categories
- **Advanced Search** - Real-time product search functionality
- **Category Filters** - Filter products by categories (apparel, kitchen, sports, shoes, etc.)
- **Shopping Cart** - Add items with quantity selection
- **Order Management** - View order history with detailed information
- **Order Tracking** - Track package delivery with visual progress indicators
- **Checkout System** - Review cart, select delivery options, and place orders

### 🎨 Premium UI/UX
- **Dark Theme** - Modern dark interface with gradient accents
- **Glassmorphism** - Frosted glass effects with backdrop blur
- **Smooth Animations** - Fade-in, slide-in, hover, and floating animations
- **Gradient Effects** - Purple, pink, and blue gradient combinations
- **Status Badges** - Color-coded order status indicators
- **Interactive Cards** - Hover effects with lift and scale animations
- **Responsive Navigation** - Sticky header with mobile hamburger menu

### 📱 Pages
- **Home** - Hero section with animated orbs, stats, and feature highlights
- **Services** - 6 service cards with custom icons and hover effects
- **About** - Company story, team showcase, stats, and core values
- **Shop** - Premium product grid with search and filters
- **Orders** - Order history with tracking capabilities
- **Checkout** - Cart review and order placement
- **Tracking** - Package delivery progress visualization

---

## 🛠️ Tech Stack

### Core Technologies
- **React 18.3.1** - Modern React with Hooks
- **React Router DOM 7.1.1** - Client-side routing
- **Vite 6.0.5** - Next-generation frontend tooling
- **JavaScript (ES6+)** - Modern JavaScript features

### Styling
- **Vanilla CSS** - No frameworks, pure CSS
- **CSS Grid & Flexbox** - Modern layout systems
- **CSS Animations** - Keyframe animations and transitions
- **CSS Gradients** - Linear and radial gradients
- **Backdrop Filters** - Glassmorphism effects

### Development Tools
- **ESLint** - Code quality and consistency
- **Vite Dev Server** - Fast HMR (Hot Module Replacement)

---

## 📁 Project Structure

```
Prj-react-Router/
├── public/
│   └── images/              # Product images and icons
│       ├── products/        # Product catalog images (40+ items)
│       ├── icons/           # UI icons (cart, search, ratings, etc.)
│       └── ratings/         # Star rating images
├── src/
│   ├── components/          # React components
│   │   ├── Navigation.jsx   # Unified navigation header
│   │   ├── Home.jsx         # Home page with hero section
│   │   ├── Section.jsx      # Services page
│   │   ├── About.jsx        # About page
│   │   ├── Shop.jsx         # Product catalog with filters
│   │   ├── Orders.jsx       # Order history page
│   │   ├── Checkout.jsx     # Cart and checkout page
│   │   ├── Tracking.jsx     # Package tracking page
│   │   ├── Header.jsx       # E-commerce header (legacy)
│   │   └── Footer.jsx       # Site footer
│   ├── data/
│   │   └── products.js      # Product data (40+ items)
│   ├── App.jsx              # Main app component with routing
│   ├── App.css              # App-specific styles
│   ├── index.css            # Global styles and design system
│   └── main.jsx             # React entry point
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
└── README.md                # Project documentation
```

---

## 🚀 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abdellatif110/gestion-des-tudes.git
   cd Prj-react-Router
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The optimized build will be available in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 💻 Usage

### Navigation
The application features a unified navigation header that appears on all pages:
- **Logo** - Click to return home
- **Main Links** - Home, Services, About, Shop
- **Action Buttons** - Orders, Cart (with badge showing item count)
- **Mobile Menu** - Hamburger menu for smaller screens

### Shopping Flow
1. **Browse Products** - Navigate to Shop page
2. **Search/Filter** - Use search bar or category filters
3. **Add to Cart** - Select quantity and click "Add to Cart"
4. **View Cart** - Click Cart button in navigation
5. **Checkout** - Review items and select delivery options
6. **Track Order** - View order status in Orders page

### Page Features

**Home Page:**
- Hero section with animated gradient orbs
- Feature highlights (Free Shipping, Secure Payment, etc.)
- Statistics showcase

**Shop Page:**
- Product grid with 40+ items
- Real-time search functionality
- Category filter buttons
- Premium/standard badges
- Quick view overlay on hover
- Add to cart with success animation

**Orders Page:**
- Order history cards
- Status badges (Delivered, In Transit, Processing)
- Order details with images
- Action buttons (Track, Buy Again, Review)

**Tracking Page:**
- Delivery progress visualization
- Package status updates
- Expected delivery date

---

## 🗺️ Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page with hero section and features |
| `/section` | Section | Services showcase with 6 cards |
| `/about` | About | Company info, team, stats, and values |
| `/shop` | Shop | Product catalog with search and filters |
| `/orders` | Orders | Order history and management |
| `/checkout` | Checkout | Shopping cart and order placement |
| `/tracking` | Tracking | Package delivery tracking |

---

## 🧩 Components

### Navigation Components

**Navigation.jsx**
- Unified header for all pages
- Active route highlighting
- Mobile responsive menu
- Cart badge with item count

**Footer.jsx**
- Company information
- Quick links
- Social media links
- Newsletter signup form

### Page Components

**Home.jsx**
- Hero section with animated orbs
- Feature cards
- Statistics display
- Call-to-action buttons

**Shop.jsx**
- Product grid layout
- Search functionality
- Category filtering
- Add to cart with animations
- Premium badges for high-rated items

**Orders.jsx**
- Order cards with gradient headers
- Status badges (color-coded)
- Item details with images
- Action buttons (Track, Buy Again, Review)

**Checkout.jsx**
- Cart item review
- Delivery options
- Order summary
- Payment total calculation

**Tracking.jsx**
- Progress bar visualization
- Delivery status labels
- Expected delivery date

---

## 🎨 Design System

### Color Palette

**Primary Gradient:**
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

**Secondary Gradient:**
```css
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
```

**Tertiary Gradient:**
```css
background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
```

**Dark Backgrounds:**
- Primary: `#0f0f1e`
- Secondary: `#1a1a2e`
- Cards: `rgba(255, 255, 255, 0.05)` with backdrop blur

### Typography

**Font Family:**
- Primary: Inter, system-ui, -apple-system, sans-serif
- Fallback: Roboto, Arial

**Font Weights:**
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extrabold: 800
- Black: 900

**Font Sizes:**
- Hero Title: 4-5rem
- Section Title: 3-3.5rem
- Card Title: 1.5-2rem
- Body: 1rem
- Small: 0.875rem

### Spacing System
- Extra Small: 8px
- Small: 12px
- Medium: 16px
- Large: 24px
- Extra Large: 32px
- XXL: 40px
- XXXL: 60px

### Border Radius
- Small: 8px
- Medium: 12px
- Large: 16px
- XL: 20px
- Pills: 50px

### Animations

**Keyframes:**
- `fadeIn` - Opacity 0 to 1
- `fadeInUp` - Fade in with upward motion
- `slideIn` - Slide from bottom
- `slideDown` - Slide from top
- `float` - Continuous floating motion
- `checkmarkPop` - Scale animation

**Transitions:**
- Standard: `0.3s ease`
- Smooth: `0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)`

### Effects

**Glassmorphism:**
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.1);
```

**Hover Lift:**
```css
transform: translateY(-10px);
box-shadow: 0 20px 40px rgba(0,0,0,0.15);
```

**Gradient Text:**
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

---

## 📱 Responsive Design

### Breakpoints

- **Desktop:** > 968px (Full layout)
- **Tablet:** 768px - 968px (Adjusted grid)
- **Mobile:** < 768px (Stacked layout, mobile menu)

### Mobile Optimizations

**Navigation:**
- Hamburger menu replaces horizontal links
- Full-screen dropdown menu
- Touch-friendly 44px minimum touch targets

**Product Grid:**
- Desktop: 4-5 columns
- Tablet: 3 columns
- Mobile: 2 columns (180px minimum)

**Typography:**
- Hero titles scale down (3rem on mobile)
- Reduced padding and margins
- Adjusted font sizes for readability

**Images:**
- Responsive images with max-width: 100%
- Object-fit: contain for product images
- Optimized aspect ratios

---

## 🚀 Future Enhancements

### Features
- [ ] User authentication (login/register)
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Real-time inventory management
- [ ] Product recommendations
- [ ] Advanced filtering (price range, ratings, availability)
- [ ] Order notifications
- [ ] Customer profile dashboard
- [ ] Multi-language support

### Technical Improvements
- [ ] State management (Redux/Zustand)
- [ ] API integration (REST/GraphQL)
- [ ] Database integration (Firebase/Supabase)
- [ ] Image optimization and lazy loading
- [ ] SEO optimization
- [ ] Performance monitoring
- [ ] Unit and integration tests
- [ ] TypeScript migration
- [ ] PWA capabilities
- [ ] Dark/Light theme toggle

### UI/UX Enhancements
- [ ] Product image carousel
- [ ] Zoom on product images
- [ ] Skeleton loading states
- [ ] Toast notifications
- [ ] Accessibility improvements (ARIA labels)
- [ ] Keyboard navigation
- [ ] Print order receipts
- [ ] Export order history

---

## 👥 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style Guidelines
- Use functional components with hooks
- Follow ESLint configuration
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused
- Use CSS custom properties for theming

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Developer

**Abdellatif**
- GitHub: [@Abdellatif110](https://github.com/Abdellatif110)

---

## 🙏 Acknowledgments

- Product images from various e-commerce sources
- Inspiration from modern e-commerce platforms
- React and Vite communities
- Font: Inter from Google Fonts

---

## 📞 Support

For support, email your-email@example.com or open an issue in the repository.

---

**Made with ❤️ using React and Vite**

---

## 📸 Screenshots

### Home Page
Premium landing page with animated gradient orbs, hero section, and feature highlights.

### Shop Page
Product catalog with search, category filters, and premium card designs with hover effects.

### Orders Page
Order history with status badges, delivery information, and action buttons.

### Mobile View
Fully responsive design with hamburger menu and optimized layouts for all screen sizes.

---

*Last Updated: January 2026*
