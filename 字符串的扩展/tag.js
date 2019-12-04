var a = 5;
var b = 10;

function tag(s, v1, v2, v3, v4) {
    console.log(s);
    console.log(v1);
    console.log(v2);
    console.log(v3);
    console.log(v4);
    console.log('ok');
}

tag`Hello ${a + b} world ${a * b} abc ${b - a}`