import { validateDirectory } from './validate/index.ts';

const TEMPLATE_DIRECTORY_NAME = 'templates'

const main = () => {
    const PROJECT_ROOT = Deno.args[0]
    const TEMPLATES_PATH = `${PROJECT_ROOT}/${TEMPLATE_DIRECTORY_NAME}`
    validateDirectory(TEMPLATES_PATH)
    console.log(TEMPLATES_PATH)
}

main()