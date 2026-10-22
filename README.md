# FamFi — GitHub Pages version

This package is a static HTML, CSS, and JavaScript adaptation of the uploaded FamFi PHP/MySQL project, intended for hosting on GitHub Pages.

## Deploy to GitHub Pages
1. Extract this ZIP.
2. Create a GitHub repository (for example `famfi-budget`).
3. Upload `index.html`, `style.css`, `app.js`, and this README to the repository root.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
6. Wait for the Pages URL shown in Settings → Pages.

## Important limitations
GitHub Pages hosts static files only; it does not run PHP or MySQL. This version therefore stores demo profile, budgets, and expenses in the browser's `localStorage` on the current device/browser. It does not provide real accounts, family sharing/synchronization, server-side authentication, database backups, or the original server-side bill OCR. Browser data may be lost if site data is cleared. Do not store sensitive financial information in this demo.

For secure login, shared family accounts, cloud-synced data, or bill scanning/OCR, connect a backend such as PHP hosting with MySQL or another suitable backend service.
