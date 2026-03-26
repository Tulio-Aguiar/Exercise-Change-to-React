export type TagTipo = 'min' | 'pad' | 'exp' | 'opt'

export type BlocoItem = {
  tag: TagTipo
  texto: string
}

export type ModoData = {
  nome: string
  tempo: string
  descricao: string
  gatilho: string
  acento: string
}
export type TurnoData = {
  titulo: string
  subtitulo: string
  blocos: BlocoItem[]
  acento?: string
  variante?: 'folga' | 'travado'
}
export type SemanaData = {
  numero: string
  titulo: string
  objetivo: string
  topicos: string[]
}
export type MetricaData = {
  valor: string
  label: string
  acento: string
}
export type RegraData = {
  icone: string
  titulo: string
  texto: string
}
