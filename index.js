// Arrays

//code to print average marks of the class
let marks=[92,84,75,40];
console.log("The marks of the students are as follows:" ,marks)


let sum=0;
for(let i=0; i< marks.length; i++){
    sum=sum+marks[i];
}
let average= sum/marks.length;
console.log(average);