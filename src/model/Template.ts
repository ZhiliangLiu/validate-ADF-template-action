import { JsonValueBasicType } from '../types.ts'


class Template {
    private static MANIFEST_NAME = 'manifest.json'

    readonly #path: string
    readonly #name: string
    readonly #manifest: Record<string, JsonValueBasicType> | null = null
    readonly #template: Record<string, JsonValueBasicType> | null = null

    public get name(): string {
        return this.#name
    }

    public get manifest(): Record<string, JsonValueBasicType> | null {
        return this.#manifest
    }

    public get template(): Record<string, JsonValueBasicType> | null {
        return this.#template
    }

    constructor(path: string) {
        this.#path = path
        this.#name = path.split('/')[path.split('/').length - 1]
        const entries = Array.from(Deno.readDirSync(path))
        if (entries.length === 2) {
            for (let i = 0; i < entries.length; i += 1) {
                const entry = entries[i]
                let value: Record<string, JsonValueBasicType> | null
                try {
                    value = JSON.parse(Deno.readTextFileSync(`${path}/${entry.name}`))
                } catch {
                    value = null
                }
                if (entry.name === Template.MANIFEST_NAME) {
                    this.#manifest = value
                } else {
                    this.#template = value
                }
            }
        }
    }
}

export default Template