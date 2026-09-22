"use client"

import { useState } from "react"
import { ImageCarousel } from "@/components/image-carousel"
import { ProjectDetailModal } from "@/components/project-detail-modal"

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

export function ProjectCard({ project }: { project: Project }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <article
                onClick={() => setIsOpen(true)}
                className="flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md"
            >
                <ImageCarousel images={project.images} title={project.title} />

                <div className="flex flex-1 flex-col gap-2 p-5">
                    <h3 className="font-serif text-lg font-medium text-primary">{project.title}</h3>
                    <p className="flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

                    {project.techStack && project.techStack.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-border bg-background px-2.5 py-0.5 font-mono text-[11px] text-primary"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}

                    <span className="mt-2 inline-flex items-center gap-1.5 font-mono text-xs tracking-wide text-primary uppercase">
                        View Details
                    </span>
                </div>
            </article>

            {isOpen && <ProjectDetailModal project={project} onClose={() => setIsOpen(false)} />}
        </>
    )
}
