import type { Exercise, Topic } from '../../types/content'

/**
 * Source: IT_Englisch.md, Lesson 14 "FIREWALLS" (lines 1936–1965) and
 * Lesson 15 "TCP/IP & COMMON PROTOCOLS" (lines 1967–1997), merged into one
 * topic. IT_Englisch.md is the sole source of truth — nothing here
 * contradicts or extends its vocabulary or example sentences. Exercises
 * are original practice questions applying exactly the terms and
 * sentences given in that source.
 */

const TOPIC_SLUG = 'firewalls-protocols'

const exercises: Exercise[] = [
  {
    id: 'ex-eng-fisi-fw-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the German translation of "inbound traffic"?',
    options: [
      { id: 'a', text: 'eingehender Datenverkehr' },
      { id: 'b', text: 'ausgehender Datenverkehr' },
      { id: 'c', text: 'Zieladresse' },
    ],
    correctAnswer: 'a',
    explanation: 'inbound traffic — eingehender Datenverkehr.',
  },
  {
    id: 'ex-eng-fisi-fw-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the English term for "blockieren"?',
    options: [
      { id: 'a', text: 'block' },
      { id: 'b', text: 'allow' },
      { id: 'c', text: 'deny' },
    ],
    correctAnswer: 'a',
    explanation: 'block — blockieren.',
  },
  {
    id: 'ex-eng-fisi-fw-03',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: '"The firewall blocks incoming traffic." means "Die Firewall blockiert eingehenden Datenverkehr."',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'The firewall blocks incoming traffic. → Die Firewall blockiert eingehenden Datenverkehr.',
  },
  {
    id: 'ex-eng-fisi-fw-04',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Complete: "Create a rule to allow ____ traffic."',
    correctAnswer: 'HTTPS',
    explanation: 'Create a rule to allow HTTPS traffic. → Erstelle eine Regel, um HTTPS-Datenverkehr zu erlauben.',
  },
  {
    id: 'ex-eng-fisi-fw-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which protocol is used for name resolution?',
    options: [
      { id: 'a', text: 'DNS' },
      { id: 'b', text: 'DHCP' },
      { id: 'c', text: 'SMTP' },
    ],
    correctAnswer: 'a',
    explanation: 'DNS — name resolution — Namensauflösung.',
  },
  {
    id: 'ex-eng-fisi-fw-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What is the purpose of DHCP?',
    options: [
      { id: 'a', text: 'automatic IP configuration' },
      { id: 'b', text: 'secure remote access' },
      { id: 'c', text: 'network diagnostics' },
    ],
    correctAnswer: 'a',
    explanation: 'DHCP — automatic IP configuration — automatische IP-Konfiguration.',
  },
  {
    id: 'ex-eng-fisi-fw-07',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: '"SSH provides secure remote access." means "SSH ermöglicht sicheren Fernzugriff."',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'SSH provides secure remote access. → SSH ermöglicht sicheren Fernzugriff.',
  },
  {
    id: 'ex-eng-fisi-fw-08',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Complete: "DHCP assigns IP addresses ____."',
    correctAnswer: 'automatically',
    explanation: 'DHCP assigns IP addresses automatically. → DHCP vergibt IP-Adressen automatisch.',
  },
  {
    id: 'ex-eng-fisi-fw-09',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which protocol stands for "reliable transport"?',
    options: [
      { id: 'a', text: 'TCP' },
      { id: 'b', text: 'UDP' },
      { id: 'c', text: 'ICMP' },
    ],
    correctAnswer: 'a',
    explanation: 'TCP — reliable transport — zuverlässige Übertragung.',
  },
  {
    id: 'ex-eng-fisi-fw-10',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the German translation of "outbound traffic"?',
    options: [
      { id: 'a', text: 'ausgehender Datenverkehr' },
      { id: 'b', text: 'eingehender Datenverkehr' },
      { id: 'c', text: 'Quelladresse' },
    ],
    correctAnswer: 'a',
    explanation: 'outbound traffic — ausgehender Datenverkehr.',
  },
]

