import type { Exercise, Topic } from '../../types/content'

const choice = (id: string, text: string) => ({ id, text })

const grundlagenExercises: Exercise[] = [
  {
    id: 'ex-netz-03-01',
    topicSlug: 'netzwerkgrundlagen-und-modelle',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Welche Ressourcen können in einem Netzwerk gemeinsam genutzt werden?',
    options: [choice('a', 'Daten und Programme'), choice('b', 'Drucker und Speicher'), choice('c', 'Rechenleistung'), choice('d', 'Nur Monitore')],
    correctAnswer: ['a', 'b', 'c'],
    explanation: 'Die Unterlagen nennen Rechenleistung, Speicher, Programme, Daten und Peripheriegeräte als gemeinsam nutzbare Ressourcen.',
  },
  {
    id: 'ex-netz-03-02',
    topicSlug: 'netzwerkgrundlagen-und-modelle',
    type: 'matching',
    difficulty: 'medium',
    question: 'Ordne die Dimensionen den Beispielen zu: PAN, LAN, MAN, WAN, GAN – Bluetooth, lokales Ethernet/WLAN, Stadtnetz, DSL/Mobilfunk, Internet.',
    explanation: 'PAN → Bluetooth · LAN → lokales Ethernet/WLAN · MAN → Stadtnetz · WAN → DSL/Mobilfunk · GAN → Internet.',
  },
  {
    id: 'ex-netz-03-03',
    topicSlug: 'netzwerkgrundlagen-und-modelle',
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Auf welcher OSI-Schicht entscheidet ein Router über den nächsten Übertragungsweg?',
    options: [choice('a', 'Schicht 1'), choice('b', 'Schicht 2'), choice('c', 'Schicht 3'), choice('d', 'Schicht 7')],
    correctAnswer: 'c',
    explanation: 'Routing gehört zur Vermittlungsschicht (Network Layer), also OSI-Schicht 3.',
  },
  {
    id: 'ex-netz-03-04',
    topicSlug: 'netzwerkgrundlagen-und-modelle',
    type: 'text',
    difficulty: 'medium',
    question: 'Warum erleichtert ein Schichtenmodell die Fehlersuche?',
    explanation: 'Funktionen und Protokolle sind klaren Ebenen zugeordnet. Dadurch kann die Prüfung unten beim Medium beginnen und Schicht für Schicht bis zur Anwendung fortgesetzt werden.',
  },
]

