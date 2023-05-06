import { useRef, useState } from 'react'
import Soundfont, { InstrumentName, Player } from 'soundfont-player'

import { MidiValue } from '@/domain/note'
import { AudioNodesRegistry, DEFAULT_INSTRUMENT } from '@/domain/sound'
import { Optional } from '@/types'

type Settings = {
  AudioContext: TAudioContext
}

interface Adapted {
  loading: boolean
  current: Optional<InstrumentName>
  load(instrument?: InstrumentName): Promise<void>
  play(note: MidiValue): Promise<void>
  stop(note: MidiValue): Promise<void>
}

export const useSoundfont = ({ AudioContext }: Settings): Adapted => {
  const [current, setCurrent] = useState<Optional<InstrumentName>>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [player, setPlayer] = useState<Optional<Player>>(null)
  const audioRef = useRef(new AudioContext())

  let activeNodes: AudioNodesRegistry = {}

  const load = async (instrument: InstrumentName = DEFAULT_INSTRUMENT) => {
    setLoading(true)

    const player = await Soundfont.instrument(audioRef.current, instrument)

    setLoading(false)
    setCurrent(instrument)
    setPlayer(player)
  }

  const play = async (note: MidiValue) => {
    await resume()

    if (!player) {
      return
    }

    const node = player.play(note.toString())
    activeNodes = { ...activeNodes, [note]: node }
  }

  const stop = async (note: MidiValue) => {
    await resume()

    if (!activeNodes[note]) {
      return
    }

    activeNodes[note]?.stop()
    activeNodes = { ...activeNodes, [note]: null }
  }

  const resume = async () => {
    return audioRef.current.state === 'suspended'
      ? await audioRef.current.resume()
      : Promise.resolve()
  }

  return { loading, current, play, stop, load }
}
