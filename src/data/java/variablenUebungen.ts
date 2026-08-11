import type { Exercise, Topic } from '../../types/content'

/**
 * Source: Desktop/java/uebungen/u02_variablen (Aufgaben 2.01–2.24, W.
 * Schindler). These worksheets are trace-table ("Schreibtischtest") and
 * "write a program" exercises for a printed program — none of the PDFs
 * contains an answer key (the trace tables and console-output boxes are
 * blank for the student to fill in), so no exercise below gets an invented
 * `correctAnswer`; all are self-assessed. The handful of exercises where
 * the source itself states a concrete expected result (2.11's comment
 * annotations, 2.12/2.20/2.21's example screenshots) reproduce that text
 * verbatim in `explanation`, revealed only after the learner checks — it
 * is reference material copied from the file, not a graded answer key.
 * Aufgaben 2.06–2.10 are five near-identical "type it in and run it"
 * instructions (one per 2.01–2.05) and are combined into a single exercise
 * to avoid near-duplicate entries.
 *
 * One transcription note: Aufgabe 2.05's source PDF renders the minus sign
 * as an en dash ("–") in a few places (`c = 5 * (a – 2) – (8 % b);`), which
 * is not valid Java and does not match the plain hyphen-minus used
 * everywhere else in this course's source files — an evident PDF
 * text-extraction artifact of the same character, not a deliberate
 * teaching trap. It is normalized to a standard "-" below so the program
 * compiles, as Aufgabe 2.10 explicitly asks the student to do.
 */

const TOPIC_SLUG = 'variablen-uebungen'

