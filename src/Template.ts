import { JsonValue } from './types.ts';
import Result from './Result.ts';

class Template {
	readonly #name: string;
	#manifest: JsonValue | null = null;
	#template: JsonValue | null = null;

	private get isEmpty(): boolean {
		return this.#template === null || this.#manifest === null;
	}

	constructor(name: string, path: string) {
		this.#name = name;
		const entries = Array.from(Deno.readDirSync(path));
		entries.forEach((entry) => {
			if (entry.name === 'manifest.json') {
				this.#manifest = JSON.parse(
					Deno.readTextFileSync(`${path}/${entry.name}`),
				);
			} else {
				this.#template = JSON.parse(
					Deno.readTextFileSync(`${path}/${entry.name}`),
				);
			}
		});
	}

	public validate(): Result {
		const result = new Result(this.#name);
		if (this.isEmpty) {
		} else {
		}
		return result;
	}
}

export default Template;
