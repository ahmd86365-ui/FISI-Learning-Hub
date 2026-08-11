import type { ApExamMeta, ApExamQuestion } from '../../types/apExam'

export const ap2SiT1_2021WinterMeta: ApExamMeta = {
  id: 'ap2-si-t1-2021-winter',
  area: 'AP2_SI_T1',
  year: 2021,
  period: 'Winter',
  label: 'Winter 2021/22',
  examDate: 'Mittwoch, 24. November 2021',
  examTitle: 'Konzeption und Administration von IT-Systemen',
  courseCode: '1202',
  sourceExamPdf: 'SI_AP2_T1_21w.pdf',
  sourceSolutionPdf: 'Loe_SI_AP2_T1_21w.pdf',
  solutionSource: 'confirmed',
  taskCount: 4,
  durationMinutes: 90,
  totalPoints: 100,
}

const SCENARIO =
  'Die Aufgaben 1 bis 4 beziehen sich auf die folgende Ausgangssituation:\n\nSie sind Mitarbeiter/-in bei der Professional-Services GmbH, die IT-Lösungen für mittelständische Unternehmen anbietet. Die überregionale Bäckereikette vollKorn GmbH erteilt den Auftrag, ihre IT-Infrastruktur in der Zentrale in Köln zu modernisieren.\n\nIn diesem Zusammenhang sollen Sie die folgenden vier Aufgaben bearbeiten:\n1. Aufgabe: Cloud-Dienste bewerten und auswählen\n2. Aufgabe: Datenhaltung und Backup einrichten\n3. Aufgabe: Systemverfügbarkeit erhöhen, Software entwickeln\n4. Aufgabe: Datenschutz und Datensicherheit gewährleisten'

