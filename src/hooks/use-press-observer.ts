import { useEffect, useState } from 'react'

import { Key as KeyLabel } from '@/domain/keyboard'

type IsPressed = boolean
type EventCode = string
type CallbackFn = () => void

type Settings = {
  watchKey: KeyLabel
  onStartPress: CallbackFn
  onFinishPress: CallbackFn
}

const fromEventCode = (code: EventCode) => {
  const prefixRegex = /Key|Digit/gi
  return code.replace(prefixRegex, '')
}

const equal = (watchedKey: KeyLabel, eventCode: EventCode) => {
  return fromEventCode(eventCode).toUpperCase() === watchedKey.toUpperCase()
}

export const usePressObserver = ({
  watchKey,
  onStartPress,
  onFinishPress,
}: Settings) => {
  const [pressed, setPressed] = useState<IsPressed>(false)

  useEffect(() => {
    const handlePressStart = ({ code }: KeyboardEvent) => {
      if (pressed || !equal(watchKey, code)) {
        return
      }

      setPressed(true)
      onStartPress()
    }

    const handlePressFinish = ({ code }: KeyboardEvent) => {
      if (!pressed || !equal(watchKey, code)) {
        return
      }

      setPressed(false)
      onFinishPress()
    }

    document.addEventListener('keydown', handlePressStart)
    document.addEventListener('keyup', handlePressFinish)

    return () => {
      document.removeEventListener('keydown', handlePressStart)
      document.removeEventListener('keyup', handlePressFinish)
    }
  }, [watchKey, pressed, setPressed, onStartPress, onFinishPress])

  return pressed
}
