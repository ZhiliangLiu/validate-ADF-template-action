import os from 'https://deno.land/x/dos@v0.11.0/mod.ts';
import Result from './Result.ts';
import { ValidateResult } from './types.ts';

const formatResult = (result: Result): string => {
	return '';
};

export const formatResults = (results: Result[]): ValidateResult => {
	let status: 0 | 1 = 0;
	const details: string[] = [];
	results.forEach((result) => {
		if (result.hasError || result.hasWarning) {
			status = 1;
			details.push(formatResult(result));
		}
	});
	return {
		status,
		detail: details.join(os.EOL()),
	};
};
