import { Download, Mail } from "lucide-react"

type Profile = { contactEmail: string | null; resumeUrl: string | null } | null

export function ContactSection({ profile }: { profile: Profile }) {
    const contactEmail = profile?.contactEmail
    const resumeUrl = profile?.resumeUrl

    return (
        <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="rounded-2xl border border-border bg-card px-6 py-12 text-center md:px-12">
                <span className="font-mono text-xs tracking-widest text-eyebrow uppercase">Get In Touch</span>
                <h2 className="mt-2 font-serif text-3xl font-medium text-primary md:text-4xl">
                    Contact &amp; Resume
                </h2>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
                    Interested in working together? Reach out or take a look at my full resume.
                </p>

                {(contactEmail || resumeUrl) && (
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        {contactEmail && (
                            <a
                                href={`mailto:${contactEmail}`}
                                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-mono text-xs font-medium tracking-wide text-background uppercase hover:bg-primary-dark"
                            >
                                <Mail className="h-3.5 w-3.5" />
                                Email Me
                            </a>
                        )}
                        {resumeUrl && (
                            <a
                                href={resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-mono text-xs font-medium tracking-wide text-primary uppercase hover:bg-background"
                            >
                                <Download className="h-3.5 w-3.5" />
                                Download CV
                            </a>
                        )}
                    </div>
                )}
            </div>
        </section>
    )
}
