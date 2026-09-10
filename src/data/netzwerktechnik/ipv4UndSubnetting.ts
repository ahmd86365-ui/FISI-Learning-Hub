import type { Topic } from '../../types/content'

const option = (id: string, text: string) => ({ id, text })

export const adressierungTopic: Topic = {
  id: 'topic-netzwerktechnik-adressierung', slug: 'mac-und-ipv4-adressierung', moduleSlug: 'netzwerktechnik',
  title: 'MAC- und IPv4-Adressierung', shortIntro: 'Hardwareadressen, IPv4-Aufbau, private Netze, Subnetzmasken und CIDR.', order: 5,
  keyPoints: ['MAC-Adressen adressieren Schnittstellen auf Schicht 2.', 'IPv4-Adressen bestehen aus 32 Bit.', 'Die Präfixlänge trennt Netz- und Hostanteil.'],
  exercises: [
    { id: 'ex-netz-05-01', topicSlug: 'mac-und-ipv4-adressierung', type: 'single-choice', difficulty: 'easy', question: 'Wie lang ist eine MAC-Adresse?', options: [option('a', '32 Bit'), option('b', '48 Bit'), option('c', '64 Bit'), option('d', '128 Bit')], correctAnswer: 'b' },
    { id: 'ex-netz-05-02', topicSlug: 'mac-und-ipv4-adressierung', type: 'calculation', difficulty: 'medium', question: 'Wandle 11000000.10101000.00000000.00000011 in Dezimalschreibweise um.', correctAnswer: '192.168.0.3', explanation: 'Die vier Oktette ergeben 192, 168, 0 und 3.' },
    { id: 'ex-netz-05-03', topicSlug: 'mac-und-ipv4-adressierung', type: 'multiple-choice', difficulty: 'medium', question: 'Welche Bereiche sind private IPv4-Adressräume?', options: [option('a', '10.0.0.0/8'), option('b', '172.16.0.0/12'), option('c', '192.168.0.0/16'), option('d', '8.8.8.0/24')], correctAnswer: ['a', 'b', 'c'] },
    { id: 'ex-netz-05-04', topicSlug: 'mac-und-ipv4-adressierung', type: 'single-choice', difficulty: 'medium', question: 'Welche Subnetzmaske gehört zu /27?', options: [option('a', '255.255.255.0'), option('b', '255.255.255.224'), option('c', '255.255.255.240'), option('d', '255.255.0.0')], correctAnswer: 'b' },
  ],
  content: [
    { type: 'heading', level: 2, text: 'MAC-Adresse' },
    { type: 'paragraph', text: 'Eine Netzwerkschnittstelle besitzt eine 48 Bit lange MAC-Adresse. Sie wird meist als zwölf Hexadezimalstellen in sechs Bytes geschrieben, zum Beispiel 60:57:18:E6:49:03. Der vordere Teil kennzeichnet den Hersteller, der hintere Teil wird vom Hersteller für die Schnittstelle vergeben.' },
    { type: 'heading', level: 2, text: 'IPv4-Adresse' },
    { type: 'paragraph', text: 'IPv4 verwendet 32 Bit, gegliedert in vier Oktette. Jedes Oktett hat acht Stellen mit den Wertigkeiten 128, 64, 32, 16, 8, 4, 2 und 1. IP-Adressen dienen der logischen Adressierung über Netzgrenzen hinweg.' },
    { type: 'table', headers: ['Bereich', 'CIDR', 'Verwendung'], rows: [['10.0.0.0–10.255.255.255', '10.0.0.0/8', 'privat'], ['172.16.0.0–172.31.255.255', '172.16.0.0/12', 'privat'], ['192.168.0.0–192.168.255.255', '192.168.0.0/16', 'privat'], ['127.0.0.0/8', '127.0.0.0/8', 'Loopback'], ['169.254.0.0/16', '169.254.0.0/16', 'Link-local/APIPA']] },
    { type: 'heading', level: 2, text: 'Subnetzmaske und CIDR' },
    { type: 'paragraph', text: 'Die Subnetzmaske trennt Netz- und Hostanteil. In der CIDR-Notation gibt das Suffix die Anzahl der gesetzten Netzbits an: /24 entspricht 255.255.255.0, /27 entspricht 255.255.255.224. Geräte im selben Subnetz teilen denselben Netzanteil.' },
    { type: 'warning', text: 'Netzadresse und Broadcastadresse sind in einem gewöhnlichen IPv4-Subnetz keine Hostadressen. Für die nutzbaren Hosts werden sie deshalb abgezogen.' },
  ],
}

