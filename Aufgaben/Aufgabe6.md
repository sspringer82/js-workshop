# Frontend - Datensätze löschen

1. Füge einen Button zu jeder Zeile in der Tabelle ein
2. Registriere eine Callback-Funktion auf den Click des Buttons
3. Führe einen DELETE-Request im Click-Handler des Buttons aus, der den aktuellen Datensatz löscht
4. Nach erfolgreichem Löschen, entferne die gelöschte Zeile aus dem Frontend

```js
const element = document.querySelector('div');
element.remove();
```
