import type { Exercise, Topic } from '../../types/content'

/**
 * Source: IT_Englisch.md, Lesson 12 "VIRTUALIZATION" (lines 1872–1903) and
 * Lesson 13 "CLOUD COMPUTING" (lines 1905–1934), merged into one topic.
 * IT_Englisch.md is the sole source of truth — nothing here contradicts or
 * extends its vocabulary or example sentences. Exercises are original
 * practice questions applying exactly the terms and sentences given in
 * that source.
 */

const TOPIC_SLUG = 'virtualization-cloud-computing'

const exercises: Exercise[] = [
  {
    id: 'ex-eng-fisi-virt-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the German translation of "hypervisor"?',
    options: [
      { id: 'a', text: 'Hypervisor' },
      { id: 'b', text: 'Host' },
      { id: 'c', text: 'Snapshot' },
    ],
    correctAnswer: 'a',
    explanation: 'hypervisor — Hypervisor.',
  },
  {
    id: 'ex-eng-fisi-virt-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the English term for "virtuelle Maschine"?',
    options: [
      { id: 'a', text: 'virtual machine' },
      { id: 'b', text: 'virtual disk' },
      { id: 'c', text: 'virtual network' },
    ],
    correctAnswer: 'a',
    explanation: 'virtual machine — virtuelle Maschine (also abbreviated VM).',
  },
  {
    id: 'ex-eng-fisi-virt-03',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: '"Create a snapshot before making changes." means "Erstelle vor Änderungen einen Snapshot."',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'Create a snapshot before making changes. → Erstelle vor Änderungen einen Snapshot.',
  },
  {
    id: 'ex-eng-fisi-virt-04',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Complete: "The VM is running on the ____ server."',
    correctAnswer: 'host',
    explanation: 'The VM is running on the host server. → Die VM läuft auf dem Host-Server.',
  },
  {
    id: 'ex-eng-fisi-virt-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the German translation of "snapshot"?',
    options: [
      { id: 'a', text: 'Snapshot' },
      { id: 'b', text: 'Ressourcenverteilung' },
      { id: 'c', text: 'Gast' },
    ],
    correctAnswer: 'a',
    explanation: 'snapshot — Snapshot.',
  },
  {
    id: 'ex-eng-fisi-virt-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which cloud type combines public and private cloud elements?',
    options: [
      { id: 'a', text: 'hybrid cloud' },
      { id: 'b', text: 'private cloud' },
      { id: 'c', text: 'public cloud' },
    ],
    correctAnswer: 'a',
    explanation: 'hybrid cloud — Hybrid Cloud (listed alongside public cloud and private cloud).',
  },
  {
    id: 'ex-eng-fisi-virt-07',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What is the German translation of "scalability"?',
    options: [
      { id: 'a', text: 'Skalierbarkeit' },
      { id: 'b', text: 'Verfügbarkeit' },
      { id: 'c', text: 'Infrastruktur' },
    ],
    correctAnswer: 'a',
    explanation: 'scalability — Skalierbarkeit.',
  },
  {
    id: 'ex-eng-fisi-virt-08',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: '"The infrastructure can be scaled up when necessary." means "Die Infrastruktur kann bei Bedarf erweitert werden."',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'The infrastructure can be scaled up when necessary. → Die Infrastruktur kann bei Bedarf erweitert werden.',
  },
  {
    id: 'ex-eng-fisi-virt-09',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Complete: "The company uses cloud services to ____ data."',
    correctAnswer: 'store',
    explanation: 'The company uses cloud services to store data. → Das Unternehmen nutzt Cloud-Dienste zur Speicherung von Daten.',
  },
  {
    id: 'ex-eng-fisi-virt-10',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the German translation of "data centre"?',
    options: [
      { id: 'a', text: 'Rechenzentrum' },
      { id: 'b', text: 'Region' },
      { id: 'c', text: 'Cloud-Anbieter' },
    ],
    correctAnswer: 'a',
    explanation: 'data centre — Rechenzentrum.',
  },
]

