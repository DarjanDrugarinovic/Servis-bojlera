# GitHub Pages Deploy

Deploy to Github pages via Github Actions

## Install gh-pages

```
npm i gh-pages
```

## Update package.json

```
 "scripts": {
    ...,
    "deploy": "gh-pages -d dist"
  },

```

## Update Vite.config.ts

For missing assets update Vite.config.ts with base (repository name):

```
export default defineConfig({
    ...,
    base: "/Servis-bojlera/",
});

```

## Define github workflow

Look at `.github\workflows\main.yml`

## On GitHub Pages Build and deployment

On GitHub Pages select:

1. Deploy from a branch
2. gh-pages /(root)
