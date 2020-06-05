# TYPESCRIPT-WEBPACK-QUICKSTART

A Simple project configuration for **typescript** + **webpack**. (tsconfig.json, webpack.config.js, package.json)

### Use
```console
git clone https://github.com/itskass/typescript-webpack-quickstart
cd typescript-webpack-quickstart
npm install .
```

### Run
```console
// to build your bundle.js:
npm run build
// to build and rebuild bundle.js if files change:
npm run watch
```

### Imports
Optionally you can use `@` to reference the `src/` folder in in your imports.

`bar.ts` can be imported from this example project structure:
```
src/
- index.ts
- foo/
    - bar.ts
```
Using `import Bar from "@/foo/bar"`