export const ap2SiT1_2021WinterQuestions: ApExamQuestion[] = [
  // 1. Aufgabe (24 Punkte) — Cloud-Dienste bewerten und auswählen
  {
    id: 'ap2-si-t1-2021-winter-q1-a',
    examId: 'ap2-si-t1-2021-winter',
    questionNumber: 1,
    subPart: 'a',
    topic: 'Cloud Computing',
    scenario: SCENARIO,
    question:
      '1. Aufgabe (24 Punkte)\n\nDie Professional-Services GmbH möchte einige der IT-Dienste (E-Mail und Datenbank) in die Cloud auslagern.\n\na) Erläutern Sie, inwiefern durch eine Cloud-Lösung folgende Vorteile erzielt werden können: Zeiteinsparung, Skalierbarkeit, Kostenreduktion.',

    maxPoints: 6,
    modelSolution:
      'Zeiteinsparung: Die Installation und Konfiguration der Hard- sowie Software kann per Mausklick vorgenommen werden. Update- und Wartungszeiten entfallen bei einer Auslagerung der IT-Dienste in die Cloud komplett.\n\nSkalierbarkeit: Die benötigte Rechenleistung sowie Speicherkapazität kann flexibel und sofort angepasst werden. Skalierungen können zeitlich begrenzt oder dauerhaft in Anspruch genommen werden. Kurzzeitige Auftragsspitzen können so einfach aufgefangen werden.\n\nKostenreduktion: Die eigene Hardware kann reduziert werden. Es werden immer nur so viele IT-Ressourcen bezahlt, wie benötigt werden. Das Personal muss sich nicht mehr um die Wartung und Installation der Hard- sowie Software kümmern und hat so mehr Zeit für andere Aufgaben oder das Personal kann reduziert werden.',
    answerStatus: 'confirmed',
    sourcePage: 2,
  },
  {
    id: 'ap2-si-t1-2021-winter-q1-b',
    examId: 'ap2-si-t1-2021-winter',
    questionNumber: 1,
    subPart: 'b',
    topic: 'Cloud Computing',
    scenario: SCENARIO,
    question:
      'Erläutern Sie je einen Aspekt, der für die Nutzung einer Public Cloud oder einer Private Cloud spricht.',
    maxPoints: 4,
    modelSolution:
      'Public Cloud: Es steht ein großes Angebot an verschiedensten Cloud-Dienstleistungen zur Verfügung, auf die Angebote kann direkt über das Internet zugegriffen werden. Fehlendes Know-how kann beim Cloud-Anbieter eingeholt werden und muss somit intern nicht aufgebaut werden. Der Betrieb und die Wartung der Komponenten erfolgt vollständig beim Cloud-Anbieter, die internen Mitarbeiter werden entlastet.\n\nPrivate Cloud: Die Hardware wird in flexiblen Pools konsolidiert und virtualisiert, hierdurch entsteht eine Kostenersparnis. Eine technische sowie kostenmäßige Abhängigkeit vom Cloud-Dienstleister wird vermieden. Außerdem werden Sicherheitsrisiken minimiert und die Gestaltung von Datenschutz-Maßnahmen wird erleichtert. Der Betrieb der Cloud-Komponenten erfolgt abgetrennt und die Cloud-Dienste stehen exklusiv zur Verfügung.',
    answerStatus: 'confirmed',
    sourcePage: 2,
  },
  {
    id: 'ap2-si-t1-2021-winter-q1-c',
    examId: 'ap2-si-t1-2021-winter',
    questionNumber: 1,
    subPart: 'c',
    topic: 'Cloud Computing',
    scenario: SCENARIO,
    question:
      'Ihr Cloud-Provider bietet Ihnen verschiedene Services für die Cloud-Dienste an, dabei fallen folgende Begriffe: SaaS, PaaS und IaaS.\n\nErläutern Sie, was diese Services im Einzelnen umfassen.\n\nSaaS: Software as a Service\nPaaS: Platform as a Service\nIaaS: Infrastructure as a Service',
    maxPoints: 6,
    modelSolution:
      'SaaS (Software as a Service): Durch einen Service-Provider wird Software über das Internet bereitgestellt. Die Wartung und Administration der Anwendungen erfolgt hierbei zentral beim Provider. Der Nutzer abonniert die Anwendungen und zahlt für die Nutzung während der Laufzeit des Abonnements.\n\nPaaS (Platform as a Service): Durch einen Service-Provider wird eine Cloud-basierte Umgebung zur Verfügung gestellt, hierin können Anwendungen im Internet entwickelt und bereitgestellt werden.\n\nIaaS (Infrastructure as a Service): Recheninfrastruktur wird über einen Dienstleister zur Verfügung gestellt. Es wird z. B. der Zugang zu Speicher-, Netzwerk- oder Serverkomponenten gewährt. Basierend auf der Nutzung dieser Komponenten findet eine individuelle Abrechnung statt.',
    answerStatus: 'confirmed',
    sourcePage: 3,
  },
  {
    id: 'ap2-si-t1-2021-winter-q1-d',
    examId: 'ap2-si-t1-2021-winter',
    questionNumber: 1,
    subPart: 'd',
    topic: 'Cloud Computing',
    scenario: SCENARIO,
    question:
      'Erläutern Sie, welcher der Services (SaaS, IaaS, PaaS) in Bezug auf eine Migration der E-Maildienste und der Datenbankdienste sinnvoll ist.',
    maxPoints: 4,
    modelSolution:
      'Die Mail- sowie Datenbankdienste können unabhängig von der Server-Hardware innerhalb einer Cloud laufen, deshalb ist, bezogen auf die Migration der beiden Dienste, der SaaS-Dienst sinnvoll. Für die beiden Dienste werden keine Hardware-Plattformen bzw. Umgebungen benötigt.',
    answerStatus: 'confirmed',
    sourcePage: 3,
  },
  {
    id: 'ap2-si-t1-2021-winter-q1-e',
    examId: 'ap2-si-t1-2021-winter',
    questionNumber: 1,
    subPart: 'e',
    topic: 'Cloud Computing',
    scenario: SCENARIO,
    question:
      'In den Vertragsbedingungen Ihres Cloud-Providers steht unter dem Punkt „Abrechnung" der Begriff „Nutzungsgerechte Abrechnung (Measured Service)".\n\nErläutern Sie anhand eines Beispiels, was unter „Nutzungsgerechte Abrechnung" zu verstehen ist.',
    maxPoints: 4,
    modelSolution:
      'Unter einer nutzungsgerechten Abrechnung versteht man die genaue Abrechnung der tatsächlich genutzten Leistungen. Feste monatliche Pauschalen für die Leistungen in der Cloud fallen nicht an. Es wird nur das bezahlt, was tatsächlich benötigt wird, dies kann zu einer Kostenersparnis führen. Bei einer Cloud-Datenbank wird z. B. nur der belegte Datenbankspeicher berechnet, freie bzw. nicht in Anspruch genommene Ressourcen müssen nicht bezahlt werden. Weitere Beispiele wären die Rechenleistung der CPU oder der verwendete Arbeitsspeicher.',
    answerStatus: 'confirmed',
    sourcePage: 3,
  },

  // 2. Aufgabe (25 Punkte) — Datenhaltung und Backup einrichten
  {
    id: 'ap2-si-t1-2021-winter-q2-aa',
    examId: 'ap2-si-t1-2021-winter',
    questionNumber: 2,
    subPart: 'aa',
    topic: 'Storage / SAN',
    scenario: SCENARIO,
    question:
      '2. Aufgabe (25 Punkte)\n\nDie Professional-Services GmbH soll die Datenhaltung und das Backup- und Restore-Konzept für die vollKorn GmbH konsolidieren.\n\na) Die Daten der vollKorn GmbH werden zurzeit auf einem NAS mit einer Speicherkapazität von 9 TiB gespeichert. Das NAS befindet sich kurz vor Ablauf des Supportzeitraums und ist aktuell mit 90 % der maximalen Speicherkapazität belegt. Daher soll ein neues SAN mit einer Speicherkapazität von 20 TiB beschafft werden, auf welches dann die vorhandenen Daten transferiert werden.\n\naa) Der jährliche Datenzuwachs wird mit 750 GiB veranschlagt.\n\nBerechnen Sie die maximale Betriebszeit des SAN in Jahren, in denen weniger als 70 % der nominellen Speicherkapazität belegt sind.\nGeben Sie das Ergebnis in ganzen Jahren an.',
    maxPoints: 5,
    modelSolution:
      'Zu übertragene Datenmenge:\n9 TiB x 1.024 = 9.216 GiB\n9.216 GiB x 90 % = 8.294,40 GiB\n\nMaximale Datenmenge des neuen SANs:\n20 TiB x 1.024 = 20.480 GiB\n20.480 GiB x 70 % = 14.336,00 GiB\n\nFreier Speicherplatz nach Datentransfer des NAS:\n14.336 GiB – 8.294,4 GiB = 6.041,60 GiB\n\nBetriebszeit des SAN:\n6.041,60 GiB / 750 GiB (pro Jahr) = 8,06 Jahre\n\nDie maximale Betriebszeit des SAN (bei < 70 % Speicherbelegung) beträgt 8 Jahre.',
    answerStatus: 'confirmed',
    sourcePage: 4,
  },
  {
    id: 'ap2-si-t1-2021-winter-q2-ab',
    examId: 'ap2-si-t1-2021-winter',
    questionNumber: 2,
    subPart: 'ab',
    topic: 'Storage / SAN',
    scenario: SCENARIO,
    referenceText:
      'Beim Formatieren eines logischen Volumes auf dem SAN kann die Größe der Zuordnungseinheit (Cluster-Size) auf einen der folgenden Werte festgelegt werden:\n512 Byte, 1.024 Byte, 2.048 Byte, 4.096 Byte, 8.192 Byte, 16.384 Byte, 32.768 Byte und 65.536 Byte',
    question:
      'Erläutern Sie je einen Anwendungsfall, bei dem es sinnvoll ist, eine kleinere bzw. eine größere Zuordnungseinheit festzulegen.',
    maxPoints: 4,
    modelSolution:
      'Das Dateisystem legt Dateien immer in ein oder mehrere Cluster einer bestimmten Zuordnungseinheit ab. Ein Cluster ist also der kleinstmögliche Speicherplatz, der zum Speichern einer Datei verwendet werden kann. Sollte eine Datei größer als die gewählte Cluster-Größe sein, werden solange weitere Cluster hinzugefügt, bis die komplette Dateigröße abgespeichert werden kann.\n\nDie Auswahl der bestmöglichen Größe der Zuordnungseinheit (Cluster-Size) hängt somit von der Art der überwiegend zu speichernden Daten ab. Für kleine Dateien, z. B. Textdokumente, sollten kleine Zuordnungseinheiten verwendet werden, andernfalls würde viel Festplattenspeicher verschwendet werden. Bei größeren Dateien wie z. B. Videos sind dagegen größere Zuordnungseinheiten zu bevorzugen. Desto kleiner die Zuordnungseinheiten sind, desto aufwändiger ist die Speicherung und Formatierung der Daten(träger). Durch kleinere Zuordnungseinheiten entsteht eine erhöhte Dateifragmentierung, die optimale Größe der Zuordnungseinheiten muss daher individuell entschieden werden.',
    answerStatus: 'confirmed',
    sourcePage: 4,
  },
  {
    id: 'ap2-si-t1-2021-winter-q2-b',
    examId: 'ap2-si-t1-2021-winter',
    questionNumber: 2,
    subPart: 'b',
    topic: 'Datenkomprimierung / Deduplizierung',
    scenario: SCENARIO,
    question:
      'Es wird über Speicherplatzoptimierung nachgedacht, dazu kommen die Methoden der Deduplizierung und Komprimierung von Daten in Frage.\n\nErläutern Sie jeweils an einem Anwendungsbeispiel, wie man durch Deduplizierung und durch Komprimierung von Daten Speicherplatz einsparen kann.',
    maxPoints: 8,
    modelSolution:
      'Bei der Daten-Deduplizierung wird die redundante Speicherung von Dateien vermieden. Redundante Datenblöcke werden identifiziert und durch einen Zeiger auf die Ursprungsdatei ersetzt. Hierdurch wird Speicherplatz eingespart und der Backup-Prozess wird beschleunigt. Daten können außerdem ggf. schneller wiederhergestellt werden.\nBeispiel: Erhalten mehrere Empfänger eine E-Mail mit gleicher Anlage, so wird die Anlage auf dem Mail-Server nur einmal abgespeichert.\n\nBei der Daten-Komprimierung wird versucht, die Größe einer Datei zu reduzieren, indem redundante Informationen innerhalb einer Datei durch einen Kodierer entfernt werden.\n\nEs ist zwischen der verlustbehafteten und der verlustfreien Kompression zu unterscheiden. Bei der verlustbehafteten Kompression können die Originaldaten aus den komprimierten Daten meist nicht mehr exakt zurückgewonnen werden. Bestimmte Algorithmen versuchen möglichst nur „unwichtige" Informationen zu entfernen.\n\nBei verlustfreien Kompressionen können die Originaldaten exakt auf Basis der komprimierten Daten wiederhergestellt werden.\nBeispiel: Beim Abspeichern eines Bildes als JPEG wird z. B. eine Kompression angewandt, um redundante Pixeldaten zu entfernen und somit eine Reduzierung der Dateigröße zu erreichen (verlustbehaftete Kompression). Ein Beispiel für eine verlustfreie Kompression wäre z. B. das Bildformat PNG.\nBei ausführbaren Programmdateien wird auf verlustfreie Kompressionen zurückgegriffen.',
    answerStatus: 'confirmed',
    sourcePage: 4,
  },
  {
    id: 'ap2-si-t1-2021-winter-q2-c',
    examId: 'ap2-si-t1-2021-winter',
    questionNumber: 2,
    subPart: 'c',
    topic: 'Backup as a Service',
    scenario: SCENARIO,
    question:
      'Im Rahmen der Firmendaten-Sicherheit soll eine neue Backup-Lösung implementiert werden. Es wird diskutiert, ob das „Backup as a Service" eine geeignete Lösung darstellt.\n\nErläutern Sie, warum der Einsatz einer „Backup as a Service"-Lösung sinnvoll sein kann.',
    maxPoints: 4,
    modelSolution:
      'Beim Backup as a Service werden einzelne Dateien, Ordner oder der gesamte Festplatteninhalt an einen Service-Provider geschickt und dort zusätzlich abgelegt. Die interne Datensicherung wird hierdurch ggf. komplett ersetzt. Die Backups des Service-Providers sind hochverfügbar. Durch die Inanspruchnahme des Services kann der interne Ressourcenbedarf für Backups reduziert werden und eine zuverlässige Datensicherung gewährleistet werden.',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t1-2021-winter-q2-d',
    examId: 'ap2-si-t1-2021-winter',
    questionNumber: 2,
    subPart: 'd',
    topic: 'Archivierung',
    scenario: SCENARIO,
    question:
      'Die Rechnungsdaten der vollKorn GmbH müssen archiviert werden.\n\nErläutern Sie den Begriff der revisionssicheren Archivierung.',
    maxPoints: 4,
    modelSolution:
      'Unter der revisionssicheren Archivierung versteht man die Lagerung und Speicherung von Daten gemäß den rechtlichen und betrieblichen Anforderungen. Rechtlich gibt es hierbei Folgendes zu beachten:\n– Grundsätze ordnungsmäßiger Buchführung (GOB)\n– Grundsätze zur ordnungsmäßigen Führung und Aufbewahrung von Büchern, Aufzeichnungen und Unterlagen in elektronischer Form sowie zum Datenzugriff (GoBD)\n\nFolgende Punkte müssen für eine revisionssichere Archivierung erfüllt sein:\n– Alle Dokumente / Daten müssen vollständig und sicher im Archiv vorliegen\n– Die archivierten Daten müssen unveränderbar sein\n– Änderungen im Archivsystem müssen nachvollzogen werden können\n– Der Zugriff ist nur berechtigten Nutzern zu gestatten\n– Die jeweils geltenden Aufbewahrungsfristen müssen gewahrt werden\n\nRechtliche Grundlagen müssen nicht genannt werden können.',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },

  // 3. Aufgabe (25 Punkte) — Systemverfügbarkeit erhöhen, Software entwickeln
  {
    id: 'ap2-si-t1-2021-winter-q3-a',
    examId: 'ap2-si-t1-2021-winter',
    questionNumber: 3,
    subPart: 'a',
    topic: 'Verfügbarkeit / Zuverlässigkeit',
    scenario: SCENARIO,
    question:
      '3. Aufgabe (25 Punkte)\n\nDie folgenden Aufgabenstellungen beziehen sich auf die Analyse und die Optimierung der IT-Systeme bei der vollKorn GmbH.\n\na) Von den IT-Systemen wird ein hohes Maß an Zuverlässigkeit (Reliability) und Verfügbarkeit (Availability) gefordert.\n\nErläutern Sie am Beispiel des Kassensystems der vollKorn GmbH je eine Anforderung bezüglich …\nZuverlässigkeit:\nVerfügbarkeit:',
    maxPoints: 4,
    modelSolution:
      'Zuverlässigkeit: Das Kassensystem der vollKorn GmbH muss selbst bei Verbindungsabbrüchen oder Unterbrechungen korrekt arbeiten und die Transaktionen wiederherstellen, um so die korrekten Beträge zu buchen. Außerdem muss das System resistent gegen Manipulationen sein.\n\nVerfügbarkeit: Das Kassensystem muss auch in Volllast-Situationen noch korrekt funktionieren und angemessene Antwortzeiten liefern. Das System muss außerdem eine ständige Betriebsbereitschaft aufweisen.',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t1-2021-winter-q3-ba',
    examId: 'ap2-si-t1-2021-winter',
    questionNumber: 3,
    subPart: 'ba',
    topic: 'Hardware-Redundanz',
    scenario: SCENARIO,
    referenceText:
      'Tabelle "Komponente / Vorschlag" (Server-Ausfallsicherheit), erste Zeile bereits vorgegeben:\nKomponente: Festplatte — Vorschlag: Festplatten in einem geeigneten RAID-Verbund betreiben\n(zwei weitere Zeilen sind vom Prüfling auszufüllen)',
    question:
      'Fortsetzung 3. Aufgabe\n\nb) Als Plattform für den Betrieb mehrerer virtueller Systeme soll ein Server und ein externes Speichersystem beschafft werden.\n\nba) Sie wollen den Server besonders unter dem Aspekt einer hohen Ausfallsicherheit aufbauen.\n\nGeben Sie zwei weitere geeignete Möglichkeiten an.',
    maxPoints: 4,
    modelSolution:
      'Komponente: RAM — Vorschlag: Verwendung von ECC-RAM: 1-Bit-Fehler können sofort korrigiert werden. 2-Bit-Fehler werden erkannt, aber nicht korrigiert. (ECC: Error Correcting Code)\n\nKomponente: Netzteil — Vorschlag: Durch mehrfach vorhandene Netzteile kann bei Ausfall eines Netzteiles die Stromversorgung durch das zweite Netzteil gewährleistet werden. Der Server bleibt hierdurch lauffähig.\n\nKomponente: Lüfter — Vorschlag: Durch redundante Lüfter sind immer mehrere Lüfter für den Kühlkreislauf verantwortlich. Sollt ein Lüfter ausfallen, kann die Kühlung dennoch sichergestellt werden.\n\nKomponente: Netzwerkadapter — Vorschlag: Mehrere Netzwerkadapter können mittels NIC-Teaming zusammengefasst werden, um die Performance sowie die Fehlertoleranz beim Ausfall eines Netzwerkadapters zu erhöhen.\n\nKomponente: CPU — Vorschlag: Es können zwei oder mehrere CPUs je Server betrieben werden, diese können auch getrennt voneinander arbeiten.\n\n(Zwei der genannten Möglichkeiten sind für die volle Punktzahl ausreichend.)',
    answerStatus: 'confirmed',
    sourcePage: 6,
  },
  {
    id: 'ap2-si-t1-2021-winter-q3-bb',
    examId: 'ap2-si-t1-2021-winter',
    questionNumber: 3,
    subPart: 'bb',
    topic: 'MTBF-Berechnung',
    scenario: SCENARIO,
    referenceText:
      'Das externe Speichersystem enthält einen Festplatten-Verbund, der aus 16 gleichen Festplatten besteht. Das verbaute Festplattenmodell hat einen MTBF-Wert von 800.000 Stunden.\n\nFolgender Text erläutert MTBF:\n"Mean time between failures (MTBF) is the predicted elapsed time between failures of a mechanical or electronic system, during normal system operation. MTBF can be calculated as the arithmetic mean (average) time between failures of a system.\nExample: MTBF equals 100.000 h (hours)."',
    question:
      'Berechnen Sie den MTBF-Wert für den Festplatten-Verbund. Geben Sie das Ergebnis in Jahren an.\nHinweis: Gehen Sie von einem 24/7-Betrieb aus und berücksichtigen Sie nur die gegebenen Angaben.',
    maxPoints: 4,
    modelSolution:
      'Berechnung der MTBF für alle Festplatten des Verbundes:\n800.000 h / 16 Festplatten = 50.000 h\n\nMTBF in Jahren:\n50.000 / (24 h x 365 Tage) = 5,71 Jahre\n\nDer MTBF-Wert für den Festplatten-Verbund beträgt 5,71 Jahre.',
    answerStatus: 'confirmed',
    sourcePage: 6,
  },
  {
    id: 'ap2-si-t1-2021-winter-q3-ca',
    examId: 'ap2-si-t1-2021-winter',
    questionNumber: 3,
    subPart: 'ca',
    topic: 'Datentypen / Bit-Berechnung',
    scenario: SCENARIO,
    referenceText:
      'Sie sollen ein Programm entwickeln, mit dessen Hilfe die aktuelle Speicherbelegung von Festplattenlaufwerken aufgezeichnet und ausgewertet werden kann. Die Speicherbelegung wird im Abstand von fünf Minuten erfasst und zunächst in einem Array zwischengespeichert. Im Abstand von zwei Stunden wird der Mittelwert von den Werten im Array berechnet und an eine Datenbank weitergeleitet. Der Vorgang wiederholt sich, bis das Programm beendet wird.',
    question:
      'Das Programm soll für Laufwerke bis zu einer Größe von 16 TiB geeignet sein. Die aktuelle Speicherbelegung soll als Zahlenwert in der Einheit KiB (z. B. 7.838.298.104 KiB) in einer Integer-Variablen gespeichert werden.\n\nBerechnen Sie nachvollziehbar, wie viele Bit zur Speicherung eines Wertes mindestens erforderlich sind.',
    maxPoints: 3,
    modelSolution:
      '16 TiB x 1.024 = 16.384 GiB\n16.384 GiB x 1.024 = 16.777.216 MiB\n16.777.216 MiB x 1.024 = 17.179.869.184 KiB / Maximal zu speichernder Wert\n\nEs werden 10 Bit je binärem Präfix benötigt, d. h. 3 x 10 Bit (siehe oben 1.024 bzw. 2^10). Außerdem werden 4 Bit für die volle Dateigröße von 16 TiB benötigt.\n\n3 x 10 Bit + 4 Bit = 34 Bit',
    answerStatus: 'confirmed',
    sourcePage: 6,
  },
  {
    id: 'ap2-si-t1-2021-winter-q3-cb',
    examId: 'ap2-si-t1-2021-winter',
    questionNumber: 3,
    subPart: 'cb',
    topic: 'Programmierung (Struct)',
    scenario: SCENARIO,
    referenceText:
      'Die Speicherbelegung eines Laufwerkes wird in einem Array (z. B. Disk_2[]) vom Typ „Struktur" (struct) gespeichert.\nFolgende Deklaration der Variablen wurde vorgenommen.\n\nstruct diskBelegung\n{\n  public int wert;      // in „wert" wird die aktuelle Belegung gespeichert\n  public DateTime datum; // "datum" enthält den Zeitpunkt der Speicherung\n}',
    question:
      'Erläutern Sie beispielhaft den Zugriff auf die Property wert der Struktur-Variablen diskBelegung an der ersten Stelle von Array Disk_2[].',
    maxPoints: 3,
    modelSolution:
      'Die erste Stelle des Array Disk_2 ist 0, also Disk_2[0].\nMithilfe des Punkt-Operators kann auf die Property zugegriffen werden.\nFolglich kann der Zugriff z. B. mittels Disk_2[0].wert erfolgen.',
    answerStatus: 'confirmed',
    sourcePage: 6,
  },
  {
    id: 'ap2-si-t1-2021-winter-q3-cc',
    examId: 'ap2-si-t1-2021-winter',
    questionNumber: 3,
    subPart: 'cc',
    topic: 'SQL',
    scenario: SCENARIO,
    referenceText:
      'Gegeben ist ein Ausschnitt der Tabelle tblDiskM, in der für das Laufwerk M: die Speicherbelegung in KiB abgelegt ist.\n\ntblDiskM\nDatum | Zeit | Speicherbelegung\n2021-11-21 | 7:05 | 438.298.103\n2021-11-21 | 9:04 | 439.442.661\n2021-11-21 | 11:01 | 441.568.981\n2021-11-21 | 13:02 | 443.980.103',
    question:
      'Erstellen Sie eine SQL-Anweisung, welche die Anzahl Einträge in der Tabelle tblDiskM mit dem Datum 21.11.2021 ausgibt.',
    maxPoints: 3,
    modelSolution: "SELECT COUNT(*) FROM tblDiskM WHERE Datum = '2021-11-21';",
    answerStatus: 'confirmed',
    sourcePage: 7,
  },
  {
    id: 'ap2-si-t1-2021-winter-q3-cd',
    examId: 'ap2-si-t1-2021-winter',
    questionNumber: 3,
    subPart: 'cd',
    topic: 'UML',
    scenario: SCENARIO,
    question:
      'Die Dokumentation des Programms soll mithilfe von UML-Diagrammen unterstützt werden.\n\nNennen Sie je zwei UML-Diagramme, die zur Darstellung …\n– des logischen Aufbaus (statische Sicht)\nund\n– der Interaktionen/Abläufe (dynamische Sicht)\ngeeignet sind.',
    maxPoints: 4,
    modelSolution:
      'UML-Diagramme für die statische Sicht:\n– Klassendiagramme\n– Objektdiagramme\n– Paketdiagramme\n– Kollaborationsdiagramme\n\nUML-Diagramme für die dynamische Sicht:\n– Aktivitätsdiagramme\n– Sequenzdiagramme\n– Zustandsdiagramme',
    answerStatus: 'confirmed',
    sourcePage: 7,
  },

  // 4. Aufgabe (26 Punkte) — Datenschutz und Datensicherheit gewährleisten
  {
    id: 'ap2-si-t1-2021-winter-q4-aa',
    examId: 'ap2-si-t1-2021-winter',
    questionNumber: 4,
    subPart: 'aa',
    topic: 'Datenschutz',
    scenario: SCENARIO,
    referenceText:
      'Im Zuge der Migration der Daten aus der Zentrale erhalten Sie eine Festplatte mit zwei verschiedenen Dokumentensätzen.\nDer erste Dokumentensatz enthält die eingescannten Originale einer Umfrage zur Kundenzufriedenheit, die fertig ausgewertet wurden und gelöscht werden können. Die Umfrage enthält Fragen zu: Name, Anschrift, Geburtsdatum, Lieblingsfiliale, Brötchenkonsum und Sonstiges.\nDer zweite Dokumentensatz enthält Rechnungen über Backwarenlieferungen an eine Hotelkette, die vor drei Jahren Insolvenz angemeldet hat.',
    question:
      '4. Aufgabe (26 Punkte)\n\naa) Nennen Sie drei Kriterien, die aus Datenschutzsicht bei der Speicherung von Daten grundsätzlich zu beachten sind.',
    maxPoints: 3,
    modelSolution:
      '– Verschlüsselung\n– Zugriffsbeschränkungen\n– Klassifizierung der Daten\n– Speicherort (Deutschland, EU oder Nicht EU)\n– Datenminimierung\n– Zweckbindung\n– Speicherbegrenzung\n– Integrität\n– …\n\n(Drei der genannten Kriterien sind für die volle Punktzahl ausreichend.)',
    answerStatus: 'confirmed',
    sourcePage: 7,
  },
  {
    id: 'ap2-si-t1-2021-winter-q4-ab',
    examId: 'ap2-si-t1-2021-winter',
    questionNumber: 4,
    subPart: 'ab',
    topic: 'Datenschutz / Entsorgung',
    scenario: SCENARIO,
    question:
      'Erläutern Sie zwei Maßnahmen der vorschriftsgemäßen Entsorgung von Festplatten unter dem besonderen Aspekt der Informationssicherheit.',
    maxPoints: 2,
    modelSolution:
      'Festplatten und andere Datenspeicher müssen gemäß der geltenden Datenschutz-Vorschriften vernichtet werden. Geeignete technische Maßnahmen werden z. B. durch das Bundesamt für Sicherheit in der Informationstechnik (BSI) vorgeschlagen.\n\nFestplatten sollten demnach von einem zertifizierten Dienstleister gelöscht und vernichtet werden. Die mit der Löschung und Vernichtung beauftragten Unternehmen sollten regelmäßig daraufhin überprüft werden, ob der Lösch- bzw. Vernichtungsvorgang noch korrekt abläuft. Nachdem der Auftrag durch den Dienstleister erledigt wurde, wird ein Zertifikat zum Nachweis der Löschung und Vernichtung ausgestellt.\n\nAlternativ gibt es die Möglichkeit der Entmagnetisierung der Festplatten, diese darf ebenfalls nur durch zertifizierte Geräte durchgeführt werden.',
    answerStatus: 'confirmed',
    sourcePage: 7,
  },
  {
    id: 'ap2-si-t1-2021-winter-q4-ac',
    examId: 'ap2-si-t1-2021-winter',
    questionNumber: 4,
    subPart: 'ac',
    topic: 'Datenschutz / Löschung',
    scenario: SCENARIO,
    question:
      'Fortsetzung 4. Aufgabe\n\nac) Begründen Sie, warum das Formatieren und Löschen der Daten aus datenschutztechnischer Sicht nicht ausreichend ist.',
    maxPoints: 2,
    modelSolution:
      'Beim Löschen und Formatieren der Daten wird in der Regel nur der zugrunde liegende Index gelöscht. Hierdurch werden die eigentlichen Dateien nicht gelöscht, es wird lediglich der Bereich, auf dem sich die Datei befindet, als frei markiert. Solange der Bereich nicht mit anderen Daten beschrieben wird, bleibt die Datei unverändert bestehen.\n\nEin einfaches Überschreiben aller Festplatten-Bereiche reicht ebenfalls nicht aus, die Festplatte sollte drei bis sieben Mal „erased" werden.',
    answerStatus: 'confirmed',
    sourcePage: 8,
  },
  {
    id: 'ap2-si-t1-2021-winter-q4-ba',
    examId: 'ap2-si-t1-2021-winter',
    questionNumber: 4,
    subPart: 'ba',
    topic: 'Datenschutz-Vorfall',
    scenario: SCENARIO,
    referenceText:
      'Der neue Filialleiter der Bäckerei ist noch nicht vertraut mit den Details des Datenschutzes. Er fragt Sie, was er tun muss, wenn jemand unrechtmäßig Zugang zu den Informationen aus der Datenbank des digitalen Bonusprogramms hätte und die Kundendaten sehen könnte.\n\nFolgende Informationen findet er in der Datenbank:\nVorname, Nachname, Mailadresse, Kundennummer, Bonuspunkte, Geburtsdatum',
    question:
      'ba) Erläutern Sie, welchen Informationspflichten nachgekommen werden muss, falls ein unbefugter Zugriff auf die Datenbank festgestellt wird.',
    maxPoints: 3,
    modelSolution:
      'Gemäß Artikel 33 der DSGVO „Meldung von Verletzungen des Schutzes personenbezogener Daten an die Aufsichtsbehörde" muss eine unverzügliche Meldung an die zuständigen Aufsichtsbehörden erfolgen. Die Meldung hat binnen 72 Stunden, nachdem die Verletzung bekannt wurde, zu erfolgen.\n\nZuvor sollte der Vorfall an den Datenschutzbeauftragten der Firma gemeldet werden.\n\nDie betroffenen Kunden können direkt informiert werden oder das Unternehmen kann eine Bekanntmachung veröffentlichen.',
    answerStatus: 'confirmed',
    sourcePage: 8,
  },
  {
    id: 'ap2-si-t1-2021-winter-q4-bb',
    examId: 'ap2-si-t1-2021-winter',
    questionNumber: 4,
    subPart: 'bb',
    topic: 'IT-Sicherheit',
    scenario: SCENARIO,
    question:
      'bb) Erläutern Sie die Maßnahmen, die außerdem zu treffen sind, um zu verhindern, dass ein unbefugter Zugriff auf die Datenbank des Bonuspunktesystems erfolgt.',
    maxPoints: 3,
    modelSolution:
      'Aus organisatorischer Sicht ist der Datenschutzbeauftragte zu informieren, dieser kann ggf. weitere Maßnahmen umsetzen.\n\nAus technischer Sicht sind folgende Maßnahmen möglich:\n– System sperren\n– Backup stoppen / sichern\n– Logs auswerten\n– Härtung der Systeme\n– Honeypot installieren\n– Erweiterung der bestehenden Sicherheitssysteme (DMZ, Firewall etc.)',
    answerStatus: 'confirmed',
    sourcePage: 8,
  },
  {
    id: 'ap2-si-t1-2021-winter-q4-c',
    examId: 'ap2-si-t1-2021-winter',
    questionNumber: 4,
    subPart: 'c',
    topic: 'Verschlüsselung',
    scenario: SCENARIO,
    referenceText:
      'Tabelle "Algorithmus / Bedeutung" (auszufüllen für AES-128, AES-256, MD5, SHA256), erste Zeile bereits vorgegeben:\nAlgorithmus: Beispiel: 3DES — Bedeutung: Unsicher, Data Encryption Standard – eine dreifach verschachtelte symmetrische Verschlüsselung, geeignet, um Daten zu verschlüsseln.',
    question:
      'Der Filialleiter entscheidet, dass zukünftig generell alle Daten zu verschlüsseln sind. Im Zuge dessen recherchieren Sie verschiedene Algorithmen und prüfen diese hinsichtlich ihrer aktuellen Sicherheit und ihrem Einsatzbereich.\n\nVervollständigen Sie die tabellarische Übersicht entsprechend.',
    maxPoints: 8,
    modelSolution:
      'AES-128:\nBewertung der Sicherheit: Bedingt geeignet, gilt noch als sicher.\nEinsatzbereich: Symmetrisches Verschlüsselungsverfahren zur Übertragung und Speicherung von Daten.\n\nAES-256:\nBewertung der Sicherheit: Gut geeignet, lässt sich selbst mit Hochleistungsrechnern aktuell noch nicht hacken.\nEinsatzbereich: Symmetrisches Verschlüsselungsverfahren zur Übertragung und Speicherung von Daten.\n\nMD5:\nBewertung der Sicherheit: Veralteter Standard, nicht geeignet.\nEinsatzbereich: Veraltete kryptologische Hashfunktion zur Signatur von Daten.\n\nSHA256:\nBewertung der Sicherheit: Sicher, aber nicht zur Verschlüsselung geeignet.\nEinsatzbereich: Aktuelle kryptologische Hashfunktion zur Signatur von Daten.',
    answerStatus: 'confirmed',
    sourcePage: 8,
  },
  {
    id: 'ap2-si-t1-2021-winter-q4-d',
    examId: 'ap2-si-t1-2021-winter',
    questionNumber: 4,
    subPart: 'd',
    topic: 'Anonymisierung / Pseudonymisierung',
    scenario: SCENARIO,
    referenceText:
      '"Pseudonymization is a data management procedure which replaces personally identifiable information fields within a data record by one or more artificial identifiers, or pseudonyms. Each replaced field or collection of replaced fields has a single pseudonym. This makes the data record less identifiable while the remaining plain data is still suitable for data analysis and data processing. It is one possibility to be compliant with the European Union\'s new General Data Protection Regulation demands for secure storage of personal information. Pseudonymized data can be restored to its original state. This allows individuals to be re-identified afterwards, while anonymized data can never be restored to its original state."',
    question:
      'Bei der Weiterverarbeitung der Daten und Übermittlung an die Zentrale zur Auswertung wollen Sie dem Grundsatz der Datensparsamkeit folgen und nur notwendige Informationen teilen. Dazu beschäftigen Sie sich mit den Konzepten der Anonymisierung und Pseudonymisierung und finden den nebenstehenden englischsprachigen Artikel.\n\nErklären Sie die Funktionsweise von Anonymisierung und von Pseudonymisierung und verdeutlichen Sie dabei den grundsätzlichen Unterschied beider Verfahren.\n\nAnonymisierung:\nPseudonymisierung:',
    maxPoints: 5,
    modelSolution:
      'Anonymisierung: Personenbezogene Daten werden so verändert, dass keine Zuordnung zu einer natürlichen Person hergestellt werden kann. Personenbeziehbare Informationen werden durch andere Informationen oder Platzhalter ersetzt.\n\nPseudonymisierung: Personenbezogene Daten werden durch ein Pseudonym ersetzt. Die ursprünglichen Daten sowie die Pseudonyme werden in einer Übersetzungstabelle gesichert. Hierdurch kann mithilfe der De-Pseudonymisierung der ursprüngliche Datensatz wiederhergestellt werden. Gleiche Daten erhalten jedoch nicht die gleichen Pseudonyme, ohne die Übersetzungstabelle kann somit kein Rückschluss auf die ursprünglichen Daten erzeugt werden.',
    answerStatus: 'confirmed',
    sourcePage: 9,
  },
]
