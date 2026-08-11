import type { Exercise, Topic } from '../../types/content'

/**
 * Source: IT_Englisch.md, Unit 2, Lesson 3 (Computer Instructions) and
 * Lesson 4 (Installing an Internal Drive). IT_Englisch.md is the sole
 * source of truth — nothing here contradicts or extends its vocabulary,
 * installation sequence or example sentences. Exercises are original
 * practice questions applying exactly the content of that source.
 */

const TOPIC_SLUG = 'computer-instructions-installing-drives'

const exercises: Exercise[] = [
  {
    id: 'ex-eng-instr-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Which instruction means "einstecken / einsetzen"?',
    options: [
      { id: 'a', text: 'insert' },
      { id: 'b', text: 'drag' },
      { id: 'c', text: 'scroll' },
    ],
    correctAnswer: 'a',
    explanation: 'insert → einstecken / einsetzen.',
  },
  {
    id: 'ex-eng-instr-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Which button makes a window smaller (without closing it)?',
    options: [
      { id: 'a', text: 'minimise' },
      { id: 'b', text: 'maximise' },
      { id: 'c', text: 'disconnect' },
    ],
    correctAnswer: 'a',
    explanation: "Click the 'minimise' button to make the window smaller. → Klicke auf die Schaltfläche „Minimieren“, um das Fenster zu verkleinern.",
  },
  {
    id: 'ex-eng-instr-03',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Complete: "Insert the cable into the ____."',
    options: [
      { id: 'a', text: 'socket' },
      { id: 'b', text: 'icon' },
      { id: 'c', text: 'help menu' },
    ],
    correctAnswer: 'a',
    explanation: 'Insert the cable into the socket. → Stecke das Kabel in die Buchse.',
  },
  {
    id: 'ex-eng-instr-04',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What is the very first step when adding a new internal drive?',
    options: [
      { id: 'a', text: 'Add a new internal drive and make sure the computer is off.' },
      { id: 'b', text: 'Format the drive.' },
      { id: 'c', text: 'Switch on the computer.' },
    ],
    correctAnswer: 'a',
    explanation: 'Step 1–2: Add a new internal drive. Make sure the computer is off.',
  },
  {
    id: 'ex-eng-instr-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'hard',
    question: 'In the installation sequence, what comes directly AFTER connecting the SATA cable to the drive?',
    options: [
      { id: 'a', text: 'Connect a power cable.' },
      { id: 'b', text: 'Partition it if necessary.' },
      { id: 'c', text: 'Push the drive into a spare space.' },
    ],
    correctAnswer: 'a',
    explanation: 'Sequence: ...connect the SATA cable to the drive → connect a power cable → switch on the computer → format the drive → partition it if necessary.',
  },
  {
    id: 'ex-eng-instr-06',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: 'You should format the drive before partitioning it (if necessary).',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'Step 9: Format the drive. Step 10: Partition it if necessary.',
  },
  {
    id: 'ex-eng-instr-07',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the German translation of "disconnect"?',
    options: [
      { id: 'a', text: 'trennen' },
      { id: 'b', text: 'verbinden' },
      { id: 'c', text: 'ziehen' },
    ],
    correctAnswer: 'a',
    explanation: 'disconnect → trennen. connect → verbinden. drag → ziehen.',
  },
  {
    id: 'ex-eng-instr-08',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'easy',
    question: 'What single word means "Netzteil / Stromversorgung"?',
    correctAnswer: 'power supply',
    explanation: 'power supply → Netzteil / Stromversorgung.',
  },
]

export const computerInstructionsInstallingDrivesTopic: Topic = {
  id: 'topic-eng-grundlagen-instructions-installing',
  slug: TOPIC_SLUG,
  moduleSlug: 'it-english-grundlagen',
  title: 'Computer Instructions & Installing an Internal Drive',
  shortIntro: 'Anweisungen für die Bedienung von Computern und die vollständige Installationssequenz für eine interne Festplatte.',
  order: 4,
  keyPoints: [
    'insert = einstecken, drag = ziehen, click = klicken, disconnect = trennen.',
    'Installation sequence: drive off → push into space → connect SATA → connect power → switch on → format → partition.',
    'Always make sure the computer is off before working inside the case.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Computer Instructions' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['insert', 'einstecken / einsetzen'],
        ['turn on', 'einschalten'],
        ['turn off', 'ausschalten'],
        ['drag', 'ziehen'],
        ['scroll', 'scrollen / nach unten/oben bewegen'],
        ['slide', 'schieben'],
        ['click', 'klicken'],
        ['double-click', 'doppelklicken'],
        ['disconnect', 'trennen'],
        ['connect', 'verbinden'],
        ['minimise', 'minimieren'],
        ['maximise', 'maximieren'],
        ['power supply', 'Netzteil / Stromversorgung'],
        ['icon', 'Symbol'],
        ['help menu', 'Hilfemenü'],
        ['socket', 'Steckdose / Anschluss'],
      ],
    },
    { type: 'heading', level: 3, text: 'Important Sentences' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['Insert the cable into the socket.', 'Stecke das Kabel in die Buchse.'],
        ["Turn off the computer when you've finished.", 'Schalte den Computer aus, wenn du fertig bist.'],
        ['Drag the scroll button down.', 'Ziehe die Scroll-Schaltfläche nach unten.'],
        [
          "Click the 'minimise' button to make the window smaller.",
          'Klicke auf die Schaltfläche „Minimieren“, um das Fenster zu verkleinern.',
        ],
        ['Disconnect the headphones from the computer.', 'Trenne die Kopfhörer vom Computer.'],
      ],
    },

    { type: 'heading', level: 2, text: 'Installing an Internal Drive' },
    {
      type: 'paragraph',
      text: 'Vokabular und vollständige Sequenz für den Einbau einer neuen internen Festplatte.',
    },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['internal drive', 'interne Festplatte'],
        ['connect', 'anschließen'],
        ['disconnect', 'trennen'],
        ['motherboard', 'Hauptplatine'],
        ['partition', 'partitionieren'],
        ['plug', 'einstecken / anschließen'],
        ['push', 'drücken / hineinschieben'],
      ],
    },
    { type: 'heading', level: 3, text: 'Installation Sequence' },
    {
      type: 'list',
      style: 'numbered',
      items: [
        'Add a new internal drive. → Eine neue interne Festplatte einbauen.',
        'Make sure the computer is off. → Stelle sicher, dass der Computer ausgeschaltet ist.',
        'Disconnect it from the electricity socket. → Trenne ihn von der Steckdose.',
        'Push the drive into a spare space. → Schiebe die Festplatte in einen freien Platz.',
        'Connect one end of the SATA cable to the SATA socket on the motherboard. → Verbinde ein Ende des SATA-Kabels mit dem SATA-Anschluss auf dem Motherboard.',
        'Connect the other end to the drive. → Verbinde das andere Ende mit der Festplatte.',
        'Connect a power cable. → Schließe ein Stromkabel an.',
        'Switch on the computer. → Schalte den Computer ein.',
        'Format the drive. → Formatiere die Festplatte.',
        'Partition it if necessary. → Partitioniere sie, wenn nötig.',
      ],
    },
    {
      type: 'warning',
      text: 'Vor dem Öffnen des Gehäuses und dem Arbeiten an der Hardware muss der Computer ausgeschaltet und von der Steckdose getrennt sein.',
    },
    {
      type: 'exam-tip',
      text: 'Diese 10-Schritte-Sequenz ist ein typisches "put the instructions in order"-Aufgabenformat – lerne die Reihenfolge, nicht nur die Vokabeln.',
    },
  ],
}
