---
outline: deep
---

# Quickstart

## Install Bun Globally

```
npm install -g bun
```

## Install dependencies

```
bun install --frozen-lock
```

## Start Development

```
bun run docs:dev
```

The `docs:dev` command will boot up a local static web server that will serve at `http://localhost:5173`.

## Build and Test Locally

```
bun run docs:build
bun run docs:preview
```

The `docs:preview` command will boot up a local static web server that will serve the output directory .vitepress/dist at `http://localhost:4173`. You can use this to make sure everything looks good before pushing to production.
