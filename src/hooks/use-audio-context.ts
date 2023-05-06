import { useRef } from 'react'

import { accessContext } from '@/domain/audio'
import { Optional } from '@/types'

export const useAudioContext = (): Optional<TAudioContext> => {
  const audioContextRef = useRef(accessContext())

  return audioContextRef.current
}
