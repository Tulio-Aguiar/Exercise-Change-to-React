// src/components/ModoCard/ModoCard.tsx

import type { ModoData } from '@/types'

type ModoCardProps = ModoData

export const ModoCard = ({ nome, tempo, descricao, gatilho, acento }: ModoCardProps) => {
  return (
    <div className="bg-[#141414] border border-[#2a2a2a] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: acento }} />

      <div className="p-6 pt-8">
        <p className="font-['Syne'] font-bold text-[16px] mb-1" style={{ color: acento }}>
          {nome}
        </p>

        <p className="text-[11px] text-[#7a7a72] mb-4">{tempo}</p>

        <p className="text-[12px] text-[#7a7a72] leading-[1.7] mb-4">{descricao}</p>

        <p className="text-[11px] text-[#3d3d38] border-t border-[#2a2a2a] pt-3 italic">
          {gatilho}
        </p>
      </div>
    </div>
  )
}
