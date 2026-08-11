import type { Exercise, Topic } from '../../types/content'

/**
 * Source: IT_Englisch.md, LESSON 1 – IT SUPPORT & HELP DESK (lines 1384-1434).
 * IT_Englisch.md is the sole source of truth — nothing here contradicts or
 * extends its vocabulary or example sentences. Exercises are original
 * practice questions applying exactly the terms and sentences given in
 * that source.
 */

const TOPIC_SLUG = 'it-support-help-desk'

const exercises: Exercise[] = [
  {
    id: 'ex-eng-fisi-support-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the English term for "Anfrage"?',
    options: [
      { id: 'a', text: 'request' },
      { id: 'b', text: 'incident' },
      { id: 'c', text: 'ticket' },
    ],
    correctAnswer: 'a',
    explanation: 'request — Anfrage.',
  },
  {
    id: 'ex-eng-fisi-support-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What does "escalation" mean in German?',
    options: [
      { id: 'a', text: 'Eskalation / Weiterleitung' },
      { id: 'b', text: 'Fehlersuche' },
      { id: 'c', text: 'Lösung' },
    ],
    correctAnswer: 'a',
    explanation: 'escalation — Eskalation / Weiterleitung.',
  },
  {
    id: 'ex-eng-fisi-support-03',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: '"The user is unable to log in." means "Der Benutzer kann sich nicht anmelden."',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'The user is unable to log in. → Der Benutzer kann sich nicht anmelden.',
  },
  {
    id: 'ex-eng-fisi-support-04',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which phrase would a technician use to ask the customer to explain their issue?',
    options: [
      { id: 'a', text: 'Could you describe the problem?' },
      { id: 'b', text: 'The issue has been resolved.' },
      { id: 'c', text: 'Please restart the computer.' },
    ],
    correctAnswer: 'a',
    explanation: 'Could you describe the problem? → Könnten Sie das Problem beschreiben?',
  },
  {
    id: 'ex-eng-fisi-support-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the German translation of "on-site support"?',
    options: [
      { id: 'a', text: 'Support vor Ort' },
      { id: 'b', text: 'Fernsupport' },
      { id: 'c', text: 'technischer Support' },
    ],
    correctAnswer: 'a',
    explanation: 'on-site support — Support vor Ort.',
  },
  {
    id: 'ex-eng-fisi-support-06',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: '"remote support" means "Support vor Ort".',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'false',
    explanation: 'remote support — Fernsupport. on-site support — Support vor Ort.',
  },
  {
    id: 'ex-eng-fisi-support-07',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Complete: "I have escalated the ticket to the network ____."',
    correctAnswer: 'team',
    explanation: 'I have escalated the ticket to the network team. → Ich habe das Ticket an das Netzwerkteam weitergeleitet.',
  },
  {
    id: 'ex-eng-fisi-support-08',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What does "unavailable" mean?',
    options: [
      { id: 'a', text: 'nicht verfügbar' },
      { id: 'b', text: 'verfügbar' },
      { id: 'c', text: 'dringend' },
    ],
    correctAnswer: 'a',
    explanation: 'unavailable — nicht verfügbar. available — verfügbar.',
  },
]

export const itSupportHelpDeskTopic: Topic = {
  id: 'topic-eng-fisi-support-helpdesk',
  slug: TOPIC_SLUG,
  moduleSlug: 'technical-english-fisi',
  title: 'IT Support & Help Desk',
  shortIntro: 'Grundvokabular und typische Redewendungen für die Arbeit am Helpdesk – von der Anfrage bis zur Eskalation.',
  order: 1,
  keyPoints: [
    'IT-Support-Mitarbeiter bearbeiten Tickets, Incidents und Anfragen von Kunden bzw. Anwendern.',
    'Remote support (Fernsupport) und on-site support (Support vor Ort) sind zwei Arten der Unterstützung.',
    'Dringende Probleme (urgent) werden oft eskaliert (escalation) an ein anderes Team.',
    'Typische Phrasen wie "Could you describe the problem?" strukturieren das Support-Gespräch.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'IT Support & Help Desk – Vocabulary' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['IT support', 'IT-Support'],
        ['help desk', 'Helpdesk'],
        ['support technician', 'Supporttechniker'],
        ['user', 'Benutzer / Anwender'],
        ['customer', 'Kunde'],
        ['issue', 'Problem / Anliegen'],
        ['problem', 'Problem'],
        ['request', 'Anfrage'],
        ['incident', 'Störung / Incident'],
        ['ticket', 'Ticket'],
        ['troubleshooting', 'Fehlersuche'],
        ['solution', 'Lösung'],
        ['technical support', 'technischer Support'],
        ['remote support', 'Fernsupport'],
        ['on-site support', 'Support vor Ort'],
        ['escalation', 'Eskalation / Weiterleitung'],
        ['priority', 'Priorität'],
        ['urgent', 'dringend'],
        ['available', 'verfügbar'],
        ['unavailable', 'nicht verfügbar'],
      ],
    },
    { type: 'heading', level: 3, text: 'Important Sentences' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['The user is unable to log in.', 'Der Benutzer kann sich nicht anmelden.'],
        ['I will investigate the issue.', 'Ich werde das Problem untersuchen.'],
        ['I need to check the server.', 'Ich muss den Server überprüfen.'],
        ['Could you describe the problem?', 'Könnten Sie das Problem beschreiben?'],
        ['Please restart the computer.', 'Bitte starten Sie den Computer neu.'],
        ['The issue has been resolved.', 'Das Problem wurde behoben.'],
        ['I have escalated the ticket to the network team.', 'Ich habe das Ticket an das Netzwerkteam weitergeleitet.'],
      ],
    },
    {
      type: 'key-points',
      items: [
        'issue, problem und incident sind eng verwandt, aber incident wird meist für ein konkretes Ticket/Ereignis verwendet.',
        'remote support = Fernsupport, on-site support = Support vor Ort.',
        'escalation bedeutet, ein Ticket an ein zuständiges Team weiterzuleiten.',
        '"Could you describe the problem?" ist eine zentrale Einstiegsfrage im Kundengespräch.',
      ],
    },
    {
      type: 'exam-tip',
      text: 'Merke dir die Höflichkeitsformen mit "Could you..." und "Please..." – im Helpdesk-Kontext wird fast immer höflich formuliert, auch wenn es um dringende (urgent) Probleme geht.',
    },
  ],
}
