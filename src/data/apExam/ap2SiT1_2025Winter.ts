import type { ApExamMeta, ApExamQuestion } from '../../types/apExam'

export const ap2SiT1_2025WinterMeta: ApExamMeta = {
  id: 'ap2-si-t1-2025-winter',
  area: 'AP2_SI_T1',
  year: 2025,
  period: 'Winter',
  label: 'Winter 2025/26',
  examDate: 'Mittwoch, 26. November 2025',
  examTitle: 'Konzeption und Administration von IT-Systemen',
  courseCode: '1202',
  sourceExamPdf: 'SI_AP2_T1_25w.pdf',
  sourceSolutionPdf: 'SI_AP2_T1_25w_kommentiert.pdf',
  solutionSource: 'unofficial',
  taskCount: 4,
  durationMinutes: 90,
  totalPoints: 100,
}

const SCENARIO =
  'Die Aufgaben 1 bis 4 beziehen sich auf die folgende Ausgangssituation:\n\nSie arbeiten als Fachinformatiker für Systemintegration bei der Kranich AG. Dabei handelt es sich um ein mittelständisches Unternehmen im Bereich Maschinenbau.\n\nAktuell sind Sie im Bereich IT-Systemadministration mit verschiedenen Routineaufgaben beschäftigt.\n\nBearbeiten Sie in diesem Zusammenhang die folgenden vier Aufgaben:\n1. Planung und Installation von Serverplattformen\n2. Serverdienste auswählen und bereitstellen\n3. Software zur Systemverwaltung weiterentwickeln und testen\n4. Das Datensicherungskonzept konzipieren'

