import { JsonValueBasicType, Rule, Status } from '../types.ts';

class Template {
    readonly #path: string
    readonly #name: string
    readonly #manifest: Record<string, JsonValueBasicType> | null = null
    readonly #template: Record<string, JsonValueBasicType> | null = null

    private get status() {
        return (
            (typeof this.#manifest === 'object' && this.#manifest !== null)
            && (typeof this.#template === 'object' && this.#template !== null)
        )
            ? Status.SUCCESS
            : Status.FAIL
    }

    constructor(path: string) {
        this.#path = path
        this.#name = path.split('/')[path.split('/').length - 1]
        const entries: Deno.DirEntry[] = []
        for (const dirEntry of Deno.readDirSync(path)) {
            entries.push(dirEntry)
        }
        if (entries.length === 2) {
            for (let i = 0; i < entries.length; i += 1) {
                const entry = entries[i]
                const value = JSON.parse(Deno.readTextFileSync(`${path}/${entry.name}`))
                if (entry.name === 'manifest.json') {
                    this.#manifest = value
                } else {
                    this.#template = value
                }
            }
        }
    }

    public validate(...rules: Rule[]) {

    }
}

export default Template