import type { Exercise, Topic } from '../../types/content'

/**
 * Source: Desktop/Netzwerktechnik/Netzwerktechnik/Modul 1/02_Netzwerksysteme.html
 * (lesson) and 02_Netzwerksysteme_Arbeitsblatt.html (worksheet with a full
 * "Lösungen" section written by the course author). Content and exercises
 * are transcribed from these two files; the worksheet's own answer key is
 * used for `correctAnswer`/`explanation` — nothing here is invented.
 */

const TOPIC_SLUG = 'netzwerksysteme'

const exercises: Exercise[] = [
  {
    id: 'ex-netz-01-a-01',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'easy',
    question:
      'Welche drei Arten von IT-Systemen kommunizieren in einem vernetzten IT-System? Nenne zu jeder Art die zentrale Aufgabe.',
    explanation:
      'Server (bieten Dienste/Funktionen an), Clients (fordern Dienste an und reichen Aufgaben weiter) und Terminals (reine Bedien- und Eingabekonsolen für Ein- und Ausgabe).',
  },
  {
    id: 'ex-netz-01-a-02',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'easy',
    question: 'Was versteht man unter einem Server? Nenne zwei Beispiele für Serverarten.',
    explanation:
      'Ein Server stellt anderen Geräten im Netzwerk Dienste und Funktionen bereit. Beispiele: Fileserver, Printserver, Mailserver, Webserver, Datenbankserver (zwei genügen).',
  },
  {
    id: 'ex-netz-01-a-03',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Erkläre, warum Server „nach der Rechenlast dimensioniert" werden und was das für die Hardware bedeutet.',
    explanation:
      'Weil ein Server die Anfragen vieler Clients gleichzeitig bearbeiten muss. Er braucht daher leistungsfähige und meist ausfallsichere Hardware (z. B. redundante Netzteile, RAID-Verbünde).',
  },
  {
    id: 'ex-netz-01-a-04',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Was passiert, wenn ein zentraler Server ausfällt? Warum ist das kritisch?',
    explanation:
      'Beim Ausfall eines zentralen Servers können viele Nutzer gleichzeitig nicht mehr arbeiten, da alle von ihm bereitgestellten Dienste wegfallen – eine einzelne Störung kann das ganze System lahmlegen.',
  },
  {
    id: 'ex-netz-01-b-01',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Erkläre den Unterschied zwischen einem dedicated und einem non-dedicated Server.',
    explanation:
      'Ein dedicated Server übernimmt ausschließlich Serverfunktionen. Ein non-dedicated Server stellt gleichzeitig auch Ressourcen für Anwender-Applikationen bereit (Server- und Clientfunktionen auf einem Rechner).',
  },
  {
    id: 'ex-netz-01-b-02',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Begründe, warum in der Praxis heute fast ausschließlich dedizierte Server eingesetzt werden.',
    explanation:
      'Aus Gründen der Betriebssicherheit: Auf einem dedizierten Server laufen keine fehlerhaften Anwendungsprogramme, die den Server zum Absturz bringen könnten. Der Dienst bleibt für alle Nutzer stabiler verfügbar.',
  },
  {
    id: 'ex-netz-01-c-a',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: 'Richtig oder falsch: Ein Client bietet anderen Geräten Dienste an.',
    options: [
      { id: 'true', text: 'Richtig' },
      { id: 'false', text: 'Falsch' },
    ],
    correctAnswer: 'false',
    explanation: 'Ein Client fordert Dienste an; das Anbieten übernimmt der Server.',
  },
  {
    id: 'ex-netz-01-c-b',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: 'Richtig oder falsch: Eine Workstation kann bei einem Netzausfall eingeschränkt weiterarbeiten.',
    options: [
      { id: 'true', text: 'Richtig' },
      { id: 'false', text: 'Falsch' },
    ],
    correctAnswer: 'true',
  },
  {
    id: 'ex-netz-01-c-c',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: 'Richtig oder falsch: Ein Thin-Client besitzt eine große lokale Festplatte.',
    options: [
      { id: 'true', text: 'Richtig' },
      { id: 'false', text: 'Falsch' },
    ],
    correctAnswer: 'false',
    explanation: 'Ein Thin-Client verzichtet gerade auf lokale Festplatten.',
  },
  {
    id: 'ex-netz-01-c-d',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: 'Richtig oder falsch: Bei einem Terminal laufen alle Programme auf dem Zentralrechner.',
    options: [
      { id: 'true', text: 'Richtig' },
      { id: 'false', text: 'Falsch' },
    ],
    correctAnswer: 'true',
  },
  {
    id: 'ex-netz-01-c-e',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: 'Richtig oder falsch: Ein Netzwerkcomputer verursacht wenig Datentransfer über das Netz.',
    options: [
      { id: 'true', text: 'Richtig' },
      { id: 'false', text: 'Falsch' },
    ],
    correctAnswer: 'false',
    explanation: 'Ein NC verursacht hohen Datentransfer, da Daten vom Server geladen werden.',
  },
  {
    id: 'ex-netz-01-c-f',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: 'Richtig oder falsch: Dedizierte Server erhöhen die Betriebssicherheit.',
    options: [
      { id: 'true', text: 'Richtig' },
      { id: 'false', text: 'Falsch' },
    ],
    correctAnswer: 'true',
  },
  {
    id: 'ex-netz-01-d',
    topicSlug: TOPIC_SLUG,
    type: 'matching',
    difficulty: 'medium',
    question:
      'Ordne zu, ob die Eigenschaft zu einer Workstation (W) oder einem Netzwerkcomputer (NC) gehört: a) Besitzt eine eigene lokale Festplatte, b) Höhere Datensicherheit, da Daten zentral liegen, c) Kann bei Netzausfall eingeschränkt weiterarbeiten, d) Verursacht deutlich höheren Datentransfer über das Netz, e) Höherer Betreuungsaufwand für lokale Festplatten, f) Wird auch als Thin-Client bezeichnet.',
    explanation: 'a → W · b → NC · c → W · d → NC · e → W · f → NC',
  },
  {
    id: 'ex-netz-01-e-01',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Erkläre den Unterschied zwischen Thin-Client und Terminal (Was leistet jedes Gerät noch selbst?).',
    explanation:
      'Ein Thin-Client lädt Betriebssystem/Programme vom Server, führt sie aber noch selbst aus. Ein Terminal besitzt keine nennenswerte Rechenleistung und dient nur der Ein- und Ausgabe – die Verarbeitung läuft vollständig auf dem Zentralrechner.',
  },
  {
    id: 'ex-netz-01-f',
    topicSlug: TOPIC_SLUG,
    type: 'technical-problem',
    difficulty: 'hard',
    question:
      'Fallbeispiele: Entscheide begründet, welches System (Workstation, Netzwerkcomputer/Thin-Client oder Terminal) am besten geeignet ist. 1) Großraumbüro mit 50 einheitlichen, zentral verwaltbaren Arbeitsplätzen mit hoher Priorität auf Datensicherheit. 2) Ein Grafiker muss auch bei kurzzeitigem Netzausfall weiterarbeiten können. 3) In einer Lagerhalle werden an einfachen Konsolen nur Warenbestände abgefragt, die gesamte Verarbeitung soll zentral erfolgen.',
    explanation:
      '1) Netzwerkcomputer/Thin-Client – zentrale Verwaltung, geringer Betreuungsaufwand, hohe Datensicherheit. 2) Workstation – eigener Prozessor/lokale Festplatte ermöglichen rechenintensives Arbeiten und Weiterbetrieb bei Netzausfall. 3) Terminal – einfache Ein-/Ausgabekonsolen mit vollständig zentraler Verarbeitung.',
  },
  {
    id: 'ex-netz-01-g',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question:
      'Warum steigt mit der Zahl der Clients, die auf einen einzelnen Server zugreifen, die Bedeutung von Ausfallsicherheit (z. B. redundante Netzteile, RAID)?',
    explanation:
      'Weil beim Ausfall des Servers alle darauf zugreifenden Clients gleichzeitig betroffen sind. Je mehr Nutzer von einem Server abhängen, desto größer der Schaden bei einem Ausfall – daher lohnt sich der Aufwand für ausfallsichere Hardware.',
  },
]

