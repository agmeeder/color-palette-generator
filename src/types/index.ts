export interface Combination {
  palette1: string
  palette2: string
}

export interface Range {
  min: number
  max: number
}

export interface Color {
  h: number
  s: number
  l: number
  a: number
}

export interface Palette {
  name: string
  saturation: Range
  brightness: Range
  colors: Color[]
}

export interface Colors {
  combinations: Combination[]
  palettes: Palette[]
}
