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
