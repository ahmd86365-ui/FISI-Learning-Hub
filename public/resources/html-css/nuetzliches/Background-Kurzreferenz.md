# CSS - Background Kurzreferenz

## 1. Grundlegende Background-Properties

### `background-color`

Setzt die Hintergrundfarbe.

```css
div {
  background-color: lightblue;
}
```

---

### `background-image`

Legt ein Hintergrundbild fest.

```css
div {
  background-image: url("bild.jpg");
}
```

Mehrere Bilder sind möglich:

```css
div {
  background-image: url("top.png"), url("bottom.png");
}
```

---

### `background-repeat`

Bestimmt, ob und wie sich das Bild wiederholt.

```css
div {
  background-repeat: no-repeat;   /* kein Wiederholen */
  background-repeat: repeat;      /* Standard */
  background-repeat: repeat-x;    /* nur horizontal */
  background-repeat: repeat-y;    /* nur vertikal */
}
```

---

### `background-position`

Position des Hintergrundbildes.

```css
div {
  background-position: center;
  background-position: top right;
  background-position: 50% 20%;
}
```

---

### `background-size`

Größe des Hintergrundbildes.

```css
div {
  background-size: cover;   /* füllt komplett */
  background-size: contain; /* komplett sichtbar */
  background-size: 200px 100px;
}
```

---

### `background-attachment`

Scrollverhalten des Hintergrunds.

```css
div {
  background-attachment: scroll; /* Standard */
  background-attachment: fixed;  /* bleibt stehen */
  background-attachment: local;  /* scrollt mit Inhalt */
}
```

---

### `background-origin`

Startpunkt für Positionierung.

```css
div {
  background-origin: padding-box;
}
```

Optionen:

* `border-box`
* `padding-box` (Standard)
* `content-box`

---

### `background-clip`

Begrenzt, wo der Hintergrund sichtbar ist.

```css
div {
  background-clip: content-box;
}
```

---

# 2. Shorthand: `background`

Wird am häufigsten benutzt wenn man Hintergrundbilder / Farbverläufe nutzt oder Kombination aus diesen.

Alle Eigenschaften in einer Zeile:

```css
div {
  background: lightblue url("bild.jpg") no-repeat center / cover;
}
```

Reihenfolge (flexibel, aber typisch):

```
color image repeat position / size attachment origin clip
```

---

## 3. Farbverläufe (Gradients)

### Linear Gradient

```css
div {
  background: linear-gradient(to right, red, blue);
}
```

---

### Radial Gradient

```css
div {
  background: radial-gradient(circle, red, yellow);
}
```

---

### Mehrere Farben

```css
div {
  background: linear-gradient(to right, red, orange, yellow, green);
}
```

---

## 4. Mehrere Hintergründe kombinieren

```css
div {
  background-image:
    url("overlay.png"),
    url("background.jpg");

  background-position: center, top left;
  background-repeat: no-repeat, repeat;
}
```

---

## 5. Transparenz & Effekte

### Mit RGBA

```css
div {
  background-color: rgba(0, 0, 0, 0.5);
}
```

---

### Mit `opacity` (wirkt auf alles!)

```css
div {
  opacity: 0.5;
}
```

---

## 6. Background mit festen Layouts

### Fullscreen Background

```css
body {
  background: url("bg.jpg") no-repeat center center fixed;
  background-size: cover;
}
```

---

### Pattern / Texture

```css
div {
  background-image: url("pattern.png");
  background-repeat: repeat;
}
```

---

## 7. Fortgeschrittene Tricks

### Parallax-Effekt

```css
div {
  background-image: url("bg.jpg");
  background-attachment: fixed;
  background-size: cover;
}
```

---

### Verlauf + Bild kombinieren

```css
div {
  background:
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url("bild.jpg");
}
```

---

### Hintergrund nur für Text sichtbar

```css
h1 {
  background: linear-gradient(red, blue);
  -webkit-background-clip: text;
  color: transparent;
}
```

---

## 8. Wichtige Werte im Überblick

| Property    | Wichtige Werte                        |
| ----------- | ------------------------------------- |
| repeat      | repeat, no-repeat, repeat-x, repeat-y |
| size        | cover, contain, auto                  |
| position    | center, top, left, %, px              |
| attachment  | scroll, fixed, local                  |
| clip/origin | border-box, padding-box, content-box  |

---

## 9. Best Practices

* Nutze `background-size: cover` für Hero-Sections
* Kombiniere Gradients für bessere Lesbarkeit
* Verwende mehrere Backgrounds für Overlays
* Achte auf Performance bei großen Bildern
