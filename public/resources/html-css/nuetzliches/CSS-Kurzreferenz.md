# CSS Kurzreferenz

p {}
.class {}
#id {}

Selektoren

Immer: .klasse_xy p

nicht: p

## 1. Layout & Box-Modell

### `display`

Bestimmt das Layout-Verhalten eines Elements. Wir nutzen block, inline und inline-block um das Verhalten von Containern und Elementen zu steuern und zu verändern. Textelemente (z.B. `<b>` oder `<i>` ) sind inline Elemente. Alle Obercontainer wie: header, main, footer und z.B. div & p sind block Elemente.

**Wichtige Werte:**

- `block`
- `inline`
- `inline-block`
- `flex`
- `grid`
- `none`

**Beispiel:**

```css
div {
  display: flex;
}
```

---

### `width` / `height`

Größe eines Elements.

**Werte:**

- Pixel `px`, Prozent `%`, Viewport width `vw`, Viewport height `vh`, `auto`

```css
div {
  width: 100%;
  height: 200px;
}
```

---

### `margin`

Außenabstand.

**Varianten:**

- `margin: 10px;`
- `margin: 10px 20px;`
- `margin: top right bottom left;`

```css
div {
  margin: 10px 20px;
}
```

Margin hat eine Variante mit der ich alle 4 Abstände einstellen kann. In der Reihenfolge: oben, rechts, unten und links (im Uhrzeigersinn). Die Variante mit 2 Werten kombiniert oben-unten und der zweite Wert kombiniert links-rechts.

---

### `padding`

Innenabstand.

```css
div {
  padding: 15px;
}
```

Auch für padding funktioniert die selbe Logik wie beim margin mit 1 | 2 | 4 Werten.

---

### `border`

Rahmen eines Elements.

**Syntax:**

```css
border: width style color;
```

**Werte:**

- Styles: `solid`, `dashed`, `dotted`, `double`

```css
div {
  border: 2px solid black;
}
```

---

### `box-sizing`

Wie Größen und Abstände auf Container und Elemente wirken. Mit `box-sizing: border-box` wirkt padding und border nach _innen_ und eine Breite die man mit width setzt ist auch die wirkliche Breite des Elements.

**Werte:**

- `content-box`
- `border-box`

```css
div {
  box-sizing: border-box;
}
```

**Sehr wichtig:** Diesen 3-Zeiler nutzen wir _immer_ am Start unserer CSS-Datei. Ich nenne das gerne den "Mini Reset". Kann mit \* "auf alles" gewirkt werden.

Wir setzen damit _auf alle_ HTML Elemente die wir nutzen oder anzeigen die drei Werte.

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

---

## 2. Positionierung

### `position`

**Werte:**

- `static`
- `relative`
- `absolute`
- `fixed`
- `sticky`

```css
div {
  position: absolute;
  top: 10px;
  left: 20px;
}
```

---

### `top`, `right`, `bottom`, `left`

Positionierungswerte. Man nutzt immer nur einen Wert pro Richtung. Also nicht top _und_ bottom. Die Wahl ob man top oder bottom \_oder left / right benutzt, hängt von der sinnvollsten Kante ab, die als Referenz gilt.

```css
div {
  position: relative;
  top: 20px;
}
```

---

### `z-index`

Stapelreihenfolge in die Tiefe. Wird benutzt, wenn man Elemente z.B. mit `position: absolute` verschiebt und sicherstellen möchte das es immer über dem restlichen Inhalt erscheint.

```css
div {
  z-index: 10;
}
```

---

## 3. Farben & Hintergrund

### `color`

Textfarbe.

```css
p {
  color: red;
}
```

---

### `background`

**Optionen:**

- `background-color`
- `background-image`
- `background-size`
- `background-position`
- `background-repeat`

```css
div {
  background: url("bild.jpg") no-repeat center/cover;
}
```

---

### `opacity`