export const virtualizationCloudComputingTopic: Topic = {
  id: 'topic-eng-fisi-virtualization-cloud',
  slug: TOPIC_SLUG,
  moduleSlug: 'technical-english-fisi',
  title: 'Virtualization & Cloud Computing',
  shortIntro: 'Englisches Fachvokabular für virtuelle Maschinen, Hypervisoren und Cloud-Dienste.',
  order: 11,
  keyPoints: [
    'hypervisor, host und guest beschreiben, wie eine virtual machine (VM) auf einem Server läuft.',
    'Vor Änderungen an einer VM sollte man einen snapshot erstellen.',
    'public cloud, private cloud und hybrid cloud sind die drei Grundmodelle des Cloud Computing.',
    'scalability (Skalierbarkeit) und availability (Verfügbarkeit) sind zentrale Vorteile der Cloud.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Virtualization Vocabulary' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['virtualization', 'Virtualisierung'],
        ['virtual machine', 'virtuelle Maschine'],
        ['VM', 'virtuelle Maschine'],
        ['hypervisor', 'Hypervisor'],
        ['host', 'Host'],
        ['guest', 'Gast'],
        ['virtual CPU', 'virtuelle CPU'],
        ['virtual RAM', 'virtueller Arbeitsspeicher'],
        ['virtual disk', 'virtuelle Festplatte'],
        ['snapshot', 'Snapshot'],
        ['virtual network', 'virtuelles Netzwerk'],
        ['resource allocation', 'Ressourcenverteilung'],
      ],
    },
    { type: 'heading', level: 3, text: 'Important Sentences' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['The server hosts several virtual machines.', 'Der Server hostet mehrere virtuelle Maschinen.'],
        ['The virtual machine needs more RAM.', 'Die virtuelle Maschine benötigt mehr RAM.'],
        ['Create a snapshot before making changes.', 'Erstelle vor Änderungen einen Snapshot.'],
        ['The VM is running on the host server.', 'Die VM läuft auf dem Host-Server.'],
      ],
    },

    { type: 'heading', level: 2, text: 'Cloud Computing Vocabulary' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['cloud computing', 'Cloud Computing'],
        ['cloud service', 'Cloud-Dienst'],
        ['public cloud', 'Public Cloud'],
        ['private cloud', 'Private Cloud'],
        ['hybrid cloud', 'Hybrid Cloud'],
        ['virtual server', 'virtueller Server'],
        ['storage', 'Speicher'],
        ['scalability', 'Skalierbarkeit'],
        ['availability', 'Verfügbarkeit'],
        ['region', 'Region'],
        ['data centre', 'Rechenzentrum'],
        ['cloud provider', 'Cloud-Anbieter'],
        ['infrastructure', 'Infrastruktur'],
      ],
    },
    { type: 'heading', level: 3, text: 'Important Sentences' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['The company uses cloud services to store data.', 'Das Unternehmen nutzt Cloud-Dienste zur Speicherung von Daten.'],
        ['The infrastructure can be scaled up when necessary.', 'Die Infrastruktur kann bei Bedarf erweitert werden.'],
        ['The service is hosted in the cloud.', 'Der Dienst wird in der Cloud gehostet.'],
      ],
    },
    {
      type: 'key-points',
      items: [
        'virtualization macht es möglich, dass ein host mehrere guest-Systeme (virtual machines) gleichzeitig betreibt.',
        'Der hypervisor verwaltet virtuelle Ressourcen wie virtual CPU, virtual RAM und virtual disk.',
        'Ein snapshot sichert den Zustand einer VM, bevor Änderungen vorgenommen werden.',
        'public cloud, private cloud und hybrid cloud unterscheiden sich darin, wer die Infrastruktur betreibt und nutzt.',
        'scalability und availability sind die zentralen Vorteile, die cloud provider über ihre data centres anbieten.',
      ],
    },
    {
      type: 'exam-tip',
      text: 'Merke dir das Begriffspaar host/guest sowie public/private/hybrid cloud als Gegensätze – solche Paare werden in Prüfungen gern gegenübergestellt.',
    },
  ],
}
