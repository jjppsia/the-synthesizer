export type NoteType = 'natural' | 'flat' | 'sharp'
export type NotePitch = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
export type OctaveIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type MidiValue = number
export type PitchIndex = number

export type Note = {
  type: NoteType
  midi: MidiValue
  pitch: NotePitch
  pitchIndex: PitchIndex
  octave: OctaveIndex
}

const C1_MIDI_NUMBER = 24
const C4_MIDI_NUMBER = 60
const B5_MIDI_NUMBER = 83

export const LOWER_NOTE = C4_MIDI_NUMBER
export const HIGHER_NOTE = B5_MIDI_NUMBER
export const SEMITONES_IN_OCTAVE = 12

export const NATURAL_PITCH_INDICES: PitchIndex[] = [0, 2, 4, 5, 7, 9, 11]
export const PITCHES_REGISTRY: Record<PitchIndex, NotePitch> = {
  0: 'C',
  1: 'C',
  2: 'D',
  3: 'D',
  4: 'E',
  5: 'F',
  6: 'F',
  7: 'G',
  8: 'G',
  9: 'A',
  10: 'A',
  11: 'B',
}

export const fromMidi = (midi: MidiValue): Note => {
  const pianoRange = midi - C1_MIDI_NUMBER
  const octave = (Math.floor(pianoRange / SEMITONES_IN_OCTAVE) +
    1) as OctaveIndex

  const pitchIndex = pianoRange % SEMITONES_IN_OCTAVE
  const pitch = PITCHES_REGISTRY[pitchIndex]

  const isSharp = !NATURAL_PITCH_INDICES.includes(pitchIndex)
  const type = isSharp ? 'sharp' : 'natural'

  return { type, midi, pitch, pitchIndex, octave }
}

type NotesGeneratorSettings = {
  fromNote?: MidiValue
  toNote?: MidiValue
}

export const generateNotes = ({
  fromNote = LOWER_NOTE,
  toNote = HIGHER_NOTE,
}: NotesGeneratorSettings = {}): Note[] => {
  return Array(toNote - fromNote + 1)
    .fill(0)
    .map((_, index) => fromMidi(index + fromNote))
}

export const notes = generateNotes()
