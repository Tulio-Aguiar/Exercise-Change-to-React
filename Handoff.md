@C:/Users/tulio.aguiar/Documents/projetos/\_aruanda/session/CLAUDE.md

# Regras do Projeto

## Stack

- React 19
- TypeScript 5.9 (strict mode)
- Vite 7
- Tailwind CSS v4
- ESLint + Prettier

## TypeScript

- Sempre usar `import type` para importações de tipo puro
- Nunca usar `any` — usar `unknown` quando o tipo for incerto
- Preferir `type` sobre `interface` para definição de tipos
- Nomear tipos com PascalCase

## React

- Sempre usar arrow functions para componentes
- Nomear componentes com PascalCase
- Nomear arquivos de componentes com PascalCase (ex: `Button.tsx`)
- Props sempre tipadas com `type`, nunca inline
- Nunca usar `React.FC` — tipar props diretamente

## Tailwind v4

- Usar apenas sintaxe Tailwind v4
- Não usar `tailwind.config.js` — configurações vão no CSS via `@theme`
- A diretiva de importação é `@import "tailwindcss"`, nunca `@tailwind base`

## Imports

- Usar sempre path alias `@/` para imports internos
- Nunca usar caminhos relativos com `../`

## Commits

- Seguir Conventional Commits: feat, fix, chore, refactor, docs, style, test

## Contexto do Projeto

- Projeto: grade de estudos React + TypeScript — Abril 2026
- Objetivo: exercício de conversão de HTML estático para componentes React tipados
- Arquivo de referência: grade_react_ts_abril2026.html (na raiz do projeto)
- Componentes planejados: ModoCard, BlocoItem, SemanaCard, TurnoCard, MetricaCard

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

# Handoff — Exercise Change to React

Documento de continuidade gerado em 26/03/2026.
Resumo do que foi construído e instruções para a próxima sessão.

---

## O Que Foi Construído

### Template Code-And-Safety

Repositório: `https://github.com/Tulio-Aguiar/Code-And-Safety`
Status: **template ativo no GitHub** (configurado como Template Repository)

Stack completa e verificada:

- React 19 · TypeScript 5.9 (strict) · Vite 7 · Tailwind CSS v4
- ESLint 9 (flat config) + Prettier 3 integrados sem conflito
- Husky 9 + lint-staged — pré-commit bloqueia código fora do padrão
- Path alias `@/` ativo no Vite e no TypeScript
- `tsc --noEmit`, `eslint` e `prettier --check` passando limpos

### Projeto Exercise-Change-to-React

Repositório: `https://github.com/Tulio-Aguiar/Exercise-Change-to-React`
Localização local: `C:\Users\tulio.aguiar\Documents\projetos\Exercise Change to React`
Origem: clonado do template `Code-And-Safety`

---

## Estrutura de Pastas (src/)

```
src/
├── assets/           # Arquivos estáticos importados pelo código
├── components/
│   ├── AppProviders/ # Composição de todos os Providers
│   └── ui/           # Design system — componentes primitivos sem lógica de negócio
├── contexts/         # Estado compartilhado entre árvores (Context API)
├── data/             # Dados estáticos e mocks de desenvolvimento
├── features/         # Módulos auto-contidos por domínio de negócio
├── hooks/            # Hooks customizados consumidos por múltiplos componentes
├── layouts/          # Estruturas visuais compartilhadas (nav, footer)
├── pages/            # Componentes de rota — uma tela por arquivo
├── routes/           # Lógica de navegação e proteção de rotas
├── services/         # Comunicação com APIs externas
├── store/            # Estado global (Zustand)
├── styles/           # CSS global e tokens de design
├── types/            # Contratos globais — tipos e interfaces de domínio
└── utils/            # Funções puras sem efeitos colaterais
```

---

## Convenções Ativas (project.mdc)

### TypeScript

- `import type` para importações de tipo puro
- `unknown` em vez de `any`
- `type` preferido sobre `interface`
- PascalCase para tipos

### React

- Arrow functions para componentes
- PascalCase para componentes e arquivos (`Button.tsx`)
- Props tipadas com `type`, nunca inline
- Nunca `React.FC`

### Tailwind v4

- Sintaxe v4 exclusivamente
- Configurações via `@theme` no CSS
- `@import "tailwindcss"` — nunca `@tailwind base`

### Imports e Commits

- Path alias `@/` para imports internos — nunca `../`
- Conventional Commits: `feat`, `fix`, `chore`, `refactor`, `docs`, `style`, `test`

