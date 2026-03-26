// src/components/SemanaCard/SemanaCard.tsx

import type { SemanaData } from '@/types'

type SemanaCardProps = SemanaData

export const SemanaCard = ({ numero, titulo, objetivo, topicos }: SemanaCardProps) => {
  return (
    <div className="bg-[#141414] border border-[#2a2a2a] p-6">
      <p className="text-[10px] text-[#3d3d38] tracking-[2px] uppercase mb-1">{numero}</p>

      <p className="font-['Syne'] font-bold text-[16px] text-[#e8e8e0] mb-1">{titulo}</p>

      <p className="text-[11px] text-[#e8ff47] italic mb-4">{objetivo}</p>

      <ul className="flex flex-col gap-1.5">
        {topicos.map((topico) => (
          <li
            key={topico}
            className="flex items-start gap-2 text-[12px] text-[#7a7a72] leading-snug before:content-['→'] before:text-[#3d3d38] before:shrink-0"
          >
            {topico}
          </li>
        ))}
      </ul>
    </div>
  )
}
