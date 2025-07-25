# Georgia Limo Business Funnel

A comprehensive sales funnel built with Next.js 15 and Tailwind CSS specifically designed for Georgia limousine businesses.

## Features

- **Landing Page** with lead capture
- **Module Download System** for lead magnets
- **Emotional Assessment Quiz** with personalized results
- **Business Transformation Masterclass** with video content
- **Progressive Offer System** (Initial → Special offers with dynamic pricing)
- **Purchase Flow** with onboarding questionnaire
- **Professional UI/UX** with luxury design theme

## Funnel Flow

1. **Landing Page** (`/`) → Lead capture
2. **Module 1 Download** (`/chapter-1-download`) → Free content delivery
3. **Emotional Quiz** (`/emotional-quiz`) → Pain point assessment
4. **Masterclass** (`/business-transformation-masterclass`) → Educational content
5. **Initial Offer** (`/initial-offer`) → First conversion attempt
6. **Special Offer** (`/special-offer`) → Discount offers (25%/50%)
7. **Purchase** (`/purchase`) → Checkout process
8. **Onboarding** (`/onboarding`) → Post-purchase questionnaire

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS
- **Icons:** Heroicons
- **Deployment:** Vercel (recommended)

## Video Content

The funnel includes AI-generated video scripts optimized for Pictory.ai:

- **Masterclass Video** (6+ minutes) - Main educational content
- **Short Testimonial** (2 minutes) - Social media version
- **Landing Page Intro** (90 seconds) - Hook video

Video scripts are located in `/video-scripts/` directory.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

### Environment Setup

Create a `.env.local` file for environment variables:

```env
# Add any API keys or configuration here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
3. Deploy

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm start
```

## Customization

### Colors and Branding

The design uses a luxury theme with Georgia gold accents. Update colors in `tailwind.config.js`:

```javascript
colors: {
  'luxury': {
    900: '#1a1a1a',
    800: '#2a2a2a',
    700: '#3a3a3a',
  },
  'gold': {
    500: '#FFD700',
    600: '#E6C200',
  }
}
```

### Content Updates

- **Copy/Text:** Update content directly in component files
- **Images:** Add to `/public/` directory
- **Videos:** Use the provided Pictory.ai scripts in `/video-scripts/`

## Project Structure

```
funnel/
├── app/                          # Next.js app directory
│   ├── page.tsx                 # Landing page
│   ├── chapter-1-download/       # Module download
│   ├── emotional-quiz/           # Pain assessment
│   ├── business-transformation-masterclass/  # Educational video
│   ├── initial-offer/           # First offer
│   ├── special-offer/           # Discount offers
│   ├── purchase/                # Checkout
│   └── onboarding/              # Post-purchase
├── video-scripts/               # AI video generation scripts
├── public/                      # Static assets
└── tailwind.config.js          # Styling configuration
```

## Analytics and Tracking

To add analytics:

1. **Google Analytics:** Add GA4 tracking code to `layout.tsx`
2. **Facebook Pixel:** Include FB pixel in head section
3. **Conversion Tracking:** Set up goal tracking for each funnel step

## Support

For questions about this funnel system, contact LimoLift Development.

## License

© 2024 LimoLift Development. All rights reserved.