---

## Objetivo do Projeto

Conversão do arquivo `grade_react_ts_abril2026.html` (grade de estudos estática)
em aplicação React + TypeScript funcional.

Propósito duplo:

1. Ferramenta real de uso diário
2. Exercício técnico central de abril 2026 para consolidação de React + TypeScript

---

## Paleta de Cores (CSS Variables)

```css
--bg: #0d0d0d --surface: #141414 --surface2: #1c1c1c --border: #2a2a2a --accent: #e8ff47
  /* amarelo-limão — PADRÃO */ --accent2: #47c4ff /* azul — Turno A/B */ --accent3: #ff6b6b
  /* vermelho — MÍNIMO */ --text: #e8e8e0 --text-dim: #7a7a72 --text-dimmer: #3d3d38
  --green: #4dff91 /* verde — EXPANSÃO / Folga */ --orange: #ff9f43;
```

Tipografia: **Syne** (títulos, 800) + **DM Mono** (corpo, código)

---

## Componentes Mapeados

| Componente    | Props principais                               |
| ------------- | ---------------------------------------------- |
| `ModoCard`    | nome, tempo, descricao, gatilho, acento        |
| `BlocoItem`   | tag, texto                                     |
| `DiaBox`      | numero, label, blocos: BlocoItem[]             |
| `TurnoCard`   | titulo, subtitulo, blocos: BlocoItem[], acento |
| `SemanaCard`  | numero, titulo, objetivo, topicos: string[]    |
| `MetricaCard` | valor, label, acento                           |
| `RegraCard`   | icone, titulo, texto                           |
| `Principio`   | texto                                          |
| `EntradaCard` | texto, gesto                                   |
| `Header`      | — composição interna                           |
| `Footer`      | — composição interna                           |

---

## Tipos a Definir (primeiro arquivo a criar)

Arquivo: `src/types/index.ts`

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

## Ordem de Construção

1. `src/types/index.ts` — contratos antes de qualquer JSX
2. `src/data/gradeData.ts` — dados estáticos extraídos do HTML
3. `BlocoItem` — menor unidade, sem dependências
4. `ModoCard` — props primitivas apenas
5. `MetricaCard` — idem
6. `RegraCard` — idem
7. `SemanaCard` — usa `string[]`
8. `TurnoCard` — usa `BlocoItem[]`
9. `DiaBox` — usa `BlocoItem[]`
10. `Header` e `Footer`
11. Composição final em `App.tsx`

---

## Próximo Passo Imediato

Abrir nova janela no Claude Web com o projeto `code-and-safety-context.md` como contexto
e começar por:

```
src/types/index.ts
```

Cole o bloco de tipos acima como ponto de partida e solicite:
explicação de cada decisão de tipo + código completo pronto para uso.

---

## Scripts Disponíveis

```bash
npm run dev           # Dev server
npm run build         # Build de produção
npm run lint          # ESLint
npm run preview       # Preview do build
npx tsc --noEmit      # Type check
npx prettier --write "src/**/*.{ts,tsx}"  # Formatar
```

---

## Referência de Arquivos Importantes

| Arquivo                     | Função                                         |
| --------------------------- | ---------------------------------------------- |
| `.cursor/rules/project.mdc` | Regras do projeto para o agente                |
| `vite.config.ts`            | Alias `@/` + Tailwind v4 + SWC                 |
| `tsconfig.app.json`         | Strict mode + paths                            |
| `eslint.config.js`          | Flat config + Prettier integrado               |
| `prettier.config.js`        | Formatação: sem ponto-e-vírgula, aspas simples |
| `.husky/pre-commit`         | Executa lint-staged antes de cada commit       |

# Handoff — Exercise Change to React

> Gerado em 26/03/2026. Cole este arquivo na próxima janela do Claude como contexto de entrada.

---

## Repositórios

| Projeto       | URL                                                      | Local                                                               |
| ------------- | -------------------------------------------------------- | ------------------------------------------------------------------- |
| Template      | https://github.com/Tulio-Aguiar/Code-And-Safety          | `C:\Users\tulio.aguiar\Documents\projetos\code-and-safety`          |
| Projeto ativo | https://github.com/Tulio-Aguiar/Exercise-Change-to-React | `C:\Users\tulio.aguiar\Documents\projetos\Exercise Change to React` |

---

## Objetivo

