# My fancy app

- readme.md => Dokumentation für die Applikation
  - wie setze ich meine Applikation auf (development)
  - was gibt es zu beachten
  - Konventionen
- .gitignore => was nicht ins repo soll/muss z.B. node_modules
- package.json => zentrale Beschreibungsdatei
- package-lock.json => fixiert alle Abhängigkeiten + Prüfsumme für alle Pakete

## Setup

- npm init -y => erzeugt package.json
- npm install express => installiert express

NPM lädt das Paket von npmjs.com herunter
entpackt das Paket nach node_modules/express
trägt die Abhängigkeit in die package.json ein
trägt die Abhängigkeit und alle ihre Abhängigkeiten in die package-lock.json ein

- package.json: "type": "module" => aktiviert das ECMAScript Modulsystem
- package.json: "scripts": {"start": "node index.js"}
- index.js: Einstiegsdatei in die Applikation

## Versionskontrolle

Alle Dateien und Verzeichnisse **außer** dem node_modules-Verzeichnis werden committed!
