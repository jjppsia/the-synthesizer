import Key from '@/components/key'
import { selectKey } from '@/domain/keyboard'
import { MidiValue, notes } from '@/domain/note'
import styles from './keyboard.module.css'

export type KeyboardProps = {
  loading: boolean
  play: (note: MidiValue) => Promise<void>
  stop: (note: MidiValue) => Promise<void>
}

function Keyboard({ loading, play, stop }: KeyboardProps) {
  return (
    <div className={styles.keyboard}>
      {notes.map(({ midi, type, octave, pitchIndex }) => {
        const label = selectKey(octave, pitchIndex)
        return (
          <Key
            key={midi}
            type={type}
            label={label}
            disabled={loading}
            onMouseUp={() => stop(midi)}
            onMouseDown={() => play(midi)}
          />
        )
      })}
    </div>
  )
}

export default Keyboard
