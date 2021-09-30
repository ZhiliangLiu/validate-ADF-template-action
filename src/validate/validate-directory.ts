import Context from '../Context.ts';
import { ValidateResult } from '../types.ts';

const validateDirectory = (path: string): ValidateResult => {
    const ctx = new Context()
    for (const dirEntry of Deno.readDirSync(path)) {
        console.log(dirEntry.name)
    }
    return ctx.toResult()
}

export default validateDirectory