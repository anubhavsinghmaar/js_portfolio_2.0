# Jahanvi Sharma

Portfolio site for Jahanvi Sharma, rebuilt from her Claude Design export as plain HTML and CSS. No framework, no JavaScript, no dependencies.

## Files

```
public/                    everything the site serves
  index.html               the page
  404.html                 shown for any address that does not exist
  assets/css/styles.css    all styles
  assets/fonts/            Instrument Sans and Cabinet Grotesk, self hosted
  favicon.svg, favicon.ico, apple-touch-icon.png
  og-image.png             preview image for shared links
netlify.toml               build, publish folder and headers
```

## Preview locally

Open `public/index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000 --directory public
```

## Deploy on Netlify

1. In Netlify, import an existing project from GitHub and select `js_portfolio_2.0`.
2. Leave the build settings alone. Netlify reads them from `netlify.toml`: it copies `public/` to `dist/`, writes the site address into the link preview tag, and publishes `dist/`.
3. Deploy. Every push to `main` deploys again.

If you add a custom domain later, redeploy once so the link preview uses the new address.

## Still to fill in

These placeholders come from the design and are kept as they are:

- **Email and social link.** `[FILL email]` and `[FILL social link]` appear twice in `index.html`: in the Contact section and in the footer. Replace the text with a link, for example `<a href="mailto:hello@example.com">hello@example.com</a>`.
- **Project media.** Featured work has six striped frames marked `[FILL]`. Inside a `.media` frame, replace the `<span class="media__label">` with an `<img>`, `<video>` or `<iframe>`. It fills the 16:9 frame automatically.
- **Resume.** Save the PDF as `public/assets/jahanvi-sharma-resume.pdf`, then delete `hidden` from the Download resume button.

## Differences from the design export

The export only contains the home page. Its links go to 13 more pages (Work, Tools, About, one per company and one per skill) that were not included, so for now:

- Work, Tools and About in the header, and the footer links, scroll to the matching section.
- Company names, skill pills and tool pills are plain text instead of links.
- "See all nine projects", "How I use them" and "Read the longer version" are in the HTML with `hidden`. Delete `hidden` once their pages exist.
- The Numer card stays hidden, as in the design's default setting. Delete `hidden` on it to show a sixth card.

Everything else matches the export: layout, type, colours, spacing and the load animation.

## Credits

- [Instrument Sans](https://github.com/Instrument/instrument-sans) by The Instrument Sans Project Authors, SIL Open Font License 1.1.
- [Cabinet Grotesk](https://www.fontshare.com/fonts/cabinet-grotesk) by Indian Type Foundry, free under the [ITF Free Font License](https://www.fontshare.com/terms).
