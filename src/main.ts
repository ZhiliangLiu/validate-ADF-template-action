import validate from './validate.ts';

const TEMPLATE_DIRECTORY_NAME = 'templates';

const main = () => {
	console.log(Array.from(Deno.args))
	// const PROJECT_ROOT = Deno.args[0];
	// const TEMPLATES_PATH = `${PROJECT_ROOT}/${TEMPLATE_DIRECTORY_NAME}`;
	// const result = validate(TEMPLATES_PATH);
	// Deno.writeAllSync(
	// 	Deno.stdout,
	// 	new TextEncoder().encode(JSON.stringify(result)),
	// );
};

main();
