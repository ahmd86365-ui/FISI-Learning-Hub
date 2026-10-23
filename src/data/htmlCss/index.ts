import { Globe } from 'lucide-react'
import type { Module } from '../../types/content'
import { htmlCss01Topic } from './lesson01Grundlagen'
import { htmlCss02Topic } from './lesson02AttributeFormulare'
import { htmlCss03Topic } from './lesson03TextelementeListen'
import { htmlCss04Topic } from './lesson04LinksNavigation'
import { htmlCss05Topic } from './lesson05Html5Semantik'
import { htmlCss06Topic } from './lesson06BlockInline'
import { htmlCss07Topic } from './lesson07CssSyntax'
import { htmlCss08Topic } from './lesson08CssSelektoren'
import { htmlCss09Topic } from './lesson09Kombinatoren'
import { htmlCss10Topic } from './lesson10BoxModell'
import { htmlCss11Topic } from './lesson11Positionierung'
import { htmlCss12Topic } from './lesson12HintergruendeFarben'
import { htmlCss13Topic } from './lesson13KomponentenCards'
import { htmlCss14Topic } from './lesson14FlexboxGrundlagen'
import { htmlCss15Topic } from './lesson15FlexboxAdvanced'
import { htmlCss16Topic } from './lesson16ResponsiveDesign'
import { htmlCss17Topic } from './lesson17MediaQueries'
import { htmlCss18Topic } from './lesson188PointGrid'
import { htmlCss19Topic } from './lesson19Klausurvorbereitung'

export const htmlCssTopics = [
  htmlCss01Topic,
  htmlCss02Topic,
  htmlCss03Topic,
  htmlCss04Topic,
  htmlCss05Topic,
  htmlCss06Topic,
  htmlCss07Topic,
  htmlCss08Topic,
  htmlCss09Topic,
  htmlCss10Topic,
  htmlCss11Topic,
  htmlCss12Topic,
  htmlCss13Topic,
  htmlCss14Topic,
  htmlCss15Topic,
  htmlCss16Topic,
  htmlCss17Topic,
  htmlCss18Topic,
  htmlCss19Topic
]

export const htmlCssModule: Module = {
  id: 'mod-html-css',
  slug: 'html-css',
  subjectSlug: 'it',
  title: 'HTML & CSS',
  description: 'Grundlagen des Webs: HTML5-Semantik, moderne CSS-Selektoren, Box-Modell, Flexbox, Responsive Design und Klausurvorbereitung.',
  icon: Globe,
  order: 5,
  topics: htmlCssTopics,
}
