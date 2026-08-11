import type { Exercise, Topic } from '../../types/content'

/**
 * Source: IT_Englisch.md, LESSON 4 – NETWORKING BASICS (lines 1550-1594)
 * and LESSON 5 – IP ADDRESSES (lines 1596-1628), merged into one topic.
 * IT_Englisch.md is the sole source of truth — nothing here contradicts or
 * extends its vocabulary, concepts, or example sentences. Exercises are
 * original practice questions applying exactly the content given in that
 * source.
 */

const TOPIC_SLUG = 'networking-basics-ip-addresses'

const exercises: Exercise[] = [
  {
    id: 'ex-eng-fisi-net-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Which device connects different networks?',
    options: [
      { id: 'a', text: 'router' },
      { id: 'b', text: 'switch' },
      { id: 'c', text: 'access point' },
    ],
    correctAnswer: 'a',
    explanation: 'A router connects different networks. → Ein Router verbindet verschiedene Netzwerke.',
  },
  {
    id: 'ex-eng-fisi-net-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Which device connects devices within a local network?',
    options: [
      { id: 'a', text: 'switch' },
      { id: 'b', text: 'modem' },
      { id: 'c', text: 'firewall' },
    ],
    correctAnswer: 'a',
    explanation: 'A switch connects devices within a local network. → Ein Switch verbindet Geräte innerhalb eines lokalen Netzwerks.',
  },
  {
    id: 'ex-eng-fisi-net-03',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: 'A DHCP server assigns IP addresses automatically.',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'A DHCP server assigns IP addresses automatically. → Ein DHCP-Server vergibt IP-Adressen automatisch.',
  },
  {
    id: 'ex-eng-fisi-net-04',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What does DNS do?',
    options: [
      { id: 'a', text: 'It translates domain names into IP addresses.' },
      { id: 'b', text: 'It assigns IP addresses automatically.' },
      { id: 'c', text: 'It connects devices within a local network.' },
    ],
    correctAnswer: 'a',
    explanation: 'DNS translates domain names into IP addresses. → DNS übersetzt Domainnamen in IP-Adressen.',
  },
  {
    id: 'ex-eng-fisi-net-05',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Complete: "The default ____ provides access to other networks."',
    correctAnswer: 'gateway',
    explanation: 'The default gateway provides access to other networks. → Das Standard-Gateway ermöglicht den Zugriff auf andere Netzwerke.',
  },
  {
    id: 'ex-eng-fisi-net-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the German translation of "subnet mask"?',
    options: [
      { id: 'a', text: 'Subnetzmaske' },
      { id: 'b', text: 'Netzwerkadresse' },
      { id: 'c', text: 'Broadcast-Adresse' },
    ],
    correctAnswer: 'a',
    explanation: 'subnet mask — Subnetzmaske.',
  },
  {
    id: 'ex-eng-fisi-net-07',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: '"The server has a static IP address." translates to "Der Server hat eine statische IP-Adresse."',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'The server has a static IP address. → Der Server hat eine statische IP-Adresse.',
  },
  {
    id: 'ex-eng-fisi-net-08',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the English term for "dynamische IP-Adresse"?',
    options: [
      { id: 'a', text: 'dynamic IP address' },
      { id: 'b', text: 'static IP address' },
      { id: 'c', text: 'public address' },
    ],
    correctAnswer: 'a',
    explanation: 'dynamic IP address — dynamische IP-Adresse.',
  },
  {
    id: 'ex-eng-fisi-net-09',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Complete: "The client receives an IP address from ____."',
    correctAnswer: 'DHCP',
    explanation: 'The client receives an IP address from DHCP. → Der Client erhält eine IP-Adresse über DHCP.',
  },
]

