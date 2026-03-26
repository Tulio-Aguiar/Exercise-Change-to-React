// src/data/gradeData.ts

import type { BlocoItem, ModoData, TurnoData, SemanaData, MetricaData, RegraData } from '@/types'

// ─── Princípio Central ────────────────────────────────────────────────────────

export const principioTexto =
  'Você não avalia como está antes de começar. Você começa. O modo emerge da execução, não da intenção. A única pergunta relevante ao fim do dia: "Abri o editor e executei pelo menos um bloco?" Se sim, o dia conta.'

// ─── Regra de Entrada ─────────────────────────────────────────────────────────

export const entradaTexto =
  'O erro do planejamento anterior era exigir que você avaliasse seu próprio estado antes de começar. Com TEPT-C ativo, essa autoavaliação prévia consome a energia que seria usada no estudo, e frequentemente encerra a sessão antes dela começar.'

export const entradaGesto =
  '→ Gesto fixo de entrada: abrir o projeto no editor e alterar uma linha de código qualquer.'

// ─── Modos de Execução ────────────────────────────────────────────────────────

export const modos: ModoData[] = [
  {
    nome: 'MÍNIMO',
    tempo: '7 — 15 min',
    descricao:
      'Não aprende nada novo. Reabre código existente, relê um componente, corrige um detalhe, revisa uma tipagem já feita. O objetivo é manter contato com o domínio sem ativar resistência.',
    gatilho: 'Ativado automaticamente ao abrir o editor. Nunca decidido antes.',
    acento: '#ff6b6b',
  },
  {
    nome: 'PADRÃO',
    tempo: '25 — 40 min',
    descricao:
      'Avanço real no curso ou exercício aplicado. Uma unidade concreta. Nenhuma ambição de fechar módulos. O critério é presença qualitativa, não volume.',
    gatilho: 'Emerge quando o modo mínimo não encontra resistência após 10 min.',
    acento: '#e8ff47',
  },
  {
    nome: 'EXPANSÃO',
    tempo: '60 — 90 min',
    descricao:
      'Disponível apenas quando o sistema nervoso sinalizou estabilidade real. Projeto aplicado, refatoração profunda, construção com autonomia. Nunca é meta diária.',
    gatilho: 'Surge espontaneamente em dias bons. Jamais forçado.',
    acento: '#4dff91',
  },
]

// ─── Fase de Reentrada — 6 dias ───────────────────────────────────────────────

export const reentradaRodape =
  '// limite diário: 2 blocos padrão. Nenhum bloco expansão forçado. Resistência nos primeiros 2 dias é esperada e normal.'

export const diasReentrada: Array<{
  numero: string
  label: string
  blocos: BlocoItem[]
}> = [
  {
    numero: '1',
    label: 'dia 1',
    blocos: [
      { tag: 'pad', texto: 'Tarde: 1× padrão — fundamentos React' },
      { tag: 'min', texto: 'Noite: 1× mínimo — reler o que fez' },
    ],
  },
  {
    numero: '2',
    label: 'dia 2',
    blocos: [
      { tag: 'pad', texto: 'Tarde: 1× padrão — continuação' },
      { tag: 'min', texto: 'Noite: 1× mínimo' },
    ],
  },
  {
    numero: '3',
    label: 'dia 3',
    blocos: [
      { tag: 'pad', texto: 'Tarde: 1× padrão' },
      { tag: 'pad', texto: 'Noite: 1× padrão — TS básico' },
    ],
  },
  {
    numero: '4',
    label: 'dia 4',
    blocos: [
      { tag: 'pad', texto: 'Tarde: 1× padrão' },
      { tag: 'opt', texto: 'Noite: expansão? (se fluir)' },
    ],
  },
  {
    numero: '5',
    label: 'dia 5',
    blocos: [
      { tag: 'pad', texto: 'Tarde: 1× padrão' },
      { tag: 'min', texto: 'Noite: mínimo — revisão' },
    ],
  },
  {
    numero: '6',
    label: 'dia 6',
    blocos: [
      { tag: 'pad', texto: 'Tarde: 1× padrão' },
      { tag: 'pad', texto: 'Noite: 1× padrão — mini projeto' },
    ],
  },
]

// ─── Estrutura por Tipo de Dia ────────────────────────────────────────────────

