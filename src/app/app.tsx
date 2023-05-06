import NoAudioMessage from '@/components/no-audio-message'
import Playground from '@/components/playground/playground'
import { useAudioContext } from '@/hooks/use-audio-context'
import styles from './app.module.css'

function App() {
  const AudioContext = useAudioContext()

  return (
    <div className={styles.app}>
      <main className={styles.content}>
        {AudioContext ? <Playground /> : <NoAudioMessage />}
      </main>
    </div>
  )
}

export default App
