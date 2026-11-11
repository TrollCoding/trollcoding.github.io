# trollcoding.github.io

TrollCoding's website, served by GitHub Pages at <https://trollcoding.github.io> (Settings → Pages:
deploy from the `main` branch, root). Plain HTML and CSS, no build step: edit a page, push, and
it's live a minute later.

- `index.html`: the studio's home page (hero, products, how we work, the studio, contact).
- `troll-memory/`: Troll Memory's page and its privacy policy (`privacy.html`, the URL in the Play
  Console). The policy must match the game's Data safety form; update its date when it changes.
- `es/`: the Spanish site, a full copy of the English pages (`es/index.html`,
  `es/troll-memory/index.html`). The EN | ES switch in the header links each page to its twin,
  and each page lists both in `<link rel="alternate" hreflang>` tags, so search engines serve the
  right one. **When you change a page, change its twin too.** The privacy policy stays one page
  with both languages (its URL is in the Play Console); there the switch jumps to `#en` / `#es`.
- `404.html`: the "Wrong card." page GitHub Pages serves for missing URLs.
- `assets/`: the shared stylesheet (the game's colors), `site.js` (the trailer player), the social
  preview images (`og-image.jpg`, `og-image-es.jpg`, 1200×630), the Google Play badges
  (`badges/`) and the heading font.
- The logo, the horned terminal: `assets/brand/trollcoding-icon.jpg` is the 1024×1024 original;
  every other size is cut from it. `logo.png` (128×128, transparent) is the header and footer mark,
  `favicon.png` (64×64, dark rounded tile) the browser tab icon, `apple-touch-icon.png` (180×180)
  the iPhone home screen icon and `icon-512.jpg` the logo search engines see (structured data).

Every page repeats the same header and footer markup (in English or Spanish); when you change one,
change them all.

## Links

- Google Play: <https://play.google.com/store/apps/details?id=com.trollcoding.trollmemory> (the
  Spanish pages add `&hl=es`). The badges in `assets/badges/` are Google's official ones, only
  trimmed of their transparent margin; Google's brand guidelines don't allow changing them.
- Trailers on YouTube (@TrollCoding): English `DE82EeKrg0M`, Spanish `e8Bn2h7HJXk`. The page shows
  a self-hosted poster (`troll-memory/img/trailer.jpg`) that links to YouTube; on click, `site.js`
  swaps in YouTube's privacy-enhanced player (`youtube-nocookie.com`).

## Privacy

The images come from the game's repo (`designs/store/`), resized for the web. The one web font,
Bricolage Grotesque, is self-hosted in `assets/fonts/` (SIL Open Font License, `OFL.txt`). So the
site makes no third-party requests and sets no cookies: no analytics, no CDNs. The one exception is
a visitor pressing play on a trailer, which loads YouTube's player (the page says so under it).

## Previewing locally

The pages use root-relative links (`/assets/...`), so open them through a local server rather than
as files, from the repo's root:

```sh
npx http-server -p 8123 -c-1
```

Then open <http://localhost:8123>.
