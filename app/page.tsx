import { asc } from "drizzle-orm"
import { db } from "@/lib/db"
import { portfolioProfile, portfolioProject, portfolioProjectImage, workExperience } from "@/lib/schema"
import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"

export const revalidate = 60

export default async function Home() {
    const [profileRows, projectRows, images, experiences] = await Promise.all([
        db.select().from(portfolioProfile).limit(1),
        db.select().from(portfolioProject).orderBy(asc(portfolioProject.order)),
        db.select().from(portfolioProjectImage).orderBy(asc(portfolioProjectImage.order)),
        db.select().from(workExperience).orderBy(asc(workExperience.order)),
    ])

    const projects = projectRows.map((project) => ({
        ...project,
        images: images.filter((image) => image.projectId === project.id),
    }))

    const profile = profileRows[0] ?? null

    return (
        <div className="flex flex-1 flex-col">
            <SiteNav />
            <Hero profile={profile} />
            <ProjectsSection projects={projects} />
            <ExperienceSection experiences={experiences} />
            <ContactSection profile={profile} />
        </div>
    )
}
