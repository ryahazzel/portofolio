import { ProjectCard } from "@/components/project-card"

type ProjectImage = { id: string; url: string }
type Project = {
    id: string
    title: string
    description: string
    detailDescription: string | null
    techStack: string[] | null
    url: string | null
    images: ProjectImage[]
}

export function ProjectsSection({ projects }: { projects: Project[] }) {
    return (
        <section id="projects" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <span className="font-mono text-xs tracking-widest text-eyebrow uppercase">Production Archive</span>
            <h2 className="mt-2 font-serif text-3xl font-medium text-primary md:text-4xl">Projects</h2>

            {projects.length === 0 ? (
                <p className="mt-8 text-sm text-muted">No projects yet — check back soon.</p>
            ) : (
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            )}
        </section>
    )
}