export const turnos: TurnoData[] = [
  {
    titulo: 'Turno A',
    subtitulo: '06:30 – 14:00 · retorno com fadiga física leve',
    acento: '#47c4ff',
    blocos: [
      { tag: 'min', texto: 'Ao chegar: gesto de entrada — abrir projeto, alterar uma linha.' },
      { tag: 'pad', texto: 'Após descanso (15h–17h): 1 bloco padrão no curso React/TS.' },
      { tag: 'min', texto: 'Noite (20h–22h): 1 bloco mínimo — revisão leve ou ajuste de código.' },
      { tag: 'opt', texto: 'Se sistema estiver estável: 2º bloco padrão no lugar do mínimo.' },
    ],
  },
  {
    titulo: 'Turno B',
    subtitulo: '13:00 – 21:00 · janela cognitiva boa pela manhã',
    acento: '#47c4ff',
    blocos: [
      { tag: 'pad', texto: 'Manhã (9h–11h): 1 bloco padrão — aprendizado novo no curso.' },
      { tag: 'min', texto: 'Pré-trabalho (11h–12h): 1 bloco mínimo — revisão do que foi feito.' },
      { tag: 'opt', texto: 'Se manhã estável: 2º bloco padrão antes do trabalho.' },
    ],
  },
  {
    titulo: 'Dia de Folga',
    subtitulo: 'máximo de 3 blocos padrão · nunca ultrapassar',
    acento: '#4dff91',
    variante: 'folga',
    blocos: [
      { tag: 'pad', texto: 'Tarde (14h–16h): 1 bloco padrão — curso.' },
      { tag: 'pad', texto: 'Tarde (16h–18h): 1 bloco padrão — prática aplicada.' },
      { tag: 'min', texto: 'Noite: 1 bloco mínimo — revisão ou leitura de código.' },
      { tag: 'opt', texto: 'Se sistema estável: 3º bloco padrão no lugar do mínimo.' },
    ],
  },
  {
    titulo: 'Dia travado',
    subtitulo: 'quando nada flui — protocolo de sobrevivência',
    variante: 'travado',
    blocos: [{ tag: 'min', texto: 'Abrir o editor. Alterar uma linha. Fechar.' }],
  },
]

// ─── Conteúdo por Semana ──────────────────────────────────────────────────────

export const semanas: SemanaData[] = [
  {
    numero: 'semana 01 · 01–06 abr',
    titulo: 'Fundamentos — reentrada',
    objetivo: 'objetivo: reduzir fricção, não acumular volume',
    topicos: [
      'JSX — estrutura de componente funcional',
      'Props básicas — passagem e consumo',
      'Tipagem de props com TypeScript (interface / type)',
      'Estrutura de projeto React + TS do zero',
      'Renderização condicional',
    ],
  },
  {
    numero: 'semana 02 · 07–13 abr',
    titulo: 'Estado e efeitos',
    objetivo: 'objetivo: hooks fundamentais com tipagem correta',
    topicos: [
      'useState com tipagem explícita',
      'useEffect — dependências e cleanup',
      'Eventos tipados (onChange, onClick)',
      'Listas com map e tipagem de array',
      'Formulário controlado simples',
    ],
  },
  {
    numero: 'semana 03 · 14–20 abr',
    titulo: 'Composição e organização',
    objetivo: 'objetivo: componentes reutilizáveis com clareza',
    topicos: [
      'Composição de componentes',
      'Props children tipadas',
      'Extração de lógica em funções tipadas',
      'Mini projeto: to-do list completo',
      'Organização de pastas e arquivos',
    ],
  },
  {
    numero: 'semana 04 · 21–30 abr',
    titulo: 'Consolidação e refino',
    objetivo: 'objetivo: clareza de código, não avanço de conteúdo',
    topicos: [
      'Refatorar os projetos das semanas anteriores',
      'Melhorar tipagem — generics básicos',
      'useReducer como alternativa ao useState',
      'Revisar o que travou, reescrever com calma',
      'Nenhuma introdução de nova tecnologia',
    ],
  },
]

// ─── Métricas ─────────────────────────────────────────────────────────────────

export const metricas: MetricaData[] = [
  {
    valor: '1+1',
    label:
      'bloco mínimo obrigatório por dia.\nMeta base: +1 bloco padrão.\nQualquer combinação acima disso é bônus.',
    acento: '#e8ff47',
  },
  {
    valor: '3',
    label:
      'blocos padrão como teto diário.\nUltrapassar não é produtividade.\nÉ consumir o dia seguinte.',
    acento: '#47c4ff',
  },
  {
    valor: '0',
    label:
      'novas tecnologias em abril.\nReact + TypeScript apenas.\nNext, Nest, banco de dados: maio.',
    acento: '#4dff91',
  },
]

// ─── Regras de Operação ───────────────────────────────────────────────────────

export const regras: RegraData[] = [
  {
    icone: '◈',
    titulo: 'Sem compensação',
    texto:
      'Dia travado não gera débito. O sistema não tem contador de dívida. Cada dia começa zerado.',
  },
  {
    icone: '◈',
    titulo: 'Tarde e noite como janelas prioritárias',
    texto:
      'Seu foco cognitivo opera melhor após o meio-dia. A grade respeita isso. Nenhum bloco de alta carga pela manhã nos dias de turno A.',
  },
  {
    icone: '◈',
    titulo: 'Sem medição por horas',
    texto:
      'A unidade de sucesso é o bloco executado, não o tempo sentado. 15 minutos de presença real valem mais que 90 minutos de tela com mente ausente.',
  },
  {
    icone: '◈',
    titulo: 'Abril reconstrói capacidade',
    texto:
      'Maio acelera. Não antes. A tentação de pular etapas em dias bons é real — e é exatamente o padrão que quebrou os planos anteriores.',
  },
]

// ─── Rodapé ───────────────────────────────────────────────────────────────────

export const rodapeEsquerda = 'react + typescript · abril 2026 · konstanz'
export const rodapeDireita = 'próxima tecnologia: next.js · mai/2026'
