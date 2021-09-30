type JsonValueBasicType = string | number | boolean

type JsonValueType = JsonValueBasicType | (JsonValueBasicType)[] | Record<string, JsonValueBasicType>

export type Rule<T extends JsonValueType = JsonValueType> = {
    name?: string
    description?: string
    test: string | RegExp | ((current: string, parents: string[]) => boolean)
    depth?: number
    validator: (value: T) => boolean
}

export type ValidateResult = unknown