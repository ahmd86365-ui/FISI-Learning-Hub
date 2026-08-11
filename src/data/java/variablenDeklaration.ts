import type { Topic } from '../../types/content'

/**
 * Source: Desktop/java/beispiele/b02_variablen/a_typ (3 .java example
 * files, W. Schindler), reproduced verbatim as code blocks. The inline
 * comments are the lesson text as written by the source author. No
 * exercises directly accompany this subfolder in the source material — the
 * matching worksheets (Aufgabe 2.01 ff.) combine declaration AND
 * calculation and are grouped in the "Übungen: Variablen im Programm"
 * topic instead, to avoid arbitrarily splitting worksheets that use both.
 */

export const variablenDeklarationTopic: Topic = {
  id: 'topic-java-variablen-deklaration',
  slug: 'variablen-deklaration',
  moduleSlug: 'java',
  title: 'Variablen: Deklaration und Datentypen',
  shortIntro: 'Was eine Variable ist, wie man sie deklariert und initialisiert – und welche Datentypen es in Java gibt.',
  order: 2,
  exercises: [],
  content: [
    { type: 'heading', level: 2, text: 'Deklaration und Initialisierung' },
    {
      type: 'code',
      language: 'java',
      code: `// b02_variablen
// a_typ

public class A_Variable
{
   public static void main(String[] args)
   {
      // Eine Variable ist ein "Behaelter".
      // Technisch ist eine Variable ein
      // bestimmter (kleiner) Bereich im
      // Arbeitsspeicher.
      // Eine Variable hat einen Typ und
      // eine Bezeichnung.
      // Der Inhalt des "Behaelters" kann
      // sich aendern, Typ und Bezeichnung
      // nicht.

      // Die Bezeichnung muss mit einem
      // Buchstaben oder mit einem
      // Unterstrich _ beginnen und darf
      // danach auch Ziffern enthalten.
      // Sie darf auch Waehungssymbole wie €
      // oder $ enthalten.

      // Variablen-Bezeichnungen sollen immer
      // mit einem Kleinbuchstaben beginnen und
      // dann in der "kamelHoeckerSchreibweise"
      // fortgesetzt werden.

      // Der Typ einer Variablen bestimmt die
      // zulaessige Art des Inhalts der Variablen.
      // Er bestimmt auch die Groesse des
      // benoetigten Speicherbereichs.

      // Die Festlegung des Typs und der
      // Bezeichnung einer Variablen nennt man
      // DEKLARATION. Der Aufbau einer Deklaration
      // ist immer gleich: Erst wird der Typ
      // angegeben, dann die Bezeichnung:

      int gehalt; // int bedeutet ganze Zahl.

      // Durch eine Zuweisung bekommt eine Variable
      // einen Inhalt bzw. einen Wert. Eine
      // Zuweisung erfolgt immer von rechts nach
      // links. Die erste Zuweisung einer Variablen
      // nennt man INITIALISIERUNG.

      gehalt = 1000;

      // Der Inhalt einer Variablen kann auf dem
      // Bildschirm ausgegeben werden. Dazu wird
      // einfach die Bezeichnung der Variablen
      // angegeben:

      System.out.println( gehalt );
      System.out.println("gehalt");

      // Wenn man die Bezeichnung der Variablen
      // sehen will, muss man sie in Anfuehrungs-
      // zeichen schreiben.

      // Der Inhalt bzw. der Wert der Variablen
      // kann geaendert werden:

      gehalt = 1500; // Zweite Zuweisung

      System.out.println( gehalt );

      // Deklaration und Initialisierung einer
      // Variablen koennen auch in EINER Zeile
      // erfolgen:

      int praemie = 300;

      System.out.println(praemie);
   }
}`,
    },

    { type: 'heading', level: 2, text: 'Die wichtigsten Datentypen' },
    {
      type: 'code',
      language: 'java',
      code: `// b02_variablen
// a_typ

public class B_Datentypen
{
   public static void main(String[] args)
   {
      // Die wichtigsten Datentypen sind:
      //
      // int     ganze Zahl, signiert, 4 Byte, Zahlenbereich
      //         ca. -2 Milliardenbis ca. +2 Milliarden.
      // long    ganze Zahl, signiert, 8 Byte.
      // double  "Kommazahl" (aber mit Dezimalpunkt), 8 Byte.
      // boolean logischer Typ (true, false).
      // char    Zeichentyp, repraesentiert ein Unicodezeichen,
      //         intern eine ganze Zahl, nicht signiert,
      //         2 Byte, Zahlenbereich 0 bis 65535.
      //
      // String  Referenztyp, Zeichenkette (Text).

      String  artikelbezeichnung = "Beamer";
      long    artikelNr          = 9876543210L; // L = long
      double  listenpreis        = 389.95;
      int     lagerbestand       = 120;
      boolean exportIstZulaessig = true;
      char    lagerKategorie     = 'A';
      char    artikelGruppe      = 72;
   // char    serienNr           = 65536; // Geht nicht

      // Ein Wert, der im Programmcode explizit angegeben
      // wird (z.B. die int-Zahl 120 oder der String "Beamer"
      // oder der Wahrheitswert true) wird als LITERAL
      // bezeichnet.

      System.out.println(artikelbezeichnung);
      System.out.println(artikelNr);
      System.out.println(listenpreis);
      System.out.println(lagerbestand);
      System.out.println(exportIstZulaessig);
      System.out.println(lagerKategorie);
      System.out.println(artikelGruppe);
   }
}`,
    },

    { type: 'heading', level: 2, text: 'Typkonvertierung (Casting)' },
    {
      type: 'code',
      language: 'java',
      code: `// b02_variablen
// a_typ

public class C_TypKonvertierung
{
   public static void main(String[] args)
   {
      double weinFass;
      long   weinFlasche;
      int    weinGlas;

      weinFlasche = 1000L;

   // weinGlas = weinFlasche;

      // ... geht nicht.
      // Der Inhalt einer Flasche passt nicht in ein Glas.
      //
      // error: incompatible types:
      // possible lossy conversion from long to int
      //
      // Die 8 Byte einer long-Variablen passen nicht in
      // die 4 Byte einer int-Variablen.

      weinGlas = 200;

      weinFlasche = weinGlas;

      // ... das geht.
      // 4 Byte einer int-Variablen passen immer in die
      // 8 Byte einer long-Variablen.

      weinFass = weinFlasche;

      // ... das geht auch.
      // Der Inhalt einer long-Variablen passt immer in
      // eine double-Variable.

   // weinFlasche = weinFass;

      // ... double in long geht nicht.

      //=============================================================

      // Erzwungene Typkonvertierung (Typecasting)

      long vermoegen1 =       2147483647L; // Das ist die groesste int.
      int  vermoegen2 = (int) 2147483647L;

      // 2147483647L ist binaer:
      // 00000000 00000000 00000000 00000000 01111111 11111111 11111111 11111111
      // Beim Typecasting zu einer int werden die ersten 4 Byte abgeschnitten.
      // Es bleibt die int:                  01111111 11111111 11111111 11111111
      // ... also dezimal 2147483647. Es geht nichts verloren.

      System.out.println(vermoegen1);
      System.out.println(vermoegen2);
      System.out.println();

      long vermoegen3 =       4294967296L; // Zu gross fuer int.
      int  vermoegen4 = (int) 4294967296L; // Bei der erzwungenen
                                           // Typkonvertierung geht
                                           // Genauigkeit verloren.
      // 4294967296L ist binaer:
      // 00000000 00000000 00000000 00000001 00000000 00000000 00000000 00000000
      // Beim Typecasting zu einer int werden die ersten 4 Byte abgeschnitten.
      // Es bleibt die int:                  00000000 00000000 00000000 00000000
      // ... also dezimal 0. Es geht erhebliche Genauigkeit verloren.

      System.out.println(vermoegen3);
      System.out.println(vermoegen4);
   }
}`,
    },
  ],
}
