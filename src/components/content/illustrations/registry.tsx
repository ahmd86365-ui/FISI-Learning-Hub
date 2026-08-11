import type { ComponentType } from 'react'
import { OhmsLawTriangle } from './OhmsLawTriangle'
import { SeriesParallelCircuits } from './SeriesParallelCircuits'
import { ImageSizePipeline } from './ImageSizePipeline'
import { AudioPipeline } from './AudioPipeline'
import { WirtschaftssektorenFlow } from './WirtschaftssektorenFlow'
import { MarketFormsDiagram } from './MarketFormsDiagram'
import { BusinessCycleDiagram } from './BusinessCycleDiagram'
import { VollmachtenHierarchy } from './VollmachtenHierarchy'
import { LeitungssystemeDiagrams } from './LeitungssystemeDiagrams'
import { SozialversicherungOverview } from './SozialversicherungOverview'
import { TroubleshootingProcessFlow } from './TroubleshootingProcessFlow'
import { NetworkTopologyDiagram } from './NetworkTopologyDiagram'

/**
 * Registry of reusable visual illustrations, keyed by the string a Topic's
 * `IllustrationBlock.component` references. Add a lesson-specific diagram by
 * dropping a new component in this folder and registering it here — no
 * changes to `LessonContent` or any page are needed.
 */
export const illustrationRegistry: Record<string, ComponentType> = {
  'ohms-law-triangle': OhmsLawTriangle,
  'series-parallel-circuits': SeriesParallelCircuits,
  'image-size-pipeline': ImageSizePipeline,
  'audio-pipeline': AudioPipeline,
  'wirtschaftssektoren-flow': WirtschaftssektorenFlow,
  'market-forms-diagram': MarketFormsDiagram,
  'business-cycle-diagram': BusinessCycleDiagram,
  'vollmachten-hierarchy': VollmachtenHierarchy,
  'leitungssysteme-diagrams': LeitungssystemeDiagrams,
  'sozialversicherung-overview': SozialversicherungOverview,
  'troubleshooting-process-flow': TroubleshootingProcessFlow,
  'network-topology-diagram': NetworkTopologyDiagram,
}
