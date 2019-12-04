// 为函数的参数赋值
function move({x,y}={x:1,y:2}){
    console.log({x,y});
}

move({a:0,b:0})
// move({x:1})
// move({y:2})
// move({})

// move()


// 函数参数的解构

function move2({x=0,y=0}= {}){
    console.log(x,y);
}

move2({a:2,b:1})
move2({x})
move2({y})
move2({})
move2()
