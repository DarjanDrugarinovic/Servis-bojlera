# Missing assets

For missing assets update Vite config with base (repository name):

```
export default defineConfig({
    ...,
    base: "/Servis-bojlera/",
});

```

package.json

```
 "scripts": {
    ...,
    "deploy": "gh-pages -d dist"
  },

```
