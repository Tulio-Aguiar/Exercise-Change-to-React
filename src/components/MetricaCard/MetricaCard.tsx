// src/components/MetricaCard/MetricaCard.tsx

import type { MetricaData } from '@/types'

type MetricaCardProps = MetricaData

export const MetricaCard = ({ valor, label, acento }: MetricaCardProps) => {
  return (
    <div className="bg-[#141414] border border-[#2a2a2a] p-5">
      <p
        className="font-['Syne'] font-extrabold text-[36px] leading-none mb-1"
        style={{ color: acento }}
      >
        {valor}
      </p>

      <p className="text-[11px] text-[#7a7a72] leading-relaxed whitespace-pre-line">{label}</p>
    </div>
  )
}
