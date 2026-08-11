import type { ApExamMeta, ApExamQuestion } from '../../types/apExam'

export const ap2SiT1_2024SommerMeta: ApExamMeta = {
  id: 'ap2-si-t1-2024-sommer',
  area: 'AP2_SI_T1',
  year: 2024,
  period: 'Sommer',
  label: 'Sommer 2024',
  examDate: 'Mittwoch, 24. April 2024',
  examTitle: 'Konzeption und Administration von IT-Systemen',
  courseCode: '1202',
  sourceExamPdf: 'SI_AP2_T1_24s.pdf',
  sourceSolutionPdf: 'Loe_SI_AP2_T1_24s.pdf',
  solutionSource: 'confirmed',
  taskCount: 4,
  durationMinutes: 90,
  totalPoints: 100,
}

const SCENARIO =
  'Die Aufgaben 1 bis 4 beziehen sich auf die folgende Ausgangssituation:\n\nNach Abschluss Ihrer Berufsausbildung zum Fachinformatiker Fachrichtung Systemintegration bei dem Bankhaus ZUMM in Frankfurt a. M. haben Sie von dem Bankhaus ein reguläres Beschäftigungsverhältnis angeboten bekommen und angenommen. Sie wurden dem Team „Serverdienste" zugeteilt. In diesem Team übernehmen Sie folgende Aufgaben:\n1. Die Migration eines Dienstes in die Cloud vorbereiten\n2. Eine Schulung zur Informationssicherheit durchführen\n3. Ein Programm zur Serverüberwachung erweitern\n4. Ein Speichersystem aktualisieren und ein Lizenzmodell auswählen'

