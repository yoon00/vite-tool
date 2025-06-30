/* void type */
function sayHi(message:string):string{
    return 'hello'
}

function printHi():void{
    console.log('hello');
}

/* never type */
// 존재하지 않는 / 불가능한 타입 / 어떤 값도 정의할 수 없는 타입

function showError(message:string):never{
    throw new Error(message)
}

function loop ():never{
    while(true){

    }
}

function* gen():Generator<number, void, void>{
    let count = 0;
    while(true){
        yield ++count;
    }
}

gen().next()