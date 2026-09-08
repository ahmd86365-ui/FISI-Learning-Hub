import { Cpu, Landmark, Briefcase, Terminal, Code2, Network } from 'lucide-react'
import { itTechnicalModule } from './itTechnical'
import type { Module, SubjectSlug } from '../types/content'
import { vonNeumannTopic } from './itGrundlagen/vonNeumann'
import { zahlensystemeTopic } from './itGrundlagen/zahlensysteme'
import { informationseinheitenTopic } from './itGrundlagen/informationseinheiten'
import { codesystemeTopic } from './itGrundlagen/codesysteme'
import { digitaltechnikTopic } from './itGrundlagen/digitaltechnik'
import { elektrotechnikTopic } from './itGrundlagen/elektrotechnik'
import { bildgroesseTopic } from './itGrundlagen/bildgroesse'
import { audiogroesseTopic } from './itGrundlagen/audiogroesse'
import { einstiegTopic } from './java/einstieg'
import { variablenDeklarationTopic } from './java/variablenDeklaration'
import { variablenRechnenTopic } from './java/variablenRechnen'
import { variablenUebungenTopic } from './java/variablenUebungen'
import { netzwerksystemeTopic } from './netzwerktechnik/netzwerksysteme'
import { netzwerkarchitekturenTopic } from './netzwerktechnik/netzwerkarchitekturen'
import { wirtschaftssektorenTopic } from './wiso/wirtschaftssektoren'
import { marktformenTopic } from './wiso/marktformen'
import { sozialeMarktwirtschaftTopic } from './wiso/sozialeMarktwirtschaft'
import { konjunkturTopic } from './wiso/konjunktur'
import { unternehmenszieleTopic } from './wiso/unternehmensziele'
import { rechtsformenTopic } from './wiso/rechtsformen'
import { gmbhTopic } from './wiso/gmbh'
import { gewinnverteilungGmbhTopic } from './wiso/gewinnverteilungGmbh'
import { kgTopic } from './wiso/kg'
import { juristischePersonTopic } from './wiso/juristischePerson'
import { vollmachtenTopic } from './wiso/vollmachten'
import { leitungssystemeTopic } from './wiso/leitungssysteme'
import { arbeitssicherheitTopic } from './wiso/arbeitssicherheit'
import { sozialversicherungTopic } from './wiso/sozialversicherung'
import { krankenversicherungTopic } from './wiso/krankenversicherung'
import { rentenversicherungTopic } from './wiso/rentenversicherung'
import { individualversicherungTopic } from './wiso/individualversicherung'
import { streikTopic } from './wiso/streik'
import { globalisierungTopic } from './wiso/globalisierung'
import { fusionTopic } from './wiso/fusion'
import { pruefungswissenKompaktTopic } from './wiso/pruefungswissenKompakt'
import { itJobsCompanyVocabularyTopic } from './itEnglish/itJobsCompanyVocabulary'
import { itVerbsPresentSimpleTopic } from './itEnglish/itVerbsPresentSimple'
import { computerHardwareVocabularyTopic } from './itEnglish/computerHardwareVocabulary'
import { computerInstructionsInstallingDrivesTopic } from './itEnglish/computerInstructionsInstallingDrives'
import { purposeReasonClausesTopic } from './itEnglish/purposeReasonClauses'
import { internetWebVocabularyTopic } from './itEnglish/internetWebVocabulary'
import { relativePronounsFirstConditionalTopic } from './itEnglish/relativePronounsFirstConditional'
import { organisationGrammarOverviewTopic } from './itEnglish/organisationGrammarOverview'
import { itSupportHelpDeskTopic } from './itEnglish/itSupportHelpDesk'
import { troubleshootingProcessTopic } from './itEnglish/troubleshootingProcess'
import { computerHardwareTechnicalTopic } from './itEnglish/computerHardwareTechnical'
import { networkingBasicsIpAddressesTopic } from './itEnglish/networkingBasicsIpAddresses'
import { networkTroubleshootingCommandsTopic } from './itEnglish/networkTroubleshootingCommands'
import { serversInfrastructureTopic } from './itEnglish/serversInfrastructure'
import { windowsActiveDirectoryTopic } from './itEnglish/windowsActiveDirectory'
import { linuxBasicsTopic } from './itEnglish/linuxBasics'
import { cybersecurityTopic } from './itEnglish/cybersecurity'
import { backupDataRecoveryTopic } from './itEnglish/backupDataRecovery'
import { virtualizationCloudComputingTopic } from './itEnglish/virtualizationCloudComputing'
import { firewallsProtocolsTopic } from './itEnglish/firewallsProtocols'
import { remoteAdminMonitoringTopic } from './itEnglish/remoteAdminMonitoring'
import { ticketsDocumentationIncidentsTopic } from './itEnglish/ticketsDocumentationIncidents'
import { grammarPassiveModalsTopic } from './itEnglish/grammarPassiveModals'
import { problemsMeetingsEmailsTopic } from './itEnglish/problemsMeetingsEmails'
import { collocationsPhrasalVerbsSpecsTopic } from './itEnglish/collocationsPhrasalVerbsSpecs'
import { sysadminFachgespraechExamFocusTopic } from './itEnglish/sysadminFachgespraechExamFocus'

