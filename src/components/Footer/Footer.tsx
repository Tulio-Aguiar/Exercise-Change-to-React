// src/components/Footer/Footer.tsx

import { rodapeEsquerda, rodapeDireita } from '@/data/gradeData'

export const Footer = () => {
  return (
    <footer className="border-t border-[#2a2a2a] pt-5 flex justify-between text-[10px] text-[#3d3d38] tracking-[0.5px]">
      <span>{rodapeEsquerda}</span>
      <span>{rodapeDireita}</span>
    </footer>
  )
}
