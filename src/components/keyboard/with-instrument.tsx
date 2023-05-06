import { useEffect } from 'react'

import { useInstrument } from '@/contexts/instrument-context'
import { useAudioContext } from '@/hooks/use-audio-context'
import { useSoundfont } from '@/hooks/use-soundfont'
import Keyboard from './keyboard'

function KeyboardWithInstrument() {
  const AudioContext = useAudioContext()!
  const { instrument } = useInstrument()
  const { loading, play, stop, load, current } = useSoundfont({ AudioContext })

  useEffect(() => {
    if (!loading && instrument !== current) {
      load(instrument)
    }
  }, [load, loading, current, instrument])

  return <Keyboard loading={loading} play={play} stop={stop} />
}

export default KeyboardWithInstrument
