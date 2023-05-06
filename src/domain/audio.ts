import { Optional } from '@/types'

export const accessContext = (): Optional<TAudioContext> => {
  return window.AudioContext || window.webkitAudioContext || null
}