export const netzwerkgrundlagenTopic: Topic = {
  id: 'topic-netzwerktechnik-netzwerkgrundlagen-modelle',
  slug: 'netzwerkgrundlagen-und-modelle',
  moduleSlug: 'netzwerktechnik',
  title: 'Netzwerkgrundlagen und Schichtenmodelle',
  shortIntro: 'Netzwerkgrößen, Protokolle, OSI- und TCP/IP-Modell sowie grundlegende Topologien.',
  order: 3,
  exercises: grundlagenExercises,
  keyPoints: ['Netzwerke verbinden mindestens zwei netzwerkfähige Endgeräte.', 'Protokolle regeln die Kommunikation.', 'Schichten trennen Aufgaben und erleichtern Planung und Diagnose.'],
  content: [
    { type: 'paragraph', text: 'Ein Netzwerk ist die physikalische und logische Verbindung von mindestens zwei netzwerkfähigen Endgeräten. Übertragungstechnik, Protokolle und adressierbare Systeme ermöglichen den Austausch und die gemeinsame Nutzung von Daten, Programmen, Speicher, Rechenleistung und Peripheriegeräten.' },
    { type: 'heading', level: 2, text: 'Netzwerkdimensionen' },
    { type: 'table', headers: ['Kurzform', 'Bedeutung', 'Typisches Beispiel'], rows: [
      ['PAN/WPAN', 'Personal (Wireless) Area Network', 'USB oder Bluetooth im persönlichen Umfeld'],
      ['LAN/WLAN', 'Local (Wireless) Area Network', 'Ethernet oder WLAN in Gebäude und Betrieb'],
      ['MAN', 'Metropolitan Area Network', 'regionales Netz innerhalb einer Stadt'],
      ['WAN', 'Wide Area Network', 'DSL- oder Mobilfunkverbindung über große Entfernung'],
      ['GAN', 'Global Area Network', 'weltweites Netz, etwa das Internet'],
    ] },
    { type: 'heading', level: 2, text: 'Protokolle und Schichten' },
    { type: 'paragraph', text: 'Ein Netzwerkprotokoll legt Regeln für Aufbau, Ablauf und Ende einer Kommunikation fest. Mehrere Protokolle übernehmen jeweils Teilaufgaben. Schichtenmodelle ordnen diese Aufgaben, sodass Komponenten verschiedener Hersteller zusammenarbeiten können.' },
    { type: 'table', headers: ['OSI-Schicht', 'Aufgabe', 'Beispiele / Komponenten'], rows: [
      ['7–5 Anwendung, Darstellung, Sitzung', 'Anwendungszugriff, Datenformat und Sitzungssteuerung', 'HTTP, SMTP, FTP; Gateway, Proxy'],
      ['4 Transport', 'Zuordnung zu Anwendungen und Ende-zu-Ende-Transport', 'TCP, UDP'],
      ['3 Vermittlung', 'logische Adressierung und Routing', 'IP, ICMP; Router, Layer-3-Switch'],
      ['2 Sicherung', 'Frames, MAC-Adressen und Fehlererkennung', 'Ethernet; Switch, Bridge'],
      ['1 Bitübertragung', 'Signale und physikalische Übertragung', 'Kabel, Funk; Repeater, Hub'],
    ] },
    { type: 'note', text: 'Das TCP/IP-Modell fasst die sieben OSI-Schichten gröber zusammen. Für die Praxis bleibt die Zuordnung von Anwendung, Transport, Internet und Netzzugang entscheidend.' },
    { type: 'heading', level: 2, text: 'Topologien' },
    { type: 'paragraph', text: 'Die Topologie beschreibt die Anordnung der Verbindungen. Beim Stern laufen Leitungen zentral an einem Switch zusammen; ein einzelner Leitungsfehler betrifft meist nur ein Endgerät. Baumstrukturen erweitern Sterne hierarchisch. Ring und Bus sind stärker von gemeinsam genutzten Strecken abhängig. Ein vermaschtes Netz bietet mehrere Wege und damit höhere Ausfallsicherheit, benötigt aber mehr Verbindungen.' },
    { type: 'exam-tip', text: 'Trenne in Aufgaben die physikalische Topologie (Verkabelung) von der logischen Kommunikation. Beide müssen nicht identisch sein.' },
  ],
}

const cablingExercises: Exercise[] = [
  {
    id: 'ex-netz-04-01', topicSlug: 'strukturierte-verkabelung', type: 'matching', difficulty: 'medium',
    question: 'Ordne zu: Primär-, Sekundär- und Tertiärverkabelung – Gelände, Gebäude, Etage.',
    explanation: 'Primär → Gelände zwischen Gebäuden · Sekundär → Gebäude zwischen Etagen · Tertiär → Etage bis zur Anschlussdose.',
  },
  {
    id: 'ex-netz-04-02', topicSlug: 'strukturierte-verkabelung', type: 'single-choice', difficulty: 'easy',
    question: 'Welches Medium ist gegenüber elektromagnetischen Störungen unempfindlich?',
    options: [choice('a', 'Ungeschirmtes Kupferkabel'), choice('b', 'Lichtwellenleiter'), choice('c', 'Koaxialkabel ohne Schirm'), choice('d', 'Telefon-Flachkabel')],
    correctAnswer: 'b', explanation: 'Lichtwellenleiter übertragen Licht statt elektrischer Signale und sind daher unempfindlich gegenüber elektromagnetischen Störungen.',
  },
  {
    id: 'ex-netz-04-03', topicSlug: 'strukturierte-verkabelung', type: 'text', difficulty: 'medium',
    question: 'Nenne drei Ziele einer strukturierten Verkabelung.',
    explanation: 'Beispiele: anwendungsneutrale Nutzung, flexible Erweiterbarkeit, Reserven für künftige Systeme, standardisierte Komponenten und Prüfungen sowie bessere Ausfallsicherheit durch sternförmige Verkabelung.',
  },
]