export const ap2SiT1_2024SommerQuestions: ApExamQuestion[] = [
  // 1. Aufgabe (24 Punkte) — Die Migration eines Dienstes in die Cloud vorbereiten
  {
    id: 'ap2-si-t1-2024-sommer-q1-aa',
    examId: 'ap2-si-t1-2024-sommer',
    questionNumber: 1,
    subPart: 'aa',
    topic: 'Cloud Computing',
    scenario: SCENARIO,
    referenceText:
      '1. Aufgabe (24 Punkte)\n\nDas Bankhaus ZUMM prüft, ob es sinnvoll ist, einige seiner IT-Dienste in die Cloud auszulagern.\n\na) Vor einer Entscheidung darüber sollen dazu wichtige Fragen geklärt werden.',
    question:
      'aa) Es werden Vor- und Nachteile einer Cloud-Lösung besprochen.\n\nErläutern Sie zwei Vorteile und zwei Nachteile einer Cloud-Lösung.\nVorteile:\nNachteile:',
    maxPoints: 8,
    modelSolution:
      'Vorteile:\nHohe Verfügbarkeit: Durch redundante Systeme sind Cloud-Ressourcen meist zuverlässiger und hoch verfügbar. Cloud-Anbieter haben außerdem häufig Rechenzentren in verschiedenen geografischen Standorten und können so Serviceunterbrechungen aufgrund regionaler Probleme verringern.\n\nLeichte Skalierbarkeit: Auf veränderte Anforderungen des Bankhauses kann schnell, unkompliziert und flexibel reagiert werden. Die Cloud-Ressourcen können bei Bedarf dynamisch angepasst werden, um z. B. zusätzlichen Speicherplatz oder mehr Rechenleistung abzurufen.\n\nMinimierung manueller Aufwände: Die Wartung und Aktualisierung von Hard- und Software werden bei einer Cloud-Lösung vom Anbieter übernommen. Das Bankhaus ZUMM kann somit den Aufwand für den Kauf und die Installation physischer Hardware reduzieren und sich mehr auf das Kerngeschäft des Unternehmens konzentrieren.\n\nVerbesserte Kosteneffizienz: Meistens werden bei Cloud-Lösungen sogenannte Pay-as-you-go-Modelle genutzt. Hierbei muss das Unternehmen nur die Ressourcen bezahlen, die auch tatsächlich genutzt wurden. Finanziell kann somit flexibler und kostenoptimierter gearbeitet werden, außerdem werden Kostenschocks vermieden.\n\nBeispiele für weitere Vorteile, die erläutert werden könnten:\n– Mobiler Zugriff auf die Daten\n– Erleichtertes Backup und Recovery\n– Schnellere Implementierung\n– Erleichterte Zusammenarbeit\n– Erhöhte Sicherheit\n\nNachteile:\nAbhängigkeit vom Internet: Um Cloud-Lösungen nutzen zu können, ist ein ständiger Internetzugang erforderlich. Bei Internet-Unterbrechungen könnte die Verfügbarkeit der Cloud-Ressourcen und somit auch der operative Betrieb gefährdet sein.\n\nBedenken bzgl. Datenhoheit: Je nach Cloud-Anbieter ist ggf. nicht klar, wo Daten gespeichert werden und welche Gesetzte für diese gelten. Insbesondere hinsichtlich der geltenden Datenschutzgesetzte (z. B. DSGVO) kann somit ein Risiko bestehen oder die Nutzung bestimmter Cloud-Lösungen könnte strikt untersagt sein.\n\nLatenzprobleme: Besonders wenn die genutzten Rechenzentren weit geografisch entfernt sind, kann es zu Latenzproblemen kommen. Echtzeitdatenverarbeitungen des Bankhauses könnten hierdurch beeinträchtigt werden.\n\nAbhängigkeit vom Cloud-Anbieter: Es besteht wenig Kontrolle über die Infrastruktur des Cloud-Anbieters und man ist vollständig vom Cloud-Anbieter abhängig. Probleme des Cloud-Anbieters können direkt die Geschäftsabläufe des Bankhauses ZUMM beeinträchtigen.\n\nBeispiele für weitere Nachteile, die erläutert werden könnten:\n– Erhöhte Komplexität der Integration\n– Datensicherheit während der Datenübertragung\n– Einschränkungen hinsichtlich der Anpassbarkeit\n– Verlust physischer Kontrolle\n– Mangelnde Transparenz\n\nEs genügt die Erläuterung von jeweils zwei Vorteilen und zwei Nachteilen. Weitere Vor- und Nachteile sind möglich.',
    answerStatus: 'confirmed',
    sourcePage: 2,
  },
  {
    id: 'ap2-si-t1-2024-sommer-q1-ab',
    examId: 'ap2-si-t1-2024-sommer',
    questionNumber: 1,
    subPart: 'ab',
    topic: 'Cloud Computing / SLA',
    scenario: SCENARIO,
    question:
      'ab) Als erstes soll der Webauftritt in die Cloud migrieren.\n\nErläutern Sie zwei Anforderungen, die Sie diesbezüglich an den Provider stellen.',
    maxPoints: 6,
    modelSolution:
      'Service-Level-Agreements (SLAs): Um die Verfügbarkeit des Webauftritts zu gewährleisten, muss der Provider ein SLA mit dem Bankhaus vereinbaren. Hierdurch wird festgelegt, welche (z. B.) prozentuale Verfügbarkeit der Website gewährleistet werden muss, welche Ausfallzeiten toleriert werden und welche Vertragsstrafen bei Nichteinhaltung drohen.\n\nCompliance-, Sicherheits- und Datenschutz-Anforderungen: Der Provider muss sich an geltende Datenschutzbestimmungen, Branchenstandards und ggf. vorgegebene Compliance-Standards, wie z. B. die ISO 9001 oder ISO 27001, halten. Es können diesbezüglich auch Anforderungen hinsichtlich der Verschlüsselung, Authentifizierung und Verarbeitung personenbezogener Daten gestellt werden.\n\nBeispiele für weitere Anforderungen, die erläutert werden könnten:\n– Backup und Recovery-Konzept\n– Kundensupport und Servicequalität\n– Kosten und Preismodell\n\nDie Erläuterung von zwei Anforderungen genügt. Weitere Anforderungen sind möglich.',
    answerStatus: 'confirmed',
    sourcePage: 2,
  },
  {
    id: 'ap2-si-t1-2024-sommer-q1-ba',
    examId: 'ap2-si-t1-2024-sommer',
    questionNumber: 1,
    subPart: 'ba',
    topic: 'Datenschutz',
    scenario: SCENARIO,
    referenceText: 'b) Das Bankhaus ZUMM ist verpflichtet, die gesetzlichen Vorgaben zum Datenschutz einzuhalten und nachzuweisen.',
    question:
      'ba) In diesem Zusammenhang überarbeitet das Bankhaus regelmäßig das vorhandene Datenschutzkonzept.\n\nNennen Sie vier inhaltliche Anforderungen an ein Datenschutzkonzept.',
    maxPoints: 4,
    modelSolution:
      '– Nennung des Datenschutzbeauftragten\n– Verzeichnis der Verarbeitungstätigkeiten\n– Datenschutzorganisation und Verantwortlichkeiten\n– Schulung und Awareness\n– Datenschutzrichtlinien und -verfahren\n– Maßnahmen zur IT-Sicherheit (Updates, Firewall, Verschlüsselung)\n– …',
    answerStatus: 'confirmed',
    sourcePage: 3,
  },
  {
    id: 'ap2-si-t1-2024-sommer-q1-bb',
    examId: 'ap2-si-t1-2024-sommer',
    questionNumber: 1,
    subPart: 'bb',
    topic: 'DSGVO / Datenschutzvorfall',
    scenario: SCENARIO,
    question:
      'bb) Es wurden versehentlich Kundendaten an einen unberechtigten Empfänger gesendet.\n\nErläutern Sie drei Maßnahmen, die die Bank nach der Datenschutz-Grundverordnung unverzüglich einleiten muss.',
    maxPoints: 6,
    modelSolution:
      'Benachrichtigung der zuständigen Datenschutzbehörde: Unmittelbar nach dem Datenschutzvorfall muss eine Meldung bei der zuständigen Datenschutzbehörde eingereicht werden. Die Meldung sollte binnen 72 Stunden erfolgen.\n\nBenachrichtigung der betroffenen Person: Insbesondere wenn der Vorfall voraussichtlich ein hohes Risiko für die Rechte und Freiheit des Betroffenen mit sich bringt, muss die Person schnell, klar verständlich und mit allen relevanten Informationen über den Vorfall benachrichtigt werden.\n\nEvaluierung und Verbesserung der Sicherheitsmaßnahmen: Der Datenschutzvorfall muss gründlich untersucht werden, um die Ursache zu ermitteln, Schwachstellen zu identifizieren und geeignete Maßnahmen zur Verbesserung der Sicherheitsmaßnahmen einleiten zu können.\n\nBeispiele für weitere Maßnahmen, die erläutert werden könnten:\n– Durchführung von Datenschutzfolgeabschätzungen für neue Projekte\n– Regelmäßige Sicherheitsschulungen und Sensibilisierungen\n– Dokumentationspflicht\n– Kontaktaufnahme beim unberechtigten Empfänger mit der Aufforderung zur Löschung der Daten\n\nEs genügt, drei Maßnahmen zu erläutern. Weitere Maßnahmen sind möglich.',
    answerStatus: 'confirmed',
    sourcePage: 3,
  },

  // 2. Aufgabe (25 Punkte) — Eine Schulung zur Informationssicherheit durchführen
  {
    id: 'ap2-si-t1-2024-sommer-q2-aa',
    examId: 'ap2-si-t1-2024-sommer',
    questionNumber: 2,
    subPart: 'aa',
    topic: 'IT-Sicherheit / TOM',
    scenario: SCENARIO,
    question:
      '2. Aufgabe (25 Punkte)\n\nSie führen eine Mitarbeiterschulung zur Informationssicherheit durch. Dabei gehen Sie auf mehrere Beispiele aus der Praxis ein.\n\na) Zu Beginn der Schulung geht es um grundsätzliche Fragen zur Informationssicherheit.\n\naa) Es werden verschiedene sicherheitsrelevante Situationen aus dem Arbeitsalltag vorgestellt.\n\nOrdnen Sie diesen Situationen die jeweils zutreffende technische bzw. organisatorische Maßnahme (TOM) zu. Markieren Sie mit: X\n\nSituation / TOM (Zutrittskontrolle | Zugangskontrolle | Zugriffskontrolle):\n– RFID-Karten benutzen, um ins Firmengebäude zu gelangen\n– Benutzeridentifikation am PC mit biometrischen Merkmalen\n– Berechtigungskonzept auf Dateiebene implementieren\n– Datenträger verschlüsseln\n– Alarmanlage außerhalb der Geschäftszeiten aktivieren',
    maxPoints: 5,
    modelSolution:
      'RFID-Karten benutzen, um ins Firmengebäude zu gelangen: Zutrittskontrolle\nBenutzeridentifikation am PC mit biometrischen Merkmalen: Zugangskontrolle\nBerechtigungskonzept auf Dateiebene implementieren: Zugriffskontrolle\nDatenträger verschlüsseln: Zugriffskontrolle\nAlarmanlage außerhalb der Geschäftszeiten aktivieren: Zutrittskontrolle\n\nWeiterführende Informationen:\nZutrittskontrolle bezieht sich auf die physische Sicherheit eines Ortes oder einer Einrichtung und regelt, wer berechtigt ist, den physischen Raum zu betreten.\nZugangskontrolle bezieht sich auf die Identifizierung und Authentifizierung von Benutzern, um sicherzustellen, dass nur autorisierte Personen auf digitale Systeme oder Anwendungen zugreifen können.\nZugriffskontrolle regelt die Berechtigungen und Privilegien eines Benutzers innerhalb eines digitalen Systems oder einer Anwendung, um sicherzustellen, dass sie nur auf die Daten und Funktionen zugreifen können, für die sie autorisiert sind.',
    answerStatus: 'confirmed',
    sourcePage: 3,
  },
  {
    id: 'ap2-si-t1-2024-sommer-q2-ab',
    examId: 'ap2-si-t1-2024-sommer',
    questionNumber: 2,
    subPart: 'ab',
    topic: 'Schutzziele der Informationssicherheit',
    scenario: SCENARIO,
    question:
      'Fortsetzung 2. Aufgabe\n\nab) Sie besprechen grundsätzliche Schutzziele der Informationssicherheit.\n\nErläutern Sie die drei folgenden Schutzziele der Informationssicherheit.\nConfidentiality\nIntegrity\nAvailability',
    maxPoints: 6,
    modelSolution:
      'Confidentiality: Sensible Informationen werden vor unbefugtem Zugriff oder Offenlegung geschützt und können somit nur von autorisierten Personen eingesehen oder verwendet werden.\n\nIntegrity: Daten werden während der Speicherung, Übertragung und Verarbeitung vor unbeabsichtigter oder böswilliger Manipulation geschützt.\n\nAvailability: Systeme und Dienste werden zuverlässig und kontinuierlich betrieben, ohne dass es zu längeren Ausfallzeiten kommt.\n\nINFO – beispielhafte Methoden, um diese Schutzziele jeweils zu erreichen:\nConfidentiality: Verschlüsselung, Zugriffkontrollen und Datenseparierung\nIntegrity: Digitale Signaturen, Hash-Funktionen, Zugriffskontrollen\nAvailability: RAID-Systeme, Notfallwiederherstellung, USV-Systeme',
    answerStatus: 'confirmed',
    sourcePage: 4,
  },
  {
    id: 'ap2-si-t1-2024-sommer-q2-ba',
    examId: 'ap2-si-t1-2024-sommer',
    questionNumber: 2,
    subPart: 'ba',
    topic: 'Phishing',
    scenario: SCENARIO,
    referenceText:
      'b) Der Mitarbeiter Paul Meier des Bankhauses ZUMM hat folgende E-Mail erhalten:\n\nVon: BEST-IT <victorsavage@gmail.de>\nMi 06.03.2024 06:34\nAn: <undisclosed recipients>\nCC: paul.meier@zumm.de\n\nLieber Kunde,\n\nwir haben einen Update für die Mailsoftware. Sie haben 12 Stunden Zeit die Softeware zu updaten. Danach funktioniert die Mail nicht mer.\n\nUm die Softeware zu updaten, klicken Sie hier:\n\nhttps://best.it/Update  [angezeigter Linktext; tatsächliches Linkziel laut Tooltip beim Überfahren mit der Maus: https://jdj773.yahoo.ru/Update.exe (STRG + Klicken um Link zu folgen)]\n\nMit freundlichen Grüßen\nIhr ITservice',
    question:
      'ba) Analysieren Sie die E-Mail auf Merkmale, die darauf hindeuten, dass der Inhalt der E-Mail nicht vertrauenswürdig ist.\n\nNennen Sie drei typische Merkmale.',
    maxPoints: 3,
    modelSolution:
      '– Unspezifische Anrede („Lieber Kunde")\n– Freemail-Account wird genutzt (Google Mail / gmail)\n– Paul Meier nur in CC angeschrieben\n– Rechtschreib- und Grammatikfehler ("einen Update", "Softeware", "ITservice")\n– Anzeigetext des Links ist ungleich der hinterlegten URL (best.it → jdj773.yahoo.ru)\n– Fehlende bzw. unspezifische Signatur ("Ihr ITservice")\n– Anzeigename des Absenders ungleich Absender-Mail (BEST-IT)\n\nEs genügt die Nennung von drei Merkmalen. Weitere Merkmale sind möglich.',
    answerStatus: 'confirmed',
    sourcePage: 4,
  },
  {
    id: 'ap2-si-t1-2024-sommer-q2-bb',
    examId: 'ap2-si-t1-2024-sommer',
    questionNumber: 2,
    subPart: 'bb',
    topic: 'Malware-Symptome',
    scenario: SCENARIO,
    question:
      'bb) Herr Meier hat auf den Hyperlink in der E-Mail geklickt. Seitdem stellt er bei Arbeiten an seinem PC Unregelmäßigkeiten fest.\n\nNennen Sie drei Unregelmäßigkeiten, die nach einem solchen Vorfall auftreten können.',
    maxPoints: 3,
    modelSolution:
      '– Erhöhte GPU-, CPU- oder RAM-Auslastung\n– Häufige Systemabstürze\n– Geänderte oder gelöschte Dateien\n– Neue Programme oder Desktop- bzw. Startmenü-Symbole\n– Unbekannte laufende Prozesse\n– Unerwünschte Pop-Ups\n– Vermehrte Fehlermeldungen\n– Verringerte Gesamtperformance des PCs\n– Unwissentlich verschickte E-Mails\n– Vermehrte Passwortabfragen\n\nEs genügt die Nennung von drei Unregelmäßigkeiten. Weitere Unregelmäßigkeiten sind möglich.',
    answerStatus: 'confirmed',
    sourcePage: 4,
  },
  {
    id: 'ap2-si-t1-2024-sommer-q2-bc',
    examId: 'ap2-si-t1-2024-sommer',
    questionNumber: 2,
    subPart: 'bc',
    topic: 'Malware-Typen',
    scenario: SCENARIO,
    question:
      'bc) Anhand von Beispielen gehen Sie auf verschiedene Malware-Typen ein.\n\nOrdnen Sie den folgenden Beschreibungen den jeweils entsprechenden Malware-Typ zu (Virus, Wurm, Trojaner, Ransomware). Hinweis: Ein Kreuz pro Spalte.\n– Code, der sich fortlaufend über das Netzwerk repliziert und weitere Systeme befällt.\n– Code, der sich zusammen mit anderen Programmen installiert.\n– Code, der die Daten verschlüsselt und zu einer Zahlung an den Angreifer auffordert.\n– Code, der offensichtlich nützlich sein soll, aber im Hintergrund Systemressourcen freigibt.',
    maxPoints: 4,
    modelSolution:
      'Code, der sich fortlaufend über das Netzwerk repliziert und weitere Systeme befällt: Wurm\nCode, der sich zusammen mit anderen Programmen installiert: Virus\nCode, der die Daten verschlüsselt und zu einer Zahlung an den Angreifer auffordert: Ransomware\nCode, der offensichtlich nützlich sein soll, aber im Hintergrund Systemressourcen freigibt: Trojaner',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t1-2024-sommer-q2-c',
    examId: 'ap2-si-t1-2024-sommer',
    questionNumber: 2,
    subPart: 'c',
    topic: 'White-Hat / Black-Hat Hacker',
    scenario: SCENARIO,
    question:
      'c) Im Verlauf der Schulung klären Sie die Mitarbeiter über „White-Hat-Hacker" und „Black-Hat-Hacker" auf.\n\nErläutern Sie die jeweiligen Ziele der beiden Gruppierungen.',
    maxPoints: 4,
    modelSolution:
      'White-Hat-Hacker: Haben das Ziel, Sicherheitslücken und Schwachstellen zu identifizieren, um die Sicherheit der Systeme zu verbessern. Sie werden auch als ethische Hacker bezeichnet und verstoßen nicht gegen Gesetzte oder richten Schaden an. Sie werden häufig von den Eigentümern der betroffenen Systeme beauftragt.\n\nBlack-Hat-Hacker: Haben das Ziel, Schwachstellen in Systemen oder Netzwerken auszunutzen, um in diese einzudringen und vertrauliche Informationen zu stehlen, Schaden zu verursachen oder generell kriminellen Aktivitäten nachzugehen. Sie verfolgen persönliche Interessen und werden nicht vom Eigentümer der betroffenen Systeme beauftragt.',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },

  // 3. Aufgabe (26 Punkte) — Ein Programm zur Serverüberwachung erweitern
  {
    id: 'ap2-si-t1-2024-sommer-q3-aa',
    examId: 'ap2-si-t1-2024-sommer',
    questionNumber: 3,
    subPart: 'aa',
    topic: 'Programmierung (Fehlersuche)',
    scenario: SCENARIO,
    referenceText:
      '3. Aufgabe (26 Punkte)\n\nDas Bankhaus ZUMM setzt für die Überwachung seiner IT-Infrastruktur vorzugsweise intern entwickelte Software ein. Sie werden mit einer Programmerweiterung beauftragt.\n\na) Das Monitoring-Programm für die Server soll um die Methode „MaxMax2()" erweitert werden, welche den höchsten (max) und zweithöchsten (max2) Wert der CPU-Auslastung eines Servers ermittelt. Die Werte der CPU-Auslastung sind in dem Array „CPULoad" als ganzzahlige Prozentwerte gespeichert.\n\nIn einem ersten Schritt haben Sie den folgenden Quellcode erstellt:\n\n1  //Definition der Methode MaxMax2()\n2  static void MaxMax2()\n3  {\n4    // Array CPULoad definieren und mit Testdaten füllen\n5    int[] CPULoad = new int[] { 12, 10, 40, 73, 33, 60 };\n6    int max = 0;    //Variable für die höchste CPU-Auslastung\n7    int max2 = 0;   //Variable für die zweithöchste CPU-Auslastung\n8    //Schleife zum Ermitteln von max und max2\n9    for (int i = 0; i < CPULoad.Length; i++)\n10   {\n11     if (CPULoad[i] > max)\n12       {\n13         max2 = max;\n14         max = CPULoad[i];\n15       }\n16     else if (CPULoad[i] > max2)\n17       max = CPULoad[i];\n18   }\n19 }\n\nIn der Anlage auf Seite 7 finden Sie Hilfe zur verwendeten Syntax.',
    question:
      'aa) Nach Ausführung der Methode stellen Sie fest, dass die Variablen max und max2 nicht die richtigen Werte enthalten (max=73; max2=60).\n\nSie vermuten den Fehler innerhalb der for-Schleife und analysieren diese schrittweise mit den Werten von „CPULoad".\n\nVervollständigen Sie die freien Felder in der Tabelle mit den Werten, die gemäß dem vorliegenden Quellcode den Variablen max und max2 jeweils zugewiesen werden.\n\nTabelle (i / CPULoad[i] während Schritt i / max bei Ende von Schritt i / max2 bei Ende von Schritt i), erste Zeile bereits vorgegeben: i=0, CPULoad[i]=12, max=12, max2=0. Auszufüllen für i=1 (CPULoad[i]=10), i=2 (40), i=3 (73), i=4 (33), i=5 (60).',
    maxPoints: 10,
    modelSolution:
      'i=0: CPULoad[i]=12 — max (Ende Schritt)=12 — max2 (Ende Schritt)=0\ni=1: CPULoad[i]=10 — max=10 — max2=0\ni=2: CPULoad[i]=40 — max=40 — max2=10\ni=3: CPULoad[i]=73 — max=73 — max2=40\ni=4: CPULoad[i]=33 — max=73 — max2=40\ni=5: CPULoad[i]=60 — max=60 — max2=40',
    answerStatus: 'confirmed',
    sourcePage: 6,
  },
  {
    id: 'ap2-si-t1-2024-sommer-q3-ab',
    examId: 'ap2-si-t1-2024-sommer',
    questionNumber: 3,
    subPart: 'ab',
    topic: 'Programmierung (Fehlersuche)',
    scenario: SCENARIO,
    referenceText:
      'Siehe Quellcode der Methode MaxMax2() unter aa).',
    question:
      'ab) Offensichtlich liefert die Methode MaxMax2() nicht die richtigen Werte für max und max2.\n\nLokalisieren Sie die für die Fehlfunktion verantwortliche Stelle im Quellcode der Methode und erläutern Sie die Fehlerursache.',
    maxPoints: 5,
    modelSolution:
      'Die Variable „max" wird in der else-if-Abfrage „CPULoad[i] > max2" fälschlicherweise mit dem zweithöchsten Wert überschrieben (siehe Zeile 16 und 17). Hierdurch werden falsche Werte zugewiesen.',
    answerStatus: 'confirmed',
    sourcePage: 6,
  },
  {
    id: 'ap2-si-t1-2024-sommer-q3-ac',
    examId: 'ap2-si-t1-2024-sommer',
    questionNumber: 3,
    subPart: 'ac',
    topic: 'Programmierung (Fehlerbehebung)',
    scenario: SCENARIO,
    referenceText:
      'Vorlage-Tabelle mit den Spalten „Programmzeile" und „Anweisung" (leer, auszufüllen). Siehe Quellcode der Methode MaxMax2() unter aa).',
    question:
      'ac) Entwickeln Sie einen Vorschlag zur Fehlerbeseitigung. Tragen Sie diesen in die Vorlage ein.',
    maxPoints: 5,
    modelSolution: 'Programmzeile 17: Anweisung lautet: max2 = CPULoad[i];',
    answerStatus: 'confirmed',
    sourcePage: 6,
  },
  {
    id: 'ap2-si-t1-2024-sommer-q3-ba',
    examId: 'ap2-si-t1-2024-sommer',
    questionNumber: 3,
    subPart: 'ba',
    topic: 'Datentypen',
    scenario: SCENARIO,
    referenceText:
      'b) Sie überprüfen die Methode hinsichtlich sinnvoller Datentypen für die Variablen.\n\nTabelle „Datentyp / Beschreibung":\nsbyte: 8-Bit-Ganzzahl mit Vorzeichen\nbyte: 8-Bit-Ganzzahl ohne Vorzeichen\nshort: 16-Bit-Ganzzahl mit Vorzeichen\nushort: 16-Bit-Ganzzahl ohne Vorzeichen\nint: 32-Bit-Ganzzahl mit Vorzeichen\nuint: 32-Bit-Ganzzahl ohne Vorzeichen',
    question: 'ba) Geben Sie für den Datentyp „int" den dezimalen Wertebereich an.',
    maxPoints: 3,
    modelSolution:
      '-2.147.483.648 bis 2.147.483.647\n\nWeiterführende Informationen: In einer 32-Bit-Ganzzahl mit Vorzeichen repräsentiert das Most Significant Bit (MSB) das Vorzeichen, während die restlichen Bits den Betrag des Werts darstellen.\nWertebereich: -2^(n-1) bis 2^(n-1) - 1\nNegativer Wertebereich: -2.147.483.648 bis -1 (2.147.483.648 Zahlen)\nPositiver Wertebereich: 0 bis 2.147.483.647 (2.147.483.648 Zahlen)',
    answerStatus: 'confirmed',
    sourcePage: 9,
  },
  {
    id: 'ap2-si-t1-2024-sommer-q3-bb',
    examId: 'ap2-si-t1-2024-sommer',
    questionNumber: 3,
    subPart: 'bb',
    topic: 'Datentypen',
    scenario: SCENARIO,
    question:
      'bb) Erläutern Sie einen Grund, für die Variablen max und max2 den Datentyp „byte" statt „int" zu verwenden.',
    maxPoints: 3,
    modelSolution:
      'Der geringe Wertebereich des Datentyps byte ist ausreichend groß, um ganzzahlige Prozentwerte für die maximale CPU-Auslastung darzustellen.\n\nWeitere mögliche Gründe:\n– Geringerer Speicherbedarf durch 8-Bit statt 32-Bit-Ganzzahl.\n– Die CPU-Auslastung kann keinen negativen Wert aufweisen. Daher ist ein Datentyp ohne Vorzeichen zu verwenden.\n\nEs genügt die Erläuterung eines Grundes.',
    answerStatus: 'confirmed',
    sourcePage: 9,
  },

  // 4. Aufgabe (25 Punkte) — Ein Speichersystem aktualisieren und ein Lizenzmodell auswählen
  {
    id: 'ap2-si-t1-2024-sommer-q4-a',
    examId: 'ap2-si-t1-2024-sommer',
    questionNumber: 4,
    subPart: 'a',
    topic: 'Lizenzierung (CALs)',
    scenario: SCENARIO,
    referenceText:
      '4. Aufgabe (25 Punkte)\n\nDas Bankhaus ZUMM stellt sehr hohe Anforderungen an die Verfügbarkeit ihrer IT-Dienste. Sie administrieren diese IT-Systeme und sollen in diesem Zusammenhang beraten.\n\na) Für die Client-Server-Umgebung sind Zugriffslizenzen (Client Access Licenses) erforderlich.\n\nIm folgenden Text werden zwei alternative Lizenztypen vorgestellt.\n\n"There are two types of CALs: User CALs and Device CALs.\nUser CALs: Companies purchase a user CAL for each user who accesses the server to use various services such as storing data or printing services. Purchasing a user CAL makes sense if the company\'s employees need roaming access to the company network with multiple devices or if there are simply more devices than users in the company. The number of devices used for this access does not matter.\nDevice CALs: Companies purchase a device CAL for each device that accesses the server, regardless of the number of users that use that device to access the server. It can make more economic and administrative sense for employees to share devices within the company."',
    question:
      'Erläutern Sie für jeden der beiden beschriebenen Lizenztypen den empfohlenen Einsatzfall.\nUser CALs:\nDevice CALs',
    maxPoints: 6,
    modelSolution:
      'User CALs: Ideal, wenn Mitarbeiter von verschiedenen Geräten aus auf den Server zugreifen müssen oder wenn die Anzahl der Geräte die Anzahl der Benutzer übersteigt. Besonders nützlich für Unternehmen mit mobilen Mitarbeitern oder BYOD-Richtlinien (BYOD = Bring Your Own Device).\n\nDevice CALs: Geeignet, wenn mehrere Benutzer gemeinsam genutzte Geräte verwenden. Ökonomisch und administrativ sinnvoll, wenn Mitarbeiter Geräte teilen, anstatt jedem Benutzer eine eigene Lizenz zuzuweisen. Besonders relevant für Umgebungen mit gemeinsam genutzten Desktop-Computern, Druckern oder anderen Geräten.',
    answerStatus: 'confirmed',
    sourcePage: 10,
  },
  {
    id: 'ap2-si-t1-2024-sommer-q4-b',
    examId: 'ap2-si-t1-2024-sommer',
    questionNumber: 4,
    subPart: 'b',
    topic: 'Endgerätesicherheit',
    scenario: SCENARIO,
    question:
      'b) Mitarbeiter des Bankhauses nutzen bei Tätigkeiten im Außendienst firmeneigene Notebooks.\n\nSollte ein solches Notebook verloren gehen oder gestohlen werden, möchte das Bankhaus sicher sein, dass ein Missbrauch des Notebooks ausgeschlossen ist.\n\nErläutern Sie drei entsprechende Maßnahmen.',
    maxPoints: 6,
    modelSolution:
      'Einsatz von Zwei- oder Multi-Faktor-Authentifizierung mit einer biometrischen Komponente: Hierdurch kann gewährleistet werden, dass immer ein zuvor hinterlegter Fingerabdruck, ein Gesicht oder eine Iris abgeglichen werden muss, um Zugriff auf die Daten des Notebooks zu erhalten.\n\nAktivierung des TPM-Chips, um erweiterte Sicherheitsfunktionen zu nutzen: Unter anderem kann so eine Verschlüsselung der Daten und die Speicherung der kryptografischen Schlüssel im TPM-Chip sowie eine Prüfung der Systemintegrität bei Start genutzt werden.\n\nEinsatz eines mobilen Gerätemanagements mit Fernlöschfunktion: Das Bankhaus kann so das Notebook aus der Ferne sperren oder alle darauf befindlichen Daten löschen.\n\nBeispielhafte weitere Maßnahmen, die erläutert werden könnten:\n– Vollständige zentrale Datenhaltung, keine Daten auf mobilen Endgeräten\n– GPS-Ortung und Incident Response Team\n– Nutzung weltweiter Geräteerkennung (ggf. über Drittanbieter)\n– Härtung des BIOS\n\nEs genügt drei Maßnahmen zu erläutern. Weitere Erläuterungen sind möglich.',
    answerStatus: 'confirmed',
    sourcePage: 11,
  },
  {
    id: 'ap2-si-t1-2024-sommer-q4-c',
    examId: 'ap2-si-t1-2024-sommer',
    questionNumber: 4,
    subPart: 'c',
    topic: 'Ausfallsicherheit',
    scenario: SCENARIO,
    question:
      'c) Erläutern Sie drei technische Maßnahmen, die geeignet sind, eine hohe Ausfallsicherheit von IT-Systemen zu gewährleisten.',
    maxPoints: 6,
    modelSolution:
      'Etablierung von Systemen zur unterbrechungsfreien Stromversorgung (USV): Durch diese Vorrichtungen werden elektronische Geräte vor Stromausfällen, Spannungsschwankungen und Stromspitzen geschützt. Durch Batterien werden Stromausfälle sofort ausgeglichen und der unterbrechungsfreie Betrieb wird gewährleistet.\n\nAutomatisierte Überwachung und Alarmierung: Hierdurch werden verschiedene Parameter wie Ping-Status, Temperatur und Auslastung kontinuierlich überwacht. Bei Auffälligkeiten lösen sie sofort Alarme aus, damit Administratoren schnell reagieren können, um Probleme zu beheben und Ausfälle zu minimieren.\n\nLastausgleich und Failover-Mechanismen: In Speicherlösungen wie z. B. RAID werden durch einen Lastausgleich Daten gleichmäßig über mehrere Festplatten verteilt, während Failover-Mechanismen sicherstellen, dass der Zugriff auf die Daten auch im Falle eines Festplattenausfalls möglich ist.\n\nBeispielhafte weitere Maßnahmen, die erläutert werden könnten:\n– Anwendung von Microservices-Architektur\n– Redundante Internetanbindung\n– Georedundante Datenzentren\n– Automatisierte Backups und Wiederherstellung\n\nEs genügt drei Maßnahmen zu erläutern. Weitere Erläuterungen sind möglich.',
    answerStatus: 'confirmed',
    sourcePage: 11,
  },
  {
    id: 'ap2-si-t1-2024-sommer-q4-da',
    examId: 'ap2-si-t1-2024-sommer',
    questionNumber: 4,
    subPart: 'da',
    topic: 'RAID-Berechnung',
    scenario: SCENARIO,
    referenceText:
      'd) Die Speicherung der Geschäftsdaten soll auf einem NAS-System erfolgen. Es wird ein NAS mit einer Nettospeicherkapazität von 20 TiB benötigt. Über die Benutzeroberfläche des NAS können die RAID-Level 10, 5 oder 6 eingerichtet werden.',
    question:
      'da) Zum Aufbau des NAS-Systems stehen Festplatten mit einer Kapazität von 4 TiB zur Verfügung.\n\nBerechnen Sie für jeden der drei möglichen RAID-Level die erforderliche Anzahl an Festplatten. Der Rechenweg soll nachvollziehbar sein.\nRAID 10:\nRAID 5:\nRAID 6:',
    maxPoints: 6,
    modelSolution:
      'Generelle Festplattenanzahl bei einer gewünschten Nettospeicherkapazität von 20 TiB verteilt auf Festplatten mit 4 TiB: 20 TiB / 4 TiB = 5 Festplatten (ohne RAID).\n\nRAID 10: Durch vollständige Spiegelung (Mirroring) in RAID 1 entsteht hier ein doppelter Festplattenbedarf.\n5 Festplatten * 2 = 10 Festplatten\n\nRAID 5: Aufgrund einfacher Parität wird eine zusätzliche Festplatte benötigt.\n5 Festplatten + 1 = 6 Festplatten\n\nRAID 6: Aufgrund doppelter Paritäten werden zwei zusätzliche Festplatten benötigt.\n5 Festplatten + 2 = 7 Festplatten\n\nINFO:\nRAID 0: Durch das RAID-Level 0 wird keine Datenredundanz gewährleistet. Beim Ausfall einer Festplatte sind die gespeicherten Daten unbrauchbar. Vorteil des RAID-Levels ist die hohe Transferrate durch parallele Schreibzugriffe. Durch die fehlende Redundanz wird die Datensicherheit nicht erhöht.\nRAID 1: Durch das RAID-Level 1 wird eine volle Redundanz der Daten gewährleistet, da hier alle Daten gespiegelt abgespeichert werden. Der nutzbare Anteil der Speicherkapazität reduziert sich anteilsmäßig um 50 %. Die Nettokapazität ist also nur halb so groß wie beim RAID-Level 0. Allerdings kann hierdurch der Ausfall einer Festplatte verkraftet werden.\nRAID 10 (1+0): Durch die Kombination aus RAID-Level 1 und 0 entsteht RAID 10. Dieses kombiniert Striping (RAID 0) für Leistung mit Mirroring (RAID 1) für Redundanz, indem es Daten über mehrere Festplatten verteilt und sie gleichzeitig spiegelt.\nRAID 5: Durch das RAID-Level 5 werden Paritätsinformationen aufgeteilt auf die verwendeten Festplatten. Hierbei entsteht eine Datenredundanz. Die Lesegeschwindigkeit ist durch die Möglichkeit der parallelen Zugriffe sehr hoch. Die Schreibgeschwindigkeit ist leicht verringert durch die Berechnung der Paritätsinformationen. Im RAID-Level 5 müssen mindestens drei Festplatten verwendet werden, hierbei wäre die Nettokapazität um ca. 33 % verringert.\nRAID 6: Anders als bei RAID-Level 5, werden bei RAID 6 doppelte Paritätsinformationen aufgeteilt auf alle verwendeten Festplatten geschrieben. Hierdurch verringert sich die Nettokapazität gegenüber RAID-Level 5, jedoch kann bei RAID-Level 6 der Ausfall von bis zu zwei Festplatten ohne Datenverlust verkraftet werden.',
    answerStatus: 'confirmed',
    sourcePage: 11,
  },
  {
    id: 'ap2-si-t1-2024-sommer-q4-db',
    examId: 'ap2-si-t1-2024-sommer',
    questionNumber: 4,
    subPart: 'db',
    topic: 'RAID-Auswahl',
    scenario: SCENARIO,
    question: 'db) Nennen Sie für diesen Fall das RAID-Level mit der geringsten benötigten Anzahl an Festplatten.',
    maxPoints: 1,
    modelSolution:
      'RAID 5 (benötigt mit 6 Festplatten die geringste Anzahl an Festplatten im Vergleich zu RAID 10 mit 10 und RAID 6 mit 7 Festplatten).',
    answerStatus: 'confirmed',
    sourcePage: 12,
  },
]
