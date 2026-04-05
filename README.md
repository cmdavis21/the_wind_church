# The Wind Church Website App

A full‑stack, multilingual, content‑driven church website built with **Next.js**, **Sanity CMS**, **Shopify**, and **AWS**.  
This application powers sermons, events, ministries, deep dives, media galleries, and ecommerce for The Wind Church.

## 🚀 Getting Started

```sh
pnpm install
cp env-development.txt .env
pnpm dev
```

Open http://localhost:3000 in your browser.

### Access the Sanity Studio

Visit http://localhost:3000/studio
Log in using the Sanity credentials assigned to this project.

## 🎨 Front‑end Technologies

- Next.js 14.2.30 — App Router, server components, ISR
- Tailwind CSS 3.4.1 — utility‑first styling
- Flowbite React 0.10.2 — UI components
- Next‑Intl 4.3.4 — internationalization (EN/ES)

## 🛠️ Back‑end / Server Technologies

- GraphQL Zeus 7.0.7 — typed Shopify and Sanity.io GraphQL client
- Sanity Client 7.10.0 — content mutations and sitemap building
- Next‑Sanity 10.0.1 — constructs internal project Sanity.io studio dashboard
- AWS SDK (S3 + SESv2) — media storage + email
- Google YouTube API 28.0.0 — sermon video integration

## 🌐 External Services

### Shopify (Ecommerce)

- Storefront + product management
- Admin: https://admin.shopify.com/store/the-wind-church

### Sanity.io (CMS)

- Manages sermons, events, deep dives, ministries, forms, etc.
- Dashboard: https://www.sanity.io/organizations/oEpnfTlkL/project/pyayajuh

### AWS (Infrastructure)

- S3 for media storage
- SES for email delivery
- Console: https://us-east-1.console.aws.amazon.com/console

### Google Cloud (YouTube API)

- Sermon videos integration
- Console: https://console.cloud.google.com/apis/dashboard?project=the-wind-church-org

### Vercel (Hosting)

- Pushing to main branch will initiate a build and redeployment
- Dashboard: https://vercel.com/cmdavis21s-projects/the-wind-church
