# NailMart India Web Studio — SEO support files

This folder contains the static website files and basic technical SEO files.

## SEO files
- `sitemap.xml`: lists the canonical homepage at https://nailmartindia.com/
- `robots.txt`: allows crawling and points crawlers to the sitemap.
- `.gitignore`: excludes common local/editor/temporary files and environment secrets.
- `index.html`: has the page title, description, canonical URL and social-sharing metadata.

## Before publishing
1. Keep `index.html`, `styles.css`, `script.js`, `assets/`, `sitemap.xml`, `robots.txt`, and `.gitignore` in the repository root.
2. Commit and push the files to the GitHub Pages repository.
3. Check these URLs in a browser:
   - https://nailmartindia.com/sitemap.xml
   - https://nailmartindia.com/robots.txt
4. In Google Search Console, open Sitemaps and confirm the existing sitemap remains successful. Resubmit only if it is missing, has an error, or the URL changed.
5. Use URL Inspection for https://nailmartindia.com/ to check the indexed/canonical status.

Note: the website is a single-page site, so the sitemap lists the homepage only. Section anchors such as #services and #portfolio are not separate sitemap URLs.
