# DIETELLO.COM

**🛎️🛎️ Good news! New & improved [V2.0] is out**

### <a href="https://dietello.com/">LIVE DEMO</a>

## Description
This is Dr. Ghana Keerthana Anumolu Consultation Website. Book Now!

## Features

### 🌟 Core Features
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Smooth Navigation**: Seamless scrolling between sections
- **Contact Form**: Functional contact form with EmailJS integration
- **Professional Design**: Clean, modern UI optimized for conversion

### 📝 Blog System (NEW)
- **Dynamic Blog Pages**: Full-featured blog with individual post pages
- **SEO-Friendly URLs**: Clean URLs like `/blog/nutrition-tips-for-busy-professionals`
- **Blog Management**: Easy content management through JSON data file
- **Clean Typography**: Optimized reading experience without distracting decorative lines
- **Responsive Layout**: Blog posts display perfectly on all screen sizes

#### Blog Features:
- **Blog Listing Page**: `/blog` - Browse all blog posts
- **Individual Blog Posts**: `/blog/[slug]` - Dedicated pages for each article
- **Smart Navigation**: Cross-page navigation from any section to blog
- **Clean Design**: Professional appearance without visual clutter
- **Content Excerpts**: Truncated previews on listing pages with "Read More" buttons
- **Metadata Display**: Shows publication date and author information

### 🎨 UI/UX Improvements
- **Fixed Header Spacing**: Proper clearance for fixed navigation on all pages
- **Clean Typography**: Removed unnecessary decorative lines for better readability
- **Optimized Navigation**: Smart routing that works from any page
- **Mobile-First**: Responsive design that prioritizes mobile experience

## Technology Stack

### Frontend
- **React 17**: Modern, component-based UI framework
- **React Router v5**: Client-side routing for SPA functionality
- **Bootstrap 3**: Responsive grid system and components
- **EmailJS**: Contact form functionality without backend

### Styling
- **Custom CSS**: Professional styling with clean aesthetics
- **Responsive Design**: Mobile-first approach
- **Cross-browser Compatibility**: Works on all modern browsers

## Make it Yours!

### 1. Prerequisites
You will need to have <a href="https://nodejs.org/">Node JS</a> installed on your pc.

### 2. Clone Files
After cloning the files, you will have to run:
```bash
yarn install
# or
npm install
```

Then start the development server:
```bash
yarn start
# or
npm start
```

### 3. Customize Your Content

#### General Website Data
Change the data in the `src/data/data.json` file:
- Header information
- About section content
- Features and services
- Team member information
- Contact details

#### Blog Management
**Add/Edit Blog Posts** in `src/data/data.json`:
```json
{
  "Blog": {
    "title": "Blog",
    "subtitle": "Your blog subtitle",
    "posts": [
      {
        "title": "Your Blog Post Title",
        "content": "Full blog post content...",
        "date": "November 11, 2024",
        "author": "Author Name"
      }
    ]
  }
}
```

#### Images and Assets
Add any images to `public/img/` and update the paths in your data.json file.

#### Styling
Customize the appearance by modifying the `public/css` files:
- `style.css` - Main styles
- `bootstrap.css` - Bootstrap framework styles
- Custom blog styles are integrated inline for optimal performance

#### Contact Form Configuration
To make the contact form work:
1. Create an <a href="https://www.emailjs.com/">EmailJS</a> account
2. Create a service template
3. Update the credentials in `src/components/contact.jsx`:
   - Service ID
   - Template ID
   - Public Key

## Project Structure

```
src/
├── components/
│   ├── navigation.jsx      # Smart navigation with cross-page routing
│   ├── header.jsx          # Hero section
│   ├── about.jsx           # About section
│   ├── features.jsx        # Features showcase
│   ├── blog.jsx            # Blog listing page
│   ├── blog-detail.jsx     # Individual blog post pages
│   ├── Team.jsx            # Team section
│   └── contact.jsx         # Contact form
├── data/
│   └── data.json           # All website content and blog posts
├── App.jsx                 # Main application with routing
└── index.jsx              # Application entry point

public/
├── css/                    # Stylesheets
├── img/                    # Images and assets
└── index.html              # HTML template
```

## URL Structure

- **Home**: `/`
- **About**: `/#about`
- **Features**: `/#features`
- **Team**: `/#team`
- **Contact**: `/#contact`
- **Blog Listing**: `/blog`
- **Individual Blog Posts**: `/blog/[post-title]`

## Performance Optimizations

- **Code Splitting**: Blog routes are loaded on-demand
- **Optimized CSS**: Minimal, efficient styling
- **Clean HTML**: Semantic markup for better SEO
- **Responsive Images**: Mobile-optimized media loading
- **Efficient Routing**: Client-side navigation for fast page loads

## Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

## Deployment

The application is ready for deployment on any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Heroku

### Build for Production
```bash
yarn build
# or
npm run build
```

The `build` folder contains the optimized production-ready application.

## Like this project?
<a href="https://dietello.com/">Book Now!</a>

## Credits

##### Dinesh Kota

---

**Version**: 2.0
**Last Updated**: November 2024
**License**: Private