Converter o arquivo `grade_react_ts_abril2026.html` (grade de estudos estática, tema escuro, tipografia Syne + DM Mono) em aplicação React + TypeScript funcional. Propósito duplo: ferramenta real de uso diário e exercício técnico central de abril 2026.

---

## Stack

React 19 · TypeScript 5.9 (strict) · Vite 7 · Tailwind CSS v4 · ESLint 9 (flat config) · Prettier 3 · Husky 9 · lint-staged

Todas as verificações passando: `npm run lint` · `npx tsc --noEmit` · `npx prettier --check "src/**/*.{ts,tsx}"`

---

## Estrutura de Pastas (src/)

```
src/
├── assets/
├── components/
│   ├── AppProviders/
│   └── ui/
├── contexts/
├── data/
├── features/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── services/
├── store/
├── styles/
├── types/
└── utils/
```

---

## Convenções

**TypeScript:** `import type` para tipos puros · `unknown` em vez de `any` · `type` sobre `interface` · PascalCase para tipos

**React:** arrow functions · PascalCase para componentes e arquivos · props tipadas com `type` · nunca `React.FC`

**Tailwind v4:** sintaxe v4 exclusivamente · configurações via `@theme` no CSS · `@import "tailwindcss"` nunca `@tailwind base`

**Imports:** path alias `@/` para imports internos — nunca `../`

**Commits:** `feat` · `fix` · `chore` · `refactor` · `docs` · `style` · `test`

---

## Paleta de Cores

```css
--bg: #0d0d0d;
--surface: #141414;
--surface2: #1c1c1c;
--border: #2a2a2a;
--accent: #e8ff47; /* amarelo-limão — PADRÃO */
--accent2: #47c4ff; /* azul — Turno A/B */
--accent3: #ff6b6b; /* vermelho — MÍNIMO */
--text: #e8e8e0;
--text-dim: #7a7a72;
--text-dimmer: #3d3d38;
--green: #4dff91; /* verde — EXPANSÃO / Folga */
--orange: #ff9f43;
```

Tipografia: **Syne** 800 (títulos) + **DM Mono** (corpo/código)

---

## Componentes Mapeados

| Componente    | Props principais                               |
| ------------- | ---------------------------------------------- |
| `ModoCard`    | nome, tempo, descricao, gatilho, acento        |
| `BlocoItem`   | tag, texto                                     |
| `DiaBox`      | numero, label, blocos: BlocoItem[]             |
| `TurnoCard`   | titulo, subtitulo, blocos: BlocoItem[], acento |
| `SemanaCard`  | numero, titulo, objetivo, topicos: string[]    |
| `MetricaCard` | valor, label, acento                           |
| `RegraCard`   | icone, titulo, texto                           |
| `Principio`   | texto                                          |
| `EntradaCard` | texto, gesto                                   |
| `Header`      | — composição interna                           |
| `Footer`      | — composição interna                           |

---

## Tipos — src/types/index.ts

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

## Ordem de Construção

1. `src/types/index.ts` — contratos antes de qualquer JSX
2. `src/data/gradeData.ts` — dados estáticos extraídos do HTML
3. `BlocoItem` — menor unidade, sem dependências
4. `ModoCard` — props primitivas apenas
5. `MetricaCard` — idem
6. `RegraCard` — idem
7. `SemanaCard` — usa `string[]`
8. `TurnoCard` — usa `BlocoItem[]`
9. `DiaBox` — usa `BlocoItem[]`
10. `Header` e `Footer`
11. Composição final em `App.tsx`

---

## Scripts

```bash
npm run dev                                    # Dev server
npm run build                                  # Build de produção
npm run lint                                   # ESLint
npx tsc --noEmit                               # Type check
npx prettier --write "src/**/*.{ts,tsx}"       # Formatar
```

---

## Arquivos de Referência

| Arquivo                         | Função                                   |
| ------------------------------- | ---------------------------------------- |
| `.cursor/rules/project.mdc`     | Regras do projeto para o agente          |
| `vite.config.ts`                | Alias `@/` + Tailwind v4 + SWC           |
| `tsconfig.app.json`             | Strict mode + paths                      |
| `eslint.config.js`              | Flat config + Prettier integrado         |
| `prettier.config.js`            | Sem ponto-e-vírgula, aspas simples       |
| `.husky/pre-commit`             | Executa lint-staged antes de cada commit |
| `grade_react_ts_abril2026.html` | Referência visual — raiz do projeto      |

---

## Próximo Passo

Abrir nova janela. Colar este arquivo como contexto. Começar por `src/types/index.ts`.
