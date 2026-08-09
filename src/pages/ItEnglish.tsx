import { SubjectPageTemplate } from './SubjectPageTemplate'
import { getSubjectBySlug } from '../data/subjects'
import { getModulesBySubject } from '../data/modules'

export default function ItEnglish() {
  const subject = getSubjectBySlug('english')!
  return (
    <SubjectPageTemplate
      subject={subject}
      pageSubtitle="Technical English for IT professionals"
      intro="Technisches Englisch für die IT-Praxis – Fachvokabular und Sprachkompetenz für deinen internationalen Arbeitsalltag."
      modules={getModulesBySubject('english')}
    />
  )
}
