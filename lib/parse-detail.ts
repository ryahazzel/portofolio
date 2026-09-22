export type DetailBlock = { type: "paragraph" | "bullet"; text: string }

export function parseDetailDescription(text: string): DetailBlock[] {
    return text
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) =>
            line.startsWith("- ")
                ? { type: "bullet" as const, text: line.slice(2).trim() }
                : { type: "paragraph" as const, text: line }
        )
}
