import type { Exercise, Topic } from '../../types/content'

/**
 * Source: Desktop/Netzwerktechnik/Netzwerktechnik/Modul 1/03_Netzwerkarchitekturen.html
 * (lesson) and 03_Netzwerkarchitekturen_Arbeitsblatt.html (worksheet with the
 * author's own "Lösungen" section). Transcribed faithfully; matching-table
 * exercises are self-assessed (their answer key lives in `explanation`)
 * since a multi-part mapping can't be meaningfully auto-graded here.
 */

const TOPIC_SLUG = 'netzwerkarchitekturen'

const exercises: Exercise[] = [
  {
    id: 'ex-netz-02-a-01',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'easy',
    question: 'Welche Leitfrage steht am Anfang jeder Architekturplanung? Welche zwei Rollen werden dabei unterschieden?',
    explanation:
      'Leitfrage: Welche Systeme bieten Dienste an – und welche fordern Dienste an? Unterschieden werden die Rollen anbietend (Server) und anfordernd (Client).',
  },
  {
    id: 'ex-netz-02-a-02',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'easy',
    question: 'Nenne die vier grundlegenden Netzwerkarchitekturen.',
    explanation: 'Peer-to-Peer, Client-Server, Terminal-Server und Cluster (Server-Server).',
  },
  {
    id: 'ex-netz-02-a-03',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Welche drei Faktoren sind bei der Wahl einer Architektur gegeneinander abzuwägen?',
    explanation:
      'Benötigte Dienste (bzw. leistungsfähige Hardware), Wartungsaufwand und Administrationsaufwand – abhängig von Anzahl der Rechner, Kommunikationsbedarf und Ressourcenzugriff.',
  },
  {
    id: 'ex-netz-02-a-04',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Warum ist ein Peer-to-Peer-Netzwerk nur bis zu etwa 10 Rechnern wirtschaftlich sinnvoll?',
    explanation:
      'Weil die Verwaltung dezentral erfolgt und jeder Rechner einzeln betreut werden muss. Der Pflege- und Sicherheitsaufwand steigt mit jedem Gerät, sodass der Betrieb ab etwa 10 Rechnern wirtschaftlich nicht mehr vertretbar ist.',
  },
  {
    id: 'ex-netz-02-b-01',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Erkläre den grundlegenden Unterschied in der Rollenverteilung zwischen einem Peer-to-Peer- und einem Client-Server-Netzwerk.',
    explanation:
      'Im Peer-to-Peer-Netz ist jeder Rechner gleichberechtigt und zugleich Server und Client; es gibt keine zentrale Instanz. Im Client-Server-Netz ist die Struktur hierarchisch: Server bieten Dienste an, Clients fordern sie ausschließlich an.',
  },
  {
    id: 'ex-netz-02-b-02',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Begründe, warum sich Datensicherheit und Datenschutz im Client-Server-Netz besser durchsetzen lassen.',
    explanation:
      'Weil es eine zentrale Rechteverwaltung gibt: Benutzer melden sich am Server an und erhalten dort definierte Zugriffsrechte. Dadurch lässt sich zentral steuern, wer auf welche Ressourcen zugreifen darf.',
  },
  {
    id: 'ex-netz-02-c-a',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: 'Richtig oder falsch: In einem Peer-to-Peer-Netz ist jeder Rechner zugleich Server und Client.',
    options: [
      { id: 'true', text: 'Richtig' },
      { id: 'false', text: 'Falsch' },
    ],
    correctAnswer: 'true',
  },
  {
    id: 'ex-netz-02-c-b',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: 'Richtig oder falsch: Client-Server-Netzwerke sind gleichberechtigt (nicht hierarchisch) organisiert.',
    options: [
      { id: 'true', text: 'Richtig' },
      { id: 'false', text: 'Falsch' },
    ],
    correctAnswer: 'false',
    explanation: 'Client-Server-Netzwerke sind streng hierarchisch organisiert.',
  },
  {
    id: 'ex-netz-02-c-c',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: 'Richtig oder falsch: Bei einem Terminal-Server laufen alle Programme auf dem Server.',
    options: [
      { id: 'true', text: 'Richtig' },
      { id: 'false', text: 'Falsch' },
    ],
    correctAnswer: 'true',
  },
  {
    id: 'ex-netz-02-c-d',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: 'Richtig oder falsch: Ein Cluster erscheint nach außen als ein einziges Gesamtsystem.',
    options: [
      { id: 'true', text: 'Richtig' },
      { id: 'false', text: 'Falsch' },
    ],
    correctAnswer: 'true',
  },
  {
    id: 'ex-netz-02-c-e',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: 'Richtig oder falsch: Peer-to-Peer-Netze gewährleisten einen zuverlässigen Dauerbetrieb.',
    options: [
      { id: 'true', text: 'Richtig' },
      { id: 'false', text: 'Falsch' },
    ],
    correctAnswer: 'false',
    explanation: 'P2P gewährleistet gerade keinen zuverlässigen Dauerbetrieb (Dienste fallen mit dem anbietenden Rechner aus).',
  },
  {
    id: 'ex-netz-02-c-f',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: 'Richtig oder falsch: Im Client-Server-Netz melden sich Benutzer zentral am Server an.',
    options: [
      { id: 'true', text: 'Richtig' },
      { id: 'false', text: 'Falsch' },
    ],
    correctAnswer: 'true',
  },
  {
    id: 'ex-netz-02-d',
    topicSlug: TOPIC_SLUG,
    type: 'matching',
    difficulty: 'medium',
    question:
      'Ordne jeder Eigenschaft die passende Architektur zu (P2P, CS, TS oder CL): a) Jeder Rechner ist gleichzeitig Server und Client, b) Mehrere Server erscheinen als ein Gesamtsystem, c) Zentrale Anmeldung und Rechteverwaltung durch einen Administrator, d) Clients sind auf ein Minimum reduziert, alle Programme laufen zentral, e) Typisch für Rechenzentren mit hoher Verfügbarkeit, f) Nur bis ca. 10 Rechnern wirtschaftlich sinnvoll.',
    explanation: 'a → P2P · b → CL · c → CS · d → TS · e → CL · f → P2P',
  },
  {
    id: 'ex-netz-02-e-01',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Erkläre den Unterschied zwischen Terminal-Server und Cluster (Wo läuft die Verarbeitung, und wozu dient das Modell?).',
    explanation:
      'Beim Terminal-Server läuft die gesamte Verarbeitung auf einem Zentralrechner; die Terminals dienen nur der Ein-/Ausgabe (Ziel: zentrale, wartungsarme Bereitstellung). Ein Cluster verbindet mehrere Server zu einem Gesamtsystem, um hohe Rechenleistung und Ausfallsicherheit zu erreichen (Ziel: Leistung/Verfügbarkeit).',
  },
  {
    id: 'ex-netz-02-f',
    topicSlug: TOPIC_SLUG,
    type: 'technical-problem',
    difficulty: 'hard',
    question:
      'Szenarioaufgaben: Entscheide begründet, welche Netzwerkarchitektur (Peer-to-Peer, Client-Server, Terminal-Server oder Cluster) am besten geeignet ist. 1) Haushalt/WG: drei Mitbewohner tauschen gelegentlich Dateien, kein Administrator, minimaler Aufwand. 2) Kleinbetrieb mit 25 Arbeitsplätzen benötigt zentrale Benutzerverwaltung und Zugriffsrechte, ein IT-Verantwortlicher betreut das Netz. 3) Lager/Filiale: 15 einfache Konsolen, gesamte Verarbeitung soll zentral erfolgen, Geräte günstig und wartungsarm. 4) Rechenzentrum: Online-Dienst muss auch bei Serverausfall ununterbrochen verfügbar bleiben, sehr hohe Rechenlast.',
    explanation:
      '1) Peer-to-Peer – kleine Zahl gleichberechtigter Teilnehmer, kein Administrator, minimaler Aufwand. 2) Client-Server – zentrale Benutzerverwaltung, Zugriffsrechte und gemeinsame Ablage bei 25 betreuten Arbeitsplätzen. 3) Terminal-Server – einfache, günstige Konsolen; die gesamte Verarbeitung erfolgt zentral. 4) Cluster (Server-Server) – hohe Rechenlast und ununterbrochene Verfügbarkeit trotz Ausfall einzelner Server.',
  },
  {
    id: 'ex-netz-02-g',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'hard',
    question:
      'Ein Kleinbetrieb wächst von 6 auf 40 Arbeitsplätze. Bisher wurde ein Peer-to-Peer-Netz betrieben. Begründe, warum nun ein Wechsel zu einer anderen Architektur sinnvoll ist, und nenne die zu erwartenden Vorteile.',
    explanation:
      'Bei 40 Arbeitsplätzen wird die dezentrale Pflege eines Peer-to-Peer-Netzes zu aufwendig und unsicher. Sinnvoll ist der Wechsel zu einem Client-Server-Netz. Vorteile: zentrale Benutzer- und Rechteverwaltung, bessere Datensicherheit und Datenschutz, geringerer Verwaltungsaufwand pro Arbeitsplatz sowie zuverlässigerer (Dauer-)Betrieb der Dienste.',
  },
]

