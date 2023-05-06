/// <reference types="vite/client" />

type TAudioContext = typeof AudioContext
type TSoundfont = typeof Soundfont

interface Window extends Window {
  webkitAudioContext: TAudioContext
}
