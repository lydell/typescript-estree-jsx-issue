const parser = require('typescript-estree');

const code = `<a/>.toString()`;
// const code = `(<a/>).toString()`;

console.log('\n\n\n### typescript-estree');
const ast = parser.parse(code, { jsx: true });
console.log(ast);
