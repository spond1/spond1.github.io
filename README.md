# Sokret Pond — GitHub Pages site

This repository is a static Jekyll portfolio for [Sokret Pond](https://spond1.github.io). It is designed to publish directly from the `main` branch and the repository root on GitHub Pages.

## Update the site

- `index.md` contains the home page copy.
- `about.md`, `experience.md`, and `contact.md` contain the other page content.
- `_config.yml` contains the site title, description, navigation, and GitHub Pages URL settings.
- `_layouts` and `_includes` contain reusable page structure.
- `assets/css/style.css` contains the visual system.
- `assets/js/theme.js` contains the small theme-toggle enhancement.

Keep personal content in Markdown and presentation rules in CSS. Do not add a contact form backend or publish a direct email address without explicit approval.

## Publish with GitHub Pages

1. Push the repository to GitHub as `spond1/spond1.github.io`.
2. In **Settings → Pages**, choose **Deploy from a branch**.
3. Select `main` and `/ (root)`.
4. Save. GitHub Pages will build the Jekyll site automatically.

The configuration intentionally uses an empty `baseurl` because this is a GitHub user site.

## Preview locally

If Ruby and Bundler are installed:

```bash
gem install jekyll bundler
bundle init
bundle add jekyll
bundle exec jekyll serve --livereload
```

Then open `http://localhost:4000`. If you use GitHub Pages-specific plugins later, use the `github-pages` gem and commit the resulting `Gemfile` and lockfile.

## Quality checks

Before publishing, check the site at approximately 375px and 1280px widths, keyboard-tab through navigation and the theme toggle, and confirm that each navigation link works. Run Lighthouse against the deployed URL and aim for 90+ in Performance, Accessibility, Best Practices, and SEO.

The site uses semantic HTML, an accessible theme toggle, local-only theme preference storage, a sitemap, a favicon, canonical URLs, and responsive CSS. It does not include analytics or third-party trackers.