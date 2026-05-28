# myMedVia Lumbar Disc Herniation Treatment Landing Page

Documentation for the myMedVia medical tourism landing page. Built with GitHub Pages + Jekyll.

## Table of Contents

- [Project Overview](#project-overview)
- [Quick Start](#quick-start)
- [Directory Structure](#directory-structure)
- [Content Management](#content-management)
- [Configuration](#configuration)
- [Customization](#customization)
- [Deployment](#deployment)
- [SEO \& Marketing](#seo--marketing)
- [Troubleshooting](#troubleshooting)

---

## Project Overview

### Description

This is a Jekyll-based static landing page for myMedVia, a cross-border medical tourism service connecting international patients with spine surgeons in China. The site focuses on lumbar disc herniation treatment information, cost comparisons, patient testimonials, and contact forms.

### Features

- Responsive landing page with treatment information
- FAQ system with accordion UI (Alpine.js)
- Patient testimonials carousel
- Cost comparison tables
- Schema.org structured data for SEO
- Multi-language ready architecture
- CI/CD with GitHub Actions
- Jekyll SEO plugin integration
- Sitemap and RSS feed generation

---

## Quick Start

### Requirements

- **Ruby**: 2.7+ (check with `ruby -v`)
- **Bundler**: 2.0+ (check with `bundle -v`)
- **Git**: For version control

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/mymedvia/lumbar-disc-herniation-site.git
   cd lumbar-disc-herniation-site
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Start local server**
   ```bash
   bundle exec jekyll serve
   ```

4. **Open in browser**
   Navigate to `http://localhost:4000`

### Build for Production

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

The production build outputs to `_site/` directory.

---

## Directory Structure

```
lumbar-disc-herniation-site/
├── _config.yml           # Jekyll configuration
├── _data/                # YAML data files
│   ├── faq.yml           # FAQ content
│   ├── navigation.yml    # Navigation structure
│   └── testimonials.yml  # Patient testimonials
├── _includes/            # Reusable HTML components
│   ├── components/       # UI components (cards, CTAs, etc.)
│   ├── contact-form.html
│   ├── footer.html
│   ├── header.html
│   ├── meta.html
│   └── schema-markup.html
├── _layouts/              # Page layouts
│   ├── blog.html
│   ├── default.html
│   ├── page.html
│   └── treatment.html
├── _pages/                # Static pages
│   ├── about.html
│   ├── contact.html
│   ├── faq.html
│   ├── index.html
│   └── services.html
├── _posts/                # Blog posts (Markdown)
├── _sass/                 # Sass source files
│   ├── _mixins.scss
│   ├── _variables.scss
│   └── main.scss
├── assets/
│   ├── css/main.css       # Compiled CSS
│   ├── images/
│   └── js/main.js
├── treatment/             # Treatment subdirectory (pages output here)
│   └── lumbar-disc-herniation/
│       ├── cost.html
│       ├── recovery.html
│       ├── symptoms.html
│       └── treatment-options.html
├── .github/workflows/     # CI/CD configuration
│   └── jekyll-ci.yml
├── Gemfile                # Ruby dependencies
├── Gemfile.lock
└── README.md
```

### Key Directories

| Directory | Purpose |
|-----------|---------|
| `_data/` | YAML data files for content (FAQ, navigation, testimonials) |
| `_includes/` | Reusable Liquid include files |
| `_layouts/` | HTML page templates |
| `_pages/` | Static pages using `page` layout |
| `_posts/` | Blog articles in Markdown format |
| `treatment/` | Treatment detail pages with `treatment` layout |
| `assets/` | Static assets (CSS, JS, images) |

---

## Content Management

### Editing Pages

Pages are stored in `_pages/` directory. Each page starts with YAML front matter:

```yaml
---
layout: default
title: "Page Title"
description: "Meta description for SEO"
permalink: /page-url/
---
```

**Available layouts:**
- `default` - Standard page layout
- `page` - Uses page layout (set as default in config)
- `blog` - Blog post layout
- `treatment` - Treatment detail pages

### Adding/Editing FAQ

Edit `_data/faq.yml`:

```yaml
- question: "Your question here?"
  answer: "Your answer here."
  category: "treatment"  # optional: treatment, cost, logistics, recovery
```

**Adding new FAQ:**
1. Open `_data/faq.yml`
2. Add a new item following the existing format
3. Save the file — the FAQ page auto-updates

### Adding/Editing Testimonials

Edit `_data/testimonials.yml`:

```yaml
- name: "John D."
  country: "United States"
  condition: "L4-L5 Microdiscectomy"
  story: "Your testimonial text here..."
  rating: 5
```

**Fields:**
| Field | Description |
|-------|-------------|
| `name` | Patient first name or initials |
| `country` | Patient's country |
| `condition` | Treatment received |
| `story` | Testimonial text |
| `rating` | Star rating (1-5) |

### Adding Blog Posts

Create a new file in `_posts/` with format `YYYY-MM-DD-title.md`:

```markdown
---
layout: blog
title: "Your Post Title"
date: 2026-07-01
category: Education
---

Your content here in Markdown format.
```

**Blog post front matter:**
| Field | Required | Description |
|-------|----------|-------------|
| `layout` | Yes | Must be `blog` |
| `title` | Yes | Post title |
| `date` | Yes | Publication date (YYYY-MM-DD) |
| `category` | No | Category for organization |
| `description` | No | Meta description |
| `image` | No | Open Graph image path |

---

## Configuration

### Main Configuration (_config.yml)

Key configuration sections:

```yaml
# Site Metadata
title: "myMedVia — Cross-Border Medical Acceleration"
description: >-
  Your site description here
url: "https://xxx.com"
baseurl: ""
lang: "en"

# Author Information
author:
  name: "myMedVia Medical Team"
  email: "contact@xxx.com"
  url: "https://xxx.com"

# Collections
collections:
  posts:
    permalink: /blog/:year/:month/:day/:title/
    output: true
  pages:
    permalink: /:name/

# Plugins
plugins:
  - jekyll-seo-tag
  - jekyll-sitemap
  - jekyll-feed
  - jekyll-minify
```

### Navigation Configuration

Edit `_data/navigation.yml` to modify the header navigation:

```yaml
- name: Treatments
  url: /treatment/
  dropdown:
    - name: Lumbar Disc Herniation
      url: /treatment/lumbar-disc-herniation/
      description: Fast, affordable treatment in China

- name: About
  url: /about/

- name: FAQ
  url: /faq/

- name: Contact
  url: /contact/
```

### Modifying Brand Information

1. **Site title/description**: Edit `_config.yml`
2. **Logo**: Replace `assets/images/favicon.svg`
3. **Contact info**: Edit `_config.yml` and update footer in `_includes/footer.html`

---

## Customization

### Color Theme

Colors are defined in `_sass/_variables.scss`:

```scss
$color-primary: #0066CC;
$color-primary-dark: #004C99;
$color-secondary: #00A86B;
$color-text: #333333;
$color-text-light: #666666;
$color-background: #FFFFFF;
$color-background-alt: #F5F7FA;
$color-border: #E0E4E8;
```

After editing, compile with:
```bash
sass _sass/main.scss assets/css/main.css
```

Or use a Sass watcher for development.

### Adding New Components

1. Create component file in `_includes/components/`
2. Use in pages with: `{% include components/component-name.html %}`

Example component structure:
```html
<div class="custom-component">
  <h3>{{ include.title }}</h3>
  <p>{{ include.description }}</p>
</div>
```

### Adding New Pages

1. Create `.html` file in `_pages/` or any directory
2. Add front matter:
   ```yaml
   ---
   layout: default
   title: "Page Title"
   permalink: /desired-url/
   ---
   ```
3. Add content in HTML or Markdown

---

## Deployment

### GitHub Pages Deployment

The repository includes GitHub Actions workflow (`.github/workflows/jekyll-ci.yml`) for automatic deployment.

**Deployment flow:**
1. Push to `main` branch
2. GitHub Actions triggers build
3. Site deploys to `gh-pages` branch
4. Available at `https://mymedvia.github.io/lumbar-disc-herniation-site/`

**Manual deployment:**
```bash
JEKYLL_ENV=production bundle exec jekyll build
# Upload _site/ contents to gh-pages branch
```

### Custom Domain Configuration

1. Create `CNAME` file in repository root with your domain:
   ```
   lumbar.myMedVia.com
   ```

2. Configure custom domain in repository Settings > Pages

3. Update `_config.yml`:
   ```yaml
   url: "https://lumbar.myMedVia.com"
   baseurl: ""
   ```

### CI/CD Workflow

The workflow (`.github/workflows/jekyll-ci.yml`) performs:
- Ruby setup
- Bundle install
- Jekyll build with production environment
- Deploy to GitHub Pages

To modify, edit `.github/workflows/jekyll-ci.yml`.

---

## SEO & Marketing

### Schema Markup

The site includes JSON-LD structured data via `_includes/schema-markup.html`:

**MedicalCondition** - For condition pages:
```yaml
---
schema_type: MedicalCondition
---
```

**FAQPage** - Auto-generated from `_data/faq.yml`:
```yaml
---
schema_type: FAQPage
---
```

**Custom breadcrumbs** - For nested pages:
```yaml
---
schema_type: BreadcrumbList
breadcrumbs:
  - "@type": "ListItem"
    "position": 1
    "name": "Home"
    "item": "https://xxx.com"
---
```

### Meta Tags

Meta tags are managed via `_includes/meta.html`. Page-specific meta can be set in front matter:

```yaml
---
title: "Page Title"
description: "Page description for SEO"
og_type: "website"  # or "article" for blog posts
image: "/assets/images/og-image.jpg"
---
```

### Sitemap

Automatically generated at `/sitemap.xml` by `jekyll-sitemap` plugin.

### RSS Feed

Available at `/feed.xml` via `jekyll-feed` plugin.

---

## Troubleshooting

### Common Issues

**Bundle install fails**
```bash
# Update Ruby gems
gem update --system
bundle update
```

**Build errors with plugins**
```bash
# Clear cache
bundle clean --force
bundle install
```

**Local server not loading**
```bash
# Check port availability
bundle exec jekyll serve --port 4001
```

**Sass not compiling**
```bash
# Install Sass directly
gem install sass
sass _sass/main.scss assets/css/main.css
```

### Development Tips

- Use `JEKYLL_ENV=development` for debug output
- Check `_site/` for compiled output
- Validate HTML at https://validator.w3.org/
- Test responsive design at multiple viewport sizes

### Plugin Documentation

- [jekyll-seo-tag](https://jekyll.github.io/jekyll-seo-tag/)
- [jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap)
- [jekyll-feed](https://github.com/jekyll/jekyll-feed)
- [jekyll-minify](https://github.com/digitalsparky/jekyll-minify)

---

## License

This project is proprietary content for myMedVia.