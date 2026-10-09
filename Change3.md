# Change 3: Give the portfolio a clean, technology-focused visual system

## Goal
Present the existing portfolio in a clearer, more professional technology-site style while preserving its case-study content and career narrative.

## Requested direction — pending approval
- Use a clean, restrained visual system with a light neutral canvas, crisp dark text, and focused blue/cyan accents.
- Replace the current oversized editorial typography with more measured, readable type and clearer hierarchy.
- Proposed type pairing: Space Grotesk for headings, Inter for body copy, and IBM Plex Mono for small technical labels, with sensible fallbacks.
- Remove the field-notes visual treatment in favor of precise spacing, simple grids, and consistent cards and rules. Avoid stock photography and decorative clutter.

## Scope
- Restyle shared navigation, homepage, work index, case-study pages, about page, and contact page so the visual language is consistent throughout.
- Preserve the existing Jekyll structure, page content, facts, routes, navigation links, dark/light theme toggle, and case-study prominence.
- Make only the copy adjustments required for legibility or layout; do not add or infer portfolio facts.
- Exclude this planning file from the generated site.

## Constraints
- Keep the design clean, professional, accessible, and responsive.
- Maintain readable contrast, visible keyboard focus, and usable controls in both themes.
- Do not add unapproved personal imagery, stock imagery, phone numbers, or email details.
- Keep this change on its own branch and pull request. After the user reviews, comments, and merges, sync `main` and verify the published GitHub Pages site.

## Acceptance checks
- The visual style is clearly distinct from the previous field-notes design and reads as a polished technology-focused portfolio.
- Typography is consistent across pages, with a clear display/body/technical-label hierarchy and reliable fallbacks.
- The homepage, `/experience/`, all three case studies, `/about/`, and `/contact/` retain their content and function at desktop and mobile sizes.
- The theme toggle, keyboard focus, internal links, and fragments work correctly.
- `Change3.md` is absent from generated site output.
- Jekyll builds successfully and the site is checked in Replit Preview at desktop and mobile widths.