const exercises: Exercise[] = [
  {
    id: 'ex-java-2-01',
    topicSlug: TOPIC_SLUG,
    type: 'technical-problem',
    difficulty: 'easy',
    question:
      'Aufgabe 2.01 — Machen Sie einen Schreibtischtest für das Programm A_ZweiVariablen (siehe Code oben). Tragen Sie für jeden der 4 Schritte den jeweiligen Wert der Variablen a und b ein und notieren Sie die Bildschirm-Ausgabe des Programms.',
  },
  {
    id: 'ex-java-2-02',
    topicSlug: TOPIC_SLUG,
    type: 'technical-problem',
    difficulty: 'easy',
    question:
      'Aufgabe 2.02 — Machen Sie einen Schreibtischtest für das Programm B_DreiVariablen (siehe Code oben). Tragen Sie für jeden der 6 Schritte den jeweiligen Wert von a, b und c ein und notieren Sie die Bildschirm-Ausgabe.',
  },
  {
    id: 'ex-java-2-03',
    topicSlug: TOPIC_SLUG,
    type: 'technical-problem',
    difficulty: 'medium',
    question:
      'Aufgabe 2.03 — Machen Sie einen Schreibtischtest für das Programm C_DreiVariablen (siehe Code oben). Achtung: Es wird an mehreren Stellen mitten im Programm ausgegeben, unter anderem einmal wörtlich der Text "b" statt des Variablenwerts. Tragen Sie für jeden der 8 Schritte den Wert von a, b und c sowie die vollständige Bildschirm-Ausgabe ein.',
  },
  {
    id: 'ex-java-2-04',
    topicSlug: TOPIC_SLUG,
    type: 'technical-problem',
    difficulty: 'medium',
    question:
      'Aufgabe 2.04 — Ermitteln Sie die Wirkung des Rest-Operators bzw. Modulo-Operators % (er hat mit Prozentrechnung nichts zu tun). Machen Sie einen Schreibtischtest für das Programm D_DreiVariablen (siehe Code oben): Tragen Sie für jeden der 8 Schritte den Wert von a, b und c ein und notieren Sie die Bildschirm-Ausgabe.',
  },
  {
    id: 'ex-java-2-05',
    topicSlug: TOPIC_SLUG,
    type: 'technical-problem',
    difficulty: 'hard',
    question:
      'Aufgabe 2.05 — Machen Sie einen Schreibtischtest für das Programm E_DreiVariablen (siehe Code oben). Tragen Sie für jeden der 8 Schritte den Wert von a, b und c ein und notieren Sie die Bildschirm-Ausgabe.',
  },
  {
    id: 'ex-java-2-06-10',
    topicSlug: TOPIC_SLUG,
    type: 'technical-problem',
    difficulty: 'easy',
    question:
      'Aufgaben 2.06–2.10 — Erfassen Sie die fünf Programme A_ZweiVariablen, B_DreiVariablen, C_DreiVariablen, D_DreiVariablen und E_DreiVariablen (Aufgaben 2.01–2.05) unverändert in je einem eigenen Ordner. Übersetzen und starten Sie jedes Programm. Vergleichen Sie die tatsächliche Bildschirmausgabe mit dem Ergebnis Ihres jeweiligen Schreibtischtests.',
  },
  {
    id: 'ex-java-2-11',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'easy',
    question:
      'Aufgabe 2.11 — Ergänzen Sie den Quellcode von Pfund.java (siehe Code oben) um Kommentare, die erklären, was die main-Methode, die Variablendeklarationen, die Initialisierung, den eigentlichen Algorithmus und die Ausgabe bewirken.',
    explanation:
      'Referenz-Erläuterungen aus dem Original (als Kommentare einzufügen):\n– Kopfzeile main: „Die main-Methode muss es in jedem java-Programm geben."\n– Deklarationen: „Hier werden die drei Variablen faktor, pfund und euro als große Fließkomma-Zahlen (double) deklariert, d. h. vereinbart."\n– Initialisierung: „Hier werden die Variablen faktor und euro initialisiert, d. h. mit Anfangswerten versehen."\n– Berechnung: „Dies ist der eigentliche Algorithmus"\n– Ausgabe: „Hiermit erfolgt die Ausgabe des Ergebnisses"',
  },
  {
    id: 'ex-java-2-12',
    topicSlug: TOPIC_SLUG,
    type: 'technical-problem',
    difficulty: 'medium',
    question:
      'Aufgabe 2.12 — Schreiben Sie ein Programm Pfund2, das wie Pfund Euro in Pfund umrechnet, aber eine bessere Bildschirmausgabe erzeugt (Überschriften „Euro-Betrag:" und „Pfund-Betrag:" mit Trennlinien). Wenn im Programm ein anderer Euro-Betrag initialisiert wird, sollen natürlich dieser Wert und der entsprechende Pfund-Betrag ausgegeben werden.',
    explanation:
      'Beispielhafte Bildschirmausgabe aus der Aufgabenstellung für den Euro-Betrag 1000.0:\n\nEuro-Betrag:\n============\n1000.0\n\nPfund-Betrag:\n=============\n758.3',
  },
  {
    id: 'ex-java-2-13',
    topicSlug: TOPIC_SLUG,
    type: 'technical-problem',
    difficulty: 'medium',
    question:
      'Aufgabe 2.13 — Schreiben Sie ein Programm Euro, das Pfund in Euro umrechnet (gleicher Umrechnungsfaktor 0.7583 und gleiche Bildschirmansicht wie Pfund2). Im Programm sollen z. B. 1000 Pfund in Euro umgerechnet werden – es müssen sich 1318,74 Euro ergeben (auf dem Bildschirm werden allerdings ein paar Stellen mehr angezeigt).',
  },
  {
    id: 'ex-java-2-14',
    topicSlug: TOPIC_SLUG,
    type: 'technical-problem',
    difficulty: 'medium',
    question:
      'Aufgabe 2.14 — Machen Sie einen Schreibtischtest für das Programm Preissenkung (siehe Code oben). Was wird auf dem Bildschirm ausgegeben?',
  },
  {
    id: 'ex-java-2-15',
    topicSlug: TOPIC_SLUG,
    type: 'technical-problem',
    difficulty: 'hard',
    question:
      'Aufgabe 2.15 — Machen Sie einen Schreibtischtest für das Programm Bruttopreis (siehe Code oben). Was wird auf dem Bildschirm ausgegeben?',
  },
  {
    id: 'ex-java-2-16',
    topicSlug: TOPIC_SLUG,
    type: 'technical-problem',
    difficulty: 'medium',
    question:
      'Aufgabe 2.16 — Machen Sie einen Schreibtischtest für das Programm Vertriebspauschale (siehe Code oben). Was wird auf dem Bildschirm ausgegeben?',
  },
  {
    id: 'ex-java-2-17',
    topicSlug: TOPIC_SLUG,
    type: 'technical-problem',
    difficulty: 'medium',
    question:
      'Aufgabe 2.17 — Machen Sie einen Schreibtischtest für das Programm Vertriebspauschale2 (siehe Code oben). Was wird auf dem Bildschirm ausgegeben?',
  },
  {
    id: 'ex-java-2-18',
    topicSlug: TOPIC_SLUG,
    type: 'technical-problem',
    difficulty: 'medium',
    question:
      'Aufgabe 2.18 — Machen Sie einen Schreibtischtest für das Programm Kredit (siehe Code oben). Was wird auf dem Bildschirm ausgegeben?',
  },
  {
    id: 'ex-java-2-19',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'hard',
    question:
      'Aufgabe 2.19 — Implementieren Sie unverändert den Code der Aufgaben 2.14–2.18 (Preissenkung, Bruttopreis, Vertriebspauschale, Vertriebspauschale2, Kredit). Übersetzen und starten Sie die Programme, vergleichen Sie mit Ihren Schreibtischtests. Erklären Sie anschließend für jedes der fünf Programme stichwortartig den sachlichen Fehler im vorgegebenen Code.',
  },
  {
    id: 'ex-java-2-20',
    topicSlug: TOPIC_SLUG,
    type: 'technical-problem',
    difficulty: 'medium',
    question:
      'Aufgabe 2.20 — Schreiben Sie ein Programm Sparvertrag.java, das das Endkapital eines Sparvertrags mit einjähriger Laufzeit berechnet und ausgibt. Deklarieren Sie int sparbetrag, int zinssatz, double zinsen, double endkapital. Geben Sie das Endkapital für einen Sparbetrag von 800 Euro bei 5 % Zinssatz aus, danach im gleichen Programm für 1500 Euro bei 2 % Zinssatz.',
    explanation:
      'Erwartete Bildschirmausgabe aus der Aufgabenstellung:\n\n>java Sparvertrag\n\nSparbetrag: 800\nZinssatz:   5\nEndkapital: 840.0\n\nSparbetrag: 1500\nZinssatz:   2\nEndkapital: 1530.0',
  },
  {
    id: 'ex-java-2-21',
    topicSlug: TOPIC_SLUG,
    type: 'technical-problem',
    difficulty: 'medium',
    question:
      'Aufgabe 2.21 — Schreiben Sie ein Programm Rabatt.java, das den Verkaufspreis einer Ware aus Listenpreis und Rabattsatz berechnet und ausgibt. Deklarieren Sie int listenpreis, int rabattsatz, double rabatt, double verkaufspreis. Geben Sie den Verkaufspreis für Listenpreis 400 Euro bei 10 % Rabatt aus, danach im gleichen Programm für Listenpreis 1000 Euro bei 3 % Rabatt.',
    explanation:
      'Erwartete Bildschirmausgabe aus der Aufgabenstellung:\n\n>java Rabatt\n\nListenpreis:   400\nRabattsatz:    10\nVerkaufspreis: 360.0\n\nListenpreis:   1000\nRabattsatz:    3\nVerkaufspreis: 970.0',
  },
  {
    id: 'ex-java-2-22',
    topicSlug: TOPIC_SLUG,
    type: 'technical-problem',
    difficulty: 'hard',
    question:
      'Aufgabe 2.22 — Schreiben Sie ein Programm Speicherplatz.java, das den Speicherplatzbedarf für 30 eingescannte Bilder der Größe 10 cm x 20 cm berechnet. Auflösung 300 x 300 dpi, 1 inch = 2,54 cm, Farbtiefe 3 Byte. Wählen Sie geeignete Datentypen und aussagekräftige Variablennamen, speichern Sie jedes Zwischenergebnis in einer eigenen Variablen. Die Pixelanzahl mit Math.ceil() aufrunden; das Endergebnis in MiB angeben und ebenfalls aufrunden.',
  },
  {
    id: 'ex-java-2-23',
    topicSlug: TOPIC_SLUG,
    type: 'technical-problem',
    difficulty: 'hard',
    question:
      'Aufgabe 2.23 — Schreiben Sie ein Programm DatenUebertragung.java, das die Dauer der Übertragung von 239,4 MiB bei einer Datenübertragungsrate von 25 Mbit/s berechnet und in ganzzahligen Minuten und Sekunden ausgibt. Wählen Sie geeignete Datentypen und aussagekräftige Variablennamen, speichern Sie Zwischenergebnisse in eigenen Variablen. Die Sekundenanzahl aufrunden; nutzen Sie für die Umrechnung in Minuten/Sekunden die ganzzahlige Division und den Modulo-Operator.',
  },
  {
    id: 'ex-java-2-24',
    topicSlug: TOPIC_SLUG,
    type: 'technical-problem',
    difficulty: 'hard',
    question:
      'Aufgabe 2.24 (Zusatzaufgabe) — Schreiben Sie ein Programm OptimaleStueckzahl.java, das die Produktionsmenge mit maximalem Gewinn ermittelt. Preis pro Stück: 60 Euro. Erlösfunktion: erlös = stückzahl * preis. Kostenfunktion: kosten = 0,015·x³ − 1,9·x² + 92·x + 800 (x = Stückzahl). Gewinn = Erlös − Kosten. Lassen Sie das Programm zunächst den Gewinn für die Stückzahlen 0, 20, 40, 60, 80, 100, 110 ausgeben, verfeinern Sie dann die Suche, bis Sie die genaue optimale Stückzahl ermittelt haben.',
  },
]

