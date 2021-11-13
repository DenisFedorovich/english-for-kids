export interface Statistics {
  category: string
  clicks: number
  correct: number
  percents: number
  translation: string
  word: string
  wrong: number
}

export interface CategoryImagesI {
  [key: string]: number
}
export interface CategoryAudioI {
  [key: string]: number
}
