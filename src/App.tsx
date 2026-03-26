// src/App.tsx

import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import { SectionLabel } from '@/components/SectionLabel/SectionLabel'
import { ModoCard } from '@/components/ModoCard/ModoCard'
import { MetricaCard } from '@/components/MetricaCard/MetricaCard'
import { RegraCard } from '@/components/RegraCard/RegraCard'
import { SemanaCard } from '@/components/SemanaCard/SemanaCard'
import { TurnoCard } from '@/components/TurnoCard/TurnoCard'
import { DiaBox } from '@/components/DiaBox/DiaBox'

import {
  principioTexto,
  entradaTexto,
  entradaGesto,
  reentradaRodape,
  modos,
  diasReentrada,
  turnos,
  semanas,
  metricas,
  regras,
} from '@/data/gradeData'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Princípio Central */}
      <div className="bg-[#141414] border border-[#2a2a2a] border-l-[3px] border-l-[#e8ff47] px-6 py-5 mb-12 text-[12px] text-[#7a7a72] leading-[1.8]">
        <strong className="text-[#e8ff47] font-medium block mb-1.5 text-[10px] tracking-[2px] uppercase">
          // princípio central
        </strong>
        {principioTexto}
      </div>

      {/* Modos de Execução */}
      <section className="mb-12">
        <SectionLabel texto="modos de execução" />
        <div className="grid grid-cols-3 gap-[2px]">
          {modos.map((modo) => (
            <ModoCard key={modo.nome} {...modo} />
          ))}
        </div>
      </section>

      {/* Regra de Entrada */}
      <div className="bg-[#1c1c1c] border border-[#e8ff47] px-6 py-5 mb-12">
        <strong className="font-['Syne'] font-bold text-[13px] text-[#e8ff47] block mb-2.5">
          // regra de entrada única — elimina o custo de decisão
        </strong>
        <p className="text-[12px] text-[#7a7a72] leading-[1.8]">{entradaTexto}</p>
        <div className="mt-3 text-[13px] text-[#e8e8e0] bg-[#0d0d0d] px-4 py-3 border-l-2 border-l-[#e8ff47]">
          {entradaGesto}
        </div>
      </div>

      {/* Fase de Reentrada */}
      <section className="mb-12">
        <div className="bg-[#141414] border border-[#2a2a2a] border-t-[3px] border-t-[#47c4ff] p-7">
          <p className="font-['Syne'] font-bold text-[18px] text-[#47c4ff] mb-1">
            Próximos 6 dias — fase de reentrada
          </p>
          <p className="text-[11px] text-[#7a7a72] mb-6">
            Objetivo: reduzir resistência interna. Sair dos 6 dias com a sensação de que estudar
            voltou a ser possível.
          </p>
          <div className="grid grid-cols-6 gap-[2px] mb-4">
            {diasReentrada.map((dia) => (
              <DiaBox key={dia.numero} {...dia} />
            ))}
          </div>
          <p className="text-[11px] text-[#3d3d38]">{reentradaRodape}</p>
        </div>
      </section>

      {/* Estrutura por Tipo de Dia */}
      <section className="mb-12">
        <SectionLabel texto="abril — estrutura por tipo de dia" />
        <div className="grid grid-cols-2 gap-[2px]">
          {turnos.map((turno) => (
            <TurnoCard key={turno.titulo} {...turno} />
          ))}
        </div>
      </section>

      {/* Conteúdo por Semana */}
      <section className="mb-12">
        <SectionLabel texto="conteúdo técnico — progressão por semana" />
        <div className="grid grid-cols-2 gap-[2px]">
          {semanas.map((semana) => (
            <SemanaCard key={semana.numero} {...semana} />
          ))}
        </div>
      </section>

      {/* Métricas */}
      <section className="mb-12">
        <SectionLabel texto="como medir o mês" />
        <div className="grid grid-cols-3 gap-[2px]">
          {metricas.map((metrica) => (
            <MetricaCard key={metrica.valor} {...metrica} />
          ))}
        </div>
      </section>

      {/* Regras de Operação */}
      <section className="mb-12">
        <SectionLabel texto="regras de operação" />
        <div className="grid grid-cols-2 gap-[2px]">
          {regras.map((regra) => (
            <RegraCard key={regra.titulo} {...regra} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