export const variablenUebungenTopic: Topic = {
  id: 'topic-java-variablen-uebungen',
  slug: TOPIC_SLUG,
  moduleSlug: 'java',
  title: 'Übungen: Variablen im Programm',
  shortIntro:
    'Schreibtischtests und eigene Programme zu Deklaration, Zuweisung, Rechenoperatoren und Bildschirmausgabe (Aufgaben 2.01–2.24).',
  order: 4,
  exercises,
  content: [
    {
      type: 'paragraph',
      text: 'Die folgenden Programme gehören zu den Übungen unten. Machen Sie jeweils zunächst einen Schreibtischtest auf Papier, bevor Sie das Programm übersetzen und laufen lassen.',
    },

    { type: 'heading', level: 3, text: 'Aufgabe 2.01 — A_ZweiVariablen' },
    {
      type: 'code',
      language: 'java',
      code: `public class A_ZweiVariablen
{
   public static void main(String[] args)
   {
      int a;    // Deklaration
      int b;    // Deklaration

      a = 200;  // Schritt 1
      b = 800;  // Schritt 2

      b = a;    // Schritt 3
      a = 100;  // Schritt 4

      System.out.println(a);
      System.out.println(b);
   }
}`,
    },

    { type: 'heading', level: 3, text: 'Aufgabe 2.02 — B_DreiVariablen' },
    {
      type: 'code',
      language: 'java',
      code: `public class B_DreiVariablen
{
   public static void main(String[] args)
   {
      int a;
      int b;
      int c;

      a = 200;      // Schritt 1
      b = 800;      // Schritt 2
      c = a - b;    // Schritt 3
      a = b;        // Schritt 4
      b = 42;       // Schritt 5
      c = c + 500;  // Schritt 6

      System.out.println(a);
      System.out.println(b);
      System.out.println(c);
   }
}`,
    },

    { type: 'heading', level: 3, text: 'Aufgabe 2.03 — C_DreiVariablen' },
    {
      type: 'code',
      language: 'java',
      code: `public class C_DreiVariablen
{
   public static void main(String[] args)
   {
      int a;
      int b;
      int c;

      a = 30;                    // Schritt 1
      b = 70;                    // Schritt 2
      c = a;                     // Schritt 3
      a = b;                     // Schritt 4
      System.out.println(c);
      c = a;                     // Schritt 5
      System.out.println(b);
      a = 99;                    // Schritt 6
      b = a;                     // Schritt 7
      System.out.println("b");
      a = c;                     // Schritt 8
      System.out.println(a);
   }
}`,
    },

    { type: 'heading', level: 3, text: 'Aufgabe 2.04 — D_DreiVariablen' },
    {
      type: 'code',
      language: 'java',
      code: `public class D_DreiVariablen
{
   public static void main(String[] args)
   {
      int a;
      int b;
      int c;

      a = 30;              // Schritt 1
      b =  7;              // Schritt 2
      c = a % b;            // Schritt 3
      a = b / c;            // Schritt 4
      b = b / 10;           // Schritt 5
      c = a + b * 5;        // Schritt 6
      b = a;                // Schritt 7
      a = 42;                // Schritt 8

      System.out.println(c);
      System.out.println(b);
      System.out.println(a);
   }
}`,
    },

    { type: 'heading', level: 3, text: 'Aufgabe 2.05 — E_DreiVariablen' },
    {
      type: 'note',
      text: 'Die Minuszeichen in Schritt 3–8 waren im Original-PDF als Halbgeviertstrich „–" gesetzt (ein PDF-Textextraktions-Artefakt) und sind hier zu einem normalen Minus "-" normalisiert, damit das Programm wie in Aufgabe 2.10 gefordert tatsächlich übersetzt werden kann.',
    },
    {
      type: 'code',
      language: 'java',
      code: `public class E_DreiVariablen
{
   public static void main(String[] args)
   {
      int a;
      int b;
      int c;

      a = 8;                          // Schritt 1
      b = 5;                          // Schritt 2
      c = 5 * (a - 2) - (8 % b);      // Schritt 3
      a = c - 2 * b;                  // Schritt 4
      b = 4 * b - a;                  // Schritt 5
      c = c / 3 - b;                  // Schritt 6
      b = a - 10;                     // Schritt 7
      a = b * c;                      // Schritt 8

      System.out.println(c);
      System.out.println(b);
      System.out.println(a);
   }
}`,
    },

    { type: 'heading', level: 3, text: 'Aufgabe 2.11 — Pfund.java (ohne Kommentare)' },
    {
      type: 'code',
      language: 'java',
      code: `// u02_variablen
// auf02.11

public class Pfund
{
   public static void main(String[] args)
   {
      double faktor;
      double pfund;
      double euro;

      faktor = 0.7583;
      euro   = 1000.0;

      pfund  = euro * faktor;

      System.out.println(pfund);
   }
}`,
    },

    { type: 'heading', level: 3, text: 'Aufgabe 2.14 — Preissenkung' },
    {
      type: 'code',
      language: 'java',
      code: `// u02_variablen
// auf2.14

public class Preissenkung
{
   public static void main(String[] args)
   {
      // Deklaration der Variablen
      int preis1;
      int preis2;
      int gesamtpreis;
      int preissenkung;
      int endpreis;

      // Initialisierug der Variablen:
      preis1        = 70;
      preis2        = 30;
      preissenkung  = -20;

      // Berechnungen
      gesamtpreis   = preis1 + preis2;
      endpreis      = gesamtpreis - preissenkung;

      // Ausgabe
      System.out.println(endpreis);
   }
}`,
    },

    { type: 'heading', level: 3, text: 'Aufgabe 2.15 — Bruttopreis' },
    {
      type: 'code',
      language: 'java',
      code: `// u02_variablen
// auf2.15

public class Bruttopreis
{
   public static void main(String[] args)
   {
      // Deklaration der Variablen
      int alterListenpreis;
      int neuerListenpreis;
      int nettopreis;
      int steuersatz;
      int mehrwertsteuer;
      int vomNettopreis;
      int bruttopreis;

      // Initialisierug der Variablen:
      alterListenpreis = 10;
      nettopreis       = 100;
      steuersatz        = 19;
      vomNettopreis     = alterListenpreis;

      // Berechnungen
      neuerListenpreis = 100;
      nettopreis        = neuerListenpreis;
      mehrwertsteuer    = 19% vomNettopreis;
      bruttopreis        = nettopreis + mehrwertsteuer;

      // Ausgabe
      System.out.println(bruttopreis);
   }
}`,
    },

    { type: 'heading', level: 3, text: 'Aufgabe 2.16 — Vertriebspauschale' },
    {
      type: 'code',
      language: 'java',
      code: `// u02_variablen
// auf2.16

public class Vertriebspauschale
{
   public static void main(String[] args)
   {
      // Deklaration der Variablen
      int grundgehalt        = 0;
      int umsatz              = 0;
      int vertriebspauschale  = 0;
      int zehnProzent          = 0;
      int auszahlung            = 0;

      // Initialisierug der Variablen:
      grundgehalt         = 3000;
      umsatz               = 10000;
      vertriebspauschale    =  500;

      // Berechnungen
      vertriebspauschale = umsatz * zehnProzent;
      auszahlung          = grundgehalt + vertriebspauschale;

      // Ausgabe
      System.out.println(auszahlung);
   }
}`,
    },

    { type: 'heading', level: 3, text: 'Aufgabe 2.17 — Vertriebspauschale2' },
    {
      type: 'code',
      language: 'java',
      code: `// u02_variablen
// auf2.17

public class Vertriebspauschale2
{
   public static void main(String[] args)
   {
      // Deklaration der Variablen
      int grundgehalt        = 0;
      int umsatz              = 0;
      int vertriebspauschale  = 0;
      int zehnProzent          = 0;
      int auszahlung            = 0;

      // Initialisierug der Variablen:
      grundgehalt         = 3000;
      umsatz               = 10000;
      zehnProzent           =    10;
      vertriebspauschale    =   500;

      // Berechnungen
      vertriebspauschale = umsatz * zehnProzent;
      auszahlung          = grundgehalt + vertriebspauschale;

      // Ausgabe
      System.out.println(auszahlung);
   }
}`,
    },

    { type: 'heading', level: 3, text: 'Aufgabe 2.18 — Kredit' },
    {
      type: 'code',
      language: 'java',
      code: `// u02_variablen
// auf2.18

public class Kredit
{
   public static void main(String[] args)
   {
      // Deklaration der Variablen
      int kredit       = 0;
      int zinsen        = 0;
      int rueckzahlung  = 0;
      int restschuld     = 0;

      // Berechnungen
      kredit        = 3000;
      restschuld    = kredit + zinsen;
      zinsen         = 100;
      restschuld     = kredit - rueckzahlung;
      rueckzahlung    = 1000;

      // Ausgabe
      System.out.println(restschuld);
   }
}`,
    },
  ],
}
