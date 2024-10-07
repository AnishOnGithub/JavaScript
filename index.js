// Arrays

//code to print average marks of the class
// let marks=[92,84,75,40];
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

// let prices=[250,645,300,900,50]
// let discount,discountedPrice, i=0


// for( let price of prices){
//     i++
//     discount=price/10;
//     discountedPrice=price-discount
    
//     console.log(`The price of item ${i} is ${price}rs and the discounted price is ${discountedPrice}rs for a discount of ${discount}rs`)
    
// }



//methods of arrays 

//push --> adds items to the end of the arrays without creating a new array 

// let foodItems= [ "chips, pizza, burger, paneer"]

// foodItems.push("kurkure, spices")

// console.log(foodItems)

//pop --> delete item from end and return it, in the same array

// let foodItems= [ "chips", "pizza", "burger", "paneer"];
// console.log(foodItems);
// let deletedItems= foodItems.pop();
// console.log(foodItems);
// console.log("deleted item is: ",deletedItems)

//toString --> converts arrays to strings 

// let foodItems= [ "chips", "pizza", "burger", "paneer"];

// console.log(foodItems.toString())

// let percentage= [98,75,60,52,41];
// console.log(percentage);

// console.log("Converting to string type=",percentage.toString());



//concat --> joins multiple arrays and returns a new one 


//  let fruit=["apple", "banana", "kiwi"];
//  let veggies=["potato","onion","beetroot"];
//  let dryFruits=["almonds","pista","walnut"]
//  let cart=fruit.concat(veggies,dryFruits)
//  console.log("Fruits and veggies are: ",cart)



//unshift --> add to start 
//shift --> works like pop --> adds to the end 

// fruit.unshift("mango");
// console.log(fruit)
// cart= fruit.unshift("mango");
// console.log(fruit)


//slice--> gives a piece of array or string without changing the main array 


// let fruit=["apple", "banana", "kiwi","mango","guava","lichi","pineapple"];

// console.log(fruit.slice(0,1)) //dosent include the last index

//splice--> this helps in deleting,replacing and adding an array, adding a new item in the array

// let editedList=fruit.splice(1,2,"coconut")

// console.log(fruit)




//Q)Create an array to store companies "bloomberg"," Microsoft","Uber","Ibm","Netflix"

//code to delete the 1st company
// companies= ["Bloomberg"," Microsoft","Uber","Ibm","Netflix"]
// companies.splice(0,1)
// console.log(companies)

//code to remove uber and ola 
// companies.splice(2,1,"Ola")
// console.log(companies)

// to add amazon at the end 
// companies.push("Amazon")
// console.log(companies)
