import { validateDirectory } from './validate/index.ts'

const TEMPLATE_DIRECTORY_NAME = 'templates'

const main = () => {
    const PROJECT_ROOT = Deno.args[0]
    const TEMPLATES_PATH = `${PROJECT_ROOT}/${TEMPLATE_DIRECTORY_NAME}`
    const result = validateDirectory(TEMPLATES_PATH)
    Deno.writeAllSync(Deno.stdout, new TextEncoder().encode(JSON.stringify(result)))
}

main()