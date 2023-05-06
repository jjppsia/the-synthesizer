import { InstrumentName, Player } from 'soundfont-player'

import { Optional } from '@/types'
import { MidiValue } from './note'

export const DEFAULT_INSTRUMENT: InstrumentName = 'acoustic_grand_piano'
export type AudioNodesRegistry = Record<MidiValue, Optional<Player>>
