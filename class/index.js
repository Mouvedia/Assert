;(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define([], factory);
  else if (typeof exports === 'object' && !!exports && !exports.nodeType) {
    if (typeof module === 'object' && !!module && module.exports)
      module.exports = factory();
    else
      exports['default'] = factory();
  } else if (typeof YUI === 'function' && YUI.add)
    YUI.add('assert-class', function (Y) { Y['default'] = factory(); }, '1.0.0');
  else
    root.parseAsClass = factory();
})((function () {
  try {
    return Function('return this')() || (42, eval)('this');
  } catch (e) {
    return self;
  }
})(), function () {
  return function (className, HTML5) {
    if (!String.isString(className))
      throw new TypeError('The first argument must be a string.');
    if (className === '')
      throw new SyntaxError('An empty string is not a proper class name.');

    if (!HTML5) {
      className = className.replace(/^[ \t\n\f\r\u200b]+|[ \t\n\f\r\u200b]+$/g, '');
      if (/[ \t\n\f\r\0\u200b]/.test(className)) // INVALID_CHARACTER_ERR 5
        throw new Error(className.inspect() + ' contains an invalid character at position ' + className.indexOf(className.match(/[ \t\n\f\r\0\u200b]/)[0]));
    } else if (/[ \t\n\f\r\0]/.test(className)) // INVALID_CHARACTER_ERR 5
      throw new Error(className.inspect() + ' contains an invalid character at position ' + className.indexOf(className.match(/[ \t\n\f\r\0]/)[0]));
  };
});