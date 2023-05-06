import clsx from 'clsx'

import { NoteType } from '@/domain/note'
import { usePressObserver } from '@/hooks/use-press-observer'
import styles from './key.module.css'

type KeyProps = {
  type: NoteType
  label: string
  disabled?: boolean
  onMouseUp: () => void
  onMouseDown: () => void
}

function Key({ type, label, onMouseUp, onMouseDown, ...props }: KeyProps) {
  const pressed = usePressObserver({
    watchKey: label,
    onStartPress: onMouseDown,
    onFinishPress: onMouseUp,
  })

  return (
    <button
      type='button'
      className={clsx(
        styles.key,
        styles[type],
        pressed && styles['is-pressed']
      )}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      {...props}
    >
      {label}
    </button>
  )
}

export default Key
