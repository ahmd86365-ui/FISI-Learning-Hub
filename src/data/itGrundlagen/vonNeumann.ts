import type { Topic } from '../../types/content'

/**
 * Source: 1_IT_Grundlagen/1.1_Von_Neumann_Architektur (W. Schindler, sigma-training,
 * "Von-Neumann-Rechner" Druckfassung Teile 1-4). No exercise worksheets exist for
 * this topic in the source material, so `exercises` stays empty rather than
 * inventing any.
 */
export const vonNeumannTopic: Topic = {
  id: 'topic-it-grundlagen-von-neumann',
  slug: 'von-neumann-architektur',
  moduleSlug: 'it-grundlagen',
  title: 'Von-Neumann-Architektur',
  shortIntro:
    'Wie ein Computer nach dem Von-Neumann-Modell aufgebaut ist und wie er Befehl für Befehl arbeitet.',
  order: 1,
  keyPoints: [
    'Ein Von-Neumann-Rechner besteht aus vier Hauptteilen: Steuerwerk, Rechenwerk, Speicherwerk und Ein-/Ausgabewerk.',
    'Daten und Programme liegen im selben Speicher – das ist das Kernprinzip der Von-Neumann-Architektur.',
    'Der Rechner arbeitet im ständigen Wechsel aus "Befehl laden" (Fetch) und "Befehl ausführen" (Execute).',
    'Jeder Maschinenbefehl besteht aus einem Operationscode und – falls nötig – einer Speicherplatz-Adresse (Operand).',
    'Auf unterster Ebene liegen Befehle, Adressen und Daten ausschließlich als Bitfolgen (Binärcode) im Speicher.',
  ],
  exercises: [],
  content: [
    { type: 'heading', level: 2, text: 'John von Neumann' },
    {
      type: 'paragraph',
      text: 'John von Neumann (1903–1957) war Mathematiker, Quantenphysiker und Informatiker. Nach ihm ist das grundlegende Bauprinzip fast aller heutigen Computer benannt: die Von-Neumann-Architektur.',
    },

    { type: 'heading', level: 2, text: 'Hauptteile der Zentraleinheit' },
    {
      type: 'paragraph',
      text: 'Einen Rechner kann man mit einer Stadt vergleichen, zum Beispiel mit Hamburg: Die Stadt hat ein Regierungsviertel, ein Industriegebiet, eine Speicherstadt und einen Verkehrsknotenpunkt. Genauso besteht die Zentraleinheit eines Rechners aus vier Hauptteilen, die jeweils eine eigene Aufgabe übernehmen.',
    },
    {
      type: 'table',
      headers: ['Hauptteil', 'Aufgabe'],
      rows: [
        ['Steuerwerk', 'steuert alle Abläufe'],
        ['Rechenwerk', 'führt alle Rechnungen durch'],
        ['Speicherwerk', 'enthält Daten und Programme'],
        ['Ein-/Ausgabewerk', 'bildet die Verbindung zur Außenwelt'],
      ],
    },
    {
      type: 'note',
      text: 'Verbunden sind die Hauptteile über drei Busse: der Datenbus überträgt Daten und Befehle, der Adressbus überträgt Speicherplatz-Adressen, und der Steuerbus überträgt Steuerimpulse.',
    },

    { type: 'heading', level: 2, text: 'Der "Herzschlag" des Rechners' },
    {
      type: 'paragraph',
      text: 'Der Rechner arbeitet in einem ständig wiederkehrenden Zyklus aus zwei Phasen: Befehl laden (Fetch) und Befehl ausführen (Execute). Dieser fortlaufende Wechsel wird als der "Herzschlag" des Rechners bezeichnet.',
    },

    { type: 'heading', level: 2, text: 'Einzelteile der Zentraleinheit' },
    {
      type: 'paragraph',
      text: 'Innerhalb der vier Hauptteile arbeiten mehrere Einzelbausteine zusammen:',
    },
    {
      type: 'table',
      headers: ['Bauteil', 'Funktion'],
      rows: [
        [
          'Befehls-Dekodierer (mit Mikroprogramm-ROM)',
          'Ist über den Steuerbus mit allen Bauteilen der Zentraleinheit verbunden. Setzt jeden Befehl, den er vom Befehls-Register erhält, in eine Folge von Steuerimpulsen um. Für jeden möglichen Befehl ist diese Folge im Mikroprogramm-ROM fest einprogrammiert.',
        ],
        [
          'ALU (Arithmetisch-Logische Einheit)',
          'Führt alle Berechnungen durch – rechnerische Operationen (z. B. Addition zweier Zahlen) ebenso wie logische Operationen (z. B. Vergleich zweier Zahlen). Nutzt das Akkumulator-Register zum Zwischenspeichern der Operanden bzw. Rechenergebnisse.',
        ],
        [
          'Adress-Dekodierer',
          'Steuert durch einen Steuerimpuls denjenigen Speicherplatz an, dessen Adresse ihm der Adressbus übermittelt. Beim Ein-/Ausgabewerk steuert er entsprechend die passende Schnittstelle an.',
        ],
        [
          'Weitere Register',
          'Befehls-Register, Befehls-Zähl-Register, Adress-Register und Stack-Pointer im Steuerwerk; Akkumulator, Ergebnis-Register und Flag-Register im Rechenwerk.',
        ],
      ],
    },

    { type: 'heading', level: 2, text: 'Beispiel: Eine Addition' },
    {
      type: 'paragraph',
      text: 'Sollen die Werte aus Speicherplatz 200 (Wert 3) und Speicherplatz 201 (Wert 2) addiert und das Ergebnis in Speicherplatz 202 abgelegt werden, läuft das in vier Schritten ab:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        'Der erste Summand wird aus dem Arbeitsspeicher in das Akkumulator-Register des Rechenwerks kopiert.',
        'Der erste Summand wird aus dem Akkumulator in die ALU geleitet. Gleichzeitig wird der zweite Summand direkt aus dem Arbeitsspeicher ebenfalls in die ALU geleitet. Die ALU addiert die Summanden; das Ergebnis wird vom Ergebnis-Register aufgenommen.',
        'Das Rechenergebnis wird vom Ergebnis-Register in den Akkumulator kopiert.',
        'Das Rechenergebnis wird vom Akkumulator in den Arbeitsspeicher kopiert.',
      ],
    },
    {
      type: 'example',
      title: 'Speicherinhalt vor und nach der Addition',
      text: 'Speicherplatz 200 = 3, Speicherplatz 201 = 2. Nach der Ausführung steht in Speicherplatz 202 das Ergebnis 5.',
    },

    { type: 'heading', level: 2, text: 'Steuerung durch Maschinenbefehle' },
    {
      type: 'paragraph',
      text: 'Diese vier Schritte laufen nicht "fest verdrahtet" ab, sondern werden durch ein im Speicher abgelegtes Programm aus Maschinenbefehlen gesteuert. Jeder Befehl besteht aus einem Operationscode (was soll getan werden) und – falls nötig – einer Speicherplatz-Adresse als Operand.',
    },
    {
      type: 'example',
      title: 'Programm für die Beispiel-Addition',
      text: 'Das Programm besteht aus den Befehlen "In Akku aus Speicherplatz 200", "Addiere Speicherplatz 201" und "Aus Akku in Speicherplatz 202".',
    },
    {
      type: 'paragraph',
      text: 'Das Befehls-Zähl-Register (der Programmzähler) speichert die Adresse des nächsten auszuführenden Befehls. Nach dem Laden (Fetch) eines Befehls wird es automatisch um 1 erhöht, sodass der Rechner im nächsten Zyklus automatisch mit dem nächsten Befehl fortfährt.',
    },

    { type: 'heading', level: 2, text: 'Maschinenbefehle in Hex und Binär' },
    {
      type: 'paragraph',
      text: 'Damit der Rechner die Befehle verarbeiten kann, werden sie letztlich als reine Bitfolgen im Speicher abgelegt. Jeder Operationscode entspricht dabei einem festen Bitmuster – im Beispielmaterial etwa:',
    },
    {
      type: 'table',
      headers: ['Opcode (hex)', 'Bedeutung'],
      rows: [
        ['A0', 'In Akku aus Speicherplatz'],
        ['A2', 'Addiere zum Akku Speicherplatz'],
        ['CD', 'Aus Akku in Speicherplatz'],
        ['20', 'Software-Interrupt (z. B. Programm beenden)'],
      ],
    },
    {
      type: 'note',
      text: 'Auf der untersten Ebene bestehen sowohl die Befehle als auch die Adressen und Daten ausschließlich aus Nullen und Einsen: Opcode und Operanden liegen als Bytefolgen im Speicher.',
    },
  ],
}
