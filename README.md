# WF-DS-Test
Test for UXDesign/Dev/Claude workflow

## Homepage Intro module

Intro copy module with a primary button, built from the Figma library
**Wildfire DS-Claude test** (Onest type, `Buttons` component set, Global Tokens).

| File | Purpose |
| --- | --- |
| `styles/tokens.css` | Color, spacing and type tokens mirrored from the Figma variables/text styles |
| `components/button/button.css` | `Buttons` → Type=Primary, Light (default) and Dark (`.wf-btn--dark`), all states |
| `components/homepage-intro/homepage-intro.css` | Module layout: stacked on mobile, two columns from 1024px (64px gutters), 104px gutters from 1280px |
| `components/homepage-intro/homepage-intro.html` | Markup snippet |
| `assets/icons/send.svg` | Button icon exported from the library |
| `index.html` | Demo page |

Preview: `python3 -m http.server` then open http://localhost:8000.
Figma reference: page **Homepage Intro** (frames at 1440, 1280, 1024 and 390) in the Wildfire-DS-Claude-test file.

## Contact page

`contact.html` → `thank-you.html`, built from the Figma prototype page **Prototype — Centered Intro**
(frames "Desktop / 02 Contact", "Mobile / 02 Contact" and the "03 Thank you" screens).

| File | Purpose |
| --- | --- |
| `components/header/header.css` | Library "Main Menu" (1440 + mobile, with toggle menu) |
| `components/footer/footer.css` | Library "Footer" (Burnt) |
| `components/form/field.css` | Inputs, select and textarea styled after the library "Dropdown Menu Box" |
| `components/contact/contact.css` | Contact layout and thank-you confirmation |
| `scripts/site.js` | Mobile menu toggle; form validation then redirect to the thank-you page |
| `assets/logo/`, `assets/icons/` | Logo, menu, chevron and social icons exported from the library |

The form does not send data anywhere yet — hook `.contact-form` up to a real endpoint before launch.
