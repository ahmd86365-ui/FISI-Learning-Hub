import { SubjectPageTemplate } from './SubjectPageTemplate'
import { getSubjectBySlug } from '../data/subjects'
import { getModulesBySubject } from '../data/modules'

export default function It() {
  const subject = getSubjectBySlug('it')!
  return (
    <SubjectPageTemplate
      subject={subject}
      pageSubtitle="Fachinformatiker für Systemintegration"
      intro="Dein zentraler Lernbereich für Fachinformatiker für Systemintegration. Hier entstehen nach und nach die Inhalte zu den Themen deiner Ausbildung."
      modules={getModulesBySubject('it')}
    />
  )
}