export const ap2SiT1_2025WinterQuestions: ApExamQuestion[] = [
  // 1. Aufgabe (24 Punkte) — Planung und Installation von Serverplattformen
  {
    id: 'ap2-si-t1-2025-winter-q1-aa',
    examId: 'ap2-si-t1-2025-winter',
    questionNumber: 1,
    subPart: 'aa',
    topic: 'Serverhardware / Systemauswahl',
    scenario: SCENARIO,
    referenceText:
      'Tabelle "System 1 / System 2":\n\nSystem 1:\n– Prozessoren: 2 CPUs, 3.4 GHz\n– Kerne: 64 Kerne pro CPU\n– RAM: 2 TB DDR5 ECC\n– Primärspeicher: NVMe SSD mit 12 TB\n– RAID-Unterstützung: RAID 0, 1, 5, 6, 10\n– Netzwerkadapter: Dual-Port 25 GbE\n– Redundante Netzteile: 1.600 W (80 PLUS Platinum)\n– Hot-Swap Lüfter\n– OS-Unterstützung: Kompatibel mit gängigen Server-Betriebssystemen (Windows, Linux)\n– IPMI und Redfish API: Für sichere Remote-Verwaltung und Monitoring\n– TPM 2.0 und Secure Boot\n\nSystem 2:\n– Prozessoren: 2 CPUs, 3.4 GHz\n– Kerne: 128 Kerne pro CPU\n– RAM: 4 TB DDR5 ECC\n– Primärspeicher: 8 x 2 TB NVMe SSDs, RAID 10\n– Netzwerkadapter: Dual-Port 100 GbE\n– Redundante Netzteile: 2.000 W\n– Speicherkonfiguration: SAN/NAS-Integration\n– Management: Integration mit VMware vCenter, Microsoft System Center\n– GPU-Unterstützung: Optional für grafikintensive Anwendungen\n– TPM 2.0 und Secure Boot',
    question:
      '1. Aufgabe (24 Punkte)\n\nIm Rahmen einer Systemerweiterung wirken Sie an folgenden Teilaufgaben mit.\n\naa) Es soll ein Datenbankserver und ein Virtualisierungsserver bereitgestellt werden.\n\nDazu können zwei vorhandene freie Systeme mit den Spezifikationen aus der Tabelle genutzt werden.\n\nBestimmen Sie anhand der Spezifikationen, welches System für welchen Einsatzzweck bevorzugt ausgewählt werden sollte.\n\nErläutern Sie Ihre Entscheidung mit entsprechender Begründung jeweils für den Datenbankserver und für den Virtualisierungsserver.\nDatenbankserver:\nVirtualisierungsserver:',
    maxPoints: 6,
    modelSolution:
      'Datenbankserver: System 1\n– System 1, da es eine schnelle NVMe SSD gibt, welche schnelle I/O-Performance bietet.\n– IPMI wird hardwareseitig unterstützt, was für einen bare-metal-Server direkte administrative Vorteile bringt.\n– Hot-Swap-Lüfter und redundante Netzteile gewährleisten hohe Verfügbarkeit.\n\nVirtualisierungsserver: System 2\n– Viele CPU-Kerne und viel Arbeitsspeicher stellen deutlich mehr Ressourcen für gleichzeitige virtuelle Maschinen bereit.\n– 100-GbE-Netzwerkadapter sorgt für schnelle Kommunikation der VMs.\n– Professionelle Verwaltung der VMs durch VMware und MSC.\n– SAN/NAS-Integration sorgt für eine zentrale und skalierbare Speicherverwaltung der VMs.',
    answerStatus: 'unofficial',
    sourcePage: 2,
  },
  {
    id: 'ap2-si-t1-2025-winter-q1-ab',
    examId: 'ap2-si-t1-2025-winter',
    questionNumber: 1,
    subPart: 'ab',
    topic: 'Festplatten / Mix-and-Match',
    scenario: SCENARIO,
    question:
      'ab) Für die Server sollen jeweils neue Festplatten beschafft werden. Um eine möglichst hohe Ausfallsicherheit zu erreichen, soll das „Mix-and-Match"-Prinzip angewendet werden.\n\nErläutern Sie das „Mix-and-Match"-Prinzip.',
    maxPoints: 3,
    modelSolution:
      'Festplatten verschiedener Hersteller / verschiedener Modelle verwenden, um Ausfallsicherheit und Verfügbarkeit zu erhöhen.',
    answerStatus: 'unofficial',
    sourcePage: 3,
  },
  {
    id: 'ap2-si-t1-2025-winter-q1-ac',
    examId: 'ap2-si-t1-2025-winter',
    questionNumber: 1,
    subPart: 'ac',
    topic: 'Festplatten-Ausfallrate (Badewannenkurve)',
    scenario: SCENARIO,
    referenceText:
      'Die sogenannte „Badewannenkurve" zeigt die Ausfallrate von Festplatten über deren Lebenszyklus, unterteilt in drei Zeiträume: I (steil fallende Ausfallrate zu Beginn), II (konstant niedrige Ausfallrate über einen langen Zeitraum), III (wieder ansteigende Ausfallrate am Ende).',
    question:
      'ac) Im Folgenden ist die sogenannte „Badewannenkurve" abgebildet, in der die Ausfallrate von Festplatten über deren Lebenszyklus in drei Zeiträume unterteilt ist.\n\nErläutern Sie die Bedeutung der drei Zeiträume für die Auswahl und den Betrieb von Festplatten.\nZeitraum I:\nZeitraum II:\nZeitraum III:',
    maxPoints: 6,
    modelSolution:
      'Zeitraum I – Frühausfallphase: Die Ausfallrate ist erhöht, weil vor allem Fertigungs- und Materialfehler kurz nach der Inbetriebnahme auftreten (Burn-In-Phase).\n\nZeitraum II – Nutzungsphase: Die Ausfallrate ist in diesem Zeitraum niedrig, Ausfälle treten eher selten durch äußere Einflüsse auf (Erschütterung oder Stromschwankungen).\n\nZeitraum III – Verschleißphase: Die Ausfallrate steigt deutlich, da die Festplatten das Ende ihrer Lebensdauer erreichen. Festplatten sollten präventiv ausgetauscht werden.',
    answerStatus: 'unofficial',
    sourcePage: 3,
  },
  {
    id: 'ap2-si-t1-2025-winter-q1-b',
    examId: 'ap2-si-t1-2025-winter',
    questionNumber: 1,
    subPart: 'b',
    topic: 'BIOS/UEFI-Sicherheit',
    scenario: SCENARIO,
    question:
      'Fortsetzung 1. Aufgabe\n\nb) Während der Vorbereitung der Server nehmen Sie die Konfiguration des BIOS/UEFI vor.\n\nNennen Sie zwei Einstellungen, die Sie im BIOS/UEFI kontrollieren und gegebenenfalls ändern, um die Sicherheit des Servers zu erhöhen. Beschreiben Sie zusätzlich den Zweck einer der beiden Einstellungen.',
    maxPoints: 4,
    modelSolution:
      '– Secure Boot aktivieren: Nur signierte und vertrauenswürdige Software kann im Bootloader und Betriebssystemkernel geladen werden.\n– Boot-Reihenfolge einschränken (USB-Boot deaktivieren)\n– UEFI-/BIOS-Passwort setzen',
    answerStatus: 'unofficial',
    sourcePage: 4,
  },
  {
    id: 'ap2-si-t1-2025-winter-q1-c',
    examId: 'ap2-si-t1-2025-winter',
    questionNumber: 1,
    subPart: 'c',
    topic: 'Performance-Analyse / Bottleneck',
    scenario: SCENARIO,
    referenceText:
      'Task-Manager-Screenshot bei Belastungstest, u. a.:\nCPU: 1 % CPU-Auslastung, 100 % maximale Frequenz\nDatenträger: 0 B/s Datenträger-E/A, 0 % Zeit mit max. Aktivität\nNetzwerk: 0 Bit/s Netzwerk-E/A, 0 % Netzwerklast\nArbeitsspeicher: 0 harte Fehler/s, 91 % verwendeter phys. Speicher (u. a. MsMpEng.exe, ServerManager.exe, dwm.exe mit hohem Zugesichert-/Privat-Speicheranteil)',
    question:
      'c) Nach der Inbetriebnahme eines Servers überprüfen Sie dessen Performance bei Belastung mithilfe eines geeigneten Programms und speichern das Ergebnis als Screenshot.\n\nNennen Sie anhand der Screenshots einen Bereich im System, an dem ein Bottleneck (Flaschenhals) vorliegt und erläutern Sie zwei Maßnahmen, diesen zu beseitigen.',
    maxPoints: 5,
    modelSolution:
      'Arbeitsspeicher – 91 % Auslastung im Normalbetrieb.\n\nMaßnahme 1: Arbeitsspeicher erweitern, damit weniger Auslagerungsvorgänge stattfinden.\nMaßnahme 2: Speicherintensive Prozesse beenden / optimieren, damit weniger Ressourcen verwendet werden.',
    answerStatus: 'unofficial',
    sourcePage: 4,
  },

  // 2. Aufgabe (25 Punkte) — Serverdienste auswählen und bereitstellen
  {
    id: 'ap2-si-t1-2025-winter-q2-a',
    examId: 'ap2-si-t1-2025-winter',
    questionNumber: 2,
    subPart: 'a',
    topic: 'Datenbank-Leistungsmerkmale',
    scenario: SCENARIO,
    question:
      '2. Aufgabe (25 Punkte)\n\nSie sind an der Konzeption eines neuen Datenbanksystems für Materialwirtschaft beteiligt und sollen folgende Detailfragen klären.\n\na) Als Datenbanktyp soll ein relationales Datenbankmodell ausgewählt werden.\n\nEs stehen mehrere relationale Datenbanksysteme zur Auswahl, die sich allerdings in ihrer Leistungsfähigkeit unterscheiden.\n\nErläutern Sie die folgenden zwei Leistungsmerkmale.\nIndexierung (von Datensätzen):\nLocking-Mechanismen:',
    maxPoints: 6,
    modelSolution:
      'Indexierung (von Datensätzen):\nAnlegen einer zusätzlichen Datenstruktur auf bestimmte Spalten einer Tabelle, um den Zugriff auf diese Datensätze zu beschleunigen. Ohne Index muss die ganze Tabelle gescannt werden, durch den Index kann die Datenbank gezielt auf einen gesuchten Datensatz zugreifen.\n\nLocking-Mechanismen:\nLocking-Mechanismen steuern den gleichzeitigen Zugriff mehrerer Benutzer oder Prozesse auf dieselben Datensätze. Durch das Sperren („Locken") der Datenbank kann immer nur eine Transaktion auf die Datensätze zugreifen. Man unterscheidet zwischen Shared Locks (einer kann schreiben, alle können lesen) und Exclusive Locks (nur einer kann lesen/schreiben).',
    answerStatus: 'unofficial',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t1-2025-winter-q2-b',
    examId: 'ap2-si-t1-2025-winter',
    questionNumber: 2,
    subPart: 'b',
    topic: 'ER-Modell / Datenbankdesign',
    scenario: SCENARIO,
    referenceText:
      'Datenbankmodell in der 3. Normalform, Tabellen (ohne markierte Primärschlüssel/Beziehungen):\nKategorie: KategorieID, Name\nLieferant: LieferantID, Name, Kontaktperson, Telefon\nTeil: TeilID, Name, KategorieID\nBestellposition: BestellpositionID, BestellungID, TeilID, Menge\nBestellung: BestellungID, Datum, LieferantID, Gesamtbetrag',
    question:
      'b) Folgendes Datenbankmodell in der 3. Normalform liegt Ihnen als Planungsgrundlage vor.\n\nKennzeichnen Sie die Primärschlüssel (PK) in den unten aufgeführten Tabellen. Zeichnen Sie die Beziehungen mit den Kardinalitäten ein.',
    maxPoints: 9,
    modelSolution:
      'Primärschlüssel (PK):\n– Kategorie.KategorieID (PK)\n– Lieferant.LieferantID (PK)\n– Teil.TeilID (PK), mit Teil.KategorieID als Fremdschlüssel (FK) → Kategorie\n– Bestellung.BestellungID (PK), mit Bestellung.LieferantID als Fremdschlüssel (FK) → Lieferant\n– Bestellposition.BestellpositionID (PK), mit Bestellposition.BestellungID als Fremdschlüssel (FK) → Bestellung und Bestellposition.TeilID als Fremdschlüssel (FK) → Teil\n\nEingezeichnete Kardinalitäten:\n– Kategorie (1) — Teil (n)\n– Lieferant (1) — Bestellung (n)\n– Teil (1) — Bestellposition (n)\n– Bestellung (1) — Bestellposition (n)',
    answerStatus: 'unofficial',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t1-2025-winter-q2-c',
    examId: 'ap2-si-t1-2025-winter',
    questionNumber: 2,
    subPart: 'c',
    topic: 'Datenbanksicherheit',
    scenario: SCENARIO,
    referenceText:
      'Tabelle "Anforderung / Maßnahme", erste Zeile bereits vorgegeben:\nAnforderung: Gesetze zum Schutz von Daten müssen eingehalten werden. — Maßnahme: Einen Datenschutzbeauftragten bestellen.\n(drei weitere Anforderungen sind vom Prüfling mit je einer Maßnahme zu ergänzen:\n– Unberechtigten Zugriff auf die Datenbank verhindern.\n– Änderungen von Daten müssen nachvollziehbar sein.\n– Eine hohe Verfügbarkeit aller Daten gewährleisten.)',
    question:
      'Fortsetzung 2. Aufgabe\n\nc) Als Administrator sind Sie für die Datenbank-Administration und für die Sicherheit zuständig.\n\nFür die Datenbank gelten Anforderungen bezüglich der IT-Sicherheit.\n\nErgänzen Sie zu den drei weiteren Anforderungen jeweils eine geeignete Maßnahme.',
    maxPoints: 6,
    modelSolution:
      'Anforderung: Unberechtigten Zugriff auf die Datenbank verhindern.\nMaßnahme: Passwortrichtlinien, Benutzerrechte, Rollen und Rechtevergabe, Zugriffskontrollen, MFA\n\nAnforderung: Änderungen von Daten müssen nachvollziehbar sein.\nMaßnahme: Datenbank-Logging / Audit-Logging\n\nAnforderung: Eine hohe Verfügbarkeit aller Daten gewährleisten.\nMaßnahme: Redundanz der Datenbank bzw. Replikation. Regelmäßige Updates und Backups.',
    answerStatus: 'unofficial',
    sourcePage: 6,
  },
  {
    id: 'ap2-si-t1-2025-winter-q2-d',
    examId: 'ap2-si-t1-2025-winter',
    questionNumber: 2,
    subPart: 'd',
    topic: 'Datenbank-Performance',
    scenario: SCENARIO,
    question:
      'd) Die Anwender melden ein aktuell stark verzögertes Reaktionsverhalten des Datenbankservers. Ersten Analysen zufolge liegt die Ursache direkt beim Datenbankserver.\n\nErläutern Sie zwei mögliche Gründe für das verzögerte Reaktionsverhalten beim Zugriff auf die Daten.',
    maxPoints: 4,
    modelSolution:
      'Zu wenige Ressourcen für die gleichzeitigen Zugriffe: Wenn der verfügbare RAM nicht ausreicht, um den Puffer der Datenbankabfragen aufrechtzuerhalten, müssen Abfragen auf die Festplatte ausgelagert werden. Dies erhöht die Zugriffszeiten deutlich.\n\nMangelhafte / fehlende Indexierung führt dazu, dass die Datensätze vollständig gescannt werden müssen, was eine hohe CPU-/I/O-Last auslöst.',
    answerStatus: 'unofficial',
    sourcePage: 6,
  },

  // 3. Aufgabe (26 Punkte) — Software zur Systemverwaltung weiterentwickeln und testen
  {
    id: 'ap2-si-t1-2025-winter-q3-aa',
    examId: 'ap2-si-t1-2025-winter',
    questionNumber: 3,
    subPart: 'aa',
    topic: 'Array / Fehlersuche im Code',
    scenario: SCENARIO,
    referenceText:
      'In dem Array „Auftraege" können bis zu 50 Service-IDs gespeichert werden.\n\nArray "Auftraege":\nService-ID: 1234789 | 2346789 | 3456789 | … | 8912345 | 0 | 9123456\nArray-Index: 0 | 1 | 2 | … | 47 | 48 | 49\n\nDie Service-IDs haben eine feste Länge von jeweils sieben Stellen. Jede Stelle kann einen ganzzahligen Wert im Bereich von 1 bis 9 annehmen.\n\nDie sieben Stellen einer Service-ID sind folgendermaßen untergliedert (Beispiel für 9123456):\nFehlerquelle (Stelle 1 und 2): 91\nPriorität (Stelle 3): 2\nFehlercode (Stelle 4 bis 7): 3456\n\nProgrammentwurf:\nZeile 1: int[] Auftraege = new int[50] {1234789, 2346789, 3456789 … 8912345, 0, 9123456};\nZeile 2: //Aus Platzgründen ist das Array nur ausschnittsweise abgebildet\nZeile 3: int anzahl = 50; //Das Array hat 50 Felder\nZeile 4: int neueID = 5541234; //einzufügende Service-ID\nZeile 5: for (int i = 0; i <= anzahl; i++) //Schleifenkopf\nZeile 6: { if (Auftraege[i] == 0) //Abfrage ob das Feld frei ist\nZeile 7: {\nZeile 8: Auftraege[i] = neueID; //Feld ist frei, ID speichern\nZeile 9: i = 60; //Schleifenabbruch\nZeile 10: }\nZeile 11: }\n\nDer Programmcode arbeitet mit verschiedenen Testdaten wie gefordert. Hat das Array jedoch keine freie Stelle, wird die Programmausführung mit folgender Meldung abgebrochen:\n„Unbehandelte Ausnahme – System.IndexOutOfRangeException: Index was outside the bounds of the array.\"',
    question:
      '3. Aufgabe (26 Punkte)\n\nSie wirken bei der Erstellung von Software zur Systemverwaltung mit und sollen folgende, aus prüfungstechnischen Gründen stark vereinfachte Aufgabe bearbeiten.\n\naa) Freie Felder im Array haben den Wert 0. Eine einzufügende Service-ID soll in das erste freie Feld (kleinster Index) des Arrays geschrieben werden.\n\nErmitteln Sie die für den Programmabbruch verantwortliche Stelle (Zeile) im Programmcode. Erläutern Sie die Fehlerursache unter Einbeziehung eines Korrekturvorschlags.',
    maxPoints: 6,
    modelSolution:
      'Die problematische Zeile ist Zeile 5 (bzw. die Deklaration in Zeile 3): Da die Schleife mit i <= anzahl bei 50 Feldern (Index 0–49) auch für i = 50 noch ausgeführt wird, greift sie auf Auftraege[50] zu, was außerhalb der gültigen Indizes liegt. Die Schleife zählt korrekt nur von 0 bis 49.\n\nZur Korrektur kann entweder Zeile 3 auf 49 geändert werden, oder in Zeile 5 statt „i <= anzahl" die Bedingung „i < anzahl" verwendet werden.',
    answerStatus: 'unofficial',
    sourcePage: 7,
  },
  {
    id: 'ap2-si-t1-2025-winter-q3-ab',
    examId: 'ap2-si-t1-2025-winter',
    questionNumber: 3,
    subPart: 'ab',
    topic: 'Bedingte Anweisung (if)',
    scenario: SCENARIO,
    referenceText:
      '&& für eine Und-Verknüpfung\n|| für eine Oder-Verknüpfung',
    question:
      'ab) Vor dem Einfügen einer neuen Service-ID in das Array soll geprüft werden, ob die „Service-ID" innerhalb der definierten Grenzen (1111111 bis 9999999) liegt.\n\nEntwickeln Sie eine geeignete if-Abfrage unter Verwendung der Symbole && (Und-Verknüpfung) und || (Oder-Verknüpfung).\n\nif ________________________ { … }',
    maxPoints: 7,
    modelSolution: 'if (neueID >= 1111111 && neueID <= 9999999) { … }',
    answerStatus: 'unofficial',
    sourcePage: 7,
  },
  {
    id: 'ap2-si-t1-2025-winter-q3-ac',
    examId: 'ap2-si-t1-2025-winter',
    questionNumber: 3,
    subPart: 'ac',
    topic: 'Ganzzahldivision / Modulo',
    scenario: SCENARIO,
    referenceText:
      'Symbole und Beispiele:\n/ Ganzzahldivision, Beispiel: 123 / 10 = 12\n% Modulo-Operator, Beispiel: 123 % 10 = 3',
    question:
      'ac) Es sollen Service-IDs mit einer bestimmten Priorität ermittelt werden. Dazu soll eine Anweisung entwickelt werden, die mithilfe der Operationen „Ganzzahldivision und Modulo" die Priorität einer Service-ID ermittelt.\n\nVervollständigen Sie die Anweisung.\nprioritaet = service-ID ________________\n\nAlternativ wird auch eine plausible Erläuterung der entsprechenden Vorgehensweise akzeptiert.',
    maxPoints: 7,
    modelSolution: 'prioritaet = (service-ID / 10000) % 10',
    answerStatus: 'unofficial',
    sourcePage: 8,
  },
  {
    id: 'ap2-si-t1-2025-winter-q3-b',
    examId: 'ap2-si-t1-2025-winter',
    questionNumber: 3,
    subPart: 'b',
    topic: 'Softwaretest (White-/Black-Box)',
    scenario: SCENARIO,
    question:
      'b) Neue Programme sollen mithilfe verschiedener Testverfahren geprüft werden.\n\nGetestet werden soll alternativ mit einem White-Box-Test oder mit einem Black-Box-Test.\n\nErläutern Sie die beiden Testverfahren.\nWhite-Box-Test:\nBlack-Box-Test:',
    maxPoints: 6,
    modelSolution:
      'White-Box-Test:\nAuch Glass-Box-Test genannt. Dem Tester ist die komplette interne Struktur des Programms und der gesamte Programmcode vollständig bekannt. Der Testfall wird auf Basis des Quellcodes entwickelt, um mögliche logische Fehler im Code selbst zu finden.\n\nBlack-Box-Test:\nDer Tester hat keine Kenntnis des internen Programmaufbaus. Es wird ausschließlich das Verhalten des Programms von außen geprüft. Die Testfälle basieren auf den funktionalen Anforderungen und Spezifikationen des jeweiligen Programms.',
    answerStatus: 'unofficial',
    sourcePage: 8,
  },

  // 4. Aufgabe (25 Punkte) — Das Datensicherungskonzept konzipieren
  {
    id: 'ap2-si-t1-2025-winter-q4-a',
    examId: 'ap2-si-t1-2025-winter',
    questionNumber: 4,
    subPart: 'a',
    topic: 'MTBF / MTTF',
    scenario: SCENARIO,
    referenceText:
      '"MTBF is the predicted elapsed time between two failures of a mechanical or electronic system during normal system operation. MTBF can be calculated as the arithmetic mean (average) time between failures of a system. The term is used for repairable systems.\nMTTF is the expected time until the first failure occurs in a non-repairable system."',
    question:
      '4. Aufgabe (25 Punkte)\n\nDie Kranich AG beabsichtigt, ein zuverlässiges Backup- und Restore-System anzuschaffen. Sie sollen die Beschaffung des Systems inklusive geeigneter Festplatten vorbereiten und anschließend die Installation, Konfiguration und Inbetriebnahme durchführen.\n\na) Bei der Beschaffung des Backup-Systems stoßen Sie auf Angaben zu „mean time between failures" (MTBF) und zu „mean time to failure" (MTTF).\n\nErläutern Sie die Bedeutung der Angaben zu MTBF und zu MTTF hinsichtlich eines langfristigen Einsatzes des Backup-Systems.',
    maxPoints: 4,
    modelSolution:
      'MTBF: Gibt an, wie lange ein reparierbares System im Durchschnitt zwischen zwei aufeinanderfolgenden Ausfällen fehlerfrei betrieben werden kann. Je höher der Wert, desto zuverlässiger arbeitet das System.\n\nMTTF: Gibt die erwartete Betriebsdauer eines nicht reparierbaren Bauteils an. Ein hoher Wert bedeutet eine längere Lebensdauer des Bauteils.',
    answerStatus: 'unofficial',
    sourcePage: 9,
  },
  {
    id: 'ap2-si-t1-2025-winter-q4-ba',
    examId: 'ap2-si-t1-2025-winter',
    questionNumber: 4,
    subPart: 'ba',
    topic: 'RAID-6 vs. RAID-5',
    scenario: SCENARIO,
    referenceText:
      'Für das Backup-System beschaffen Sie 20 Festplatten mit je 8 TiB Speicherkapazität. Mit diesen Festplatten soll ein RAID-6-System aufgebaut werden.',
    question: 'ba) Erläutern Sie den Vorteil eines RAID-6-Systems im Vergleich zu einem RAID-5-System.',
    maxPoints: 2,
    modelSolution:
      'RAID-6 kann den gleichzeitigen Ausfall von bis zu zwei Festplatten tolerieren, bei RAID-5 sind die Daten bei zwei ausgefallenen Festplatten nicht wiederherstellbar.',
    answerStatus: 'unofficial',
    sourcePage: 9,
  },
  {
    id: 'ap2-si-t1-2025-winter-q4-bb',
    examId: 'ap2-si-t1-2025-winter',
    questionNumber: 4,
    subPart: 'bb',
    topic: 'RAID-Kapazitätsberechnung',
    scenario: SCENARIO,
    question: 'bb) Berechnen Sie die Nettospeicherkapazität des RAID-6-Systems.',
    maxPoints: 3,
    modelSolution: '20 – 2 = 18 Festplatten\n18 x 8 TiB = 144 TiB',
    answerStatus: 'unofficial',
    sourcePage: 9,
  },
  {
    id: 'ap2-si-t1-2025-winter-q4-bc',
    examId: 'ap2-si-t1-2025-winter',
    questionNumber: 4,
    subPart: 'bc',
    topic: 'Bandlaufwerk (LTO)',
    scenario: SCENARIO,
    question:
      'bc) Das Backup-System kann optional mit einem LTO-Bandlaufwerk (Linear-Tape-Open) ausgestattet werden.\n\nNennen Sie drei Gründe, die für den Einsatz eines Bandlaufwerks sprechen.',
    maxPoints: 3,
    modelSolution:
      '– Hohe Kapazität bei geringen Kosten\n– Lange Haltbarkeit / Langzeitarchivierung\n– Offline-Speicherung / physische Trennung vom Netzwerk (bzw. der Medien)',
    answerStatus: 'unofficial',
    sourcePage: 9,
  },
  {
    id: 'ap2-si-t1-2025-winter-q4-ca',
    examId: 'ap2-si-t1-2025-winter',
    questionNumber: 4,
    subPart: 'ca',
    topic: 'Backup-Wiederherstellung',
    scenario: SCENARIO,
    referenceText:
      'Auszug des Backup-Plans für 23 Tage nach dem „Großvater-Vater-Sohn"-Prinzip. Die Sicherungen starten jeweils täglich um 23:00 Uhr.\nSonntag 30. April: voll, B01\nMontag 01. Mai – Samstag 06. Mai: inkrementell, B02–B07\nSonntag 07. Mai: voll, B08\nMontag 08. Mai – Samstag 13. Mai: inkrementell, B09–B14\nSonntag 14. Mai: voll, B15\nMontag 15. Mai – Samstag 20. Mai: inkrementell, B16–B21\nSonntag 21. Mai: voll, B22\nMontag 22. Mai: inkrementell, B23',
    question:
      'c) Es liegt ein Auszug des Backup-Plans für 23 Tage vor, der nach dem „Großvater-Vater-Sohn"-Prinzip erstellt wurde. Die Sicherungen starten jeweils täglich um 23:00 Uhr.\n\nca) Am Mittag des 14. Mai ist es infolge einer Störung am Filesystem zu Datenverlusten gekommen. Sie sollen die Daten bestmöglich wiederherstellen.\n\nGeben Sie die Bandbezeichnungen der benötigten Bänder in der Reihenfolge an, in der sie im Rahmen der Datenwiederherstellung benötigt werden.',
    maxPoints: 4,
    modelSolution: 'B08 – B14 in Reihenfolge',
    answerStatus: 'unofficial',
    sourcePage: 10,
  },
  {
    id: 'ap2-si-t1-2025-winter-q4-cb',
    examId: 'ap2-si-t1-2025-winter',
    questionNumber: 4,
    subPart: 'cb',
    topic: 'Großvater-Vater-Sohn-Prinzip',
    scenario: SCENARIO,
    question:
      'cb) Das „Großvater-Vater-Sohn"-Prinzip ist eine zuverlässige Strategie der Datensicherung. Gehen Sie anhand des Backup-Plans davon aus, dass das Vollbackup B22 vom 21. Mai der „Sohn" ist.\n\nNennen Sie die zugehörigen Bandnummern von „Vater" und „Großvater".',
    maxPoints: 2,
    modelSolution: 'Sohn: B22\nVater: B15\nGroßvater: B08',
    answerStatus: 'unofficial',
    sourcePage: 10,
  },
  {
    id: 'ap2-si-t1-2025-winter-q4-da',
    examId: 'ap2-si-t1-2025-winter',
    questionNumber: 4,
    subPart: 'da',
    topic: 'Datensicherung vs. Datenarchivierung',
    scenario: SCENARIO,
    question:
      'd) Sie sollen die Unternehmensdaten nicht nur mittels eines Backups sichern, sondern auch archivieren.\n\nda) Erläutern Sie die Begriffe Datensicherung und Datenarchivierung.',
    maxPoints: 4,
    modelSolution:
      'Bei der Datensicherung werden aktuelle, produktiv genutzte Daten in regelmäßigen Abständen kopiert, um im Fehlerfall (z. B. Datenverlust, Hardwareausfall, versehentliches Löschen) eine Wiederherstellung zu ermöglichen.\n\nBei der Datenarchivierung werden nicht mehr aktiv benötigte Daten dauerhaft und unveränderbar auf einem separaten Medium gespeichert.',
    answerStatus: 'unofficial',
    sourcePage: 11,
  },
  {
    id: 'ap2-si-t1-2025-winter-q4-db',
    examId: 'ap2-si-t1-2025-winter',
    questionNumber: 4,
    subPart: 'db',
    topic: 'Organisatorische Backup-Maßnahmen',
    scenario: SCENARIO,
    question:
      'db) Im Backup-Konzept sollen auch organisatorische Maßnahmen berücksichtigt werden, um die Sicherheit und Verfügbarkeit der Daten zu gewährleisten.\n\nNennen Sie hierzu drei geeignete organisatorische Maßnahmen.',
    maxPoints: 3,
    modelSolution:
      '– Regelmäßige Überprüfung und Testwiederherstellung der Backups\n– Dokumentation und Zugriffskontrolle der Backup-Zuständigkeit\n– Auslagerung der Backup-Medien an einen externen, sicheren Standort\n– Backupplan für zeitlichen Ablauf',
    answerStatus: 'unofficial',
    sourcePage: 11,
  },
]
