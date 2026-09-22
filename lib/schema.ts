import { pgTable, uuid, text, integer, timestamp } from "drizzle-orm/pg-core"

export const portfolioProfile = pgTable("portfolio_profile", {
    id: uuid("id").primaryKey().defaultRandom(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    contactEmail: text("contact_email"),
    resumeUrl: text("resume_url"),
    linkedinUrl: text("linkedin_url"),
    githubUrl: text("github_url"),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
})

export const portfolioProject = pgTable("portfolio_project", {
    id: uuid("id").primaryKey().defaultRandom(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    detailDescription: text("detail_description"),
    techStack: text("tech_stack").array(),
    url: text("url"),
    order: integer("order").notNull().default(0),
    createdAt: timestamp("created_at").notNull().defaultNow(),
})

export const portfolioProjectImage = pgTable("portfolio_project_image", {
    id: uuid("id").primaryKey().defaultRandom(),
    projectId: uuid("project_id").notNull(),
    url: text("url").notNull(),
    order: integer("order").notNull().default(0),
    createdAt: timestamp("created_at").notNull().defaultNow(),
})

export const workExperience = pgTable("work_experience", {
    id: uuid("id").primaryKey().defaultRandom(),
    company: text("company").notNull(),
    role: text("role").notNull(),
    startDate: timestamp("start_date").notNull(),
    endDate: timestamp("end_date"),
    description: text("description"),
    order: integer("order").notNull().default(0),
    createdAt: timestamp("created_at").notNull().defaultNow(),
})
