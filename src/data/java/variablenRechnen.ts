import type { Topic } from '../../types/content'

/**
 * Source: Desktop/java/beispiele/b02_variablen/b_rechnen (5 .java example
 * files, W. Schindler), reproduced verbatim as code blocks. The inline
 * comments are the lesson text as written by the source author. No
 * exercises directly accompany this subfolder — the matching worksheets
 * (Aufgaben 2.04, 2.05, 2.09–2.13) are grouped in the "Übungen: Variablen
 * im Programm" topic instead, alongside the other u02_variablen exercises.
 */

export const variablenRechnenTopic: Topic = {
  id: 'topic-java-variablen-rechnen',
  slug: 'variablen-rechnen',
  moduleSlug: 'java',
  title: 'Variablen: Rechnen und Operatoren',
  shortIntro: 'Rechenregeln, String-Verkettung, ganzzahlige Division, Runden und die Kurzschreibweisen der Zuweisungsoperatoren.',
  order: 3,
  exercises: [],
  content: [
    { type: 'heading', level: 2, text: 'Rechenregeln' },
    {
      type: 'code',
      language: 'java',
      code: `// b02_variablen
// b_rechnen

public class A_Rechenregeln
{
   public static void main(String[] args)
   {
      // Punktrechnung vor Strichrechnung.
      int a =  5 + 3  * 2;
      System.out.println(a); // 11

      int b = (5 + 3) * 2;
      System.out.println(b); // 16

      // Dividieren gilt als Punktrechnung,
      // obwohl das Rechensymbol ein Strich ist.
      int c = 8 - 6 / 2;
      System.out.println(c); // 5

      // Von links nach rechts (Linksassoziativitaet)
      int d = 8 / 4 / 2;
      System.out.println(d); // 1

      // Man kann auch mit Variablen rechnen.
      int gehalt = 2000;
      int zulage = 300;

      int auszahlung = gehalt + zulage;
      System.out.println(auszahlung);

      // Eine Variable darf links UND rechts
      // vom Zuweisungszeichen = stehen.
      gehalt = gehalt + 100;
      System.out.println(gehalt);

      // Bei einem Rechenausdruck, der verschiedene Typen
      // enthaelt, "gewinnt" immer der groesste Typ.
      // Das heisst, das Rechenergebnis hat den groessten
      // Typ, der im Rechenausdruck vorkommt.
      int nettopreis  = 100;
   // int bruttopreis = 100 * 1.19; // ... geht nicht.

      // 1.19 ist ein double, 100 * 1.19 ist also auch
      // ein double. Aber bruttopreis ist ein int.
      // Ein double passt nicht in eine int-Variable.

      // incompatible types:
      // possible lossy conversion from double to int

      double brutto = 100 * 1.19;   // ... das geht.
      System.out.println(brutto);
   }
}`,
    },

    { type: 'heading', level: 2, text: 'String-Verkettung' },
    {
      type: 'code',
      language: 'java',
      code: `// b02_variablen
// b_rechnen

public class B_StringVerkettung
{
   public static void main(String[] args)
   {
      // Mit + koennen Strings verkettet werden.

      String vorname  = "Wolfgang";
      String nachname = "Schindler";
      String name     = vorname + " " + nachname;

      System.out.println(name);

      // Die Wirkung des Pluszeichens ist kontext-
      // bezogen.
      // Wenn links und rechts vom Plus Zahlen stehen,
      // wird gerechnet.
      // Wenn links oder rechts vom Plus mindestens
      // ein String steht, wird verkettet und das
      // Ganze wird zu einem String.

      System.out.println(400 + 76 + " Euro");
      System.out.println("Euro " + 400 + 76);
   }
}`,
    },

    { type: 'heading', level: 2, text: 'Ganzzahlige Division und der Modulo-Operator' },
    {
      type: 'code',
      language: 'java',
      code: `// b02_variablen
// b_rechnen

public class C_GanzzahligeOperation
{
   public static void main(String[] args)
   {
      // Auch die Wirkung des Divisionsoperators /
      // ist kontextabhaengig.
      // Wenn links und rechts vom / ein ganzzahliger
      // Typ steht (z.B. int oder long), wird eine
      // ganzzahlige Division durchgefuehrt.
      // D.h. es gibt keine Stellen nach dem Punkt.

      int ergebnis = 19 / 5;   // Divisionsergebnis 3
      System.out.println(ergebnis);

      // Das Zeichen % stellt den Rest-Operator dar,
      // auch bezeichnet als Modulo-Operator.
      // Mit Prozentrechnung hat er nichts zu tun.

      int rest     = 19 % 5;   // Divisionsrest 4
      System.out.println(rest);

      // Wenn mindestens ein double links oder rechts
      // vom / steht, wird das Ergebnis mit Stellen
      // nach dem Komma (bzw. Punkt) berechnet.

      System.out.println(19 / 5.0);
   }
}`,
    },
    {
      type: 'warning',
      text: 'Der %-Operator ist der Rest-Operator (Modulo) – er hat mit Prozentrechnung nichts zu tun. Verwechslungen sind eine häufige Fehlerquelle (siehe die Übungen mit absichtlichem Fehler weiter unten).',
    },

    { type: 'heading', level: 2, text: 'Runden' },
    {
      type: 'code',
      language: 'java',
      code: `// b02_variablen
// b_rechnen

public class D_Runden
{
   public static void main(String[] args)
   {
      System.out.println();
      System.out.println(           19/5   );  // abschneiden
      System.out.println(           19/5.0 );  // double
      System.out.println();

      System.out.println(            3.8   );
      System.out.println(Math.round( 3.8  ));  // runden auf long
      System.out.println(Math.floor( 3.8  ));  // abrunden
      System.out.println(Math.ceil ( 3.8  ));  // aufrunden
      System.out.println();

      System.out.println(            3.2   );
      System.out.println(Math.round( 3.2  ));  // runden auf long
      System.out.println(Math.floor( 3.2  ));  // abrunden
      System.out.println(Math.ceil ( 3.2  ));  // aufrunden
   }
}`,
    },

    { type: 'heading', level: 2, text: 'Abkürzungen: Inkrement, Dekrement und kombinierte Zuweisung' },
    {
      type: 'code',
      language: 'java',
      code: `// b02_variablen
// b_rechnen

public class E_Abkuerzungen
{
   public static void main(String[] args)
   {
      int a = 5;
          a = a + 1;         // Inkrementieren
      System.out.println(a);

      int b = 5;
          b++;               // Bedeutet b = b + 1;
                             // Inkrementieren
      System.out.println(b);

      int c = 5;
          c--;               // Bedeutet c = c -1;
                             // Dekrementieren
      System.out.println(c);

      int d = 5;
          d = d + 3;
      System.out.println(d);

      int e  = 5;
          e += 3;            // Bedeutet e = e + 3;
      System.out.println(e);

      int f  = 5;
          f -= 3;            // Bedeutet f = f - 3;
      System.out.println(f);

      int g  = 5;
          g *= 3;            // Bedeutet g = 3 * g;
      System.out.println(g);
   }
}`,
    },
  ],
}
