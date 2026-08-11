import type { Exercise, Topic } from '../../types/content'

/**
 * Source: Desktop/java/beispiele/b01_einstieg (6 .java example files, W.
 * Schindler) and Desktop/java/uebungen/u01_einstieg (Aufgaben 1.01–1.03).
 * The example files are reproduced verbatim as code blocks below — their
 * inline comments ARE the lesson text, written by the source author, not
 * paraphrased. The three exercises are open-ended "write a program" /
 * "find the bugs" worksheets: none of the three PDF worksheets contains an
 * answer key, so none of them gets an invented `correctAnswer` — they are
 * self-assessed only (compile and run your own program, or compare against
 * the reference material shown in the exercise).
 */

const TOPIC_SLUG = 'einstieg'

const exercises: Exercise[] = [
  {
    id: 'ex-java-1-01-gruss',
    topicSlug: TOPIC_SLUG,
    type: 'technical-problem',
    difficulty: 'easy',
    question:
      'Aufgabe 1.01 — Schreiben Sie ein Programm Gruss.java, das einen Text auf dem Bildschirm ausgibt, der Sie persönlich mit Namen anspricht und freundlich begrüßt.',
  },
  {
    id: 'ex-java-1-02-hochhaus',
    topicSlug: TOPIC_SLUG,
    type: 'technical-problem',
    difficulty: 'easy',
    question:
      'Aufgabe 1.02 — Schreiben Sie ein Programm Hochhaus, das die nebenstehende Grafik (siehe Code-Block „Hochhaus (ASCII-Vorlage)" oben) auf dem Bildschirm ausgibt. Das Bild soll auf der Konsole als „Text" ausgegeben werden, besteht also nur aus Buchstaben und Sonderzeichen.',
  },
  {
    id: 'ex-java-1-03-fehlersuche',
    topicSlug: TOPIC_SLUG,
    type: 'technical-problem',
    difficulty: 'medium',
    question:
      'Aufgabe 1.03 — Der oben abgedruckte Quellcode (Datei FehlerSuche.java) enthält vier Fehler. Finden und korrigieren Sie diese Fehler. Erfassen Sie den Code zunächst einschließlich der Fehler und beseitigen Sie die Fehler dann nacheinander. Dokumentieren Sie vor jeder Fehlerbeseitigung die Fehlermeldung, die der Compiler für diesen Fehler ausgibt (Fehlermeldung 1 bis 4).',
  },
]

