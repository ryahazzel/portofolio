"use client"

import { useEffect } from "react"
import { ExternalLink, X } from "lucide-react"
import { parseDetailDescription } from "@/lib/parse-detail"
import { ImageCarousel } from "@/components/image-carousel"

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

export function ProjectDetailModal({ project, onClose }: { project: Project; onClose: () => void }) {
    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") onClose()
        }
        document.addEventListener("keydown", handleKeyDown)
        document.body.style.overflow = "hidden"
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
            document.body.style.overflow = ""
        }
    }, [onClose])

    const blocks = parseDetailDescription(project.detailDescription ?? project.description)

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
            onClick={onClose}
        >
            <div
                className="relative flex max-h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-xl md:flex-row"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute top-3 right-3 z-10 rounded-full bg-background/80 p-1.5 text-primary shadow hover:bg-background"
                >
                    <X className="h-5 w-5" />
                </button>

                {project.images.length > 0 && (
                    <div className="shrink-0 md:w-2/5">
                        <ImageCarousel
                            images={project.images}
                            title={project.title}
                            className="aspect-video md:aspect-auto md:h-full"
                        />
                    </div>
                )}

                <div className="flex-1 overflow-y-auto p-6 md:p-8">
                    <h2 className="font-serif text-2xl font-medium text-primary md:text-3xl">{project.title}</h2>

                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                        <DetailBody blocks={blocks} />
                    </div>

                    {project.techStack && project.techStack.length > 0 && (
                        <div className="mt-6">
                            <span className="font-mono text-xs tracking-widest text-eyebrow uppercase">Tech Stack</span>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-primary"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {project.url && (
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 font-mono text-xs font-medium tracking-wide text-background uppercase hover:bg-primary-dark"
                        >
                            View Project
                            <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

function DetailBody({ blocks }: { blocks: { type: "paragraph" | "bullet"; text: string }[] }) {
    const elements: React.ReactNode[] = []
    let bulletBuffer: string[] = []

    function flushBullets(key: string) {
        if (bulletBuffer.length === 0) return
        elements.push(
            <ul key={key} className="list-disc space-y-1 pl-5">
                {bulletBuffer.map((text, i) => (
                    <li key={i}>{text}</li>
                ))}
            </ul>
        )
        bulletBuffer = []
    }

    blocks.forEach((block, i) => {
        if (block.type === "bullet") {
            bulletBuffer.push(block.text)
        } else {
            flushBullets(`ul-${i}`)
            elements.push(<p key={`p-${i}`}>{block.text}</p>)
        }
    })
    flushBullets("ul-end")

    return <>{elements}</>
}
