import { InstrumentName } from 'soundfont-player'

import { useInstrument } from '@/contexts/instrument-context'
import { instrumentsOptions } from './instrument-options'
import styles from './instrument-selector.module.css'

function InstrumentSelector() {
  const { instrument, setInstrument } = useInstrument()

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    return setInstrument(e.target.value as InstrumentName)
  }

  return (
    <select
      className={styles.instruments}
      onChange={onChange}
      value={instrument}
    >
      {instrumentsOptions.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  )
}

export default InstrumentSelector
