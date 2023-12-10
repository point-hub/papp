---
outline: deep
---

# File-Based Routing

VitePress uses file-based routing, which means the generated HTML pages are mapped from the directory structure of the source Markdown files. For example, given the following directory structure:

```
.
├─ .vitepress
├─ src
│  ├─ contribution-guide
│  ├─ docs
│  │  ├─ introduction.md
│  │  └─ installation.md
│  ├─ public
│  └─ index.md
└─ config.ts
```

The generated HTML pages will be:

```
index.md              -->  /index.html (accessible as /)
docs/introduction.md  -->  /docs/introduction.html (accessible as /docs/introduction)
docs/installation.md  -->  /docs/installation.html (accessible as /docs/installation)
```
