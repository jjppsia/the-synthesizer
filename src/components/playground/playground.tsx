import InstrumentSelector from '@/components/instrument-selector'
import KeyboardWithInstrument from '@/components/keyboard/with-instrument'
import InstrumentProvider from '@/providers/instrument-provider'

function Playground() {
  return (
    <InstrumentProvider>
      <div>
        <KeyboardWithInstrument />
        <InstrumentSelector />
      </div>
    </InstrumentProvider>
  )
}

export default Playground
