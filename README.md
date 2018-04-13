# Assert

### id
```sh
npm install --save @assert/id
```
```js
(id: String, language?: 'HTML4' | 'HTML5' | 'XML')
    => Void,
    throws: TypeError | SyntaxError | DOMException,
    requires: String.isString, String.prototype.inspect
```
### class
```sh
npm install --save @assert/class
```
```js
(class: String, HTML5?: !!Any)
    => Void,
    throws: TypeError | SyntaxError | DOMException,
    requires: String.isString, String.prototype.inspect
```
