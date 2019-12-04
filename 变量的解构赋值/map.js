var map = new Map()
map.set('first', 'yi');
map.set('second', 'er');

console.log(map);

for (const [key,value] of map) {
    console.log(key + " is " + value);
    
}