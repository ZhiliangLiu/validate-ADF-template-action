import { Rule } from '../types.ts';

const TEMPLATE_IS_JSON: Rule = {
    name: 'Template is JSON',
    depth: 0,
    test: true,
    validator: (value) => typeof value === 'object' && value !== null
}

export default TEMPLATE_IS_JSON