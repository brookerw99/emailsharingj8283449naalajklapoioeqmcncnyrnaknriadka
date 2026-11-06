# Next.js 15 – Automatic PDF Download with Dynamic Email Route

This App Router project automatically downloads `public/document.pdf` when a visitor opens either:

- `/` (original homepage behavior)
- `/john%40gmail.com` (dynamic email route: `app/[useremail]/page.tsx`)

The browser sends a request to `/api/download`, which serves the PDF with an attachment header. The dynamic page checks that its URL segment looks like an email address and shows it in the page. The email is **not** proof of a user's identity and is not used to authorize access.

## Run

```bash
npm install
npm run dev
```

Then visit:

- http://localhost:3000
- http://localhost:3000/john%40gmail.com

Use `%40` instead of `@` when constructing email URLs. Both pages include a manual download link in case browser settings block automatic downloads.

## Replace the PDF

Replace `public/document.pdf` with your real PDF, or change the filename in `app/api/download/route.ts`.

## Important

- Anyone with the URL can retrieve this PDF; it is public content.
- Email addresses in URLs may be logged by browsers, proxies, analytics, and servers. Avoid using them for sensitive workflows.
- Browsers control the final download location and may block downloads without a direct click.
