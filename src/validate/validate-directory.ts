import Template from '../model/Template.ts'

const validateDirectory = (path: string): any => {
    const templates: Template[] = []
    for (const dirEntry of Deno.readDirSync(path)) {
        templates.push(new Template(`${path}/${dirEntry.name}`))
    }
    console.log(templates)
}

export default validateDirectory