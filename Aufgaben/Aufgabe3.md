# Struktur

- Trenne die Account- von der Person-Klasse in jeweils eine eigene Datei
- Binde die Account-Klasse in die Applikation ein und erzeuge Instanzen
- Lagere die Request/Response-Handling-Funktion in eine Datei `controller.js` aus.
- Lagere die Datenhaltung Klasse `Model`in die Datei `model.js` aus.
  - das Model verfügt über eine private eigenschaft #accounts
  - erzeuge im Konstruktor 4 Accounts
  - erzeuge eine Methode `getAccounts`, die die Accounts zurückgibt
