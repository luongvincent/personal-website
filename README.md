# Personal Portfolio Website

A fast, fully static personal portfolio built with React + Vite — builds to a `dist/` folder deployable anywhere.

---

## Editing your content

**Open `src/content.js` — that is the only file you ever need to edit.**

Every piece of text on the site (name, bio, jobs, projects, skills, links, footer) lives in one `CONTENT` object in that file. Search for `[` to jump to every placeholder and replace it with your real info.

| Field | Where in `src/content.js` |
| ----- | ------------------------- |
| Your name | `meta.name`, `hero.name`, `contact.footerNote` |
| Page title & SEO description | `meta.title`, `meta.description` |
| Your site URL | `meta.url` |
| GitHub / LinkedIn / email | `hero.links`, `contact.links`, `contact.email` |
| One-line professional title | `hero.title` |
| Tagline | `hero.tagline` |
| About paragraphs | `about.paragraphs` |
| Work experience | `experience` array |
| Projects | `projects` array |
| Skills | `skills` object (keys are group headings) |
| Education | `education` array |

**Resume:** Drop your PDF at `public/resume.pdf`. The nav will link to `/resume.pdf` automatically. Set `nav.resumeUrl` to `""` to hide the button.

**Favicon:** Replace `public/favicon.svg` with your own SVG or `.ico`.

**Accent color:** Open `src/index.css` and change `--accent` / `--accent-hover` at the top of `:root`.

---

## Running locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

---

## Building for production

```bash
npm run build
```

This outputs a `dist/` folder of static files ready to deploy. Preview it locally first:

```bash
npm run preview
```

---

## Deploying

### Option A — Vercel (recommended, ~2 minutes)

1. Push your repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import your repo.
3. Vercel auto-detects Vite. Leave all settings as defaults.
4. Click **Deploy**. Your site is live at `your-project.vercel.app`.

**Custom domain on Vercel:**

1. Project dashboard → **Settings → Domains** → add your domain.
2. Add the two DNS records Vercel shows you (an `A` record and a `CNAME`) in your registrar.
3. DNS propagates in a few minutes. HTTPS is automatic.

---

### Option B — Netlify

1. Push your repo to GitHub.
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**.
3. Set **Build command** to `npm run build` and **Publish directory** to `dist`.
4. Click **Deploy site**. Your site is live at `random-name.netlify.app`.

**Custom domain on Netlify:**

1. **Site settings → Domain management → Add custom domain**.
2. Add a `CNAME` pointing your domain to your Netlify subdomain, and an `A` record for the apex domain (IPs shown in the UI).
3. HTTPS is automatic via Let's Encrypt.

---

### Option C — GitHub Pages (via GitHub Actions)

1. In `vite.config.js`, uncomment `base` and set it to your repo name:

   ```js
   base: '/your-repo-name/',
   ```

2. Create `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
   permissions:
     contents: read
     pages: write
     id-token: write
   jobs:
     deploy:
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with: { node-version: 20 }
         - run: npm ci
         - run: npm run build
         - uses: actions/upload-pages-artifact@v3
           with: { path: dist }
         - id: deployment
           uses: actions/deploy-pages@v4
   ```

3. In your repo → **Settings → Pages**, set Source to **GitHub Actions**.
4. Push to `main` — the workflow builds and deploys automatically.

**Custom domain on GitHub Pages:**

1. Create a `CNAME` file inside `public/` containing just your domain:

   ```text
   yourname.com
   ```

   Vite copies everything in `public/` to `dist/`, so the file ends up at the root.

2. Add these DNS records at your registrar:

   - Apex domain: four `A` records pointing to GitHub's IPs:

     ```text
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

   - `www` subdomain: a `CNAME` record pointing to `your-username.github.io`.

3. In repo **Settings → Pages**, enter your custom domain and check **Enforce HTTPS**.

---

## File structure

```text
personal-website/
├── public/
│   ├── favicon.svg       # Browser-tab icon; replace with your own
│   └── resume.pdf        # Drop your PDF here
├── src/
│   ├── content.js        # ← YOUR CONTENT LIVES HERE
│   ├── index.css         # All styles (change --accent for a new color)
│   ├── main.jsx          # React entry point
│   ├── App.jsx           # Root component; sets meta tags
│   └── components/
│       ├── Nav.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Experience.jsx
│       ├── Projects.jsx
│       ├── Skills.jsx
│       ├── Education.jsx
│       ├── Contact.jsx
│       ├── FadeIn.jsx    # Scroll-reveal wrapper
│       └── Icons.jsx     # SVG icon components
├── index.html            # Vite entry HTML
├── vite.config.js
├── package.json
├── .gitignore
└── README.md
```
