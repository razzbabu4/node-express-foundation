// Local modules

//  const myModule = require('./local-1')
//  console.log(myModule.add(myModule.a, 5));

 const {a, add} = require('./local-1')
 console.log(add(a, 2));

 const {a: a2, add: add2} = require('./local-2')
 console.log(add2(a2, 1, 2));


// built-in modules
const path = require("path")

// console.log(path.dirname("/C:/Projects/learning-node/index.js"));
console.log(path.parse("/C:/Projects/learning-node/index.js"));