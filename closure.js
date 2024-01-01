// function outer(){
//     var name = "Purabi";
//     function inner(){
//         console.log(name);
//     }
//     return inner;
// }

// var closure = outer();
// closure();

// function outerFunction(x){
//     function innerFunction(y){
//         return x + y;
//     }

//     return innerFunction;
// }

// const closureExample = outerFunction(10);

// console.log(closureExample(5));
// console.log(closureExample(8));
// console.log(closureExample(10));


// function createCounter(){
//     let count = 0;

//     return {
//         increment: function(){
//             count++;
//         },
//         getCount: function(){
//             return count;
//         }
//     };
// }

// const counter = createCounter();
// counter.increment();
// console.log(counter.getCount());


// function multiplier(factor){
//     return function(x){
//         return x * factor;
//     };
// }

// const double = multiplier(2);
// console.log(double(5));

function exampleVar(){
    if(true){
        var x = 10;
    }

    console.log(x);
}

function exampleLetConst(){
    if(true){
        let y = 20;
        const z = 30;
    }
    console.log(y); //y is not defined
}

exampleVar();  // 10
exampleLetConst();

