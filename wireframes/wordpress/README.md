# Jackson Supply: WordPress design tokens

Starter files for a **block theme**, generated from the same token list as the Figma variables (file: *Jackson Supply Company Website Redesign*, collections prefixed `WP`).

| File | What it is |
|---|---|
| `theme.json` | Palette, spacing scale, fluid font sizes, font families, layout widths, shadows, element styles (headings, links, buttons) and a few core block defaults. |
| `styles/sections/section-inverse.json` | Section style for dark bands (footer, utility bar, account CTA). Matches the **Inverse** mode of the `WP Color` collection in Figma. |
| `styles/sections/section-subtle.json` | Light gray band (sub-search bar, gate banners). |

Font files are referenced from `assets/fonts/…`. Add the Inter (variable) and IBM Plex Mono woff2 files there, or register them through the Font Library.

## Figma variable → CSS custom property

Every Figma variable has its WEB code syntax set to the property WordPress generates:

| Figma collection | Example variable | CSS |
|---|---|---|
| WP Color (Light / Inverse) | `color/text/muted` | `var(--wp--preset--color--muted)` |
| WP Spacing | `spacing/40` | `var(--wp--preset--spacing--40)` |
| WP Typography & Layout (Desktop / Mobile) | `font/size/huge` | `var(--wp--preset--font-size--huge)` (fluid 31→46px) |
| WP Typography & Layout | `layout/wide-size` | `var(--wp--style--global--wide-size)` |
| WP Shape | `radius/md` | `var(--wp--custom--radius--md)` |
| WP Primitives (hidden) | `color/gray-700` | `var(--wp--custom--color--gray-700)` |

In Figma, switch a frame to the **Mobile** mode of `WP Typography & Layout` to preview the fluid minimums, and to the **Inverse** mode of `WP Color` to preview a `section-inverse` band.

## Components → blocks

| Figma component | WordPress |
|---|---|
| Button (Fill / Outline / Subtle, Small) | `core/button`: default, `is-style-outline`, custom `is-style-subtle`, custom `is-style-small` |
| Text link | `styles.elements.link` |
| Tag | `core/paragraph` + custom `is-style-tag` (`-success`, `-warning`, `-error`, `-solid`) |
| Chip | `core/button` + custom `is-style-chip` |
| Placeholder image | `core/image` / `core/cover` with aspect ratio 16/9, 4/3 or 1/1 |
| Form field, Checkbox / Radio, Choice card, Step | Gravity Forms (or WPForms) fields styled with these tokens; WordPress core has no form blocks |
| Search bar | `core/search` (button inside, text label) |
| Notice (Error / Success / Gate) | `core/group` + custom `is-style-notice-*` |
| Breadcrumbs | Yoast or Rank Math breadcrumbs block |
| Accordion item | `core/details` |
| Document row | `core/file` or a Resource CPT query-loop item |
| Site logo | `core/site-logo` + `core/site-title` + `core/site-tagline` |
| Nav item | `core/navigation-link` / `core/navigation-submenu` |
| Utility bar, Header | template part `header` |
| Footer | template part `footer` (`section-inverse`) |
| Mobile dock | template part `mobile-dock` (mobile only, sticky) |
| Branch card | Branch CPT + `core/query` → `core/post-template`; fields via block bindings or ACF |
| Product row | catalog query loop (WooCommerce B2B or Product CPT); price only when logged in |
| Category card / Brand tile / Quick task tile | patterns in `core/grid` / `core/columns` |
| Content card (Promo / News) | `core/query` post-template (Promo CPT, posts) |
| Section heading, Page header | patterns `section-heading`, `page-header` |

Custom block styles (`is-style-*`) need `register_block_style()` calls and a small stylesheet. Their values come from the tokens above.
