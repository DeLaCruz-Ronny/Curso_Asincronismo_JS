function sum(n1,n2){
    return n1+n2;
}

function calc(n1,n2,callback){
    return callback(n1,n2);
}

console.log(calc(2,2,sum));

//setTimeout
setTimeout(function (){
    console.log('Probando el setTimeout');
},2000);

function saludar(name){
    console.log(`Hola ${name}`);
}

setTimeout(saludar,2000,'Ronny');