export const netzwerksystemeTopic: Topic = {
  id: 'topic-netzwerktechnik-netzwerksysteme',
  slug: TOPIC_SLUG,
  moduleSlug: 'netzwerktechnik',
  title: 'Netzwerksysteme',
  shortIntro: 'Server, Clients und Terminals – welche Rollen IT-Systeme in einem vernetzten Umfeld übernehmen.',
  order: 1,
  exercises,
  content: [
    {
      type: 'paragraph',
      text: 'In einem vernetzten IT-System arbeiten die einzelnen Geräte nicht gleichberechtigt nebeneinander, sondern übernehmen unterschiedliche Rollen. Grundsätzlich lassen sich drei Arten von IT-Systemen unterscheiden, je nachdem, ob ein Gerät Dienste anbietet, Dienste anfordert oder lediglich als Ein- und Ausgabegerät dient:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        'Server – Systeme, die Dienste und Funktionen in Netzwerken anbieten',
        'Clients – Systeme, die Dienste und Funktionen in Netzwerken anfordern',
        'Terminals – reine Bedien- und Eingabekonsolen für Netzwerkgeräte',
      ],
    },

    { type: 'heading', level: 2, text: 'Server – Dienste bereitstellen' },
    {
      type: 'paragraph',
      text: 'Server sind Geräte, die anderen Geräten im Netzwerk Dienste und Funktionen zur Verfügung stellen. Ihren Namen erhalten sie meist nach dem Dienst, den sie bereitstellen – etwa Fileserver (Dateiablage), Printserver (Druckaufträge), Mailserver, Webserver oder Datenbankserver. Ein einzelnes Gerät kann dabei auch mehrere solcher Dienste gleichzeitig übernehmen.',
    },
    {
      type: 'paragraph',
      text: 'Da ein Server die Anfragen vieler Clients gleichzeitig bearbeiten muss, wird er entsprechend der zu erwartenden Rechenlast dimensioniert – also mit leistungsfähiger und meist ausfallsicherer Hardware ausgestattet (z. B. redundante Netzteile oder RAID-Festplattenverbünde). Denn fällt ein Server aus, sind in der Regel viele Nutzer gleichzeitig betroffen.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        'Non-dedicated Server stellen neben der Serverfunktion auch Ressourcen für Anwender-Applikationen bereit. Server- und Clientfunktionen laufen dabei gleichzeitig auf einem Computer – das spart Hardware, belastet den Rechner aber doppelt.',
        'Dedicated Server übernehmen ausschließlich Serverfunktionen. Aus Gründen der Betriebssicherheit – etwa um Systemabstürze durch fehlerhafte Anwendungsprogramme zu vermeiden – werden heute fast ausschließlich dedizierte Server eingesetzt.',
      ],
    },

    { type: 'heading', level: 2, text: 'Clients – Dienste anfordern' },
    {
      type: 'paragraph',
      text: 'Clients sind die im Netzwerk angeschlossenen Geräte, an denen die Anwender arbeiten. Sie fordern Funktionen und Dienste an und reichen Aufgaben, die sie nicht selbst erledigen, an die Server weiter – etwa Kommunikationsanforderungen, Druckaufträge sowie Datei- und Programmanforderungen. Ein Client stellt also die Anfrage, der Server liefert die Antwort.',
    },
    { type: 'heading', level: 3, text: 'Workstations' },
    {
      type: 'paragraph',
      text: 'Workstations sind vollständige Computersysteme mit eigenem Prozessor und eigener (lokaler) Festplatte. Betriebssystem, Programme und Daten liegen also direkt auf dem Gerät, sodass die Workstation den Großteil der Rechenarbeit selbst erledigt. Vorteil: Da Betriebssystem und Programme lokal installiert sind, kann auch bei ausgefallenem Server oder Netzwerk zumindest eingeschränkt weitergearbeitet werden. Nachteile: höherer Betreuungsaufwand, weil jede lokale Festplatte einzeln installiert, gewartet und gesichert werden muss, sowie größere Gefahr eines Virenbefalls über freie Schnittstellen und lokale Laufwerke.',
    },
    { type: 'heading', level: 3, text: 'Netzwerkcomputer (Thin-Client)' },
    {
      type: 'paragraph',
      text: 'Verzichtet man bei einem Client auf lokale Festplatten, Diskettenlaufwerke und freie Schnittstellen, spricht man von einem Netzwerkcomputer (NC) oder Thin-Client. Ein solcher Rechner lädt Betriebssystem, Programme und Daten bei Bedarf vom Server und ist damit stark von einer funktionierenden Netzverbindung abhängig. Vorteile: erhöhte Datensicherheit und geringerer Betreuungsaufwand, da Daten zentral liegen. Nachteile: deutlich höherer Datentransfer über das Netz sowie Mehraufwand bei der Einbindung netzwerkfähiger Peripheriegeräte.',
    },

    { type: 'heading', level: 2, text: 'Terminals – zentrale Verarbeitung' },
    {
      type: 'paragraph',
      text: 'Terminals sind im Prinzip reine Bedien- und Eingabekonsolen, die nur aus Tastatur, Monitor und gegebenenfalls Maus bestehen. Sie besitzen selbst keine nennenswerte Rechenleistung und sind über entsprechende Leitungen direkt mit dem Server verbunden. Damit gehen sie einen Schritt weiter als der Thin-Client: Während dieser noch selbst Programme ausführt, dient das Terminal ausschließlich der Ein- und Ausgabe. Alle Prozesse und Programme laufen auf dem Zentralrechner; der Monitor gibt lediglich ein Abbild der aktuellen Sitzung wieder.',
    },

    { type: 'heading', level: 2, text: 'Überblick auf einen Blick' },
    {
      type: 'table',
      headers: ['Rolle', 'Aufgabe', 'Merkmale'],
      rows: [
        ['Server', 'Bietet Dienste und Funktionen an', 'Nach Rechenlast dimensioniert; dedicated / non-dedicated'],
        ['Client – Workstation', 'Fordert Dienste an', 'Eigener Prozessor und lokale Festplatte; netzunabhängig arbeitsfähig'],
        ['Client – Netzwerkcomputer', 'Fordert Dienste an', 'Ohne lokale Festplatte; hohe Datensicherheit, geringer Betreuungsaufwand'],
        ['Terminal', 'Ein- und Ausgabe', 'Nur Tastatur/Monitor/Maus; gesamte Verarbeitung auf dem Zentralrechner'],
      ],
    },

    { type: 'heading', level: 2, text: 'Fazit' },
    {
      type: 'paragraph',
      text: 'Das Netzwerksystem beschreibt, wie sich die Aufgaben im Netz auf Server, Clients und Terminals verteilen. Server stellen zentrale Dienste bereit, Clients rufen diese ab, und Terminals dienen als reine Ein- und Ausgabegeräte. Die Wahl zwischen den Client-Varianten – der eigenständigen Workstation und dem schlanken Netzwerkcomputer – ist dabei stets eine Abwägung zwischen Ausfallsicherheit und lokaler Flexibilität auf der einen Seite und Datensicherheit sowie geringem Betreuungsaufwand auf der anderen Seite.',
    },
  ],
}
