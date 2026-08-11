import type { Exercise, Topic } from '../../types/content'

/**
 * Source: IT_Englisch.md, Lesson 28 "SYSTEM ADMINISTRATION" (lines
 * 2507-2558), Lesson 30 "INTERVIEW / FACHGESPRÄCH" (lines 2618-2632), the
 * "MASTER TOPIC MAP – FISI SYSTEMINTEGRATION" (lines 2634-2728), and
 * "PRIORITY FOR FISI" (lines 2730-2743). IT_Englisch.md is the sole source
 * of truth — nothing here contradicts or extends its vocabulary, model
 * answer, topic map, or priority list. Exercises are original practice
 * questions applying exactly the content given in that source.
 */

const TOPIC_SLUG = 'sysadmin-fachgespraech-exam-focus'

const exercises: Exercise[] = [
  {
    id: 'ex-eng-fisi-sysadmin-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the English term for "Zugriffsverwaltung"?',
    options: [
      { id: 'a', text: 'access management' },
      { id: 'b', text: 'user management' },
      { id: 'c', text: 'patch management' },
    ],
    correctAnswer: 'a',
    explanation: 'access management → Zugriffsverwaltung.',
  },
  {
    id: 'ex-eng-fisi-sysadmin-02',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Complete: "All systems must be kept up to ____." (Alle Systeme müssen aktuell gehalten werden.)',
    correctAnswer: 'date',
    explanation: 'All systems must be kept up to date. → Alle Systeme müssen aktuell gehalten werden.',
  },
  {
    id: 'ex-eng-fisi-sysadmin-03',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Who is responsible for the IT infrastructure, according to Lesson 28?',
    options: [
      { id: 'a', text: 'The system administrator' },
      { id: 'b', text: 'The end user' },
      { id: 'c', text: 'The help desk' },
    ],
    correctAnswer: 'a',
    explanation: 'The system administrator is responsible for the IT infrastructure. → Der Systemadministrator ist für die IT-Infrastruktur verantwortlich.',
  },
  {
    id: 'ex-eng-fisi-sysadmin-04',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'In the Lesson 30 model answer, what is the very first step when a computer cannot connect to the network?',
    options: [
      { id: 'a', text: 'Check the network cable or Wi-Fi connection.' },
      { id: 'b', text: 'Use ping to test connectivity.' },
      { id: 'c', text: 'Check the default gateway and DNS configuration.' },
    ],
    correctAnswer: 'a',
    explanation: 'First, I would check the network cable or Wi-Fi connection. → Zuerst würde ich das Netzwerkkabel oder die WLAN-Verbindung überprüfen.',
  },
  {
    id: 'ex-eng-fisi-sysadmin-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What is the final step in the Lesson 30 model answer?',
    options: [
      { id: 'a', text: 'Check the network device and document the solution.' },
      { id: 'b', text: 'Restart the computer.' },
      { id: 'c', text: 'Call the help desk.' },
    ],
    correctAnswer: 'a',
    explanation: 'Finally, I would check the network device and document the solution. → Zum Schluss würde ich das Netzwerkgerät überprüfen und die Lösung dokumentieren.',
  },
  {
    id: 'ex-eng-fisi-sysadmin-06',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: 'According to "PRIORITY FOR FISI", Networking is rated VERY IMPORTANT.',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: '1. Networking — VERY IMPORTANT.',
  },
  {
    id: 'ex-eng-fisi-sysadmin-07',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which of these is rated only "IMPORTANT" (not "VERY IMPORTANT") in the priority list?',
    options: [
      { id: 'a', text: 'Hardware' },
      { id: 'b', text: 'Troubleshooting' },
      { id: 'c', text: 'Technical Documentation & Tickets' },
    ],
    correctAnswer: 'a',
    explanation: '6. Hardware — IMPORTANT. (Troubleshooting and Technical Documentation & Tickets are both VERY IMPORTANT.)',
  },
  {
    id: 'ex-eng-fisi-sysadmin-08',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which category in the Master Topic Map includes "Subnets", "DNS" and "DHCP"?',
    options: [
      { id: 'a', text: '03 — Networking' },
      { id: 'b', text: '04 — Servers' },
      { id: 'c', text: '08 — Monitoring' },
    ],
    correctAnswer: 'a',
    explanation: '03 — Networking → Network basics, IP addresses, Subnets, DNS, DHCP, TCP/IP, Ports & protocols, Routers & switches, Network troubleshooting.',
  },
  {
    id: 'ex-eng-fisi-sysadmin-09',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'easy',
    question: 'What is category 12 in the Master Topic Map called (in two German-relevant words, as in the source heading)?',
    correctAnswer: 'Fachgespräch / Interview',
    explanation: '12 — Fachgespräch / Interview → Technical questions, Explaining solutions, Describing incidents, Presenting systems, Talking about Ausbildung.',
  },
  {
    id: 'ex-eng-fisi-sysadmin-10',
    topicSlug: TOPIC_SLUG,
    type: 'technical-problem',
    difficulty: 'hard',
    question: 'Im Fachgespräch wirst du gefragt: "What do you do if a computer cannot connect to the network?" Formuliere deine Antwort auf Englisch, so wie im Modelldialog aus Lesson 30.',
    correctAnswer: 'First, I would check the network cable or Wi-Fi connection. Then I would check the IP configuration. I would use ping to test connectivity. After that, I would check the default gateway and DNS configuration. Finally, I would check the network device and document the solution.',
    explanation: 'Die im Kurs vorgegebene Musterantwort lautet: "First, I would check the network cable or Wi-Fi connection. Then I would check the IP configuration. I would use ping to test connectivity. After that, I would check the default gateway and DNS configuration. Finally, I would check the network device and document the solution." (Zuerst würde ich das Netzwerkkabel oder die WLAN-Verbindung überprüfen. Danach würde ich die IP-Konfiguration überprüfen. Ich würde Ping verwenden, um die Verbindung zu testen. Anschließend würde ich das Standard-Gateway und die DNS-Konfiguration überprüfen. Zum Schluss würde ich das Netzwerkgerät überprüfen und die Lösung dokumentieren.) Wichtig ist die klare Schritt-für-Schritt-Struktur mit "would" (Konjunktiv) und Signalwörtern wie First, Then, After that, Finally — nicht der exakte Wortlaut.',
  },
]

