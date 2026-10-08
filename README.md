# WF-DS-Test
Test for UXDesign/Dev/Claude workflow

## Homepage Intro module

Intro copy module with a primary button, built from the Figma library
**Wildfire DS-Claude test** (Onest type, `Buttons` component set, Global Tokens).

| File | Purpose |
| --- | --- |
| `styles/tokens.css` | Color, spacing and type tokens mirrored from the Figma variables/text styles |
| `components/button/button.css` | `Buttons` → Type=Primary, Light (default) and Dark (`.wf-btn--dark`), all states |
| `components/homepage-intro/homepage-intro.css` | Module layout: stacked on mobile, two columns from 1024px |
| `components/homepage-intro/homepage-intro.html` | Markup snippet |
| `assets/icons/send.svg` | Button icon exported from the library |
| `index.html` | Demo page |

Preview: `python3 -m http.server` then open http://localhost:8000.
Figma reference: page **Homepage Intro** in the Wildfire-DS-Claude-test file.