export const netzwerkarchitekturenTopic: Topic = {
  id: 'topic-netzwerktechnik-netzwerkarchitekturen',
  slug: TOPIC_SLUG,
  moduleSlug: 'netzwerktechnik',
  title: 'Netzwerkarchitekturen',
  shortIntro: 'Peer-to-Peer, Client-Server, Terminal-Server und Cluster – wie IT-Systeme in einem Netzwerk zusammenarbeiten.',
  order: 2,
  exercises,
  content: [
    {
      type: 'paragraph',
      text: 'Eine der wichtigsten Planungsentscheidungen beim Aufbau eines Netzwerks ist die Frage, in welcher Beziehung die eingesetzten IT-Systeme zueinander stehen und welche Abhängigkeiten zwischen ihnen bestehen sollen.',
    },
    {
      type: 'note',
      text: 'Leitfrage: Welche Systeme bieten Dienste an – und welche fordern Dienste an?',
    },
    {
      type: 'paragraph',
      text: 'Aus dieser Rollenverteilung ergibt sich die Netzwerkarchitektur. Bei ihrer Wahl sind die benötigten Dienste, der Einsatz entsprechend leistungsfähiger Hardware sowie der zu erwartende Wartungs- und Administrationsaufwand gegeneinander abzuwägen. Abhängig von der Anzahl der angeschlossenen Computer, ihrem Kommunikationsbedarf und dem Zugriff auf gemeinsam genutzte Ressourcen kommen dabei unterschiedliche Architekturen in Frage.',
    },

    { type: 'heading', level: 2, text: 'Peer-to-Peer-Netzwerk' },
    {
      type: 'paragraph',
      text: 'Die einfachste Vernetzungsvariante ist die gleichberechtigte Kommunikation aller angeschlossenen Teilnehmer. Jeder beteiligte Rechner ist hier zugleich Server und Client: Er kann eigene Ressourcen für die anderen bereitstellen und gleichzeitig auf deren Ressourcen zugreifen. Eine zentrale Verwaltung gibt es nicht.',
    },
    {
      type: 'paragraph',
      text: 'Diese Einfachheit hat ihren Preis: erhebliche Risiken bei Datensicherheit und Datenschutz (keine zentrale Rechteverwaltung) sowie hoher Pflege- und Verwaltungsaufwand, da jeder Rechner einzeln betreut werden muss. Wirtschaftlich vertretbar ist der Betrieb daher nur bis zu etwa maximal 10 Rechnern. Problematisch bleibt zudem die Betriebssicherheit: Ein Netzwerkdrucker ist z. B. nicht verfügbar, wenn der bereitstellende Rechner gestört oder ausgeschaltet ist.',
    },

    { type: 'heading', level: 2, text: 'Client-Server-Netzwerk' },
    {
      type: 'paragraph',
      text: 'Im Gegensatz zum Peer-to-Peer-Ansatz sind Client-Server-Netzwerke streng hierarchisch organisiert. Ein oder mehrere Server stellen zentrale Dienste bereit – etwa Programme, Daten, Druckverwaltung oder Kommunikationsverbindungen –, und die Clients greifen ausschließlich auf die Ressourcen des anbietenden Servers zu.',
    },
    {
      type: 'paragraph',
      text: 'Die Verwaltung und Systempflege übernimmt ein Netzwerk-Administrator (Supervisor). Benutzer und Benutzergruppen müssen sich zentral am Server anmelden und erhalten dort die für sie vorgesehenen Zugriffsrechte. Dadurch lassen sich Sicherheit und Datenschutz deutlich besser durchsetzen als im Peer-to-Peer-Netz. In der Praxis werden die meisten lokalen Netzwerke als Client-Server-Netzwerke aufgebaut.',
    },

    { type: 'heading', level: 2, text: 'Terminal-Server-Netzwerk' },
    {
      type: 'paragraph',
      text: 'Das Terminal-Server-Modell treibt die Zentralisierung noch einen Schritt weiter. Die Clients sind hier in ihrem Funktionsumfang so weit reduziert, dass nur noch ein grundlegendes Betriebssystem für die Kommunikation mit dem Terminalserver läuft. Alle Programme und Dienste laufen auf dem Terminalserver ab; dieser stellt den „Terminals" lediglich ein Abbild der Bedienoberfläche zur Verfügung. Eingesetzt wird diese Technik vor allem dort, wo es nicht auf eine schnelle Datenverarbeitung direkt vor Ort ankommt, dafür aber auf eine einfache, zentrale Wartung und hohe Datensicherheit.',
    },

    { type: 'heading', level: 2, text: 'Cluster (Server-Server-Netzwerk)' },
    {
      type: 'paragraph',
      text: 'Bei einem Rechnercluster handelt es sich um eine sehr komplexe Netzwerkarchitektur. Auf der Grundlage eines leistungsfähigen Netzwerks werden mehrere Server so miteinander vernetzt, dass sie nach außen als ein einziges Gesamtsystem erscheinen. Dazu zählen insbesondere die Verteilung von Teilaufgaben auf einzelne Subsysteme sowie die Ausfallsicherheit: Fällt ein einzelner Server aus, übernehmen die übrigen seine Aufgaben. Cluster kommen daher vor allem dort zum Einsatz, wo hohe Rechenleistung oder eine besonders hohe Verfügbarkeit gefordert sind – etwa in Rechenzentren.',
    },

    { type: 'heading', level: 2, text: 'Überblick auf einen Blick' },
    {
      type: 'table',
      headers: ['Architektur', 'Rollenverteilung', 'Verwaltung', 'Typischer Einsatz'],
      rows: [
        ['Peer-to-Peer', 'Jeder Rechner ist Server und Client', 'Dezentral, keine zentrale Instanz', 'Kleine Netze (bis ~10 Rechner), Heim-/Kleinstumgebung'],
        ['Client-Server', 'Server bietet an, Clients fordern an', 'Zentral durch Administrator', 'Die meisten Firmennetze (LAN)'],
        ['Terminal-Server', 'Server rechnet, Terminals nur Ein-/Ausgabe', 'Zentral, sehr schlanke Clients', 'Umgebungen mit hohem Zentralisierungsbedarf'],
        ['Cluster (Server-Server)', 'Mehrere Server als ein Gesamtsystem', 'Zentral, hochkomplex', 'Rechenzentren, hochverfügbare Systeme'],
      ],
    },

    { type: 'heading', level: 2, text: 'Fazit' },
    {
      type: 'paragraph',
      text: 'Die Netzwerkarchitektur legt fest, wie die beteiligten Systeme zusammenarbeiten. Sie reicht vom gleichberechtigten Peer-to-Peer-Netz über das hierarchische Client-Server-Modell und das stark zentralisierte Terminal-Server-Netz bis hin zum leistungsstarken Cluster. Die Auswahl ist immer eine Abwägung zwischen Aufwand, Kosten, Datensicherheit und geforderter Leistungsfähigkeit.',
    },
  ],
}
