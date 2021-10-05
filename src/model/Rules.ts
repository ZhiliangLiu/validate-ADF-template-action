import { Rule, ValidateResult } from '../types.ts'
import rules from '../rules/index.ts'
import Template from './Template.ts';

class Rules {
    private static instance: Rules = new Rules()

    public static getInstance(): Rules {
        return this.instance
    }

    readonly #rules: Map<number, Rule[]>

    private constructor() {
        const map = new Map<number, Rule[]>()
        rules.forEach((rule) => {
            if (typeof rule.depth === 'number') {
                if (map.has(rule.depth)) {
                    map.get(rule.depth).push(rule)
                } else {
                    map.set(rule.depth, [rule])
                }
            } else if (
                Array.isArray(rule.depth)
                && rule.depth.length === 2
                && rule.depth[0] < rule.depth[1]
            ) {
                const [start, end] = rule.depth
                for (let i = start; i <= end; i += 1) {
                    if (map.has(i)) {
                        map.get(i).push(rule)
                    } else {
                        map.set(i, [rule])
                    }
                }
            }
        })
        this.#rules = map
    }

    public validate(template: Template): ValidateResult {

    }
}

export default Rules