var total = 30;
var msg = passthru`The total is ${total} (${total * 1.05} with tax)`;
function passthru(literals) {
    var result = '';
    var i = 0;
    console.log(literals);
    
    while (i < literals.length) {
        console.log(literals[i]);
        
        result += literals[i++];
        if (i < arguments.length) {
            result += arguments[i];
        }
    }
    console.log(result);

}

msg