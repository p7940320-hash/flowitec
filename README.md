# Flowitec - Engineering & Procurement Solutions

A comprehensive B2B website for Flowitec, Africa's leading provider of engineering and procurement solutions for industrial and water infrastructure.

## 🌟 Features

### Core Functionality
- **Hero Video Section** - Autoplay background video with mobile-friendly controls
- **Product Catalog** - Comprehensive catalog with categories, search, and filters
- **Industry Solutions** - Specialized pages for 5+ industries
- **Applications** - 6 application-specific solution pages
- **Services** - Complete service offerings with detailed information
- **Project References** - Filterable project gallery with lightbox
- **Careers** - Job listings with application functionality
- **Contact** - Multi-location contact information with interactive elements
- **Quality & Certifications** - Company certifications and quality standards

### Technical Features
- **Next.js 14** with App Router
- **Sanity CMS Integration** (ready for content management)
- **PostgreSQL** for form submissions
- **File Upload** handling for CVs and attachments
- **Email Notifications** for form submissions
- **Responsive Design** with Tailwind CSS
- **SEO Optimized** with meta tags, structured data, and sitemap
- **Accessibility** compliant with WCAG guidelines

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and Yarn
- PostgreSQL database (for production)
- SMTP server (for email notifications)

### Installation

```bash
# Install dependencies
yarn install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Run development server
yarn dev

# Build for production
yarn build
yarn start
```

### Environment Variables

```env
# Database
MONGO_URL=mongodb://localhost:27017
DB_NAME=flowitec_db

# Postgres (for submissions)
POSTGRES_URL=postgresql://localhost:5432/flowitec_submissions
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=flowitec_submissions

# Email Configuration
SMTP_HOST=localhost
SMTP_PORT=1025
SMTP_USER=
SMTP_PASSWORD=
EMAIL_FROM=noreply@flowitec.com
EMAIL_TO=info@flowitec.com

# Sanity CMS (configure for production)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token

# Application
NEXT_PUBLIC_BASE_URL=https://your-domain.com
CORS_ORIGINS=*
```

## 📁 Project Structure

```
/app
├── app/
│   ├── api/[[...path]]/route.js    # API routes
│   ├── layout.js                    # Root layout
│   ├── page.js                      # Home page
│   ├── about/                       # About page
│   ├── products/                    # Products pages
│   │   ├── page.js                  # Products listing
│   │   └── [category]/[slug]/      # Product detail
│   ├── industries/                  # Industries pages
│   │   ├── page.js
│   │   └── [slug]/page.js
│   ├── applications/                # Applications pages
│   ├── services/                    # Services page
│   ├── references/                  # Project references
│   ├── partners/                    # Partners page
│   ├── careers/                     # Careers pages
│   │   ├── page.js
│   │   └── [slug]/page.js
│   ├── contact/                     # Contact page
│   ├── quality/                     # Quality page
│   └── legal/                       # Legal pages
├── components/                      # React components
│   ├── Navigation.js
│   ├── Footer.js
│   ├── HeroVideo.js
│   ├── ProductCard.js
│   └── IndustryCard.js
├── lib/                            # Utilities
│   ├── mockData.js                 # Mock content data
│   ├── db.js                       # Database utilities
│   └── email.js                    # Email utilities
└── public/                         # Static assets
```

## 🎨 Design System

### Brand Colors
- **Primary Blue**: `#0D47A1` (hsl(210, 95%, 32%))
- **Secondary Ash**: `#B0B6BB` (hsl(210, 6%, 70%))

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: 600-800 weight
- **Body**: 400/600 weight

### Components
- Built with **shadcn/ui** components
- **Tailwind CSS** for styling
- **Responsive** design with mobile-first approach

## 📡 API Endpoints

### Public Endpoints

```bash
# Products
GET /api/products                           # List all products
GET /api/products?category=pumps            # Filter by category
GET /api/products/{category}/{slug}         # Product details

# Industries
GET /api/industries                         # List all industries
GET /api/industries/{slug}                  # Industry details

# Applications
GET /api/applications                       # List all applications
GET /api/applications/{slug}                # Application details

# Services
GET /api/services                           # List all services

# Partners
GET /api/partners                           # List all partners

# Branches
GET /api/branches                           # List all locations

# Jobs/Careers
GET /api/jobs                               # List active jobs
GET /api/jobs/{slug}                        # Job details

# Projects
GET /api/projects                           # List projects
```

### Form Submission Endpoints

```bash
# Contact Form
POST /api/forms/contact
Body: { name, email, phone, company, country, interest, message }

# Service Request
POST /api/forms/service-request
Body: { name, company, email, phone, location, serviceType, message }

# Career Application
POST /api/forms/career-apply
Body: FormData with { name, email, phone, position, coverLetter, cv (file) }
```

## 🗃️ Database Schema

### Postgres (Submissions)

