export interface JsonValue {
	[propName: string]:
		| string
		| number
		| boolean
		| (string | number | boolean)[]
		| JsonValue;
}

export type ValidateResult = {
	status: 0 | 1;
	detail: string;
};
