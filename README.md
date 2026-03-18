# OrionPod Website

OrionPod — a lightweight desktop runtime for running AI models locally.

## Stack

- [Eleventy](https://www.11ty.dev/) v3 — Static site generator
- [Tailwind CSS](https://tailwindcss.com/) v4 — Styling
- [GitHub Pages](https://pages.github.com/) — Hosting

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) 22+
- [pnpm](https://pnpm.io/) 10+
- [just](https://github.com/casey/just) (optional)

### Setup

```sh
pnpm install
just dev
```

### Commands

| Command       | Description                      |
| ------------- | -------------------------------- |
| `just dev`    | Start dev server with hot reload |
| `just build`  | Production build to `_site/`     |
| `just format` | Format all files with Prettier   |
| `just lint`   | Check formatting                 |
| `just check`  | Lint + build                     |
