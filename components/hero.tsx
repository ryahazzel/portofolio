type Profile = { title: string; description: string; linkedinUrl: string | null; githubUrl: string | null } | null

function LinkedinIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
        </svg>
    )
}

function GithubIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.61-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.35 4.8-4.58 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z"
            />
        </svg>
    )
}

export function Hero({ profile }: { profile: Profile }) {
    const title = profile?.title ?? "Portfolio coming soon."
    const description =
        profile?.description ??
        "This portfolio hasn't been set up yet. Check back soon to see projects and work experience."

    const hasSocialLinks = profile?.linkedinUrl || profile?.githubUrl

    return (
        <header className="border-b border-border">
            <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
                <div>
                    <span className="inline-block rounded-full border border-border bg-card px-3 py-1 font-mono text-xs tracking-widest text-eyebrow uppercase">
                        Portfolio
                    </span>

                    <h1 className="mt-6 font-serif text-4xl leading-tight font-medium text-primary md:text-5xl">
                        {title}
                    </h1>

                    <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">{description}</p>

                    {hasSocialLinks && (
                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            {profile?.linkedinUrl && (
                                <a
                                    href={profile.linkedinUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-mono text-xs font-medium tracking-wide text-background uppercase hover:bg-primary-dark"
                                >
                                    <LinkedinIcon />
                                    LinkedIn
                                </a>
                            )}
                            {profile?.githubUrl && (
                                <a
                                    href={profile.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-mono text-xs font-medium tracking-wide text-primary uppercase hover:bg-card"
                                >
                                    <GithubIcon />
                                    GitHub
                                </a>
                            )}
                        </div>
                    )}
                </div>

                <TerminalPanel title={title} />
            </div>
        </header>
    )
}

function TerminalPanel({ title }: { title: string }) {
    return (
        <div className="overflow-hidden rounded-2xl border border-border bg-terminal shadow-lg">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                <span className="ml-3 font-mono text-xs text-terminal-foreground/50">portfolio ~ zsh</span>
            </div>
            <div className="space-y-2 p-5 font-mono text-sm text-terminal-foreground">
                <p>
                    <span className="text-accent">$</span> whoami
                </p>
                <p className="pl-4 text-terminal-foreground/90">{title}</p>
                <p className="pt-2">
                    <span className="text-accent">$</span> status
                </p>
                <p className="pl-4 text-terminal-foreground/90">Available for new opportunities</p>
                <p className="pt-2">
                    <span className="text-accent">$</span> <span className="animate-pulse">_</span>
                </p>
            </div>
        </div>
    )
}
