# Professional Web Studio — static website

This is a static HTML/CSS/JavaScript site. It does not need Flask, a database, Cloudinary, Brevo, or environment variables.

## Files
- `index.html` — page content and structure
- `styles.css` — responsive design
- `script.js` — mobile navigation and current year
- `assets/favicon.svg` — favicon

## Before publishing
1. Confirm the business identity/legal name used for invoices and agreements. Current visible brand is **Professional Web Studio — By NailMart India**.
2. Confirm whether `Moupriya Dey` should remain the enquiry contact and whether 9330482697 is the correct business contact.
3. The portfolio is intentionally an illustrative concept, not a claim of a client project. Add actual work only with the owner's permission.
4. Confirm offer validity, availability, tax wording, and support promises before public launch.
5. The page links WhatsApp to `+91 9330482697`. Verify the number is WhatsApp-enabled.

## Temporary preview using GitHub Pages
1. Create a **new public GitHub repository** such as `nailmart-web-studio`. Do not use or overwrite the e-commerce repository.
2. Upload the contents of this folder (so `index.html` is at the repository root). You can upload the ZIP contents via **Add file → Upload files**.
3. In repository **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/(root)`, then Save.
4. Wait for the Pages deployment to finish. GitHub will show a temporary address similar to `https://YOUR-USERNAME.github.io/nailmart-web-studio/`. Use the exact URL displayed by GitHub; do not guess it.
5. Test the temporary URL on desktop and mobile before changing GoDaddy DNS.

## Final domain migration — do not do this until the preview is approved
The e-commerce app is expected to remain at `shop.nailmartindia.com`. Preserve its CNAME (`shop` pointing to `karthikafutures-4gve.onrender.com`) and the existing TXT/email-related records.

When ready, configure `nailmartindia.com` as the custom domain for the GitHub Pages repository and follow the exact DNS records GitHub Pages displays for the account/repository. Then update only the required root (`@`) and `www` records in GoDaddy. Do not change nameservers or the `shop` record. The current root A record `216.24.57.1` and `www` CNAME point to the old Render app, so they will need a planned change at cutover. Keep a copy of the existing records before editing.
