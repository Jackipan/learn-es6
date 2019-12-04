const temp = addrs=> 
    `<table>
        ${
            addrs.map(addrs => 
                `
                <tr><td>${addrs.first}</td></tr>
                <tr><td>${addrs.last}</td></tr>
                `).join('')
        }
    </table>`;


const data = [
    {first: '<jane>', last: 'Bond'},
    {first: '<kang>', last: 'kang'},
]

console.log(temp(data));

// 写法一 

let str = 'console.log( ' + '`Hello ${name}!`)';
let func = new Function('name', str);
func('Jack') // "Hello Jack!"


// 写法二

let str1 = '(name)=> `hello ${name}`';
let funcc = eval.call(null, str1);
funcc('jack')