```sql
CREATE TABLE submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type VARCHAR(50) NOT NULL,              -- 'contact', 'service-request', 'career-application'
  payload JSONB NOT NULL,                 -- Form data
  attachments JSONB,                      -- File metadata
  status VARCHAR(20) DEFAULT 'new',       -- 'new', 'processed', 'archived'
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 🎯 Key Features Implemented

### 1. Hero Video Section
- Autoplay video with fallback poster
- Play/pause controls
- Mobile optimization (poster only on small screens)
- Smooth gradient overlay
- Responsive text and CTAs

### 2. Product Catalog
- **6 Categories**: Pumps, Valves, Motors, Control Panels, Spare Parts, Mixers
- Category filtering and search
- Product detail pages with specifications
- Related products
- Industry and application linking
- Downloadable datasheets

### 3. Industry Solutions
- 5 industries with dedicated pages
- Challenges and solutions
- Recommended equipment
- Project references

### 4. Forms & Submissions
- Contact form
- Service request form
- Career application with CV upload (max 10MB)
- Form validation
- Email notifications
- Database storage

### 5. SEO & Accessibility
- Meta tags for all pages
- Open Graph tags
- Structured data (Product, Service, JobPosting, Organization)
- Sitemap.xml
- Robots.txt
- Accessible navigation
- Keyboard support
- Screen reader friendly

## 🔧 Development

### Adding New Content

#### Products
Edit `/lib/mockData.js` and add to the `PRODUCTS` array:

```javascript
{
  id: 'unique-id',
  title: 'Product Name',
  category: 'pumps', // or valves, motors, etc.
  slug: 'product-slug',
  shortDescription: 'Brief description',
  image: 'image-url',
  specs: [
    { key: 'Specification', value: 'Value' }
  ],
  industries: ['mining', 'agriculture'],
  applications: ['clean-water']
}
```

#### Industries
Add to `INDUSTRIES` array in `/lib/mockData.js`

#### Jobs
Add to `JOBS` array in `/lib/mockData.js`

### Customizing Styles

Global styles: `/app/globals.css`
Tailwind config: `/tailwind.config.js`

### Adding Pages

Create new pages in `/app/` directory following Next.js App Router conventions.

## 📦 Deployment

### Environment Setup
1. Set up Postgres database
2. Configure SMTP for emails
3. Set up Sanity CMS (optional)
4. Configure environment variables
5. Build and deploy

### Recommended Platforms
- **Frontend**: Vercel, Netlify
- **Database**: Supabase, Railway, Render
- **Storage**: S3, Cloudflare R2
- **CDN**: Cloudflare

### Build Commands

```bash
# Build
yarn build

# Start production server
yarn start
```

## 🧪 Testing

### Manual Testing
1. Test all forms (contact, service request, career application)
2. Verify file uploads work correctly
3. Test navigation and all links
4. Check responsive design on mobile/tablet/desktop
5. Test video playback
6. Verify API endpoints
7. Check SEO meta tags

### API Testing

```bash
# Test products API
curl http://localhost:3000/api/products

# Test specific product
curl http://localhost:3000/api/products/pumps/centrifugal-pumps

# Test industries
curl http://localhost:3000/api/industries

# Test jobs
curl http://localhost:3000/api/jobs
```

## 📝 Content Management

For production deployment:
1. Set up Sanity Studio
2. Configure content schemas
3. Import mock data to Sanity
4. Update API to fetch from Sanity instead of mock data
5. Implement preview mode for content editors

## 🔒 Security

- Input validation on all forms
- File type and size restrictions on uploads
- CORS configuration
- Environment variable protection
- SQL injection prevention with parameterized queries
- XSS protection (React's built-in)

## 🌍 Localization

Currently supports English. For multi-language support:
1. Add i18n library (next-intl)
2. Create translation files
3. Wrap content in translation hooks
4. Add language selector

## 📞 Support

For questions or issues:
- **Email**: info@flowitec.com
- **Phone**: +27 11 123 4567
- **Website**: https://nextjs-flowitec.preview.emergentagent.com

## 📄 License

Proprietary - Flowitec © 2025. All rights reserved.

## 🎉 Credits

Built with:
- Next.js 14
- React 18
- Tailwind CSS
- shadcn/ui
- PostgreSQL
- Lucide Icons

---

**Note**: This is an MVP with placeholder content and basic email functionality. For production:
1. Replace placeholder images with actual product photos
2. Replace hero video with real Flowitec footage
3. Configure actual SMTP server for email
4. Set up proper database with backups
5. Implement Sanity CMS for content management
6. Add HubSpot CRM integration for form submissions
7. Set up Cloudflare Stream or Mux for live video streaming
8. Add analytics (GA4)
9. Implement proper error monitoring (Sentry)
10. Set up CI/CD pipeline
#   f l o w i t e c  
 #   f l o w i t e c  
 #   f l o w i t e c  
 