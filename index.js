// Arrays

//code to print average marks of the class
let marks=[92,84,75,40];
// console.log("The marks of the students are as follows:" ,marks)


// let sum=0;
// for(let i=0; i<marks.length; i++){
//     sum=sum+marks[i];
// }
// let average= sum/marks.length;
// console.log(average);


//using for of loop

// let sum=0

// for (let mark of marks){
//  sum+=mark;
// }
// console.log(sum);

// let countries=["india","norway","us","uk"];
// console.log("The countries are: ")
// for (let country of countries){
    
//     console.log(country);
// }

//average of class marks usinf for loop

// marksOfStudnets=[85,97,44,37,76,60];
// let sum =0;
// for(i=0;i<marksOfStudnets.length;i++){
//   sum=sum+marksOfStudnets[0];
// }
// console.log("the total marks of the class:",sum);
// let average=sum/marksOfStudnets.length

// console.log("the average of the class is: ",average)

//average marks of the class using for off loop

// marksOfStudnets=[85,97,44,37,76,60];
// let sum=0;
// for(let mark of marksOfStudnets){
//    sum=sum+mark;
   
// }
// console.log(sum);
// let average=sum/marksOfStudnets.length;
// console.log("The average of the class is ",average);

//A shop has a discount of 10% on each item you buy, calculate the discounted price

let prices=[250,645,300,900,50]
let discount,discountedPrice, i=0


for( let price of prices){
    i++
    discount=price/10;
    discountedPrice=price-discount
    
    console.log(`The price of item ${i} is ${price}rs and the discounted price is ${discountedPrice}rs for a discount of ${discount}rs`)
    
}

