import { projectTypes } from '../data/projects.js'

export default function FilterBar({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 rounded-full border border-white/10 bg-ink/55 p-2">
      {projectTypes.map((type) => {
        const selected = active === type.value
        return (
          <button
            key={type.value}
            type="button"
            onClick={() => onChange(type.value)}
            className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] transition ${
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
