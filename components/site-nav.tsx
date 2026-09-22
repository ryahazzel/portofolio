export function SiteNav() {
    return (
        <nav className="border-b border-border">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <span className="font-serif text-lg font-medium text-primary">Portfolio</span>
                <div className="hidden gap-6 font-mono text-xs tracking-widest text-eyebrow uppercase sm:flex">
                    <a href="#projects" className="hover:text-primary">
                        01. Projects
                    </a>
                    <a href="#experience" className="hover:text-primary">
                        02. Experience
                    </a>
                    <a href="#contact" className="hover:text-primary">
                        03. Contact
                    </a>
                </div>
            </div>
        </nav>
    )
}
