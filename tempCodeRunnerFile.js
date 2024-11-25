function myTimeout(fn,duration){
    setTimeout(fn,duration)
}
myTimeout(function(){
    console.log("hi")
}),5000