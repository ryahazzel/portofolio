import { ExperienceItem } from "@/components/experience-item"

type WorkExperience = {
    id: string
    company: string
    role: string
    startDate: Date
    endDate: Date | null
    description: string | null
}

export function ExperienceSection({ experiences }: { experiences: WorkExperience[] }) {
    return (
        <section id="experience" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <span className="font-mono text-xs tracking-widest text-eyebrow uppercase">Production History</span>
            <h2 className="mt-2 font-serif text-3xl font-medium text-primary md:text-4xl">Work Experience</h2>

            {experiences.length === 0 ? (
                <p className="mt-8 text-sm text-muted">No work experience listed yet.</p>
            ) : (
                <ul className="mt-8 max-w-3xl border-l-2 border-border">
                    {experiences.map((experience) => (
                        <ExperienceItem key={experience.id} experience={experience} />
                    ))}
                </ul>
            )}
        </section>
    )
}
