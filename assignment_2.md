1. What is `NPM`?
- npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.

Ref:
https://docs.npmjs.com/about-npm
https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/

2. What is `Parcel/Webpack`? Why do we need it?
Ref:
https://levelup.gitconnected.com/parcel-vs-webpack-2021-64c347bcb31
https://dev.to/adnanbabakan/comparison-webpack-or-parcel-which-one-is-better-43jo


3. What is `.parcel-cache`
- The .cache folder (or .parcel-cache in parcel v2) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode. I think committing it to git would be a bad idea - it would add a large number of (unnecessary) changes to your commit history, and it could easily get out-of-sync with the code that generated it.

Ref:
https://betterprogramming.pub/parcel-js-easy-javascript-bundling-ecddac0783f7

4. What is `npx` ?
- NPX: The npx stands for Node Package Execute and it comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.

Ref:
https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/

5. What is difference between `dependencies` vs `devDependencies`
- "dependencies" : Packages required by your application in production. 
- "devDependencies" : Packages that are only needed for local development and testing.

Ref:
https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file

6. What is Tree Shaking?
Ref:
https://webpack.js.org/guides/tree-shaking/

7. What is Hot Module Replacement?
- Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload.

Ref:
https://webpack.js.org/concepts/hot-module-replacement/

8. List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
-

9. What is `.gitignore`? What should we add and not add into it?
Ref:
https://www.freecodecamp.org/news/gitignore-what-is-it-and-how-to-add-to-repo/

10. What is the difference between `package.json` and `package-lock.json`
Ref:
https://www.knowledgehut.com/blog/web-development/package-json-vs-package-lock-json
https://medium.com/dlt-labs-publication/package-json-vs-package-lock-json-c8d5deba12cb

11. Why should I not modify `package-lock.json`?
-

12. What is `node_modules` ? Is it a good idea to push that on git?
-

13. What is the `dist` folder?
-

14. What is `browserlists`
- Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.

Ref:
https://browsersl.ist

15. Read about dif bundlers: vite, webpack, parcel

16. Read about: ^ - caret and ~ - tilda

17. Read about Script types in html (MDN Docs)