# JS Workshop

## Erwartungen

- JavaScript Advanced
- OOP!
- Ausblick auf Angular
- TypeScript
- JavaScript BigPicture (in strukturiert)
- jQuery?
- Node.js (serverseitiges JavaScript)
- Asynchronität

# Links

- https://nodejs.org/en/
- https://deno.land/
- https://dev.to/nickytonline/10-things-i-regret-about-nodejs-14m3
- https://bun.sh/
- https://www.ecma-international.org/wp-content/uploads/ECMA-262_13th_edition_june_2022.pdf
- https://developer.mozilla.org/en-US/
- https://eslint.org/
- https://github.com/airbnb/javascript
- Semantic Versioning: https://semver.org/lang/de/
- Lizenzen: https://choosealicense.com/
- Übersicht über Paketdownloadzahlen: https://npmtrends.com/
- https://prettier.io/
- Fake Daten Generator: https://fakerjs.dev/
- Objekte kopieren bzw. immutability
  - https://github.com/kolodny/immutability-helper => sehr leichtgewichtig, komische syntax
  - https://github.com/immerjs/immer => leichtgewichtig (JS Proxy), js syntax
  - https://immutable-js.com/ => schwergewichtig, neue Datentypen
- Testframeworks
  - https://mochajs.org/ => zusätzlich Assertion library wie https://www.chaijs.com/
  - https://jasmine.github.io/ => Batteries included
  - https://jestjs.io/
- https://rxjs.dev/guide/overview
- Bundler
  - https://webpack.js.org/
  - https://rollupjs.org/guide/en/
  - https://parceljs.org/
  - https://vercel.com/blog/turbopack
  - https://swc.rs/
  - https://esbuild.github.io/
  - https://vitejs.dev/

# Debugging im Browser

- Seite laden
- DevToosl öffnen (F12)
- in den Sources/Debugger Tab wechseln
- Breakpoint setzen (auf die Zeile klicken)
- Reload

# Debugging in Node.js

- `node --inspect-brk index.js`
- Browser öffnen (Chrome oder Edge): chrome://inspect
- Node-Prozess auswählen
- debuggen

# Modulsysteme

- ECMAScript-Modulsystem: import + export => DAS Modulsystem!
- CommonJS: require + module.exports => veraltet, nicht mehr nutzen (alter Node.js Standard)
- AMD: require + define => altes Modulsystem aus der dojo foundation

# NPM Scripts

- Standard Scripts (start, stop, reload...) => npm start
- NichtStandard Scripts (develop, etc) => npm run develop
- 3 Phasen: prephase, phase, postphase => prestart, start, poststart

# Aufsetzen

1. Code holen (z.B. Download ZIP oder git clone)
2. in das Verzeichnis mit der package.json wechseln
3. `npm install`, um alle Abhängigkeiten zu installieren
4. `npm start`, zum starten, `npm test`, um die Tests auszuführen
