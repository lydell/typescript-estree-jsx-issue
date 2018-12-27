const parser = require('@babel/parser');

const code = `<a/>.toString()`;
// const code = `(<a/>).toString()`;

console.log('### @babel/parser');
const ast = parser.parse(code, { plugins: ['jsx'] });
console.log(ast);
