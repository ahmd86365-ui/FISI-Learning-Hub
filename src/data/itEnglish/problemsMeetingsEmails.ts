import type { Exercise, Topic } from '../../types/content'

/**
 * Source: IT_Englisch.md, Lesson 22 "TECHNICAL PROBLEM DESCRIPTION" (lines
 * 2236-2270), Lesson 23 "MEETINGS & TECHNICAL COMMUNICATION" (lines
 * 2272-2303), and Lesson 24 "EMAILS IN IT" (lines 2305-2336). IT_Englisch.md
 * is the sole source of truth — nothing here contradicts or extends its
 * phrases or translations. Exercises are original practice questions
 * applying exactly the sentences given in that source.
 */

const TOPIC_SLUG = 'problems-meetings-emails'

const exercises: Exercise[] = [
  {
    id: 'ex-eng-fisi-comm-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the German translation of "The device is not detected."?',
    options: [
      { id: 'a', text: 'Das Gerät wird nicht erkannt.' },
      { id: 'b', text: 'Das Gerät ist beschädigt.' },
      { id: 'c', text: 'Das Gerät wurde entfernt.' },
    ],
    correctAnswer: 'a',
    explanation: 'The device is not detected. → Das Gerät wird nicht erkannt.',
  },
  {
    id: 'ex-eng-fisi-comm-02',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Complete: "The connection has been ____." (Die Verbindung wurde unterbrochen.)',
    correctAnswer: 'lost',
    explanation: 'The connection has been lost. → Die Verbindung wurde unterbrochen.',
  },
  {
    id: 'ex-eng-fisi-comm-03',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Which phrase describes a crashed application?',
    options: [
      { id: 'a', text: 'The application has crashed.' },
      { id: 'b', text: 'The application is running slowly.' },
      { id: 'c', text: 'The application is unavailable.' },
    ],
    correctAnswer: 'a',
    explanation: 'The application has crashed. → Die Anwendung ist abgestürzt.',
  },
  {
    id: 'ex-eng-fisi-comm-04',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: '"There seems to be a problem with..." means "Es scheint ein Problem mit ... zu geben."',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'There seems to be a problem with... → Es scheint ein Problem mit ... zu geben.',
  },
  {
    id: 'ex-eng-fisi-comm-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which phrase would you use to ask for someone\'s opinion or ideas in a meeting?',
    options: [
      { id: 'a', text: 'Do you have any suggestions?' },
      { id: 'b', text: 'I agree with you.' },
      { id: 'c', text: 'Let\'s test it first.' },
    ],
    correctAnswer: 'a',
    explanation: 'Do you have any suggestions? → Haben Sie Vorschläge?',
  },
  {
    id: 'ex-eng-fisi-comm-06',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Complete: "I\'ll check it and get back to ____." (Ich werde es überprüfen und mich wieder bei Ihnen melden.)',
    correctAnswer: 'you',
    explanation: 'I\'ll check it and get back to you. → Ich werde es überprüfen und mich wieder bei Ihnen melden.',
  },
  {
    id: 'ex-eng-fisi-comm-07',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'How does a formal IT email typically close, according to the source?',
    options: [
      { id: 'a', text: 'Best regards,' },
      { id: 'b', text: 'See you,' },
      { id: 'c', text: 'Bye,' },
    ],
    correctAnswer: 'a',
    explanation: 'Best regards, → Mit freundlichen Grüßen,',
  },
  {
    id: 'ex-eng-fisi-comm-08',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What is the German translation of "Please find the configuration attached."?',
    options: [
      { id: 'a', text: 'Anbei finden Sie die Konfiguration.' },
      { id: 'b', text: 'Bitte senden Sie die Konfiguration.' },
      { id: 'c', text: 'Die Konfiguration ist fehlerhaft.' },
    ],
    correctAnswer: 'a',
    explanation: 'Please find the configuration attached. → Anbei finden Sie die Konfiguration.',
  },
  {
    id: 'ex-eng-fisi-comm-09',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: '"The server is down." and "The network is down." are both listed as ways to describe an outage.',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'The server is down. → Der Server ist ausgefallen. The network is down. → Das Netzwerk ist ausgefallen.',
  },
  {
    id: 'ex-eng-fisi-comm-10',
    topicSlug: TOPIC_SLUG,
    type: 'technical-problem',
    difficulty: 'medium',
    question: 'A colleague reports that a user\'s application has crashed and the network connection seems lost. Write a short, polite email opening and closing, using phrases from the source (greeting, reason for writing, request for help, thanks, closing).',
    correctAnswer: 'Dear Mr Smith, I am writing regarding the network problem. Could you please check the server? Thank you for your help. Best regards,',
    explanation: 'A complete answer combines: a greeting ("Dear Mr Smith," / "Dear Ms Smith," / "Hello John,"), a reason for writing ("I am writing regarding the network problem."), a request ("Could you please check the server?" / "Could you provide me with more information?"), thanks ("Thank you for your help."), and a closing ("Best regards,"). Any combination of these exact source phrases that reads as a coherent short email is a good answer — there is no single correct wording.',
  },
]

