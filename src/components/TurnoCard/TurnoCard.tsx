// src/components/TurnoCard/TurnoCard.tsx

import type { TurnoData } from '@/types'
import { BlocoItem } from '@/components/BlocoItem/BlocoItem'

type TurnoCardProps = TurnoData

const varianteStyles = {
  folga: {
    card: 'bg-[#141414] border border-[#2a2a2a] border-t-2',
    borderTopColor: '#4dff91',
    titulo: 'text-[#4dff91]',
  },
  travado: {
    card: 'bg-[#0d0d0d] border border-[#2a2a2a] border-dashed',
    borderTopColor: undefined,
    titulo: 'text-[#3d3d38]',
  },
  default: {
    card: 'bg-[#141414] border border-[#2a2a2a]',
    borderTopColor: undefined,
    titulo: 'text-[#47c4ff]',
  },
}

export const TurnoCard = ({ titulo, subtitulo, blocos, acento, variante }: TurnoCardProps) => {
  const estilos = variante ? varianteStyles[variante] : varianteStyles.default

  const tituloColor = acento ? { color: acento } : undefined

  return (
    <div
      className={`${estilos.card} p-6`}
      style={estilos.borderTopColor ? { borderTopColor: estilos.borderTopColor } : undefined}
    >
      <p
        className={`font-['Syne'] font-bold text-[14px] mb-1.5 ${!acento ? estilos.titulo : ''}`}
        style={tituloColor}
      >
        {titulo}
      </p>

      <p className="text-[10px] text-[#3d3d38] uppercase tracking-[1px] mb-[18px]">{subtitulo}</p>

      <ul className="flex flex-col gap-2">
        {blocos.map((bloco) => (
          <BlocoItem key={bloco.texto} tag={bloco.tag} texto={bloco.texto} />
        ))}
      </ul>
    </div>
  )
}
