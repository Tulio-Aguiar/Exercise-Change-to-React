// src/components/SectionLabel/SectionLabel.tsx

type SectionLabelProps = {
  texto: string
}

export const SectionLabel = ({ texto }: SectionLabelProps) => {
  return (
    <div className="flex items-center gap-3 text-[10px] tracking-[3px] uppercase text-[#3d3d38] mb-5 after:flex-1 after:h-px after:bg-[#2a2a2a]">
      {texto}
    </div>
  )
}
