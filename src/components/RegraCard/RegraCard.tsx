// src/components/RegraCard/RegraCard.tsx

import type { RegraData } from '@/types'

type RegraCardProps = RegraData

export const RegraCard = ({ icone, titulo, texto }: RegraCardProps) => {
  return (
    <div className="bg-[#141414] border border-[#2a2a2a] p-[18px_20px] flex gap-[14px] items-start">
      <span className="text-[16px] shrink-0 mt-[1px]">{icone}</span>

      <div>
        <p className="text-[#e8e8e0] font-medium text-[12px] mb-0.5">{titulo}</p>
        <p className="text-[12px] text-[#7a7a72] leading-[1.7]">{texto}</p>
      </div>
    </div>
  )
}
