# myrepos
Directory of my git projects

## GitHub Pages Portfolio

This repository includes a static portfolio site in `docs/` that you can host for free with GitHub Pages.

### Customize the grid
1. Edit `docs/projects.js` and replace the sample entries with your repositories. Each project accepts:
   - `name`: Display title.
   - `description`: Short blurb about the work.
   - `githubUrl`: Link to the repository (required).
   - `deployedUrl`: Optional live demo link.
   - `status`: `completed`, `in_progress`, or `planned` for filtering.
   - `deploymentStatus`: `healthy`, `unhealthy`, `unknown`, `unreachable` for the status indicator.
   - `image`: Relative path to a screenshot stored under `docs/assets/` (leave empty for the fallback icon).
   - `readmePreview` and `tags`: Optional extra context for searching.
2. Drop screenshots into `docs/assets/` and reference them from the `image` field.
3. Open `docs/index.html` in a browser (or run `python -m http.server --directory docs`) to preview locally.

### Publish on GitHub Pages
1. Push the repository to GitHub.
2. In the repo settings, open **Pages**.
3. Choose the `main` branch and the `/docs` folder, then save.
4. GitHub builds and publishes the site at `https://<your-user>.github.io/myrepos/`.

That's it—no Django server, database, or paid hosting required.
