// function outer(){
//     var name = "Purabi";
//     function inner(){
//         console.log(name);
//     }
//     return inner;
// }

// var closure = outer();
// closure();

function outerFunction(x){
    function innerFunction(y){
        return x + y;
    }

    return innerFunction;
}

const closureExample = outerFunction(10);

console.log(closureExample(5));
console.log(closureExample(8));
console.log(closureExample(10));