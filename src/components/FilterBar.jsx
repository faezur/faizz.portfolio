import { projectTypes } from '../data/projects.js'

export default function FilterBar({ active, onChange }) {
  return (
    <div className="grid w-full grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-ink/55 p-2 sm:flex sm:w-auto sm:rounded-full">
      {projectTypes.map((type) => {
        const selected = active === type.value
        const mobileWide = type.value === 'architecture'

        return (
          <button
            key={type.value}
            type="button"
            onClick={() => onChange(type.value)}
            className={`min-h-10 min-w-0 rounded-full px-3 py-2 text-center text-[10px] uppercase leading-tight tracking-0 transition sm:min-h-0 sm:flex-none sm:px-4 sm:text-xs sm:tracking-[0.16em] ${
              mobileWide ? 'col-span-2 sm:col-span-1' : ''
            } ${
              selected
                ? 'bg-white text-ink'
                : 'text-white/60 hover:bg-white/[0.08] hover:text-cream'
            }`}
          >
            {type.label}
          </button>
        )
      })}
    </div>
  )
}
