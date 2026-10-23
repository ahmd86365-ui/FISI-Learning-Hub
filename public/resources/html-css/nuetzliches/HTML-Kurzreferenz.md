# HTML Kurzreferenz

## 1. Grundstruktur

### `<html>`

Wurzelelement des Dokuments

```html
<html></html>

oder z.B.:

<html lang="de"></html>
```

**Attribute:** `lang` für die benutzte Sprache

---

### `<head>`

Metadaten (nicht sichtbar im Browser). Der `<head>`tag ist der erste von zwei tags die innerhalb des `<html>`tags erlaubt sind.

```html
<head></head>
```

---

### `<body>`

Sichtbarer Inhalt. Der `<body>`tag ist der zweite von zwei tags die innerhalb des `<html>`tags erlaubt sind.

```html
<body></body>
```

---

### Die kleinste HTML-Seite der Welt (ohne Inhalt)

```html
<html>
  <head></head>
  <body></body>
</html>
```

---

## 2. Metadaten für den `<head>` Bereich

### `<title>`

Seitentitel (Browser-Tab)

```html
<title>Meine allererste HTML-Seite</title>
```

---

### `<meta>`

Metainformationen

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

**Attribute:** `charset`, `name`, `content`

---

### `<link>`

Externe Ressourcen

```html
<link rel="stylesheet" href="style.css" />
```

---

### `<style>`

CSS im Dokument

```html
<style>
  body {
    background: black;
  }
</style>
```

---

## 3. Struktur & Layout

### `<header>`, `<footer>`

Kopf- bzw. Fußbereich

```html
<header>Logo</header>
<footer>Copyright</footer>
```

---

### `<main>`

Hauptinhalt

```html
<main></main>
```

### Beispiel für einen guten Grundaufbau

```html
<html>
  <head></head>
  <body>
    <header>Navigation</header>
    <main>Hauptinhalt</main>
    <footer>Fußzeile</footer>
  </body>
</html>
```

---

### `<section>`

Thematischer Abschnitt

```html
<section></section>
```

---

### `<article>`

Eigenständiger Inhalt

```html
<article></article>
```

---

### `<aside>`

Nebeninhalt, z.B. für eine seitliche Navigation oder Zusatzinhalte

```html
<aside></aside>
```

---

### `<div>`

Generischer Container

```html
<div class="box"></div>
```

---

### `<span>`

Inline-Container

```html
<span style="color:red;">Text</span>
```

---

## 4. Text & Formatierung

### Überschriften `<h1>` – `<h6>`

```html
<h1>Titel</h1>
```

---

### `<p>`

Absatz

```html
<p>Text</p>
```

---

### `<br>`

Zeilenumbruch

```html
Text<br />Weiter
```

---

### `<hr>`

Trennlinie

```html
<hr />
```

---

### Textformatierung

| Tag        | Bedeutung                 |
| ---------- | ------------------------- |
| `<b>`      | fett                      |
| `<strong>` | wichtig (semantisch fett) |
| `<i>`      | kursiv                    |
| `<em>`     | betont                    |
| `<u>`      | unterstrichen             |
| `<mark>`   | markiert                  |
| `<small>`  | kleiner Text              |
| `<del>`    | gelöscht                  |
| `<ins>`    | eingefügt                 |
| `<sub>`    | tiefgestellt              |
| `<sup>`    | hochgestellt              |

Beispiel:

```html
<strong>Wichtig</strong>
```

---

## 5. Links & Navigation

### `<a>`

Link

```html
<a href="https://example.com">Link</a>

<a href="https://example.com" target="_blank">Link im neuen Fenster</a>
```

**Attribute:** `href`, `target`

---

### `<nav>`

Navigationsbereich

```html
<nav></nav>
```

---

## 6. Medien

### `<img>`

Bild

```html
<img src="bild.jpg" />

<img src="bild.jpg" alt="Beschreibung" width="200px" height="150px" />
```

## **Attribute:** `alt`, `width & height`, `src` ist zwingend notwendig

### `<video>`

Video

```html
<video controls src="video.mp4"></video>
```

## **Attribute:** `controls` ist ein Schlüsselwort um Stuerelemente anzuzeigen

### `<audio>`

Audio

```html
<audio controls src="sound.mp3"></audio>
```

---

### `<source>`

Medienquelle

```html
<source src="video.mp4" type="video/mp4" />
```

---

### `<iframe>`

Externe Seite einbetten

```html
<iframe src="https://example.com"></iframe>
```

---

## 7. Listen

### `<ul>` (ungeordnet)

```html
<ul>
  <li>Item</li>
</ul>
```

---

### `<ol>` (geordnet)

```html
<ol>
  <li>Item</li>
</ol>
```

---

### `<li>`

Listenelement

---

### `<dl>`, `<dt>`, `<dd>`

Definitionsliste

```html
<dl>
  <dt>HTML</dt>
  <dd>Markup-Sprache</dd>
</dl>
```

---

## 8. Tabellen

### `<table>`

```html
<table></table>
```

| Tag         | Zweck          |
| ----------- | -------------- |
| `<tr>`      | Zeile          |
| `<td>`      | Zelle          |
| `<th>`      | Kopfzelle      |
| `<thead>`   | Tabellenkopf   |
| `<tbody>`   | Tabellenkörper |
| `<tfoot>`   | Tabellenfuß    |
| `<caption>` | Titel          |

---

## 9. Formulare

### `<form>`

```html
<form action="/submit"></form>
```

---

### `<input>`

```html
<input type="text" />
```

**Typen:** `text`, `password`, `email`, `checkbox`, `radio`, `file`, `submit`

---

### Weitere wichtige Tags

| Tag          | Beschreibung      |
| ------------ | ----------------- |
| `<label>`    | Beschriftung      |
| `<textarea>` | Mehrzeiliger Text |
| `<select>`   | Dropdown          |
| `<option>`   | Auswahloption     |
| `<button>`   | Button            |
| `<fieldset>` | Gruppierung       |
| `<legend>`   | Titel             |

---

## 10. Skripte

### `<script>`

```html
<script src="app.js"></script>
```

---

### `<noscript>`

Fallback ohne JS

```html
<noscript>JS deaktiviert</noscript>
```

---

## 11. Semantische Spezial-Tags

| Tag            | Bedeutung         |
| -------------- | ----------------- |
| `<figure>`     | Bildgruppe        |
| `<figcaption>` | Bildbeschreibung  |
| `<time>`       | Datum/Zeit        |
| `<progress>`   | Fortschritt       |
| `<meter>`      | Messwert          |
| `<details>`    | Ausklappbar       |
| `<summary>`    | Titel für details |

---

## 12. Veraltete (deprecated) Tags (nur zur Info)

| Tag        | Ersatz  |
| ---------- | ------- |
| `<font>`   | CSS     |
| `<center>` | CSS     |
| `<big>`    | CSS     |
| `<strike>` | `<del>` |

---

## Häufige globale Attribute (für fast alle Tags)

```html
id="..." class="..." style="..." title="..." hidden data-*
```

---

## Fazit

- HTML hat **~100+ relevante Tags** die man aber nicht alle braucht
- Moderne Nutzung fokussiert sich auf:
  - semantische Struktur (`<main>`, `<section>`)
  - Accessibility
  - sauberes CSS statt alter Tags
