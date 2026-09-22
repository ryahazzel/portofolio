import { formatDateRange } from "@/lib/format-date"

type WorkExperience = {
    id: string
    company: string
    role: string
    startDate: Date
    endDate: Date | null
    description: string | null
}

export function ExperienceItem({ experience }: { experience: WorkExperience }) {
    return (
        <li className="relative pb-10 pl-8 last:pb-0">
            <span className="absolute top-1.5 left-[-7px] h-3 w-3 rounded-full border-2 border-primary bg-background" />

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-serif text-lg font-medium text-primary">
                    {experience.role} <span className="text-muted">— {experience.company}</span>
                </h3>
                <span className="font-mono text-xs tracking-wide text-eyebrow uppercase">
                    {formatDateRange(experience.startDate, experience.endDate)}
                </span>
            </div>

            {experience.description && (
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{experience.description}</p>
            )}
        </li>
    )
}
