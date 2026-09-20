# Jahanvi Sharma

Portfolio site for Jahanvi Sharma, rebuilt from her Claude Design export as plain HTML and CSS. No framework and no dependencies; the only script runs the Featured work carousel.

## Files

```
public/                       everything the site serves
  index.html                  home
  company/18five/index.html   18Five Creative Solutions, with its three client groups
  work/hoppup/index.html      HoppUp, the role page
  work/numer/index.html       Numer, the campaign page
  work/vera/index.html        Vera with CGAPP, the role page
  404.html                    shown for any address that does not exist
  assets/css/styles.css       all styles
  assets/js/carousel.js       buttons and progress bar for the Featured work carousel
  assets/fonts/               Instrument Sans and Cabinet Grotesk, self hosted
  favicon.svg, favicon.ico, apple-touch-icon.png
  og-image.png                preview image for shared links
netlify.toml                  build, publish folder and headers
```

Every page is its own address, so any of them can be pasted into a message or an application: `/company/18five/`, `/work/hoppup/`, `/work/numer/`, `/work/vera/`. FashionTV has no page, by design.

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
- **Project stills.** The frames in Featured work link out to the videos on YouTube and Instagram, but still show the striped placeholder. Add an `<img>` inside a `.media` frame and it fills the 16:9 frame, with the play button and label staying on top. The hidden Numer card still has no link.
- **Resume.** Save the PDF as `public/assets/jahanvi-sharma-resume.pdf`, then delete `hidden` from the Download resume button.
- **Dates and capture months.** `[FILL]` sits in the Period row on the HoppUp and Vera pages, and under the HoppUp result. The build spec asks every number to carry the month it was captured.
- **Numer creator content.** Two empty frames on `/work/numer/` are waiting for creator posts.
- **Numer placement.** Listed as independent work, from the design. The build spec leaves open whether it was independent or an 18Five client.

## Differences from the design export

The export only contains the home page. Its links go to 13 more pages (Work, Tools, About, one per company and one per skill) that were not included, so for now:

- Work, Tools and About in the header, and the footer links, scroll to the matching section.
- Company names, skill pills and tool pills are plain text instead of links.
- "See all nine projects", "How I use them" and "Read the longer version" are in the HTML with `hidden`. Delete `hidden` once their pages exist.
- The Numer card stays hidden, as in the design's default setting. Delete `hidden` on it to show a sixth card.
- Company names in By company link to their own pages. The projects listed inside `/company/18five/` are plain text until the project pages exist.
- Featured work is a carousel rather than a grid of tiles. Cards keep the same widths the grid gave them: three across on a desktop, two on a tablet, one on a phone. It scrolls, swipes and snaps on its own, so it still works with scripting off; `carousel.js` adds the buttons, the progress bar and the arrow key steps.

Everything else matches the export: layout, type, colours, spacing and the load animation.

The build spec describes more routes than are built so far: a work grid at `/work`, the project pages, six skill pages, `/tools` and `/about`. Those are still to come, along with the `[FILL]` items above.

## Credits

- [Instrument Sans](https://github.com/Instrument/instrument-sans) by The Instrument Sans Project Authors, SIL Open Font License 1.1.
- [Cabinet Grotesk](https://www.fontshare.com/fonts/cabinet-grotesk) by Indian Type Foundry, free under the [ITF Free Font License](https://www.fontshare.com/terms).
