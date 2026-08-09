import type { Exercise, Topic } from '../../types/content'

/**
 * Source: 1_IT_Grundlagen/1.4_Codesysteme (W. Schindler): t01_ASCII_Code,
 * t02_Unicode, t03_UTF-16, t04_UTF_8, and worksheets A32-A38. The worksheets
 * are open-ended lookup/encoding tasks; A34(d,e) is modelled as a graded
 * exercise since its answer follows directly from the UTF-8 byte-length
 * table given in the same material. The multi-step encode/decode tasks
 * (A33, A34 f/g, A35+A36, A37+A38) are preserved as fully worked examples in
 * the lesson content — their inputs are given in the worksheets, so the
 * results are computed by mechanically applying the taught UTF-16/UTF-8
 * algorithms, not invented. A32 and A34(a-c) ask for the Unicode number of
 * "©", which none of the source files state — that lookup step is
 * preserved as a described skill (using charmap / Alt+X) rather than a
 * fabricated codepoint.
 */

const TOPIC_SLUG = 'codesysteme'

const exercises: Exercise[] = [
  {
    id: 'ex-cs-a34-d',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'medium',
    question:
      'Geben Sie in binärer Schreibweise (ohne führende Nullen) die größte Unicode-Nummer an, die mit UTF-8 in zwei Byte gespeichert werden kann.',
    correctAnswer: '11111111111',
    explanation: 'Der Zwei-Byte-Bereich von UTF-8 reicht bis 00 00 07 FF (hex) = 2047 dez = 11111111111 bin (11 Einsen).',
  },
  {
    id: 'ex-cs-a34-e',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'easy',
    question: 'Geben Sie dieselbe größte Zwei-Byte-UTF-8-Unicode-Nummer in hexadezimaler Schreibweise an.',
    correctAnswer: '7FF',
    explanation: 'Der Zwei-Byte-Bereich von UTF-8 reicht laut Tabelle bis 00 00 07 FF.',
  },
]

