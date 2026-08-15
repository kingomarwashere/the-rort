# The Rort

An independent, fact-checkable exposé of how Australia **privatises the profit and socialises the
loss** — public monopoly assets sold or leased to private consortia, bought back with Australians'
own compulsory superannuation, and billed to the public forever on CPI-locked terms.

Live (intended): **rort.theradicalparty.com**

## What it is

A pure static, multi-page site served straight from Cloudflare's asset host — no Worker script.
Content lives as crawlable HTML in `public/`; only the shared nav/footer/consent-CTA chrome is
injected by `public/partials.js` so every page stays in sync.

Sibling site to `safety-theatre` — same Radical Party brand tokens (red `#FF2D55` on warm black
`#0B0B09`, Syne + IBM Plex Mono + Inter), same page architecture and CSS (`public/style.css`).

## Pages

Home · The Deal (`/ppp`) · Toll Roads (`/tolls`) · Your Own Money (`/super`) · Socialised Losses
(`/losses`) · Power Bills (`/power`) · The Sell-Off (`/assets`) · Sick PPPs (`/hospitals`) · The
Inflation Machine (`/inflation`) · The Ledger (`/ledger`) · Who Cashes In (`/cashes`) · The Secrecy
(`/secrecy`) · The World (`/world`) · What Works (`/solutions`) · Take Action (`/act`) · Sources
(`/sources`).

## Sourcing & method

Every figure is drawn from the public record — auditors-general, the AER/ACCC/IPART, budget papers,
company filings, parliamentary records and reputable reporting. Claims are tagged inline:

- `verified` — confirmed by a primary/official or multiple reputable sources
- `claim` — a government/company figure, rounded, or source-dependent
- `contested` — disputed, projection-based, or interpretation

Load-bearing caveats (also flagged on-page): Sydney's `$123bn` toll figure is a **projection to
2060**; per-road toll-escalation floors come from **company investor materials**, not the
confidential deeds; electricity "gold-plating" **largely predated** the network privatisations
(privatisation locked in the high asset base, it didn't cause the over-building); **IFM Investors is
NOT** an owner of the Port of Melbourne (it was in the losing bid); UK NAO's 40%/70% cost premiums
are **illustrative comparators**, not a blanket rate. See `/sources` for full citations.

This is public-record analysis and opinion — not legal or financial advice. Naming a fund, firm or
person as a beneficiary of a policy is not an allegation of wrongdoing.

## Local preview

```bash
cd public && python3 -m http.server 8899   # then open http://localhost:8899/
```

## Deploy

Cloudflare Worker-with-assets via Wrangler (`wrangler.jsonc` pins the `rort.theradicalparty.com`
custom domain):

```bash
CLOUDFLARE_API_TOKEN=… npx wrangler deploy
```

## Assets

Icons/OG generated from `public/favicon.svg` (an "R" with the red strike motif) via ImageMagick;
`public/img/og.png` is the 1200×630 social card. Fonts self-referenced from Google Fonts + a local
`public/fonts/` copy carried from the sibling site.
