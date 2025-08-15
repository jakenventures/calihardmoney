# California Hard Money Loans - Jaken Finance Group

A blazing-fast, fully responsive, SEO-optimized location website built with **Next.js 15 + React + TypeScript + TailwindCSS**.

## 🚀 Features

- **High Performance**: Optimized for Lighthouse 95+ scores
- **SEO Optimized**: Comprehensive structured data, meta tags, and site optimization
- **Dynamic City Pages**: 100 California city pages with ISR
- **Mobile-First**: Fully responsive design
- **Type Safe**: Built with TypeScript throughout
- **Contact Forms**: Functional contact forms with API endpoint

## 📁 Project Structure

```
├── app/                          # Next.js App Router
│   ├── page.tsx                 # Home page
│   ├── layout.tsx               # Root layout with SEO
│   ├── globals.css              # Global styles
│   ├── sitemap.ts               # Auto-generated sitemap
│   ├── robots.ts                # Robots.txt
│   ├── cities/[slug]/page.tsx   # Dynamic city pages (100 cities)
│   ├── programs/[program]/page.tsx # Program pages (DSCR, Fix & Flip, Bridge)
│   ├── faq/page.tsx             # FAQ page
│   └── contact/page.tsx         # Contact page
├── components/
│   ├── ui/                      # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── CTAButton.tsx
│   │   ├── ProgramCard.tsx
│   │   ├── CityGrid.tsx
│   │   └── FAQ.tsx
│   └── forms/                   # Form components
│       ├── ContactForm.tsx
│       └── ContactFormModal.tsx
├── lib/
│   ├── cities.ts                # 100 CA cities data
│   └── seo.ts                   # SEO utilities & JSON-LD helpers
├── pages/api/
│   └── contact.ts               # Contact form API endpoint
└── public/                      # Static assets
```

## 🏗️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Required Images

Replace the placeholder files in `/public/` with actual optimized images:

- `favicon.ico` (32x32)
- `apple-touch-icon.png` (180x180)
- `favicon-32x32.png` (32x32)
- `favicon-16x16.png` (16x16)
- `og-image.jpg` (1200x630) - Open Graph image

### 3. Configure Email Service

Update `/pages/api/contact.ts` to integrate with your email service:

```typescript
// Example with SendGrid
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
```

Add environment variables:
```bash
SENDGRID_API_KEY=your_api_key
# or use your preferred email service
```

### 4. Run Development Server

```bash
npm run dev
```

### 5. Build for Production

```bash
npm run build
npm start
```

## 🎯 SEO Implementation

### Target Keywords
- Primary: "hard money loans {CITY}, CA"
- Secondary: "DSCR loans {CITY}, CA", "fix and flip loans {CITY}, CA"
- Long-tail: "{CITY} real estate investor financing"

### Structured Data
- ✅ LocalBusiness (MortgageLender)
- ✅ FAQPage on home and FAQ pages
- ✅ BreadcrumbList on all pages
- ✅ WebSite with SearchAction
- ✅ Organization data

### Technical SEO
- ✅ XML Sitemap (auto-generated)
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Open Graph & Twitter Cards
- ✅ Mobile-first responsive design
- ✅ Page speed optimizations

## 🌍 City Pages (ISR)

100 California city pages with:
- Unique meta titles & descriptions
- Semantically varied content (3 templates with rotation)
- City-specific neighborhoods
- Nearby cities cross-linking
- City-specific FAQ entries
- ISR with 24-hour revalidation

## 📞 Contact Configuration

The contact form sends to: `jason@jakenfinancegroup.com`

Phone: `(347) 696-0192`

Update these in `/lib/seo.ts` if needed.

## 🚀 Performance Optimizations

- Font optimization with preload
- Next.js image optimization
- CSS/JS minification
- Compression enabled
- Static asset caching
- ISR for city pages

## 🧪 Testing Checklist

### SEO Validation
- [ ] Validate JSON-LD with Google's Rich Results Test
- [ ] Check meta tags and Open Graph
- [ ] Verify sitemap accessibility
- [ ] Test mobile-friendliness

### Functionality Testing
- [ ] Contact form submission
- [ ] Mobile navigation
- [ ] All internal links work
- [ ] City page generation
- [ ] Program page navigation

### Performance Testing
- [ ] Lighthouse audit (target 95+)
- [ ] Core Web Vitals
- [ ] PageSpeed Insights

## 📈 Netlify Deployment

### Option 1: Git-based Deployment (Recommended)

1. **Push to Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your repository
   - Netlify will auto-detect the settings from `netlify.toml`

3. **Configure Environment Variables** (if using email service)
   - Go to Site Settings > Environment Variables
   - Add: `SENDGRID_API_KEY=your_api_key` (or your email service)

4. **Set Custom Domain**
   - Go to Domain Settings
   - Add custom domain: `cali-hardmoney.com`
   - Configure DNS records as instructed

### Option 2: Manual Deployment

1. **Build the project**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `out` folder to Netlify
   - Or use Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=out
   ```

### Netlify Configuration

The project includes:
- ✅ `netlify.toml` - Build settings and redirects
- ✅ `netlify/functions/contact.js` - Serverless contact form
- ✅ `public/_redirects` - Routing configuration
- ✅ Static export optimization

### Email Integration

Update `netlify/functions/contact.js` to enable email:

1. **Install SendGrid** (recommended)
   ```bash
   npm install @sendgrid/mail
   ```

2. **Uncomment email code** in the function
3. **Add environment variable**: `SENDGRID_API_KEY`

### Production Checklist

- [ ] Replace placeholder images in `/public/`
- [ ] Configure custom domain
- [ ] Set up email service
- [ ] Test contact form
- [ ] Verify SSL certificate
- [ ] Test all pages load correctly

## 🔧 Customization

### Adding New Cities
Update `/lib/cities.ts` with new city objects:

```typescript
{ name: "New City", slug: "new-city", stateCode: "CA" }
```

### Adding New Loan Programs
Create new entries in `/app/programs/[program]/page.tsx` program data object.

### Updating Content
- Home page: `/app/page.tsx`
- Program details: `/app/programs/[program]/page.tsx`
- FAQ content: `/app/faq/page.tsx`
- City page templates: `/app/cities/[slug]/page.tsx`

## 📞 Contact & Support

For questions about this implementation, contact the development team or refer to the Next.js documentation.

Built with ❤️ for California real estate investors.