# Welcome to your Lovable project

## Deploying to GoDaddy

This project is built with Vite and produces a static site in the `dist` folder.

### Prepare the deployment package

1. Install dependencies:

```bash
npm install
```

2. Build the app and create a `dist.zip` archive:

```bash
npm run deploy:godaddy
```

### Upload to GoDaddy

- Log in to your GoDaddy hosting account.
- Open the File Manager for your hosting plan.
- Upload `dist.zip` to the website root (usually `public_html` or `www`).
- Extract the archive so that the static files from `dist` are placed in the root folder.

### Notes

- If you are using GoDaddy cPanel hosting, upload and extract the `dist.zip` file from File Manager.
- If you are using GoDaddy Managed WordPress, you may need a different deployment method because that hosting is not designed for static Vite apps.

## Package scripts

- `npm run build` — build the production `dist` folder.
- `npm run deploy:godaddy` — build and package `dist` into `dist.zip` for GoDaddy deployment.
