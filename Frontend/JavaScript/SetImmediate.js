function add(a,b){
    console.log(a+b);
}

setTimeout(()=>{
    add(6,3);
    console.log("Set Timeout Excecuted");
});

setImmediate(()=>{
    add(2,3);
    console.log("Set Immediate Executed");
})


process.nextTick(()=>{
    add(90,100);
    console.log("Proess.nextTick() is called");
});

console.log("Program Ended");