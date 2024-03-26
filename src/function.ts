
function sum(n1: number, n2: number) {
    return n1 + n2;
}

// void 타입 반한타입은 
function printResult( num: number ): void {
    console.log('Result: '+ num );
}

console.log(printResult( sum(5,12) ));
// someValue: undefined;


let combineValues: (a: number, b:number) => number;
combineValues = sum ;

console.log(combineValues(8,8));