export const problemsMeetingsEmailsTopic: Topic = {
  id: 'topic-eng-fisi-problems-comm',
  slug: TOPIC_SLUG,
  moduleSlug: 'technical-english-fisi',
  title: 'Describing Problems, Meetings & Emails',
  shortIntro: 'Feste Redewendungen, um technische Probleme zu beschreiben, Meetings zu führen und IT-E-Mails zu schreiben.',
  order: 16,
  keyPoints: [
    'Probleme beschreiben: "There is a problem with...", "The system is unable to...", "The server/network is down."',
    'Meetings: "Let\'s discuss the problem.", "What is the cause of the problem?", "I\'ll check it and get back to you."',
    'E-Mails folgen dem Muster: Anrede → Grund → Bitte → Dank → Grußformel.',
    '"Best regards," entspricht "Mit freundlichen Grüßen,".',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Technical Problem Description' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['There is a problem with...', 'Es gibt ein Problem mit ...'],
        ['There seems to be a problem with...', 'Es scheint ein Problem mit ... zu geben.'],
        ['The system is unable to...', 'Das System kann ... nicht.'],
        ['The device is not detected.', 'Das Gerät wird nicht erkannt.'],
        ['The connection has been lost.', 'Die Verbindung wurde unterbrochen.'],
        ['The service is unavailable.', 'Der Dienst ist nicht verfügbar.'],
        ['The system is running slowly.', 'Das System läuft langsam.'],
        ['The application has crashed.', 'Die Anwendung ist abgestürzt.'],
        ['The server is down.', 'Der Server ist ausgefallen.'],
        ['The network is down.', 'Das Netzwerk ist ausgefallen.'],
      ],
    },
    { type: 'heading', level: 2, text: 'Meetings & Technical Communication' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['Let\'s discuss the problem.', 'Lassen Sie uns das Problem besprechen.'],
        ['What is the current situation?', 'Wie ist die aktuelle Situation?'],
        ['What is the cause of the problem?', 'Was ist die Ursache des Problems?'],
        ['Do you have any suggestions?', 'Haben Sie Vorschläge?'],
        ['I agree with you.', 'Ich stimme Ihnen zu.'],
        ['I don\'t think that\'s the main problem.', 'Ich glaube nicht, dass das das Hauptproblem ist.'],
        ['Let\'s test it first.', 'Lassen Sie uns das zuerst testen.'],
        ['I\'ll check it and get back to you.', 'Ich werde es überprüfen und mich wieder bei Ihnen melden.'],
        ['Could you send me the configuration?', 'Könnten Sie mir die Konfiguration schicken?'],
      ],
    },
    { type: 'heading', level: 2, text: 'Emails in IT' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['Dear Mr Smith,', 'Sehr geehrter Herr Smith,'],
        ['Dear Ms Smith,', 'Sehr geehrte Frau Smith,'],
        ['Hello John,', 'Hallo John,'],
        ['I am writing regarding the network problem.', 'Ich schreibe bezüglich des Netzwerkproblems.'],
        ['Could you please check the server?', 'Könnten Sie bitte den Server überprüfen?'],
        ['Please find the configuration attached.', 'Anbei finden Sie die Konfiguration.'],
        ['Could you provide me with more information?', 'Könnten Sie mir weitere Informationen geben?'],
        ['Thank you for your help.', 'Vielen Dank für Ihre Hilfe.'],
        ['Best regards,', 'Mit freundlichen Grüßen,'],
      ],
    },
    {
      type: 'key-points',
      items: [
        'Probleme werden meist im Present Simple oder Present Perfect beschrieben ("has crashed", "has been lost").',
        'In Meetings sind Höflichkeitsformen wichtig: "Could you..." statt direkter Befehle.',
        'E-Mails folgen der Struktur: Anrede → Grund des Schreibens → Bitte/Frage → Dank → Grußformel.',
        '"down" ist der Standardausdruck für einen Ausfall (server is down, network is down).',
      ],
    },
    {
      type: 'exam-tip',
      text: 'Baue dir aus den drei Bausteinen (Problem beschreiben, im Meeting reagieren, E-Mail schreiben) einen kompletten Mini-Dialog: Problem melden → im Meeting besprechen → Ergebnis per E-Mail zusammenfassen. So trainierst du alle drei Lektionen gleichzeitig für das Fachgespräch.',
    },
  ],
}