export const subnettingTopic: Topic = {
  id: 'topic-netzwerktechnik-subnetting', slug: 'subnetting-und-cidr', moduleSlug: 'netzwerktechnik',
  title: 'Subnetting, VLSM und Supernetting', shortIntro: 'Subnetze dimensionieren, Netz- und Broadcastadressen bestimmen und Netze zusammenfassen.', order: 6,
  exercises: [
    { id: 'ex-netz-06-01', topicSlug: 'subnetting-und-cidr', type: 'technical-problem', difficulty: 'medium', question: 'Bestimme für 10.10.70.120/27 Subnetzmaske, Netzadresse, Broadcast und nutzbaren Hostbereich.', correctAnswer: '255.255.255.224; 10.10.70.96; 10.10.70.127; 10.10.70.97-10.10.70.126', explanation: '5 Hostbits ergeben eine Blockgröße von 32. Der Block mit 120 beginnt bei 96 und endet bei 127.' },
    { id: 'ex-netz-06-02', topicSlug: 'subnetting-und-cidr', type: 'technical-problem', difficulty: 'hard', question: 'Bestimme für 10.10.140.30/18 Subnetzmaske, Netzadresse und Broadcast.', correctAnswer: '255.255.192.0; 10.10.128.0; 10.10.191.255', explanation: 'Im dritten Oktett beträgt die Blockgröße 64. Die 140 liegt im Block 128 bis 191.' },
    { id: 'ex-netz-06-03', topicSlug: 'subnetting-und-cidr', type: 'single-choice', difficulty: 'medium', question: 'Wie viele nutzbare Hostadressen bietet ein gewöhnliches /26-Subnetz?', options: [option('a', '30'), option('b', '62'), option('c', '64'), option('d', '126')], correctAnswer: 'b', explanation: '32 − 26 = 6 Hostbits: 2^6 = 64 Adressen, abzüglich Netz- und Broadcastadresse bleiben 62.' },
    { id: 'ex-netz-06-04', topicSlug: 'subnetting-und-cidr', type: 'text', difficulty: 'hard', question: 'Warum weist man bei VLSM zuerst das größte benötigte Subnetz zu?', explanation: 'Damit große zusammenhängende Adressblöcke nicht durch kleinere Vergaben zerschnitten werden. Danach können die verbleibenden Bereiche passend für kleinere Netze aufgeteilt werden.' },
  ],
  content: [
    { type: 'paragraph', text: 'Subnetting teilt einen Adressbereich in kleinere Broadcastdomänen. Dazu werden Bits aus dem Hostanteil als zusätzliche Netzbits verwendet. VLSM erlaubt unterschiedlich große Präfixe; Supernetting fasst benachbarte Netze unter einem gemeinsamen Präfix zusammen.' },
    { type: 'heading', level: 2, text: 'Rechenweg' },
    { type: 'list', style: 'numbered', items: ['Hostbits berechnen: 32 minus Präfixlänge.', 'Interessantes Oktett bestimmen und Blockgröße berechnen: 2 hoch Anzahl der dort verbleibenden Hostbits.', 'Subnetzmaske bilden: im interessanten Oktett 256 minus Blockgröße.', 'Netzadresse als Untergrenze des Blocks bestimmen.', 'Broadcast als Netzadresse plus Blockgröße minus 1 bestimmen.', 'Nutzbaren Bereich zwischen Netz- und Broadcastadresse angeben.'] },
    { type: 'example', title: '10.10.70.120/27', text: '5 Hostbits → Blockgröße 32 → Maske 255.255.255.224. Die 120 liegt im Block 96–127. Netzadresse: 10.10.70.96, Broadcast: 10.10.70.127, Hosts: .97 bis .126.' },
    { type: 'heading', level: 2, text: 'Hosts dimensionieren' },
    { type: 'paragraph', text: 'Für ein klassisches Host-Subnetz gilt: nutzbare Hosts = 2^h − 2. Das kleinste Präfix wird so gewählt, dass die Zahl der nutzbaren Adressen mindestens dem Bedarf entspricht. Bei VLSM werden die Teilnetze absteigend nach Größe vergeben.' },
    { type: 'heading', level: 2, text: 'Supernetting' },
    { type: 'paragraph', text: 'Bei der Routenaggregation werden zusammenhängende, korrekt ausgerichtete Netze durch ein kürzeres gemeinsames Präfix dargestellt. Entscheidend sind die von links übereinstimmenden Bits. Das reduziert Routingtabellen, darf aber keine nicht zugehörigen Bereiche einschließen.' },
    { type: 'exam-tip', text: 'Schreibe in Prüfungen immer Präfix, Maske, Netzadresse, Broadcast und Hostbereich hin. So bleibt der Rechenweg nachvollziehbar.' },
  ],
}
