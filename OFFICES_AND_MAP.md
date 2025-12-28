# Flowitec Offices & Map Configuration

## Office Locations

### 1. Ghana (Headquarters)
**Flowitec Group Ghana Limited — Headquarters**
- **Location**: Tema, Greater Accra
- **Address**: 
  - P. O. Box SK 1369, Sakumono, Greater Accra
  - GT-373-0152 Opp IRS, Comm. 18 Junction, Spintex Road, Tema, Ghana
- **Phone**: +233 27 330 0082
- **Email**: info@flowitec.com
- **Coordinates**: 5.6695°N, 0.0169°W
- **Status**: ✅ Active on Contact Page

### 2. Nigeria
**Flowitec Solutions Company Limited — Nigeria**
- **Location**: Lagos
- **Address**:
  - P. O. Box 75825, Victoria Island, Lagos
  - T926 Grenadine Estate Sangotedo, Monastery Rd, Lagos, Nigeria
- **Phone**: +234 707 322 9577
- **Email**: info@flowitec.com
- **Coordinates**: 6.5244°N, 3.3792°E
- **Status**: ✅ Active on Contact Page

### 3. Kenya
**Flowitec Group Limited — Kenya**
- **Location**: Nairobi
- **Address**:
  - 403, 4th Floor, NML Towers, Tsavo Road, South B, Nairobi, Kenya
- **Phone**: (Contact via email)
- **Email**: info@flowitec.com
- **Coordinates**: 1.2921°S, 36.8219°E
- **Status**: ✅ Active on Contact Page

---

## Map Configuration

### Africa Overview Map
- **Type**: Interactive SVG Map
- **Focus Countries**: Ghana, Nigeria, Kenya
- **Center Point**: 6.0°N, 20.0°E
- **Zoom Level**: Africa continent view
- **Pin Color**: #0D47A1 (Flowitec Blue)
- **Pin Style**: Medium size, bold labels

### Map Features
1. **Interactive Pins**: Clickable pins for each office location
2. **Country Highlights**: Semi-transparent overlays for Ghana, Nigeria, Kenya
3. **Pin Tooltips**: Hover to see country name
4. **Click Behavior**: Opens location detail modal with full address and contact info
5. **Responsive**: Scales appropriately on all devices

### Pin Details
Each pin shows:
- Office title
- Full address (multiple lines)
- Phone number (with click-to-call)
- Email address (with mailto link)

---

## Contact Page Layout

### 1. Hero Section
- **Heading**: "Our Offices Across Africa"
- **Subheading**: "Contact our regional offices for sales, service and spare parts"
- **Background**: Gradient from primary (#0D47A1) to primary/80
- **Breadcrumb**: Home / Contact

### 2. Map Widget (Below Hero)
- Interactive Africa map with 3 office pins
- Click pins to view office details in modal
- Legend showing office markers
- Visual focus on Ghana, Nigeria, and Kenya

### 3. Office Cards Section
- 3-column grid (responsive)
- Each card displays:
  - Office icon
  - Full official title
  - Complete address (all lines)
  - Phone number (clickable)
  - Email address (clickable)
- Cards have hover effects for better UX

### 4. Contact Form
- Full-width contact form
- Fields: Name*, Email*, Phone, Company, Country, Area of Interest, Message*
- Country dropdown pre-filled with Ghana, Nigeria, Kenya, Other
- Submit sends to: **info@flowitec.com**
- Success/error messaging
- Form validation

### 5. Business Hours
- Highlighted section with clock icon
- Standard hours: Mon-Fri 8AM-5PM, Sat 9AM-1PM, Sun Closed
- 24/7 emergency support note

---

## Brand Colors

- **Primary Blue**: #0D47A1
- **Secondary Ash**: #B0B6BB
- Used consistently throughout:
  - Map pins
  - Icons
  - Buttons
  - Links
  - Hover states

---

## Technical Implementation

### Data Structure
```javascript
BRANCHES = [
  {
    id: '1',
    slug: 'flowitec-ghana-headquarters',
    country: 'Ghana',
    city: 'Tema',
    title: 'Flowitec Group Ghana Limited — Headquarters',
    address_lines: [...],
    phone: '+233 27 330 0082',
    email: 'info@flowitec.com',
    lat: 5.6695,
    lng: -0.0169,
    show_on_contact: true
  },
  // ... Nigeria, Kenya
]
```

### API Endpoint
- **GET /api/branches** - Returns all office locations
- Used by Contact page and Industry detail pages
- Filterable by `show_on_contact` flag

### Map Component
- SVG-based for performance and styling control
- Interactive with click handlers
- Modal overlay for office details
- Accessible (keyboard navigable)
- Mobile-responsive

---

## Image Hints for Future Enhancement

When adding actual office photos:
- **Ghana**: Office exterior or team at Tema port site, prefer Black professionals
- **Nigeria**: Lagos office or technicians, prefer Black professionals
- **Kenya**: Nairobi office building or team, prefer Black professionals

---

## Admin Instructions

### To Update Office Information:
1. Edit `/app/lib/mockData.js`
2. Update the `BRANCHES` array
3. Modify address_lines, phone, email as needed
4. Adjust lat/lng for map accuracy

### To Add New Office:
1. Add new object to `BRANCHES` array
2. Set `show_on_contact: true` to display
3. Provide accurate coordinates for map pin
4. Update map SVG to include new pin

### To Change Map Focus:
1. Edit Contact page map SVG
2. Adjust viewBox and pin positions
3. Update country highlight circles
4. Test pin clickability

---

## Testing Checklist

✅ All 3 offices display on contact page
✅ Map pins are clickable and show correct office details
✅ Phone numbers are click-to-call enabled
✅ Email addresses open mail client
✅ Contact form submits successfully to info@flowitec.com
✅ Mobile responsive layout
✅ Brand colors consistent throughout
✅ Office cards have proper hover effects

---

**Live URL**: https://nextjs-flowitec.preview.emergentagent.com/contact

**Status**: ✅ Fully Implemented and Working
