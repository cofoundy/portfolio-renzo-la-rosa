# QA Report: Renzo La Rosa

**Date:** 2026-02-27
**URL:** https://renzo-la-rosa.cofoundy.dev
**Tier:** Pro
**Status:** PASS

## Data Validation
- [x] Name matches source (Sheet: "Renzo La Rosa" = Page: "Renzo La Rosa")
- [x] Email matches source (Sheet: renzo.j.larosa@gmail.com = config.ts email, Cloudflare-encoded on page)
- [x] Title matches source ("Senior Data Scientist")
- [x] Companies verified: Zelis Healthcare, Deloitte & Touche LLP, Rolls-Royce Corporation
- [x] Education verified: Ball State University (MBA), Virginia Tech (MS), Purdue University (BS)
- [x] Stats verified: 8+ Years, $25M+ Revenue, AWS ML Certified
- [x] LinkedIn URL matches source
- [x] All content in English (client specified US corporate audience)
- [x] No hallucinated data detected

## Clean Deploy
- [x] No "Powered by" / "Made with" / "Built with" watermarks
- [x] No template links (View source, Fork this, GitHub links)
- [x] No placeholder text (Lorem ipsum, Your name here, [placeholder])
- [x] No "undefined" or "null" visible in content
- [x] No broken link text (# or javascript:void)
- [x] No Astro/Vercel badges visible

## Technical
- [x] CSS loads (HTTP 200) — /_astro/index.DK7LUa2y.css
- [x] Profile image loads (HTTP 200) — /profile.jpg
- [x] Favicon loads (HTTP 200) — /favicon.svg
- [x] Google Fonts loading (Libre Baskerville + Source Sans 3)
- [x] HTML lang="en" (correct for English portfolio)
- [x] Meta description present and accurate

## Section Completeness
- [x] Hero: Name, title, tagline, photo, CTA, social links, stats
- [x] About: Bio paragraph + 12 skills
- [x] Projects: 5 project cards with descriptions and tech tags
- [x] Experience: 3 roles with company, title, dates, bullet points
- [x] Education: 3 institutions with degrees and achievements
- [x] Footer: Name, title, social links, copyright 2026

## Issues Found
None

## Evidence
- Page HTML downloaded and verified against Google Sheet row and config.ts
- All HTTP status checks returned 200