/**
 * IT Grundlagen — the first real content module, built from the school's
 * "1_IT_Grundlagen" source files (Von-Neumann-Architektur, Zahlensysteme,
 * Informationseinheiten, Codesysteme, Digitaltechnik) plus the
 * Elektrotechnik / Bildgröße / Audiogröße material supplied directly for
 * this platform.
 *
 * `test` is the module-wide "Gesamtprüfung": the architecture (scoped test,
 * random-subset drawing via `questionPoolSize`) is wired up, but its
 * `questions` pool starts empty on purpose — combining real questions from
 * across all eight topics is future work, and nothing here should be
 * fabricated to fill the interface. Populate `questions` here once topic
 * question pools exist; no other file needs to change.
 */
const itGrundlagenModule: Module = {
  id: 'mod-it-grundlagen',
  slug: 'it-grundlagen',
  subjectSlug: 'it',
  title: 'IT Grundlagen',
  description:
    'Rechnerarchitektur, Zahlensysteme, Codesysteme, Digitaltechnik und Elektrotechnik – die technischen Grundlagen der Fachinformatiker-Ausbildung.',
  icon: Cpu,
  order: 1,
  topics: [
    vonNeumannTopic,
    zahlensystemeTopic,
    informationseinheitenTopic,
    codesystemeTopic,
    digitaltechnikTopic,
    elektrotechnikTopic,
    bildgroesseTopic,
    audiogroesseTopic,
  ],
  test: {
    id: 'test-it-grundlagen-gesamtpruefung',
    scope: 'module',
    subjectSlug: 'it',
    moduleSlug: 'it-grundlagen',
    title: 'IT Grundlagen – Gesamtprüfung',
    questions: [],
    questionPoolSize: 20,
  },
}

/**
 * Java — built from the "java" course folder (Desktop/java), a separate
 * source from 1_IT_Grundlagen: `beispiele/` holds heavily-commented .java
 * example programs (reproduced verbatim as code blocks, comments intact),
 * `uebungen/` holds worksheet exercises (Aufgaben 1.01–2.24). None of the
 * worksheet PDFs contains an answer key, so every exercise here is
 * self-assessed (see `src/data/java/*.ts` for the per-topic sourcing
 * notes) — no `test` is defined for the same reason the itGrundlagen
 * module's test pool starts empty: nothing should be fabricated to fill
 * it. `show/01_Compiler_Interpreter_kurz.ppt` is a legacy binary
 * PowerPoint file that could not be read and is therefore not represented
 * here.
 */
const javaModule: Module = {
  id: 'mod-java',
  slug: 'java',
  subjectSlug: 'it',
  title: 'Java',
  description:
    'Einstieg in die Java-Programmierung: Grundgerüst, Variablen, Datentypen und Rechenoperatoren – mit Schreibtischtests und eigenen Programmierübungen.',
  icon: Code2,
  order: 2,
  topics: [einstiegTopic, variablenDeklarationTopic, variablenRechnenTopic, variablenUebungenTopic],
}

/**
 * Netzwerktechnik — built from the "Netzwerktechnik" course folder
 * (Desktop/Netzwerktechnik/Netzwerktechnik/Modul 1), transcribed from the
 * lesson HTML files and their accompanying "Arbeitsblatt" worksheets (which
 * include the author's own "Lösungen" answer keys). Only the topics that
 * have been transcribed so far are wired in here; further Modul 1/Modul 2
 * lessons are future work. No module-wide test is defined for the same
 * reason as itGrundlagen/java — nothing should be fabricated to fill it.
 */
const netzwerktechnikModule: Module = {
  id: 'mod-netzwerktechnik',
  slug: 'netzwerktechnik',
  subjectSlug: 'it',
  title: 'Netzwerktechnik',
  description:
    'Netzwerksysteme und Netzwerkarchitekturen – Server, Clients, Terminals und die grundlegenden Vernetzungsmodelle der Fachinformatiker-Ausbildung.',
  icon: Network,
  order: 3,
  topics: [netzwerksystemeTopic, netzwerkarchitekturenTopic],
}

/**
 * WISO – Wirtschafts- und Sozialkunde, built from WISO.md, the sole source
 * of truth for this content. No module-wide test is defined here since
 * WISO.md gives no cross-topic question pool to draw from — each topic's
 * own exercises cover its IHK-style practice.
 */