export const firewallsProtocolsTopic: Topic = {
  id: 'topic-eng-fisi-firewalls-protocols',
  slug: TOPIC_SLUG,
  moduleSlug: 'technical-english-fisi',
  title: 'Firewalls & TCP/IP Protocols',
  shortIntro: 'Englisches Fachvokabular für Firewall-Regeln sowie die wichtigsten Netzwerkprotokolle.',
  order: 12,
  keyPoints: [
    'Eine firewall arbeitet mit rules, die traffic anhand von source, destination und port allow, block oder deny.',
    'inbound traffic (eingehend) und outbound traffic (ausgehend) werden unterschiedlich behandelt.',
    'HTTP/HTTPS, FTP, SSH, DNS und DHCP sind die grundlegenden Anwendungsprotokolle.',
    'TCP (zuverlässig) und UDP (schnell, verbindungslos) sind die zwei zentralen Transportprotokolle.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Firewalls Vocabulary' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['firewall', 'Firewall'],
        ['rule', 'Regel'],
        ['traffic', 'Datenverkehr'],
        ['inbound traffic', 'eingehender Datenverkehr'],
        ['outbound traffic', 'ausgehender Datenverkehr'],
        ['port', 'Port'],
        ['protocol', 'Protokoll'],
        ['allow', 'erlauben'],
        ['block', 'blockieren'],
        ['deny', 'verweigern'],
        ['source', 'Quelle'],
        ['destination', 'Ziel'],
        ['IP address', 'IP-Adresse'],
      ],
    },
    { type: 'heading', level: 3, text: 'Important Sentences' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['The firewall blocks incoming traffic.', 'Die Firewall blockiert eingehenden Datenverkehr.'],
        ['Create a rule to allow HTTPS traffic.', 'Erstelle eine Regel, um HTTPS-Datenverkehr zu erlauben.'],
        ['The port is blocked by the firewall.', 'Der Port wird von der Firewall blockiert.'],
      ],
    },

    { type: 'heading', level: 2, text: 'TCP/IP & Common Protocols' },
    {
      type: 'table',
      headers: ['Protocol', 'Purpose', 'Deutsch'],
      rows: [
        ['HTTP', 'web communication', 'Webkommunikation'],
        ['HTTPS', 'secure web communication', 'sichere Webkommunikation'],
        ['FTP', 'file transfer', 'Dateiübertragung'],
        ['SSH', 'secure remote access', 'sicherer Fernzugriff'],
        ['DNS', 'name resolution', 'Namensauflösung'],
        ['DHCP', 'automatic IP configuration', 'automatische IP-Konfiguration'],
        ['SMTP', 'sending email', 'E-Mail-Versand'],
        ['IMAP', 'receiving/synchronizing email', 'E-Mail-Empfang/Synchronisierung'],
        ['TCP', 'reliable transport', 'zuverlässige Übertragung'],
        ['UDP', 'fast connectionless transport', 'schnelle verbindungslose Übertragung'],
        ['ICMP', 'network diagnostics', 'Netzwerkdiagnose'],
      ],
    },
    { type: 'heading', level: 3, text: 'Important Sentences' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['HTTPS encrypts web traffic.', 'HTTPS verschlüsselt den Webverkehr.'],
        ['DNS resolves domain names.', 'DNS löst Domainnamen auf.'],
        ['DHCP assigns IP addresses automatically.', 'DHCP vergibt IP-Adressen automatisch.'],
        ['SSH provides secure remote access.', 'SSH ermöglicht sicheren Fernzugriff.'],
      ],
    },
    {
      type: 'key-points',
      items: [
        'Firewall-Regeln (rules) legen fest, ob traffic von einer source zu einer destination allow, block oder deny wird.',
        'inbound traffic vs. outbound traffic — eingehender vs. ausgehender Datenverkehr.',
        'HTTPS ist die verschlüsselte Variante von HTTP; DNS löst Domainnamen auf; DHCP vergibt IP-Adressen automatisch.',
        'TCP steht für zuverlässige Übertragung, UDP für schnelle, verbindungslose Übertragung, ICMP für Netzwerkdiagnose.',
        'SSH ermöglicht sicheren Fernzugriff; FTP dient der Dateiübertragung; SMTP/IMAP betreffen E-Mail-Versand und -Empfang.',
      ],
    },
    {
      type: 'exam-tip',
      text: 'Lerne die Protokolle paarweise nach Zweck: HTTP/HTTPS (Web), SMTP/IMAP (E-Mail), TCP/UDP (Transport) und DNS/DHCP (Namens- bzw. IP-Verwaltung). So lassen sich Verwechslungen in der Prüfung vermeiden.',
    },
  ],
}