export const einstiegTopic: Topic = {
  id: 'topic-java-einstieg',
  slug: TOPIC_SLUG,
  moduleSlug: 'java',
  title: 'Einstieg in Java',
  shortIntro: 'Das Grundgerüst eines Java-Programms: Klasse, Kommentare, main-Methode und die erste Bildschirmausgabe.',
  order: 1,
  exercises,
  content: [
    {
      type: 'paragraph',
      text: 'Jedes Java-Programm braucht mindestens eine Klasse. Die folgenden Beispiele bauen das Grundgerüst Schritt für Schritt auf – von der leeren Klasse bis zur ersten Bildschirmausgabe.',
    },

    { type: 'heading', level: 2, text: 'Eine leere Klasse' },
    {
      type: 'code',
      language: 'java',
      code: `class A_EineKlasse
{
}`,
    },

    { type: 'heading', level: 2, text: 'Kommentare' },
    {
      type: 'code',
      language: 'java',
      code: `// b01_einsteig

class B_Kommentar
{
   // Zwei Schraegstriche bedeuten, dass der Rest
   // der Zeile Kommentar ist.
   // Kommentare werden vom Compiler ignoriert.

   /*
   Hier beginnt
   ein mehrzeiliger
   Kommentar.

   Und hier endet er.
   */

   /**
   Dies ist ein Dokumentationskommentar (zwei Sterne).
   Ein so gekennzeichneter Kommentar wird von dem Tool
   javadoc gefunden und automatisch in eine Dokumentations-
   datei uebernommen.
   */
}`,
    },

    { type: 'heading', level: 2, text: 'Das Hauptprogramm (main)' },
    {
      type: 'code',
      language: 'java',
      code: `// b01_einstieg

public class C_EinProgramm
{
   // "public" bedeutet "oeffentlich".

  /**
   * Die folgende Kopfzeile bildet IMMER den
   * Anfang von JEDEM java-Programm.
   * "main" bedeutet "Haupt". Hier beginnt also
   * das Hauptprogramm.
   * Die übrigen Schlüsselworte der Zeile werden
   * spaeter erlaeutert.
   */
   public static void main(String[] args)
   {
      // Nach einer geoeffneten geschweiften
      // Klammer soll der Code IMMER um drei
      // Zeichen eingerueckt werden.
      // Erst die zugehoerige schliessende
      // Klammer rueckt wieder um drei Zeichen
      // nach links.
   }
}`,
    },

    { type: 'heading', level: 2, text: 'Fehler lesen lernen' },
    {
      type: 'code',
      language: 'java',
      code: `// b01_einstieg

public class D_Fehler
{
   public static void main(string[] args)
   // In der obigen Zeile befindet sich ein Fehler.
   // String ist faelschlich klein geschrieben.
   // Der Compiler bemerkt den Fehler und meldet:
   //
   // D_Fehler.java:5: error: cannot find symbol
   //    public static void main(string[] args)
   //                            ^
   //   symbol:   class string
   //   location: class D_Fehler
   //
   // Fehler sind unsere Freunde!
   // Fehlermeldungen muessen vollstaendig gelesen
   // werden!
   {
   }
}`,
    },
    {
      type: 'note',
      text: 'Fehlermeldungen des Compilers vollständig lesen: Sie geben Zeile, Ursache und Fundstelle des Fehlers an.',
    },

    { type: 'heading', level: 2, text: 'Die erste Ausgabe: Hello world!' },
    {
      type: 'code',
      language: 'java',
      code: `// b01_einstieg

public class E_Hallo
{
   public static void main(String[] args)
   {
      System.out.println("Hello world!");
   }
}`,
    },

    { type: 'heading', level: 2, text: 'Sonderzeichen in Strings (Escape-Sequenzen)' },
    {
      type: 'code',
      language: 'java',
      code: `// b01_einstieg

public class F_Textausgabe
{
   public static void main(String[] args)
   {
      System.out.println("Dies ist ein String");

      // Der Backslash in einem String ist ein Steuerzeichen
      // (escape character).
      // Es wird IMMER mit einem zweiten Zeichen kombiniert.

      System.out.println("Das \\" ist ein Anfuehrungszeichen");
      System.out.println("Das \\t ist ein Tabulatorsprung");
      System.out.println("Das \\n ist ein Zeilenwechsel");
      System.out.println("Das \\\\ ist ein Backslash");

      // Ein Backslash mit u und einer vierstelligen Hexadezimal-
      // zahl steht fuer ein Unicode-Zeichen:

      System.out.println("Das \\u0001 ist kein Smiley");
      System.out.println("Das \\u20AC ist ein Eurozeichen");
   }
}`,
    },

    { type: 'heading', level: 2, text: 'Übungen' },
    { type: 'paragraph', text: 'Aufgabe 1.02 — Hochhaus (ASCII-Vorlage), auf der Konsole nachzubauen:' },
    {
      type: 'code',
      language: 'text',
      code: `     /\\
    /  \\
   /    \\
  /      \\
 /        \\
/  (    )  \\
/            \\
/______________\\
/|              |\\
|  ___      ___  |
| |   |    |   | |
| --- |    | --- |
|  ___      ___  |
| |   |    |   | |
| --- |    | --- |
|  ___      ___  |
| |   |    |   | |
| --- |    | --- |
| HOTEL      ___ |
| |   |    |   | |
| |   |    | --- |
==================`,
    },
    {
      type: 'paragraph',
      text: 'Aufgabe 1.03 — der folgende Quellcode (FehlerSuche.java) enthält vier Fehler, die gefunden und korrigiert werden müssen:',
    },
    {
      type: 'code',
      language: 'java',
      code: `// u01_einstieg
// auf1.03

public class Fehlersuche
{
 public static void main(string[] args)
 }
 System.out.println("Dieses Programm");
 System.out.println("enthaelt vier");
 System.out.println("Syntaxfehler.");

 System.out.println("Fehler sind")
 System.out.println("unsere Freunde!");
 }
}`,
    },
  ],
}
