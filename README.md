# Code and Safety — Contexto Técnico

## O Projeto

Conversão de um arquivo HTML estático (`grade_react_ts_abril2026.html`) em uma aplicação React + TypeScript funcional. O arquivo original é uma grade de estudos com design visual próprio — tema escuro, tipografia Syne + DM Mono, paleta com acentos em amarelo-limão, azul e verde.

O projeto serve dois propósitos simultâneos: ser uma ferramenta real de uso diário e ser o exercício técnico central de abril 2026 para consolidação de React + TypeScript.

---

## Repositório

- **Template de origem:** `https://github.com/Tulio-Aguiar/ta-frontend-template-react-ts`
- **Projeto:** `code-and-safety`
- **Localização local:** `C:\Users\tulio.aguiar\Documents\projetos\code-and-safety`

---

## Stack

- React 19
- TypeScript 5.9 (strict mode)
- Vite 7
- Tailwind CSS v4
- ESLint + Prettier

---

## Convenções do Projeto (project.mdc)

### TypeScript

- Sempre usar `import type` para importações de tipo puro
- Nunca usar `any` — usar `unknown` quando o tipo for incerto
- Preferir `type` sobre `interface` para definição de tipos
- Nomear tipos com PascalCase

### React

- Sempre usar arrow functions para componentes
- Nomear componentes com PascalCase
- Nomear arquivos de componentes com PascalCase (`Button.tsx`)
- Props sempre tipadas com `type`, nunca inline
- Nunca usar `React.FC` — tipar props diretamente

### Tailwind v4

- Usar apenas sintaxe Tailwind v4
- Não usar `tailwind.config.js` — configurações via `@theme` no CSS
- Diretiva: `@import "tailwindcss"`, nunca `@tailwind base`

### Imports e Commits

- Sempre path alias `@/` para imports internos — nunca `../`
- Conventional Commits: `feat`, `fix`, `chore`, `refactor`, `docs`, `style`, `test`

---

## Estrutura Visual do HTML Original

O arquivo HTML tem sete seções distintas que mapeiam diretamente para componentes:

### 1. Header

- Título "React+TS" com tipografia Syne 800 42px
- Meta lateral (stack, turno, foco cognitivo)
- Subtítulo em DM Mono

### 2. Princípio Central

- Card com borda esquerda em amarelo-limão
- Texto em DM Mono, cor dimmed
- Label em uppercase com letter-spacing

### 3. Modos de Execução — grid 3 colunas

Três cards com estrutura idêntica, diferenciados por cor de acento:

- **MÍNIMO** — acento `#ff6b6b` (vermelho)
- **PADRÃO** — acento `#e8ff47` (amarelo-limão)
- **EXPANSÃO** — acento `#4dff91` (verde)

Cada card tem: nome, tempo, descrição, gatilho de ativação.

### 4. Regra de Entrada

- Card com borda completa em amarelo-limão
- Texto explicativo + bloco de gesto fixo destacado

### 5. Fase de Reentrada — 6 dias de folga

- Grid de 6 colunas, um box por dia
- Cada box tem: número do dia, label, lista de blocos com tags coloridas

### 6. Estrutura por Tipo de Dia — grid 2 colunas

Quatro cards:

- **Turno A** (06:30–14:00) — acento azul
- **Turno B** (13:00–21:00) — acento azul
- **Dia de Folga** — acento verde, borda top destacada
- **Dia Travado** — fundo escuro, borda tracejada

Cada card tem lista de blocos com tags coloridas (min, pad, exp, opt).

### 7. Conteúdo Técnico por Semana — grid 2 colunas

Quatro cards, um por semana de abril:

- Semana 01: Fundamentos — reentrada
- Semana 02: Estado e efeitos
- Semana 03: Composição e organização
- Semana 04: Consolidação e refino

Cada card tem: número da semana, título, objetivo, lista de tópicos.

### 8. Métricas — grid 3 colunas

Três cards com valor numérico grande e label descritivo:

- `1+1` em amarelo-limão
- `3` em azul
- `0` em verde

### 9. Regras de Operação — grid 2 colunas

Quatro cards com ícone + título + texto.

### 10. Rodapé

- Duas colunas com texto em DM Mono dimmed

---

## Paleta de Cores (CSS Variables do HTML original)

