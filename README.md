# DrGodly

DrGodly is a full-stack health and wellness platform specializing in personalized weight loss programs using GLP-1 medications.

Production domain: [https://www.goodhealth247.com](https://www.goodhealth247.com)

## Overview

This project is built with Next.js 15 (App Router), TypeScript, Tailwind CSS, Prisma (PostgreSQL), Better Auth, and Razorpay.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Deployment Notes

For production deployment on `www.goodhealth247.com`, set:

```text
BETTER_AUTH_URL=https://www.goodhealth247.com
NEXT_PUBLIC_APP_URL=https://www.goodhealth247.com
```

Update Google OAuth authorized redirect URIs to include:

```text
https://www.goodhealth247.com/api/auth/callback/google
https://goodhealth247.com/api/auth/callback/google
```