export const strukturierteVerkabelungTopic: Topic = {
  id: 'topic-netzwerktechnik-strukturierte-verkabelung',
  slug: 'strukturierte-verkabelung',
  moduleSlug: 'netzwerktechnik',
  title: 'Strukturierte Verkabelung und Übertragungsmedien',
  shortIntro: 'Gebäudeverkabelung, Kupfer, Glasfaser, Steckverbindungen und Netzwerkadapter.',
  order: 4,
  exercises: cablingExercises,
  content: [
    { type: 'paragraph', text: 'Die universelle Gebäudeverkabelung ist ein standardisierter, anwendungsneutraler Aufbau für Sprache und Daten. Sie soll Erweiterungen vereinfachen, Reserven schaffen und kostspielige Neuinstallationen beim Technologiewechsel vermeiden.' },
    { type: 'heading', level: 2, text: 'Drei Verkabelungsbereiche' },
    { type: 'table', headers: ['Bereich', 'Verbindung', 'Typischer Verteiler'], rows: [
      ['Primärbereich', 'zwischen Gebäuden auf einem Gelände', 'Standort- bzw. Campusverteiler'],
      ['Sekundärbereich', 'innerhalb eines Gebäudes zwischen Etagen', 'Gebäude- und Etagenverteiler'],
      ['Tertiärbereich', 'vom Etagenverteiler bis zum Arbeitsplatz', 'Patchfeld, Datendose und Anschlusskabel'],
    ] },
    { type: 'heading', level: 2, text: 'Kupfer und Lichtwellenleiter' },
    { type: 'table', headers: ['Medium', 'Stärken', 'Grenzen'], rows: [
      ['Twisted Pair', 'preiswert, einfach zu installieren, RJ45 im LAN verbreitet', 'Dämpfung und elektromagnetische Einflüsse; Kategorie und Schirmung beachten'],
      ['Lichtwellenleiter', 'hohe Datenrate, große Reichweite, galvanische Trennung', 'aufwendigere Montage; passende Faser, Stecker und Transceiver nötig'],
    ] },
    { type: 'paragraph', text: 'Bei Twisted-Pair-Bezeichnungen beschreibt der erste Teil die Gesamtschirmung und der zweite Teil die Schirmung der Aderpaare, etwa U/UTP ohne Schirm oder S/FTP mit Geflechtschirm außen und Folienschirm je Paar. Patchkabel verbinden Dose und Endgerät; Verlegekabel endet fest auf Dose oder Patchfeld.' },
    { type: 'heading', level: 2, text: 'Aktive und passive Komponenten' },
    { type: 'list', style: 'bullet', items: ['Passiv: Kabel, Patchfeld, Anschlussdose und Steckverbinder leiten Signale ohne eigene Weiterleitungslogik.', 'Aktiv: Netzwerkkarte, Switch, Access Point und Router verarbeiten oder vermitteln Daten.', 'Die Netzwerkkarte stellt die physikalische und Sicherungsschicht bereit und besitzt eine MAC-Adresse.'] },
    { type: 'exam-tip', text: 'In Planungsaufgaben gehören Leitungstyp, maximale Strecke, benötigte Datenrate, Störumgebung und Erweiterungsreserve zusammen in die Begründung.' },
  ],
}
