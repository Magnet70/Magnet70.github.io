# Clara Stone — GitHub Pages Author Website

A bespoke, responsive, static website for the Clara Stone pen name. Designed for GitHub Pages and the custom domain **clarastonebooks.com**.

## Preview now (without GitHub)

1. Unzip the package.
2. Open `index.html` in Chrome or Edge. The site uses relative links so all pages work locally.
3. The website has 6 main pages plus 13 individual book pages, responsive styling, navigation, accessibility features, SEO metadata, and optimized WebP cover images.

## Before publishing

**1. Verify ALL 13 Amazon links.** The 13 `link.amazon` URLs were supplied in order, and mapped to the 10 Shoreline and 3 Bluebird covers **in that same order**. Short URLs could not be independently resolved in this environment. Open each link in a browser and confirm that it reaches the correct book and contains valid Amazon Associates attribution. A book-by-book mapping is included in `AFFILIATE_LINK_REVIEW.csv` in this website folder. Edit the corresponding `books/<slug>/index.html` file if a destination needs correction. You may replace individual links directly in their `books/<slug>/index.html` files.

**2. MailerLite is embedded (live form).** The Reader Club page contains MailerLite's official Universal JavaScript snippet for account `2674318` and the embedded form `R6oLGc`. This script is loaded only on `reader-club/index.html`, and the subscription form is automatically updated when changes are made to the form in MailerLite. The form is styled by scoped CSS in `assets/css/styles.css`. The existing MailerLite reader-club automation and subscriber group must be verified in the MailerLite account. **reCAPTCHA is controlled by MailerLite**, not this website; to disable it, go to Forms → the embedded form → Edit → Settings → uncheck reCAPTCHA and save. Never remove or hide a required CAPTCHA only from the website source. Test a genuine signup on the published GitHub Pages site and verify the welcome email and five downloads. The backup link to `free.clarastonebooks.com` is preserved.

**3. Keep gifts private.** The real EPUB and PDF gifts are intentionally NOT in this public website. Only their promotional cover images appear. Your existing MailerLite welcome automation supplies access to them.

**4. Confirm author email.** Test `clara@clarastonebooks.com` and keep any required email MX/SPF/DKIM DNS records intact when pointing the website at GitHub Pages.

**5. Review privacy policy.** The `/privacy/` page is an editorial draft, not legal advice. Update it based on actual analytics, hosting and MailerLite configuration before launch.

**6. GitHub Pages policy.** Github states Pages should not be used primarily to facilitate commerce. This website is informational and has no checkout, but it includes affiliate book links and cannot be guaranteed to meet every interpretation of the rule. Review current GitHub Pages Terms before deployment.

**7. Add your website to Amazon Associates.** In Associates Central, register the public domain in the list of approved sites where you place affiliate links. Disclosures are already included on the bookshelf, each book detail page, footer, and privacy page; the official required statement appears in the footer.

## Publish (later, after your review)

- Create a public GitHub repository (for example `clarastonebooks.com`).
- Upload the **contents** of this folder to its root (with `index.html` at the root).
- In **Settings → Pages**, choose **Deploy from branch → main → / (root)**.
- Open the temporary `https://USERNAME.github.io/REPOSITORY/` address and test navigation, every cover, affiliate links and mobile view.
- Only after testing, configure the custom domain in Settings → Pages. GitHub will supply required DNS values for `clarastonebooks.com`. Keep mail and `free.` subdomain records intact. Enable **Enforce HTTPS** once the certificate is active.
- At that time, copy `CNAME.example` to `CNAME` (or let GitHub Settings manage it). Do **not** publish a premature `CNAME` file before DNS is ready.
- Search indexing should follow only after the real domain is live; `sitemap.xml` points to the planned final URL.

## Site structure

- Home (`index.html`)
- About Clara (`about/`)
- All books (`books/`) and 13 separate book detail pages
- Reader Club (`reader-club/`)
- Contact (`contact/`)
- Privacy & affiliate disclosures (`privacy/`)
- `404.html` custom not-found page

## Built with

Vanilla HTML/CSS/JS, no build step or third-party JS framework. Fonts are requested from Google Fonts, with system fallbacks. The author-provided logo and book/gift covers were optimized to WebP.

Copyright: Original book cover art and author logo are supplied by the site owner.
