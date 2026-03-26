// src/components/Header/Header.tsx

export const Header = () => {
  return (
    <header className="mb-[56px] border-b border-[#2a2a2a] pb-8">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h1 className="font-['Syne'] font-extrabold text-[42px] leading-none tracking-[-2px] text-[#e8e8e0]">
            React<span className="text-[#e8ff47]">+</span>TS
          </h1>
          <p className="font-['Syne'] font-extrabold text-[24px] leading-none tracking-[-1px] text-[#7a7a72] mt-1">
            grade de estudos
          </p>
        </div>

        <div className="text-right text-[#7a7a72] text-[11px] leading-[1.8]">
          <strong className="text-[#47c4ff] font-medium block">ABRIL 2026</strong>
          <span className="block">stack técnica exclusiva</span>
          <span className="block">react · typescript</span>
          <span className="block text-[#3d3d38]">turno A predominante</span>
          <span className="block text-[#3d3d38]">foco cognitivo: tarde/noite</span>
        </div>
      </div>

      <p className="text-[#7a7a72] text-[12px] mt-2 tracking-[0.5px]">
        {`// sistema operacional de estudo neurocompatível — sem avaliação prévia de estado`}
      </p>
    </header>
  )
}
