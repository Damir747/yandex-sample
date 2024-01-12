const fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8');

const foo = () => {
	const lines = fileContent.toString().split('\n');
	if (lines.length > 0) {
		let inputPhone = lines[0].trim();
		let result = '';
		return result;
	}
	return 'Не удалось прочитать файл.';
};

fs.writeFileSync('output.txt', foo().toString());
