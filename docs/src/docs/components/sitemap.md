---
outline: deep
---

<script setup lang="ts">
import SitemapExample from './demo/sitemap/sitemap-example.vue'
</script>

# Sitemap

A sitemap is a list of pages of a web site within a domain.

There are three primary kinds of sitemap:

- Sitemaps used during the planning of a website by its designers
- Human-visible listings, typically hierarchical, of the pages on a site
- Structured listings intended for web crawlers such as search engines

## Examples

<!--@include: ./demo/sitemap/sitemap-example.md-->

## Sitemap API

### Interface

```ts
export interface ISitemap {
  title: string
  subtitle: string
  homepage: {
    link?: string
    name: string
    desc?: string
  }
  menu: {
    link?: string
    name: string
    desc?: string
    child?: {
      link?: string
      name: string
      desc?: string
      child?: {
        link?: string
        name?: string
        desc?: string
      }[]
    }[]
  }[]
}
```

### Props

| Name    | Type             | Default | Description  |
| ------- | ---------------- | ------- | ------------ |
| sitemap | object: ISitemap |         | Sitemap menu |