export const codesystemeTopic: Topic = {
  id: 'topic-it-grundlagen-codesysteme',
  slug: 'codesysteme',
  moduleSlug: 'it-grundlagen',
  title: 'Codesysteme',
  shortIntro: 'Wie Zeichen als Zahlen kodiert werden: ASCII, Unicode, UTF-16 und UTF-8.',
  order: 4,
  keyPoints: [
    'ASCII ist eine 7-Bit-Zeichenkodierung mit 128 Code-Nummern; Erweiterungen auf 8 Bit (Codepages) fügen 128 weitere Zeichen hinzu.',
    'Unicode ordnet jedem Schriftzeichen einen eindeutigen Codepunkt zu, notiert als U+ gefolgt von einer hexadezimalen Zahl.',
    'UTF-16 kodiert jedes Zeichen in 2 oder 4 Byte; Zeichen oberhalb der Basic Multilingual Plane brauchen ein Surrogate-Paar.',
    'UTF-8 kodiert jedes Zeichen in 1 bis 4 Byte und ist in den ersten 128 Zeichen identisch mit ASCII.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'ASCII-Code' },
    {
      type: 'paragraph',
      text: 'Der American Standard Code for Information Interchange (ASCII) ist eine 7-Bit-Zeichenkodierung und umfasst damit 128 Code-Nummern. 95 davon sind druckbare Zeichen (einschließlich des Leerzeichens, Code 20 hex); die ersten 32 Nummern sowie die Nummer 7F hex (127 dez) sind Steuerzeichen.',
    },
    {
      type: 'table',
      headers: ['Code (hex)', 'Code (dez)', 'Kürzel', 'Bedeutung'],
      rows: [
        ['07', '07', 'BEL', 'Tonsignal (Bell)'],
        ['08', '08', 'BS', 'Rückschritt (Backspace)'],
        ['09', '09', 'HT', 'Horizontal-Tabulator'],
        ['0A', '10', 'LF', 'Zeilenvorschub (Line Feed)'],
        ['0C', '12', 'FF', 'Seitenvorschub (Form Feed)'],
        ['0D', '13', 'CR', 'Wagenrücklauf (Carriage Return)'],
      ],
    },
    {
      type: 'note',
      text: 'In Windows-Umgebungen wird ein Zeilenwechsel durch zwei Byte dargestellt: CR+LF (0D+0A hex). In UNIX-/Linux-Umgebungen genügt LF (0A hex) allein.',
    },
    {
      type: 'paragraph',
      text: 'Eine der wichtigsten Erweiterungen ist die Vergrößerung auf 8 Bit, also 256 Code-Nummern: Die obere Hälfte der Tabelle entspricht dem ursprünglichen 7-Bit-ASCII-Code, die untere Hälfte einer Erweiterung – zum Beispiel der Codepage 858, die zusätzliche Buchstaben mit Akzenten sowie das Eurozeichen enthält. Im englischen Sprachraum wird oft die Codepage 437 benutzt; für andere Schriftsysteme (z. B. kyrillisch, arabisch) existieren eigene Codepages.',
    },
    {
      type: 'note',
      text: 'Der weit verbreitete Zeichensatz Windows-1252 (Codepage 1252) ist in den ersten 128 Zeichen identisch mit ASCII und entspricht darüber hinaus ISO 8859-1 (Latin-1) – mit Ausnahme des Bereichs 80 hex bis 9F hex, der bei Latin-1 nicht belegt ist.',
    },

    { type: 'heading', level: 2, text: 'Unicode' },
    {
      type: 'paragraph',
      text: 'Unicode ist ein Standard, in dem langfristig für jedes sinntragende Schriftzeichen oder Textelement ein Code festgelegt wird (ISO-Kennzeichnung: ISO 10646, dort als Universal Character Set, UCS, bezeichnet). Die ersten 256 Zeichen des Unicode entsprechen der ISO-8859-1-Kodierung (Latin1).',
    },
    {
      type: 'paragraph',
      text: 'Jedem Zeichen ist eine Nummer zugeordnet – der Codepunkt. Er wird hexadezimal (mindestens vierstellig) mit vorangestelltem „U+" dargestellt, z. B. U+00DF für das ß. Insgesamt gibt es 1.114.112 Codepunkte (U+0000 bis U+10FFFF).',
    },
    {
      type: 'paragraph',
      text: 'Der Unicode ist in 17 Ebenen (Planes) zu je 65.536 Zeichen gegliedert. Aktuell werden u. a. folgende Ebenen benutzt: die BMP (Basic Multilingual Plane, Ebene 0) für aktuell gebräuchliche Schriftsysteme, Satzzeichen und Symbole; die SMP (Supplementary Multilingual Plane, Ebene 1) vor allem für historische Schriftsysteme; die SIP (Supplementary Ideographic Plane, Ebene 2) für seltene CJK-Zeichen (China/Japan/Korea); die SSP (Supplementary Special-purpose Plane, Ebene 14) u. a. für HTML-Sonderzeichen; sowie zwei private Nutzungsbereiche (PUA-A und PUA-B, Ebenen 15 und 16).',
    },
    {
      type: 'note',
      text: 'Manche Unicode-Zeichen haben keine Glyphe (grafische Darstellung), z. B. der Tabulator (U+0009) oder der Zeilenvorschub (U+000A). Ob ein Zeichen angezeigt wird, hängt zudem davon ab, ob die verwendete Schriftart eine passende Glyphe enthält – TrueType/OpenType-Schriften können höchstens 65.536 Zeichen enthalten, während der gesamte Unicode-Coderaum weit mehr als 100.000 Schriftzeichen umfasst.',
    },
    {
      type: 'paragraph',
      text: 'In MS Word lässt sich ein Unicode-Zeichen über seine Nummer (oder „U+" + Nummer) gefolgt von Alt+C (im Dokument) bzw. Alt+X (in Dialogfeldern) einfügen; dieselbe Tastenkombination zeigt auch die Nummer eines bereits vorhandenen Zeichens an. Unter Windows lässt sich außerdem das Programm „charmap" (Zeichentabelle) zum Einfügen von Unicode-Zeichen benutzen.',
    },

    { type: 'heading', level: 2, text: 'UTF-16' },
    {
      type: 'paragraph',
      text: 'UTF-16 (Universal Multiple-Octet Coded Character Set Transformation Format for 16 Planes of Group 00) ist die älteste Kodierung für Unicode-Zeichen. Jedem Zeichen wird eine Bytekette von zwei oder vier Byte zugeordnet. Während UTF-8 vor allem in Internet-Protokollen zentral ist, wird UTF-16 oft zur internen Zeichenkettenrepräsentation verwendet, etwa in Java.',
    },
    {
      type: 'paragraph',
      text: 'Zeichen der BMP (U+0000 bis U+FFFF) werden direkt auf die 16 Bit einer UTF-16-Code-Unit abgebildet. Zeichen oberhalb der BMP benötigen ein Surrogate-Paar aus zwei 16-Bit-Wörtern.',
    },
    {
      type: 'note',
      text: 'Bildung des Surrogate-Paars: Von der Zeichennummer wird zunächst 65536 dez (= 10000 hex, die Größe der BMP) abgezogen. Die entstehende 20-Bit-Zahl wird in zwei Blöcke zu je 10 Bit geteilt. Dem ersten Block wird 110110 vorangestellt (High-Surrogate, Bereich U+D800–U+DBFF), dem zweiten Block 110111 (Low-Surrogate, Bereich U+DC00–U+DFFF).',
    },
    {
      type: 'paragraph',
      text: 'Je nachdem, welches der beiden Bytes einer Code-Unit zuerst übertragen bzw. gespeichert wird, spricht man von Big Endian (UTF-16BE) oder Little Endian (UTF-16LE). Oft wird das Zeichen U+FEFF (BOM, byte order mark) an den Anfang der Daten gesetzt; wird es beim Empfänger als das ungültige Zeichen U+FFFE interpretiert, muss die Byte-Reihenfolge vertauscht werden.',
    },
    {
      type: 'table',
      headers: ['Zeichen', 'Unicode', 'UTF-16 (hex)'],
      rows: [
        ['y', 'U+0079', '00 79'],
        ['ä', 'U+00E4', '00 E4'],
        ['€', 'U+20AC', '20 AC'],
        ['𝄞 (Violinschlüssel)', 'U+1D11E', 'D8 34 DD 1E'],
      ],
    },

    { type: 'heading', level: 2, text: 'UTF-8' },
    {
      type: 'paragraph',
      text: 'UTF-8 (8-Bit Universal Character Set Transformation Format) ordnet jedem Unicode-Zeichen eine Zeichenkette zwischen einem und vier Byte zu. Die 7-Bit-ASCII-Zeichen (Unicode 0 bis 127) werden dabei unverändert als ein Byte dargestellt.',
    },
    {
      type: 'table',
      headers: ['Unicode-Bereich', 'Bytelänge', 'UTF-8-Kodierung (binär)'],
      rows: [
        ['0000 0000 – 0000 007F', 'Ein-Byte-Zeichen', '0xxxxxxx'],
        ['0000 0080 – 0000 07FF', 'Zwei-Byte-Zeichen', '110xxxxx 10xxxxxx'],
        ['0000 0800 – 0000 FFFF', 'Drei-Byte-Zeichen', '1110xxxx 10xxxxxx 10xxxxxx'],
        ['0001 0000 – 0010 FFFF', 'Vier-Byte-Zeichen', '11110xxx 10xxxxxx 10xxxxxx 10xxxxxx'],
      ],
    },
    {
      type: 'key-points',
      items: [
        'Ist das höchste Bit eines UTF-8-Bytes 0, ist es ein Ein-Byte-Zeichen – identisch mit dem 7-Bit-ASCII-Code.',
        'Beginnt ein Byte mit 10, ist es ein Folgebyte eines Mehrbyte-Zeichens.',
        'Beginnt ein Byte mit 11, 111 oder 1111 gefolgt von einer 0, ist es das Startbyte eines Mehrbyte-Zeichens – die Anzahl der Einsen vor der ersten Null gibt die Gesamtzahl der Bytes an.',
        'Die Binärform der Unicode-Nummer wird rechtsbündig in die x-Positionen übernommen, links ggf. mit Nullen aufgefüllt.',
      ],
    },
    {
      type: 'table',
      headers: ['Zeichen', 'Unicode', 'UTF-8 (hex)'],
      rows: [
        ['y', 'U+0079', '79'],
        ['ä', 'U+00E4', 'C3 A4'],
        ['€', 'U+20AC', 'E2 82 AC'],
        ['𝄞 (Violinschlüssel)', 'U+1D11E', 'F0 9D 84 9E'],
      ],
    },

    { type: 'heading', level: 2, text: 'Weitere Beispiele: Kodierungen berechnen' },
    {
      type: 'example',
      title: 'Vier-Byte-UTF-16 einer seltenen Hieroglyphe (Aufgabe A33)',
      text: 'Zeichen U+F44F7: Nach Abzug von 10000 hex ergibt sich E44F7 hex = 20-Bit-Zahl 1110 0100 0100 1111 0111. Aufgeteilt in zwei 10-Bit-Blöcke (1110010001 und 0011110111) und mit den Präfixen 110110 bzw. 110111 versehen, ergibt sich das Surrogate-Paar 1101101110010001 1101110011110111, in hexadezimaler Schreibweise DB91 DCF7.',
    },
    {
      type: 'example',
      title: 'Vier-Byte-UTF-8 eines Zeichens außerhalb der BMP (Aufgabe A34, Teilaufgaben f/g)',
      text: 'Zeichen U+CE63A liegt oberhalb U+FFFF und braucht 4 Byte. Die 20-Bit-Binärform 1100 1110 0110 0011 1010 wird auf 21 Bit aufgefüllt und in 3+6+6+6 Bit aufgeteilt: 011 / 001110 / 011000 / 111010. Mit den UTF-8-Präfixen ergibt das 11110011 10001110 10011000 10111010, also hexadezimal F3 8E 98 BA.',
    },
    {
      type: 'example',
      title: 'Eine UTF-16-codierte Nachricht entschlüsseln und nach UTF-8 übertragen (Aufgaben A35/A36)',
      text: 'Die UTF-16-Folge 0041 006E 0074 0077 006F 0072 0074 0020 32B7 entspricht den Zeichen A-n-t-w-o-r-t-(Leerzeichen)-U+32B7. U+32B7 ist im Unicode-Block „Enclosed CJK Letters and Months" die eingekreiste Zahl 42 (㊷). Der Text lautet also „Antwort ㊷". In UTF-8 übertragen (jedes ASCII-Zeichen bleibt ein Byte, U+32B7 wird zum Drei-Byte-Zeichen 1110xxxx 10xxxxxx 10xxxxxx): 41 6E 74 77 6F 72 74 20 E3 8A B7.',
    },
    {
      type: 'example',
      title: 'Eine UTF-8-codierte Nachricht mit Symbolen entschlüsseln und nach UTF-16 übertragen (Aufgaben A37/A38)',
      text: 'Die UTF-8-Bytefolge F0 9F 9A 97 20 75 6D 20 38 20 E2 8F B0 beginnt mit einem Vier-Byte-Zeichen (F0 9F 9A 97), das sich zu U+1F697 zusammensetzt – dem Symbol 🚗 (Auto). Es folgen die Ein-Byte-Zeichen „ ", „u", „m", „ ", „8", „ " und schließlich das Drei-Byte-Zeichen E2 8F B0 = U+23F0, das Symbol ⏰ (Wecker). Die Nachricht lautet also „🚗 um 8 ⏰". In UTF-16 übertragen: das Zeichen 🚗 (oberhalb der BMP) wird zum Surrogate-Paar D83D DE97, die übrigen Zeichen werden direkt als 16-Bit-Werte dargestellt: D83D DE97 0020 0075 006D 0020 0038 0020 23F0.',
    },

    {
      type: 'note',
      text: 'Die Aufgaben A32 und A34 (Teilaufgaben a-c) fragen zusätzlich nach der Unicode-Nummer des Copyright-Zeichens ©. Diese Nummer steht in keinem der Lehrtexte – sie soll stattdessen mit einem Nachschlage-Werkzeug wie der Windows-Zeichentabelle „charmap" oder der Tastenkombination Alt+X in MS Word selbst ermittelt werden.',
    },
  ],
}
