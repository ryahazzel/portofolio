"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

type ProjectImage = { id: string; url: string }

export function ImageCarousel({
    images,
    title,
    className = "aspect-video",
}: {
    images: ProjectImage[]
    title: string
    className?: string
}) {
    const [index, setIndex] = useState(0)

    if (images.length === 0) {
        return (
            <div className={`flex w-full items-center justify-center bg-primary/5 ${className}`}>
                <span className="font-serif text-2xl text-primary/20">{title.slice(0, 1)}</span>
            </div>
        )
    }

    function goTo(e: React.MouseEvent, newIndex: number) {
        e.stopPropagation()
        setIndex((newIndex + images.length) % images.length)
    }

    return (
        <div className={`group/carousel relative w-full overflow-hidden bg-primary/5 ${className}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={images[index].url} alt={title} className="h-full w-full object-cover" />

            {images.length > 1 && (
                <>
                    <button
                        onClick={(e) => goTo(e, index - 1)}
                        aria-label="Previous image"
                        className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-background/80 p-1.5 text-primary opacity-0 transition-opacity group-hover/carousel:opacity-100"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                        onClick={(e) => goTo(e, index + 1)}
                        aria-label="Next image"
                        className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-background/80 p-1.5 text-primary opacity-0 transition-opacity group-hover/carousel:opacity-100"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </button>
                    <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                        {images.map((img, i) => (
                            <span
                                key={img.id}
                                className={`h-1.5 w-1.5 rounded-full ${i === index ? "bg-primary" : "bg-primary/30"}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}
