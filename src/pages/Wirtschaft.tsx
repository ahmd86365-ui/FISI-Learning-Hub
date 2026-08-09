import { SubjectPageTemplate } from './SubjectPageTemplate'
import { getSubjectBySlug } from '../data/subjects'
import { getModulesBySubject } from '../data/modules'

export default function Wirtschaft() {
  const subject = getSubjectBySlug('wirtschaft')!
  return (
    <SubjectPageTemplate
      subject={subject}
      pageSubtitle="Wirtschafts- und Sozialkunde"
      intro="Wichtige Themen rund um Wirtschaft, Gesellschaft und Ausbildung – verständlich aufbereitet für deinen Berufsalltag."
      modules={getModulesBySubject('wirtschaft')}
    />
  )
}
