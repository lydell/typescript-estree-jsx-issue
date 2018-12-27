# typescript-estree JSX issue

typescript-estree fails to parse `<a/>.toString()` (while `<a/>.toString()` works, and other parsers seem to parse both).

1. `npm ci`
2. `npm test`

```
$ npm test
### @babel/parser
Node {
  type: 'File',
  start: 0,
  end: 15,
  loc:
   SourceLocation {
     start: Position { line: 1, column: 0 },
     end: Position { line: 1, column: 15 } },
  program:
   Node {
     type: 'Program',
     start: 0,
     end: 15,
     loc: SourceLocation { start: [Position], end: [Position] },
     sourceType: 'script',
     interpreter: null,
     body: [ [Node] ],
     directives: [] },
  comments: [] }



### typescript-estree

/home/lydell/stuff/typescript/node_modules/typescript-estree/dist/ast-converter.js:37
        throw convertError(ast.parseDiagnostics[0]);
        ^
[object Object]
```
