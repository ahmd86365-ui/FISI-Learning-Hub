import type { Exercise, Topic } from '../../types/content'

/**
 * Source: IT_Englisch.md, LESSON 6 – NETWORK TROUBLESHOOTING (lines 1630-1669).
 * IT_Englisch.md is the sole source of truth — nothing here contradicts or
 * extends its command descriptions or example sentences. Exercises are
 * original practice questions applying exactly the content given in that
 * source.
 */

const TOPIC_SLUG = 'network-troubleshooting-commands'

const exercises: Exercise[] = [
  {
    id: 'ex-eng-fisi-nettrouble-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Which command is used to test connectivity?',
    options: [
      { id: 'a', text: 'ping' },
      { id: 'b', text: 'nslookup' },
      { id: 'c', text: 'arp' },
    ],
    correctAnswer: 'a',
    explanation: 'ping — test connectivity / Verbindung testen.',
  },
  {
    id: 'ex-eng-fisi-nettrouble-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Which command displays the IP configuration?',
    options: [
      { id: 'a', text: 'ipconfig' },
      { id: 'b', text: 'tracert' },
      { id: 'c', text: 'arp' },
    ],
    correctAnswer: 'a',
    explanation: 'ipconfig — display IP configuration / IP-Konfiguration anzeigen.',
  },
  {
    id: 'ex-eng-fisi-nettrouble-03',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: '"arp" is used to view ARP information.',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'arp — view ARP information / ARP-Informationen anzeigen.',
  },
  {
    id: 'ex-eng-fisi-nettrouble-04',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What is the German meaning of "tracert / traceroute"?',
    options: [
      { id: 'a', text: 'Netzwerkweg verfolgen' },
      { id: 'b', text: 'DNS-Abfrage' },
      { id: 'c', text: 'Verbindung testen' },
    ],
    correctAnswer: 'a',
    explanation: 'tracert / traceroute — trace network path / Netzwerkweg verfolgen.',
  },
  {
    id: 'ex-eng-fisi-nettrouble-05',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Complete: "Can you ____ the server?"',
    correctAnswer: 'ping',
    explanation: 'Can you ping the server? → Kannst du den Server anpingen?',
  },
  {
    id: 'ex-eng-fisi-nettrouble-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which command is used for a DNS query?',
    options: [
      { id: 'a', text: 'nslookup' },
      { id: 'b', text: 'ifconfig' },
      { id: 'c', text: 'ping' },
    ],
    correctAnswer: 'a',
    explanation: 'nslookup — query DNS / DNS-Abfrage.',
  },
  {
    id: 'ex-eng-fisi-nettrouble-07',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: '"The host is unreachable." means "Der Host ist nicht erreichbar."',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'The host is unreachable. → Der Host ist nicht erreichbar.',
  },
  {
    id: 'ex-eng-fisi-nettrouble-08',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'According to the source, what might be a physical cause of network problems?',
    options: [
      { id: 'a', text: 'The cable may be faulty.' },
      { id: 'b', text: 'The host is unreachable.' },
      { id: 'c', text: 'The network connection is unstable.' },
    ],
    correctAnswer: 'a',
    explanation: 'The cable may be faulty. → Das Kabel könnte defekt sein.',
  },
]

export const networkTroubleshootingCommandsTopic: Topic = {
  id: 'topic-eng-fisi-net-troubleshooting',
  slug: TOPIC_SLUG,
  moduleSlug: 'technical-english-fisi',
  title: 'Network Troubleshooting',
  shortIntro: 'Wichtige Kommandozeilenbefehle für die Netzwerk-Fehlersuche und wie man Netzwerkprobleme auf Englisch beschreibt.',
  order: 5,
  keyPoints: [
    'ping testet die Verbindung, ipconfig/ifconfig zeigen die Netzwerkkonfiguration an.',
    'tracert / traceroute verfolgt den Netzwerkweg, nslookup führt eine DNS-Abfrage durch, arp zeigt ARP-Informationen.',
    'Typische Problembeschreibungen: "The host is unreachable." und "The cable may be faulty."',
    'ipconfig ist der Windows-Befehl, ifconfig der entsprechende Befehl unter Linux/Unix.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Network Troubleshooting – Commands' },
    {
      type: 'code',
      language: 'text',
      code: [
        'ping                    test connectivity',
        'ipconfig                display IP configuration',
        'ifconfig                display network configuration',
        'tracert / traceroute    trace network path',
        'nslookup                query DNS',
        'arp                     view ARP information',
      ].join('\n'),
    },
    { type: 'heading', level: 3, text: 'Commands – English ↔ Deutsch' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['ping — test connectivity', 'Verbindung testen'],
        ['ipconfig — display IP configuration', 'IP-Konfiguration anzeigen'],
        ['ifconfig — display network configuration', 'Netzwerkkonfiguration anzeigen'],
        ['tracert / traceroute — trace network path', 'Netzwerkweg verfolgen'],
        ['nslookup — query DNS', 'DNS-Abfrage'],
        ['arp — view ARP information', 'ARP-Informationen anzeigen'],
      ],
    },
    { type: 'heading', level: 3, text: 'Sentences' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['Can you ping the server?', 'Kannst du den Server anpingen?'],
        ['The host is unreachable.', 'Der Host ist nicht erreichbar.'],
        ['There is a problem with the DNS configuration.', 'Es gibt ein Problem mit der DNS-Konfiguration.'],
        ['The network connection is unstable.', 'Die Netzwerkverbindung ist instabil.'],
        ['The cable may be faulty.', 'Das Kabel könnte defekt sein.'],
      ],
    },
    {
      type: 'key-points',
      items: [
        'ping prüft, ob ein Host erreichbar ist.',
        'ipconfig (Windows) / ifconfig (Linux/Unix) zeigen die aktuelle Netzwerkkonfiguration.',
        'tracert / traceroute zeigt den Weg, den ein Paket durch das Netzwerk nimmt.',
        'nslookup und arp helfen bei DNS- bzw. Adressauflösungsproblemen.',
      ],
    },
    {
      type: 'exam-tip',
      text: 'Achte auf die Betriebssystem-Unterscheidung: ipconfig gehört zu Windows, ifconfig zu Linux/Unix – beide haben aber dieselbe deutsche Bedeutung "Netzwerkkonfiguration anzeigen".',
    },
  ],
}