```css
--bg: #0d0d0d --surface: #141414 --surface2: #1c1c1c --border: #2a2a2a --accent: #e8ff47
  /* amarelo-limão — PADRÃO */ --accent2: #47c4ff /* azul — Turno A/B */ --accent3: #ff6b6b
  /* vermelho — MÍNIMO */ --text: #e8e8e0 --text-dim: #7a7a72 --text-dimmer: #3d3d38
  --green: #4dff91 /* verde — EXPANSÃO / Folga */ --orange: #ff9f43;
```

---

## Componentes Identificados

### Candidatos a componentes isolados:

| Componente    | Props principais                               |
| ------------- | ---------------------------------------------- |
| `ModoCard`    | nome, tempo, descricao, gatilho, acento (cor)  |
| `BlocoItem`   | tag (min/pad/exp/opt), texto                   |
| `DiaBox`      | numero, label, blocos: BlocoItem[]             |
| `TurnoCard`   | titulo, subtitulo, blocos: BlocoItem[], acento |
| `SemanaCard`  | numero, titulo, objetivo, topicos: string[]    |
| `MetricaCard` | valor, label, acento                           |
| `RegraCard`   | icone, titulo, texto                           |
| `Principio`   | texto                                          |
| `EntradaCard` | texto, gesto                                   |
| `Header`      | — (composição interna)                         |
| `Footer`      | — (composição interna)                         |

### Tags de bloco:

```typescript
type TagTipo = 'min' | 'pad' | 'exp' | 'opt'
```

---

## Tipos a Definir (types.ts)

Ponto de partida sugerido antes de qualquer JSX:

```typescript
type TagTipo = 'min' | 'pad' | 'exp' | 'opt'

type BlocoItem = {
  tag: TagTipo
  texto: string
}

type ModoData = {
  nome: string
  tempo: string
  descricao: string
  gatilho: string
  acento: string
}

type TurnoData = {
  titulo: string
  subtitulo: string
  blocos: BlocoItem[]
  acento?: string
  variante?: 'folga' | 'travado'
}

type SemanaData = {
  numero: string
  titulo: string
  objetivo: string
  topicos: string[]
}

type MetricaData = {
  valor: string
  label: string
  acento: string
}

type RegraData = {
  icone: string
  titulo: string
  texto: string
}
```

---

## Estrutura de Pastas Sugerida

```
src/
├── components/
│   ├── Header/
│   │   └── Header.tsx
│   ├── ModoCard/
│   │   └── ModoCard.tsx
│   ├── BlocoItem/
│   │   └── BlocoItem.tsx
│   ├── DiaBox/
│   │   └── DiaBox.tsx
│   ├── TurnoCard/
│   │   └── TurnoCard.tsx
│   ├── SemanaCard/
│   │   └── SemanaCard.tsx
│   ├── MetricaCard/
│   │   └── MetricaCard.tsx
│   ├── RegraCard/
│   │   └── RegraCard.tsx
│   ├── Principio/
│   │   └── Principio.tsx
│   └── EntradaCard/
│       └── EntradaCard.tsx
├── data/
│   └── gradeData.ts        ← todos os dados estáticos da grade
├── types/
│   └── index.ts            ← todos os tipos definidos acima
├── App.tsx
└── main.tsx
```

---

## Ordem de Construção Recomendada

1. Criar `src/types/index.ts` com todos os tipos
2. Criar `src/data/gradeData.ts` com os dados estáticos extraídos do HTML
3. Construir `BlocoItem` — menor unidade, sem dependências
4. Construir `ModoCard` — usa apenas props primitivas
5. Construir `MetricaCard` — idem
6. Construir `RegraCard` — idem
7. Construir `SemanaCard` — usa array de strings
8. Construir `TurnoCard` — usa `BlocoItem[]`
9. Construir `DiaBox` — usa `BlocoItem[]`
10. Construir `Header` e `Footer`
11. Compor tudo em `App.tsx`

---

## Arquivo HTML de Referência

O arquivo `grade_react_ts_abril2026.html` deve estar na raiz do projeto como referência visual durante o desenvolvimento. Cada componente deve reproduzir fielmente a seção correspondente do HTML original em termos de layout, cores e tipografia.

---

## Próximo Passo Imediato

Abrir o Cursor no projeto `code-and-safety` e começar por:

```
src/types/index.ts
```

Definir todos os tipos antes de qualquer componente.
