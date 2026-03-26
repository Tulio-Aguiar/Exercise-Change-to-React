// src/components/DiaBox/DiaBox.tsx

import type { BlocoItem as BlocoItemType } from '@/types'
import { BlocoItem } from '@/components/BlocoItem/BlocoItem'

type DiaBoxProps = {
  numero: string
  label: string
  blocos: BlocoItemType[]
}

export const DiaBox = ({ numero, label, blocos }: DiaBoxProps) => {
  return (
    <div className="bg-[#0d0d0d] border border-[#2a2a2a] p-[12px_10px] text-center">
      <span className="font-['Syne'] font-bold text-[20px] text-[#3d3d38] block">{numero}</span>

      <span className="text-[9px] text-[#3d3d38] uppercase tracking-[1px] block mb-2">{label}</span>

      <ul className="flex flex-col gap-[3px]">
        {blocos.map((bloco) => (
          <BlocoItem key={bloco.texto} tag={bloco.tag} texto={bloco.texto} />
        ))}
      </ul>
    </div>
  )
}
