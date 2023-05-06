import { useState } from 'react'

import { InstrumentContext } from '@/contexts/instrument-context'
import { DEFAULT_INSTRUMENT } from '@/domain/sound'

function InstrumentProvider({ children }: { children: React.ReactNode }) {
  const [instrument, setInstrument] = useState(DEFAULT_INSTRUMENT)

  return (
    <InstrumentContext.Provider value={{ instrument, setInstrument }}>
      {children}
    </InstrumentContext.Provider>
  )
}

export default InstrumentProvider