export const networkingBasicsIpAddressesTopic: Topic = {
  id: 'topic-eng-fisi-networking-ip',
  slug: TOPIC_SLUG,
  moduleSlug: 'technical-english-fisi',
  title: 'Networking Basics & IP Addresses',
  shortIntro: 'Grundlegendes Netzwerk-Vokabular sowie IP-Adressen, Subnetzmaske und Gateway auf Englisch.',
  order: 4,
  keyPoints: [
    'Ein router verbindet verschiedene Netzwerke, ein switch verbindet Geräte innerhalb eines lokalen Netzwerks.',
    'DHCP vergibt IP-Adressen automatisch, DNS übersetzt Domainnamen in IP-Adressen.',
    'Das default gateway ermöglicht den Zugriff auf andere Netzwerke.',
    'Eine IP-Adresse kann static (statisch) oder dynamic (dynamisch) sowie private oder public sein.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Networking Basics' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['network', 'Netzwerk'],
        ['network device', 'Netzwerkgerät'],
        ['client', 'Client'],
        ['server', 'Server'],
        ['router', 'Router'],
        ['switch', 'Switch'],
        ['access point', 'Access Point'],
        ['firewall', 'Firewall'],
        ['modem', 'Modem'],
        ['network cable', 'Netzwerkkabel'],
        ['Ethernet', 'Ethernet'],
        ['wireless network', 'WLAN'],
        ['wired network', 'kabelgebundenes Netzwerk'],
        ['LAN', 'LAN'],
        ['WAN', 'WAN'],
        ['subnet', 'Subnetz'],
        ['gateway', 'Gateway'],
        ['DNS server', 'DNS-Server'],
        ['DHCP server', 'DHCP-Server'],
        ['IP address', 'IP-Adresse'],
      ],
    },
    { type: 'heading', level: 3, text: 'Important Concepts' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['A router connects different networks.', 'Ein Router verbindet verschiedene Netzwerke.'],
        ['A switch connects devices within a local network.', 'Ein Switch verbindet Geräte innerhalb eines lokalen Netzwerks.'],
        ['A DHCP server assigns IP addresses automatically.', 'Ein DHCP-Server vergibt IP-Adressen automatisch.'],
        ['DNS translates domain names into IP addresses.', 'DNS übersetzt Domainnamen in IP-Adressen.'],
        ['The default gateway provides access to other networks.', 'Das Standard-Gateway ermöglicht den Zugriff auf andere Netzwerke.'],
      ],
    },
    {
      type: 'illustration',
      component: 'network-topology-diagram',
      caption: 'Zusammenspiel von client, switch, router, server, gateway und DNS server in einem typischen Netzwerk.',
    },

    { type: 'heading', level: 2, text: 'IP Addresses' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['IP address', 'IP-Adresse'],
        ['IPv4', 'IPv4'],
        ['IPv6', 'IPv6'],
        ['subnet mask', 'Subnetzmaske'],
        ['default gateway', 'Standard-Gateway'],
        ['network address', 'Netzwerkadresse'],
        ['broadcast address', 'Broadcast-Adresse'],
        ['host', 'Host'],
        ['private address', 'private Adresse'],
        ['public address', 'öffentliche Adresse'],
        ['static IP address', 'statische IP-Adresse'],
        ['dynamic IP address', 'dynamische IP-Adresse'],
        ['address range', 'Adressbereich'],
      ],
    },
    { type: 'heading', level: 3, text: 'Useful Sentences' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['The server has a static IP address.', 'Der Server hat eine statische IP-Adresse.'],
        ['The client receives an IP address from DHCP.', 'Der Client erhält eine IP-Adresse über DHCP.'],
        ['Check the IP configuration.', 'Überprüfe die IP-Konfiguration.'],
        ['The IP address is invalid.', 'Die IP-Adresse ist ungültig.'],
      ],
    },
    {
      type: 'key-points',
      items: [
        'router = zwischen Netzwerken, switch = innerhalb eines Netzwerks.',
        'DHCP-Server vergeben IP-Adressen automatisch (dynamic), im Gegensatz zu einer static IP address.',
        'DNS-Server übersetzen Domainnamen in IP-Adressen.',
        'IP-Adressen können private (privat) oder public (öffentlich) sein.',
      ],
    },
    {
      type: 'exam-tip',
      text: 'Verwechsle nicht router und switch: der router verbindet verschiedene Netzwerke (z. B. LAN mit WAN), der switch verbindet Geräte innerhalb desselben lokalen Netzwerks.',
    },
  ],
}
