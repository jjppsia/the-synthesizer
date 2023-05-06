import { InstrumentName } from 'soundfont-player'
import instruments from 'soundfont-player/names/musyngkite.json'

type InstrumentOption = {
  value: InstrumentName
  label: string
}

type InstrumentOptionsList = InstrumentOption[]
type InstrumentList = InstrumentName[]

const normalizeList = (list: InstrumentList): InstrumentOptionsList => {
  return list.map((instrument) => ({
    value: instrument,
    label: instrument.replace(/_/gi, ' '),
  }))
}

export const instrumentsOptions = normalizeList(instruments as InstrumentList)