export const sysadminFachgespraechExamFocusTopic: Topic = {
  id: 'topic-eng-fisi-sysadmin-fachgespraech',
  slug: TOPIC_SLUG,
  moduleSlug: 'technical-english-fisi',
  title: 'System Administration, Fachgespräch & Prüfungsschwerpunkte',
  shortIntro: 'Systemadministrations-Vokabular, ein Modell-Fachgespräch und der komplette Themenüberblick mit Prüfungsschwerpunkten für die FISI-Ausbildung.',
  order: 18,
  keyPoints: [
    'system administrator = Systemadministrator, verantwortlich für Konfiguration, Infrastructure, User- und Patch-Management.',
    'Die Fachgespräch-Musterantwort zu Netzwerkproblemen folgt der Struktur: First → Then → After that → Finally.',
    'Die Master Topic Map gliedert den gesamten Stoff in 12 Kategorien von IT Basics bis Fachgespräch/Interview.',
    'Networking, Troubleshooting, Servers & System Administration, Cybersecurity und Technical Documentation & Tickets sind VERY IMPORTANT.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'System Administration' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['system administrator', 'Systemadministrator'],
        ['system administration', 'Systemadministration'],
        ['configuration', 'Konfiguration'],
        ['infrastructure', 'Infrastruktur'],
        ['operating system', 'Betriebssystem'],
        ['user management', 'Benutzerverwaltung'],
        ['software deployment', 'Softwareverteilung'],
        ['update management', 'Updateverwaltung'],
        ['patch management', 'Patchmanagement'],
        ['access management', 'Zugriffsverwaltung'],
        ['system maintenance', 'Systemwartung'],
        ['system availability', 'Systemverfügbarkeit'],
      ],
    },
    { type: 'heading', level: 3, text: 'Important sentences' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['The administrator manages user accounts.', 'Der Administrator verwaltet Benutzerkonten.'],
        [
          'The system administrator is responsible for the IT infrastructure.',
          'Der Systemadministrator ist für die IT-Infrastruktur verantwortlich.',
        ],
        ['All systems must be kept up to date.', 'Alle Systeme müssen aktuell gehalten werden.'],
      ],
    },
    { type: 'heading', level: 2, text: 'Interview / Fachgespräch' },
    {
      type: 'example',
      title: 'Question: What do you do if a computer cannot connect to the network?',
      text: 'First, I would check the network cable or Wi-Fi connection. Then I would check the IP configuration. I would use ping to test connectivity. After that, I would check the default gateway and DNS configuration. Finally, I would check the network device and document the solution.',
    },
    {
      type: 'example',
      title: 'Frage: Was machst du, wenn ein Computer keine Verbindung zum Netzwerk herstellen kann?',
      text: 'Zuerst würde ich das Netzwerkkabel oder die WLAN-Verbindung überprüfen. Danach würde ich die IP-Konfiguration überprüfen. Ich würde Ping verwenden, um die Verbindung zu testen. Anschließend würde ich das Standard-Gateway und die DNS-Konfiguration überprüfen. Zum Schluss würde ich das Netzwerkgerät überprüfen und die Lösung dokumentieren.',
    },
    {
      type: 'exam-tip',
      text: 'Lerne diese Musterantwort auswendig als Gerüst für JEDE Fehlerbeschreibung im Fachgespräch: erst Kabel/Verbindung prüfen, dann Konfiguration, dann testen (z. B. mit ping), dann Gateway/DNS prüfen, zum Schluss dokumentieren. Das "would" (Konjunktiv) zeigt, dass du eine hypothetische Vorgehensweise beschreibst.',
    },
    { type: 'heading', level: 2, text: 'Master Topic Map – FISI Systemintegration' },
    {
      type: 'list',
      style: 'numbered',
      items: [
        '01 — IT Basics: basic IT vocabulary, hardware, software, operating systems.',
        '02 — IT Support: help desk, tickets, troubleshooting, incident management.',
        '03 — Networking: network basics, IP addresses, subnets, DNS, DHCP, TCP/IP, ports & protocols, routers & switches, network troubleshooting.',
        '04 — Servers: Windows Server, Linux, Active Directory, services, server administration.',
        '05 — Cybersecurity: firewalls, authentication, permissions, malware, phishing, encryption, security incidents.',
        '06 — Backup & Recovery: backup, restore, disaster recovery, data protection.',
        '07 — Virtualization & Cloud: virtual machines, hypervisors, cloud computing, infrastructure.',
        '08 — Monitoring: logs, alerts, performance, availability.',
        '09 — Technical Communication: emails, tickets, documentation, meetings, explaining technical problems.',
        '10 — Grammar for IT: present simple, past simple, present perfect, passive voice, modal verbs, conditionals, relative clauses, questions, prepositions, technical instructions.',
        '11 — FISI Technical Vocabulary: IT vocabulary, IT collocations, phrasal verbs, abbreviations.',
        '12 — Fachgespräch / Interview: technical questions, explaining solutions, describing incidents, presenting systems, talking about Ausbildung.',
      ],
    },
    { type: 'heading', level: 2, text: 'Priority for FISI' },
    {
      type: 'table',
      headers: ['Topic', 'Priority'],
      rows: [
        ['Networking', 'VERY IMPORTANT'],
        ['Troubleshooting', 'VERY IMPORTANT'],
        ['Servers & System Administration', 'VERY IMPORTANT'],
        ['Cybersecurity', 'VERY IMPORTANT'],
        ['Technical Documentation & Tickets', 'VERY IMPORTANT'],
        ['Hardware', 'IMPORTANT'],
        ['Windows / Active Directory', 'IMPORTANT'],
        ['Linux', 'IMPORTANT'],
        ['Backup & Recovery', 'IMPORTANT'],
        ['Virtualization & Cloud', 'IMPORTANT'],
        ['Technical Emails', 'IMPORTANT'],
        ['Technical Grammar', 'VERY IMPORTANT'],
      ],
    },
    {
      type: 'key-points',
      items: [
        'Die Master Topic Map umfasst 12 Kategorien, von IT Basics (01) bis Fachgespräch/Interview (12).',
        'Fünf Bereiche sind laut Priority-Liste VERY IMPORTANT: Networking, Troubleshooting, Servers & System Administration, Cybersecurity, Technical Documentation & Tickets.',
        'Auch Technical Grammar ist VERY IMPORTANT — Grammatik wird also genauso geprüft wie Fachvokabular.',
        'Die restlichen Bereiche (Hardware, Windows/AD, Linux, Backup & Recovery, Virtualization & Cloud, Technical Emails) sind IMPORTANT, aber nicht die höchste Priorität.',
      ],
    },
    {
      type: 'note',
      text: 'Diese Master Topic Map und Priority-Liste sind eine gute Checkliste zur Selbstkontrolle vor der Prüfung: Gehe jede der 12 Kategorien durch und prüfe, ob du zu jedem Stichpunkt mindestens einen englischen Beispielsatz nennen kannst.',
    },
  ],
}
