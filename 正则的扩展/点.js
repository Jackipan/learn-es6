// 点字符
// 点（ . ）字符在正则表达式中，含义是除了换行符以外的任意单个字符。
// 对于码点大于 0xFFFF 的Unicode字符，点字符不能识别，必须加上 u 修饰符。


var s = '';
console.log(/^.$/.test(s));
