import type { BlocoItem as BlocoItemType } from '@/types'

type BlocoItemProps = BlocoItemType

const tagStyles: Record<BlocoItemType['tag'], string> = {
  min: 'bg-[rgba(255,107,107,0.15)] text-[#ff6b6b]',
  pad: 'bg-[rgba(232,255,71,0.12)] text-[#e8ff47]',
  exp: 'bg-[rgba(77,255,145,0.12)] text-[#4dff91]',
  opt: 'bg-[rgba(71,196,255,0.12)] text-[#47c4ff]',
}

const tagLabels: Record<BlocoItemType['tag'], string> = {
  min: 'mín',
  pad: 'pad',
  exp: 'exp',
  opt: 'opt',
}

export const BlocoItem = ({ tag, texto }: BlocoItemProps) => {
  return (
    <li className="flex items-start gap-3 text-[12px] text-[#7a7a72] leading-relaxed">
      <span
        className={`${tagStyles[tag]} text-[10px] px-2 py-0.5 rounded-sm whitespace-nowrap font-medium shrink-0 mt-0.5`}
      >
        {tagLabels[tag]}
      </span>
      <span>{texto}</span>
    </li>
  )
}