Transparenz (0–1).

```css
div {
  opacity: 0.5;
}
```

---

## 4. Text & Schrift

### `font-family`

```css
p {
  font-family: Arial, sans-serif;
}
```

---

### `font-size`

```css
p {
  font-size: 16px;
}
```

---

### `font-weight`

**Werte:**

- `normal`, `bold`, `100–900`

```css
p {
  font-weight: bold;
}
```

---

### `text-align`

**Werte:**

- `left`, `right`, `center`, `justify`

```css
p {
  text-align: center;
}
```

---

### `line-height`

```css
p {
  line-height: 1.5;
}
```

---

### `text-decoration`

**Werte:**

- `none`, `underline`, `line-through`

```css
a {
  text-decoration: none;
}
```

---

## 5. Flexbox

### `display: flex`

```css
.container {
  display: flex;
}
```

Display: flex gibt uns die Möglichkeit, mehrere Container - die ja normalerweise block Elemente sind - nebeneinander darzustellen. Display: flex wird auf einen Obercontainer angewand und wirkt _nur_ auf seine direkten Kinder, nicht auf Unter-Untercontainer.

Bezogen auf das Beispiel unten: Ein container innerhalb `<article>` würde nicht vom div.obercontainer "ge-flexbox'd" werden.

CSS:

```css
.obercontainer {
  display: flex;
}
.untercontainer {
  width: 50%;
}
```

HTML:

```html
<div class="obercontainer">
  <article class="untercontainer">Artikel 1</article>
  <article class="untercontainer">Artikel 2</article>
</div>
```

---

### `flex-direction`

**Werte:**

- `row`
- `column`

```css
.container {
  flex-direction: column;
}
```

---

### `justify-content`

Horizontale Ausrichtung.

**Werte:**

- `flex-start`
- `center`
- `space-between`
- `space-around`

```css
.container {
  justify-content: center;
}
```

---

### `align-items`

Vertikale Ausrichtung.

```css
.container {
  align-items: center;
}
```

---

### `gap`

Abstand zwischen Elementen.

```css
.container {
  gap: 10px;
}
```

---

## 6. Grid Layout

### `display: grid`

```css
.container {
  display: grid;
}
```

---

### `grid-template-columns`

```css
.container {
  grid-template-columns: 1fr 1fr 1fr;
}
```

---

### `grid-template-rows`

```css
.container {
  grid-template-rows: auto 200px;
}
```

---

### `gap`

```css
.container {
  gap: 20px;
}
```

---

## 7. Animation & Transition

### `transition`

```css
div {
  transition: all 0.3s ease;
}
```

---

### `transform`

**Werte:**

- `scale()`
- `rotate()`
- `translate()`

```css
div:hover {
  transform: scale(1.2);
}
```

---

### `animation`

```css
div {
  animation: slide 2s infinite;
}

@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}
```

---

## 8. Interaktion

### `cursor`

```css
button {
  cursor: pointer;
}
```

---

### `:hover`, `:focus`, `:active` (Pseudo-Klassen)

```css
button:hover {
  background-color: blue;
}
```

---

## 9. Responsive Design

### `@media`

```css
@media (max-width: 768px) {
  body {
    background-color: lightgray;
  }
}
```

---

## 10. Sonstige wichtige Properties

### `overflow`

**Werte:**

- `hidden`
- `scroll`
- `auto`

```css
div {
  overflow: hidden;
}
```

---

### `visibility`

```css
div {
  visibility: hidden;
}
```

---

### `display: none`

Element komplett entfernen.

```css
div {
  display: none;
}
```

---

#### Fazit

Das sind die **wichtigsten CSS-Befehle**, die Sie für 90% aller Layouts brauchen:

- Box-Modell (`margin`, `padding`, `border`)
- Layout (`flex`, `grid`)
- Positionierung (`position`)
- Text & Farben
- Animationen & Responsive Design