const wisoModule: Module = {
  id: 'mod-wiso',
  slug: 'wiso',
  subjectSlug: 'wirtschaft',
  title: 'WISO – Wirtschafts- und Sozialkunde',
  description:
    'Wirtschaftssektoren, Marktformen, Rechtsformen, Vollmachten, Aufbauorganisation, Sozialversicherung und mehr – der komplette WISO-Lernstoff der Umschulung.',
  icon: Landmark,
  order: 1,
  topics: [
    wirtschaftssektorenTopic,
    marktformenTopic,
    sozialeMarktwirtschaftTopic,
    konjunkturTopic,
    unternehmenszieleTopic,
    rechtsformenTopic,
    gmbhTopic,
    gewinnverteilungGmbhTopic,
    kgTopic,
    juristischePersonTopic,
    vollmachtenTopic,
    leitungssystemeTopic,
    arbeitssicherheitTopic,
    sozialversicherungTopic,
    krankenversicherungTopic,
    rentenversicherungTopic,
    individualversicherungTopic,
    streikTopic,
    globalisierungTopic,
    fusionTopic,
    pruefungswissenKompaktTopic,
  ],
}

/**
 * IT English Grundlagen — Units 1–3 of IT_Englisch.md (jobs & company
 * vocabulary, IT verbs & Present Simple, hardware vocabulary & computer
 * instructions, purpose/reason clauses, internet vocabulary, relative
 * pronouns & First Conditional, and the organisational-structure/grammar
 * wrap-up). IT_Englisch.md is the sole source of truth for this content.
 */
const itEnglishGrundlagenModule: Module = {
  id: 'mod-it-english-grundlagen',
  slug: 'it-english-grundlagen',
  subjectSlug: 'english',
  title: 'IT English Grundlagen',
  description:
    'IT-Berufe, Firmenvokabular, Present Simple, Hardware- und Internet-Vokabular sowie die wichtigsten Grammatikstrukturen aus den Units 1–3.',
  icon: Briefcase,
  order: 1,
  topics: [
    itJobsCompanyVocabularyTopic,
    itVerbsPresentSimpleTopic,
    computerHardwareVocabularyTopic,
    computerInstructionsInstallingDrivesTopic,
    purposeReasonClausesTopic,
    internetWebVocabularyTopic,
    relativePronounsFirstConditionalTopic,
    organisationGrammarOverviewTopic,
  ],
}

/**
 * Technical English for FISI — the second course in IT_Englisch.md: 30
 * technical-English lessons for Fachinformatiker Systemintegration
 * trainees (IT support, networking, servers, Windows/AD, Linux,
 * cybersecurity, backup, virtualization/cloud, firewalls/protocols,
 * remote administration/monitoring, documentation, grammar for IT,
 * technical communication, collocations/phrasal verbs, and the closing
 * Fachgespräch/exam-priority material) consolidated into 18 topics.
 * IT_Englisch.md is the sole source of truth for this content.
 */
const technicalEnglishFisiModule: Module = {
  id: 'mod-technical-english-fisi',
  slug: 'technical-english-fisi',
  subjectSlug: 'english',
  title: 'Technical English for FISI',
  description:
    'IT-Support, Netzwerktechnik, Server, Sicherheit, Cloud und technische Kommunikation auf Englisch – der komplette FISI-Fachenglisch-Kurs mit 30 Lektionen.',
  icon: Terminal,
  order: 2,
  topics: [
    itSupportHelpDeskTopic,
    troubleshootingProcessTopic,
    computerHardwareTechnicalTopic,
    networkingBasicsIpAddressesTopic,
    networkTroubleshootingCommandsTopic,
    serversInfrastructureTopic,
    windowsActiveDirectoryTopic,
    linuxBasicsTopic,
    cybersecurityTopic,
    backupDataRecoveryTopic,
    virtualizationCloudComputingTopic,
    firewallsProtocolsTopic,
    remoteAdminMonitoringTopic,
    ticketsDocumentationIncidentsTopic,
    grammarPassiveModalsTopic,
    problemsMeetingsEmailsTopic,
    collocationsPhrasalVerbsSpecsTopic,
    sysadminFachgespraechExamFocusTopic,
  ],
}

export const modules: Module[] = [
  itTechnicalModule,
  itGrundlagenModule,
  javaModule,
  netzwerktechnikModule,
  wisoModule,
  itEnglishGrundlagenModule,
  technicalEnglishFisiModule,
]

export function getModulesBySubject(subjectSlug: SubjectSlug): Module[] {
  return modules.filter((m) => m.subjectSlug === subjectSlug).sort((a, b) => a.order - b.order)
}

export function getModuleBySlug(subjectSlug: SubjectSlug, moduleSlug: string): Module | undefined {
  return modules.find((m) => m.subjectSlug === subjectSlug && m.slug === moduleSlug)
}
