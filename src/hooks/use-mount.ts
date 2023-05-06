import { EffectCallback, useEffect } from 'react'

type Effect = (...args: unknown[]) => void

const useEffectOnce = (fn: EffectCallback) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fn, [])
}

export const useMount = (fn: Effect) => {
  useEffectOnce(() => {
    fn()
  })
}
