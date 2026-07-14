# Implementation Plan: Taking Your Website Live (Zero Hosting Cost & Budget Domain)

This plan outlines how to make your website public, link it to your custom domain from **Spaceship**, optimize it for search engines, and index it on Google Search so it appears in search results—keeping the hosting cost at **₹0** and the domain cost as low as possible.

---

## 💰 Cost Breakdown (in INR)

| Component | Provider | Cost (INR) | Duration |
| :--- | :--- | :--- | :--- |
| **Hosting** | Vercel (Hobby Plan) | **₹0 (Free)** | Lifetime |
| **SSL Certificate** | Vercel (Automatic HTTPS) | **₹0 (Free)** | Lifetime |
| **Domain** | Spaceship | **~₹100 - ₹300** (depends on TLD like `.in`, `.xyz`, or promo code) | 1 Year |
| **Google Indexing** | Google Search Console | **₹0 (Free)** | Lifetime |
| **Total Startup Cost** | | **~₹150 - ₹300** | |

---

## 📋 Phase 1: Deploy to Vercel (Free Hosting)

Since you are using Next.js, **Vercel** is the best hosting platform. It is 100% free for personal/hobby projects and offers premium performance.

1. **Push Code to GitHub**:
   - You have already pushed the latest working code to your GitHub repository `Kanishkp19/clinic`.
2. **Import Project to Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
   - Click **Add New** → **Project**.
   - Import your `clinic` repository.
3. **Configure & Deploy**:
   - Vercel automatically detects Next.js.
   - Leave the build settings as default.
   - Click **Deploy**. Within 2 minutes, your site will be live on a free `vercel.app` subdomain (e.g., `clinic-theta-ruddy.vercel.app`).

---

## 🌐 Phase 2: Buy & Link Domain from Spaceship

Spaceship is currently one of the cheapest domain registrars.

### Step 1: Buy the Domain
1. Go to [Spaceship.com](https://www.spaceship.com).
2. Search for your desired domain name (e.g., `omhomeopathicclinic.in`, `drsaurabhshukla.xyz`, or `omhomeopathic.in`).
   - *Tip*: `.in` domains or promo-based extensions like `.xyz`, `.top`, or `.icu` offer the absolute lowest initial registration pricing (often less than ₹100-₹200).
3. Purchase the domain. **Do not buy any paid add-ons** like web hosting, premium DNS, or email hosting. Spaceship includes free domain privacy (WHOIS protection) by default.

### Step 2: Link Domain on Vercel
1. Log in to your Vercel dashboard, select your project, and go to **Settings** → **Domains**.
2. Type in your purchased domain (e.g., `omhomeopathicclinic.in`) and click **Add**.
3. Vercel will prompt you to set up two DNS records.

### Step 3: Configure DNS on Spaceship
1. Log in to your Spaceship account and go to your **Domain Manager**.
2. Select your domain and go to **Advanced DNS** or **DNS Settings**.
3. Add the following two records (remove any existing default parking records):

| Type | Host/Name | Value/Points to | TTL |
| :--- | :--- | :--- | :--- |
| **A Record** | `@` (root) | `76.76.21.21` (Vercel IP) | Automatic / 30 min |
| **CNAME** | `www` | `cname.vercel-dns.com` | Automatic / 30 min |

4. Save the changes. It can take between 10 minutes to 2 hours for the DNS settings to update globally. Vercel will automatically generate a free SSL (HTTPS) certificate once DNS resolves.

---

## 🔍 Phase 3: SEO Optimization & Google Indexing (Google Search)

Just having a live website doesn't mean it will show up on Google Chrome search results immediately. Google needs to crawl and index your site.

### Step 1: Add SEO Metadata
Your Next.js app has a `layout.jsx` which contains site metadata. Let's make sure it contains localized, highly relevant keywords that patients search for in Varanasi (e.g., "Best homeopath in Varanasi", "Dr Saurabh Kumar Shukla", "Homeopathic clinic Khalispur").

We will add a dynamic `sitemap.xml` and a `robots.txt` file to your project. This tells Google exactly where all your pages are.

### Step 2: Register on Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console).
2. Sign in with your Google Account.
3. Click **Add Property** and enter your custom domain name (e.g., `omhomeopathicclinic.in`).
4. **Verification**: Select the DNS TXT record method. Google will give you a text string (e.g., `google-site-verification=...`).
5. Copy this string, go back to your **Spaceship DNS settings**, and add a new record:
   - **Type**: `TXT`
   - **Host/Name**: `@`
   - **Value**: (paste the google site verification string)
6. Go back to Search Console and click **Verify**.

### Step 3: Submit Sitemap
Once verified, in Google Search Console, go to **Sitemaps** on the left menu, enter `sitemap.xml` in the submission box, and click **Submit**. Google will queue your site for indexing. This usually takes 1 to 4 days to process, after which searching for "Om Homeopathic Clinic Varanasi" on Google Chrome will show your website.
