export type JsonValueBasicType = string | number | boolean

export type JsonValueType = JsonValueBasicType | (JsonValueBasicType)[] | Record<string, JsonValueBasicType>

export type Rule<T extends JsonValueType = JsonValueType> = {
    name?: string
    description?: string
    test: string | RegExp | ((current: string, parents: string[]) => boolean) | true
    depth?: number | [number, number]
    validator: (value: T) => (boolean | Error)
}

export enum Status {
    FAIL,
    SUCCESS
}

export type ValidateResult = {
    status: Status
    errors: { rule: Rule; message: string }[]
}