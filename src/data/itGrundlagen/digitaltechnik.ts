import type { Topic } from '../../types/content'

/**
 * Source: 1_IT_Grundlagen/1.5_Digitaltechnik (W. Schindler): t01_Schaltungen_
 * und_Schaltwerke, t02_digitec_Bilder, t03_Dekodierer, t04_Disjunktive_NF_
 * mit_1, t05_Boolesche Algebra, t06_KV_Diagramm, and worksheets A01-A10.
 *
 * None of the ten worksheets contain an answer key. Most (Unterwasserstation,
 * Margarine-Fabrik, Alarmanlage) are open circuit-design tasks meant to be
 * worked out on paper/by a teacher, not single-answer drills, so they are
 * preserved here as full scenario descriptions rather than forced into an
 * auto-graded exercise shape that would misrepresent them — `exercises`
 * stays empty rather than inventing single "correct answers" for open
 * design problems. The one worksheet with an unambiguous, fully-specified
 * 2-gate circuit (A04, a real Handelskammer exam question) is shown fully
 * worked as a content example, since its logic is stated in prose (not
 * reconstructed from an uncertain diagram).
 */
export const digitaltechnikTopic: Topic = {
  id: 'topic-it-grundlagen-digitaltechnik',
  slug: 'digitaltechnik',
  moduleSlug: 'it-grundlagen',
  title: 'Digitaltechnik',
  shortIntro: 'Logikgatter, Addierschaltungen, Flip-Flops, Boolesche Algebra und das KV-Diagramm.',
  order: 5,
  keyPoints: [
    'Die vier Grundgatter sind UND, ODER, X-OR und der Inverter (NICHT) – jedes mit einer eigenen Wahrheitstabelle.',
    'Ein Halbaddierer addiert zwei einstellige Binärzahlen, ein Volladdierer zusätzlich einen Übertrag aus einer vorherigen Stelle.',
    'Ein Dekodierer mit drei Eingängen liefert für jeden der acht Eingangszustände genau einen Ausgang mit einer Eins.',
    'Die disjunktive Normalform verknüpft alle Eingangszustände, die eine Eins liefern sollen, mit ODER.',
    'Im KV-Diagramm werden benachbarte Einsen zu Zweier-, Vierer- oder Achterpäckchen zusammengefasst, um eine minimierte Formel zu finden.',
  ],
  exercises: [],
  content: [
    { type: 'heading', level: 2, text: 'Grundgatter' },
    {
      type: 'paragraph',
      text: 'Digitale Schaltungen werden aus wenigen Grundbausteinen (Gattern) aufgebaut. Jedes Gatter hat ein festes Symbol und eine Wahrheitstabelle, die für jede Eingangskombination den Ausgangszustand festlegt.',
    },
    {
      type: 'table',
      headers: ['Gatter', 'Symbol', 'Bedeutung'],
      rows: [
        ['UND (&)', '&', 'Ausgang ist nur dann 1, wenn alle Eingänge 1 sind.'],
        ['ODER (≥1)', '≥1', 'Die Anzahl der Leitungen, die an sind, muss mindestens 1 sein.'],
        ['X-OR (=1)', '=1', 'Bei den Eingangsleitungen darf nur eine an sein, damit der Ausgang an ist.'],
        ['Inverter (NICHT)', 'Kästchen mit Kreis am Ausgang', 'Der Ausgang ist immer das Gegenteil vom Eingang.'],
      ],
    },
    {
      type: 'table',
      headers: ['A', 'B', 'UND', 'ODER', 'X-OR'],
      rows: [
        ['0', '0', '0', '0', '0'],
        ['0', '1', '0', '1', '1'],
        ['1', '0', '0', '1', '1'],
        ['1', '1', '1', '1', '0'],
      ],
    },

    { type: 'heading', level: 2, text: 'Addierschaltungen' },
    {
      type: 'paragraph',
      text: 'Der Halbaddierer (HA) hat zwei Eingänge (A, B) und zwei Ausgänge: Übertrag (Ü) und Summe (X). Er addiert zwei einstellige Binärzahlen; das Ergebnis wird als zweistellige Binärzahl interpretiert.',
    },
    {
      type: 'table',
      headers: ['A', 'B', 'Ü', 'X'],
      rows: [
        ['0', '0', '0', '0'],
        ['0', '1', '0', '1'],
        ['1', '0', '0', '1'],
        ['1', '1', '1', '0'],
      ],
    },
    {
      type: 'paragraph',
      text: 'Der Volladdierer (VA) hat immer genau drei Eingänge (A, B, C) und stellt damit auch einen Übertrag aus einer vorherigen Stelle dar. Auch er liefert Übertrag (Ü) und Summe (X) als Ausgänge.',
    },
    {
      type: 'table',
      headers: ['A', 'B', 'C', 'Ü', 'X'],
      rows: [
        ['0', '0', '0', '0', '0'],
        ['0', '0', '1', '0', '1'],
        ['0', '1', '0', '0', '1'],
        ['0', '1', '1', '1', '0'],
        ['1', '0', '0', '0', '1'],
        ['1', '0', '1', '1', '0'],
        ['1', '1', '0', '1', '0'],
        ['1', '1', '1', '1', '1'],
      ],
    },

    { type: 'heading', level: 2, text: 'Schaltwerke: Flip-Flops' },
    {
      type: 'paragraph',
      text: 'Ein RS-Flip-Flop besteht aus zwei Eingängen (S, R) und einem Ausgang. Der Set-Eingang schaltet es ein, der Reset-Eingang schaltet es wieder aus.',
    },
    {
      type: 'paragraph',
      text: 'Ein D-Flip-Flop enthält immer einen RS-Flip-Flop und sorgt zusätzlich dafür, dass beide internen Eingänge nie gleichzeitig aktiv sind. Es hat einen Dateneingang (D) und einen Schalteingang (E), der es erlaubt, die Daten zu speichern – ohne Erlaubnis des Schalteingangs können keine Daten ankommen.',
    },

    { type: 'heading', level: 2, text: 'Dekodierer' },
    {
      type: 'paragraph',
      text: 'Eine Dekodierer-Schaltung mit drei Eingängen (A, B, C) stellt für jeden der acht möglichen Eingangszustände einen eigenen Ausgang zur Verfügung. Bei jedem Eingangszustand liefert genau ein Ausgang eine Eins.',
    },

    { type: 'heading', level: 2, text: 'Disjunktive Normalform (DNF) mit 1' },
    {
      type: 'paragraph',
      text: 'Bei der disjunktiven Normalform mit Eins wird die gewöhnliche Dekodier-Schaltung benutzt: Für alle Eingangszustände, die eine Eins liefern sollen, werden die entsprechenden Ausgänge mit ODER (Disjunktion) zusammengefasst.',
    },
    {
      type: 'example',
      title: 'DNF für eine gegebene Wahrheitstabelle',
      text: 'Wahrheitstabelle A,B,C → X: 000→0, 001→1, 010→1, 011→1, 100→0, 101→1, 110→0, 111→1. Disjunktive Normalform: X = (Ā∧B̄∧C) ∨ (Ā∧B∧C̄) ∨ (Ā∧B∧C) ∨ (A∧B̄∧C) ∨ (A∧B∧C).',
    },

    { type: 'heading', level: 2, text: 'Boolesche Algebra (Schaltalgebra)' },
    {
      type: 'table',
      headers: ['Gesetz', 'Formel'],
      rows: [
        ['Assoziativgesetze', '(A∧B)∧C = A∧(B∧C) = A∧B∧C   /   (A∨B)∨C = A∨(B∨C) = A∨B∨C'],
        ['Kommutativgesetze', 'A∧B = B∧A   /   A∨B = B∨A'],
        ['Gesetze mit Konstanten', '0̄=1, 1̄=0, A∧Ā=0, A∧1=A, A∧0=0, A∨Ā=1, A∨1=1, A∨0=A'],
        ['Absorptionsgesetze', 'A∧(A∨B) = A   /   A∨(A∧B) = A'],
        ['Idempotenzgesetze', 'A∧A = A   /   A∨A = A'],
        ['Distributivgesetze', 'A∧(B∨C) = (A∧B)∨(A∧C)   /   A∨(B∧C) = (A∨B)∧(A∨C)'],
        ['De Morgan’sche Regeln', '¬(A∧B) = Ā∨B̄   /   ¬(A∨B) = Ā∧B̄'],
        ['Negation der Negation', 'A̿ = A'],
      ],
    },

    { type: 'heading', level: 2, text: 'Das KV-Diagramm (Karnaugh-Veitch-Diagramm)' },
    {
      type: 'paragraph',
      text: 'In der KV-Tafel werden die Eingangszustände als Randbeschriftung dargestellt und die zugehörigen Ausgangszustände in die Tabellenkästchen eingetragen. Anschließend werden Zweier-, Vierer- und Achterpäckchen von Einsen gesucht, die nebeneinander oder untereinander stehen (auch gegenüberliegende Außenkanten gelten als benachbart). Zu jedem Päckchen werden die relevanten Variablen bestimmt: Eine Variable ist irrelevant, wenn sie innerhalb des Päckchens sowohl invertiert als auch nicht invertiert vorkommt.',
    },
    {
      type: 'example',
      title: 'KV-Diagramm für dieselbe Wahrheitstabelle wie oben',
      text: 'Für die Wahrheitstabelle A,B,C → X von oben ergeben sich zwei Päckchen: ein Viererpäckchen (alle Felder mit C=1 – relevante Variable: C, denn A und B kommen dort invertiert wie nichtinvertiert vor) und ein Zweierpäckchen (Felder mit A=0, B=1 – relevante Variablen: Ā und B). Die minimierte Formel lautet X = C ∨ (Ā∧B) – kürzer als die disjunktive Normalform, aber logisch gleichwertig.',
    },

    { type: 'heading', level: 2, text: 'Original-Prüfungsaufgabe: Serverraum-Klimasteuerung' },
    {
      type: 'paragraph',
      text: 'Aus einer echten Handelskammer-Prüfung (G2, Sommer 2018): Im Serverraum wird die Temperatur an drei Stellen überwacht. x1, x2 und x3 liefern ein Signal (1), wenn der jeweilige Fühler eine Temperatur über 25 °C misst. Die Schaltung verknüpft x1 und x2 über ein UND-Gatter; dessen Ausgang wird zusammen mit x3 über ein ODER-Gatter zum Ausgang y geführt.',
    },
    {
      type: 'table',
      headers: ['x1', 'x2', 'x3', 'y'],
      rows: [
        ['1', '1', '1', '1'],
        ['1', '1', '0', '1'],
        ['1', '0', '1', '1'],
        ['1', '0', '0', '0'],
        ['0', '1', '1', '1'],
        ['0', '1', '0', '0'],
        ['0', '0', '1', '1'],
        ['0', '0', '0', '0'],
      ],
    },
    {
      type: 'note',
      text: 'y = (x1 ∧ x2) ∨ x3 – die Klimaanlage schaltet sich ein, sobald entweder beide ersten Fühler oder der dritte Fühler eine kritische Temperatur melden.',
    },

    { type: 'heading', level: 2, text: 'Übungsaufgaben aus der Praxis' },
    {
      type: 'paragraph',
      text: 'Die Original-Arbeitsblätter enthalten drei ausführliche Szenarien zum eigenständigen Entwerfen einer Schaltung (Wahrheitstabelle aufstellen, Formel herleiten, Schaltung zeichnen). Sie sind bewusst ohne Lösung, da sie zum selbstständigen Entwurf gedacht sind:',
    },
    {
      type: 'example',
      title: 'Unterwasserstation (Schleusensteuerung)',
      text: 'Eine Forschungsstation unter Wasser hat eine Schleuse mit zwei wasserdicht schließenden Türen, die nie beide gleichzeitig offen sein dürfen. Sensor A liefert 1, wenn die Außentür geschlossen ist; Sensor B (Wasserfühler) liefert 1, wenn sich zwischen den Türen Wasser befindet. Die Innentür darf nur geöffnet werden (Ausgang X = 1), wenn die Außentür geschlossen ist und sich kein Wasser zwischen den Türen befindet. Aufgabe: Schaltbelegungstabelle, Formel und Schaltung entwerfen.',
    },
    {
      type: 'example',
      title: 'Margarine-Fabrik (Ventilsteuerung)',
      text: 'Ein Ventil V steuert die Zuleitung zu einer Margarine-Abfüllmaschine. Temperaturfühler M meldet 1, wenn die Temperatur über der Mindesttemperatur liegt; Temperaturfühler H meldet 1, wenn sie über der Höchsttemperatur liegt; ein Schalter R meldet 1 bei Stellung „Reinigen" und 0 bei „Abfüllen". Das Ventil soll offen sein, wenn (M erfüllt und H nicht erfüllt und R auf „Abfüllen") oder (H erfüllt und R auf „Reinigen"). Aufgabe: Wahrheitstabelle, KV-Tafel und daraus eine optimale Schaltung entwerfen.',
    },
    {
      type: 'example',
      title: 'Alarmanlage',
      text: 'Eine Alarmanlage wird von zwei Bewegungsmeldern (B1, B2) und zwei Wärmesensoren (W1, W2) angesteuert, die je eine 1 liefern, wenn sie ausgelöst wurden. Der Alarm soll aktiviert werden, wenn mindestens zwei Sensoren gleichzeitig ausgelöst wurden, darunter mindestens ein Bewegungsmelder. Aufgabe: Schaltbelegungstabelle, KV-Diagramm und eine Schaltung mit möglichst wenigen Bausteinen (Vorgabe: je ein Baustein 7408 für UND- und 7432 für ODER-Gatter) entwerfen.',
    },
  ],
}
