import Template from '../model/Template.ts'

const validateDirectory = (path: string): any => {
    const templates: Template[] = Array.from(Deno.readDirSync(path)).map((dirEntry) => new Template(`${path}/${dirEntry.name}`))
    console.log(templates)
}

export default validateDirectory