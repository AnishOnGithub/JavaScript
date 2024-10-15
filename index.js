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


//functions -->does a same and perticular work inside a code like .log, .touppercase and ends with () 
//with function we dont need to repeat the same code again and again just by typing the function we can get the code
//myIndex acts as a calling statement 

// function myIndex(message){
// //    console.log("Anish")
//     console.log(message)
// }
// myIndex("i love js");

//sum using functions 

// function sum(a,b){
//   s=a+b
//   return s;
// }

// function mult(a,b){
//     return a*b
// }


//arrow function --> compact way for writting a function

// const arrow=(a,b)=>{
//     console.log(a+b)
// }
// console.log(arrow)

// const printHello=() =>{
//     console.log("hello")
// }

//Q) Create a function using the "function" keyword that takes a string as an argumwnt and returns the number of vowel in the string 

// function countVowels(str){
//     let count=0;
//     for(const char of str){
       
        
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++
           
//         }
       
//     }
    
//     console.log(count)
// }


//forEach function--> directly used for aarays as wel as strings

// let array=[1,2,3]

// array.forEach(function printVal(num){
//     console.log(num);
// });



// //using arrow

// arrays.forEach((val)=>{
//     console.log(val.toUpperCase());
// })


//Higher order function--> functions which take have other parameters inside of them or return another function as their output like forEach

//Q) for an array of number print the square for each value using forEach loop

// val=[1,2,3,4,5]

// val.forEach((num)=>{
//     console.log(num*num)
// })

// val= [1,2,3,4,5]

// val.forEach(function sq(num){
//    console.log(num*num)
// })


//map function--> used to create a new array which is 
// let nums=[1,2,3,4,5]
// newArray=nums.map((val)=>{
//     console.log(val*val)
// })

// console.log(nums)


//filter methods--> used to arrange and filterate array indices  

// let numbers=[1,2,3,4,5,6,7,8,9]
// let evenNos=numbers.filter((val)=>{
//     return val%2===0
// })
// console.log(evenNos) 


//Reduce method--> performs some operation and reduces the array to a single value 

// numArray=[1,2,3];
// numSum=(numArray.reduce((result,current)=>{
//     return result > current ?  result: current

// }
// ))
// console.log(numSum)


// addition using reduce function

// numArray=[1,2,3,4,5,6,7,8,9]

// sum=(numArray.reduce((previous,result)=>{
//     return previous+result
// }
// ))
// console.log(sum)

//Practice questions on arrays and functions 

//1) Filter out marks of students that scored more than 90 marks 

// marks=[80,79,97,96,58,92]
// val=(marks.sort((i)=>{
// return i>90;
// }))
// console.log(val)

//2) Take a number n as a input from user. Create an array of number from 1 to n. Use the reduce method to calculate the sum of all numbers in the array. Use the reduce methond to calculate product of all the numbers in the array 

// let n=prompt("Enter a number: ");

// let array=[];
//  for(let i=0;i<=n;i++){
//     array[i]=i;
//  }

//  console.log(array)

//  finalSum=(array.reduce((previous,result)=>{
//     return previous+result 
//  }))

//  console.log("Sum of the numbers is ",finalSum)

//  //product 

//  finalproduct=(array.reduce((previous,result)=>{
//     return previous*result
//  }))

//  console.log("Product of the numbers is ", finalproduct)


//---------------------------------------------------------------------
//---------------------------------------------------------------------


//DOM-Document Object Model
//dom is a way to access html code through javascript, it has a tree like structure in which it stores all elements of html

// console.log(document.body) //prints all the cod ein html body as it is 
// console.dir(document.body) //prints all functions availble in html js 


//accessing elements
//1) getElementById gives functions a unique id

// let heading=document.getElementById("h1Tag")
// console.dir(heading)



//2) getElementsByClassName allows to group multiple functions by giving a same class

// let heading=document.getElementsByClassName("intro")
// console.dir(heading)



//3) getElementsByTagName allows to edit all the elements with a standard tag like p, h1, h2,etc

// let heading=document.getElementsByTagName("p")
// console.dir(heading)


// 4) querySelectorAll allows to use all the functions like tag, class, id together 
//returns node list

// let Tags=document.querySelector("p")
// console.dir(Tags)
// console.log(Tags)


//Properties of elements

// 1) tagName --> used to print the tag of a specific function

// let Tags=document.querySelector("#intro1")
// console.log(Tags.tagName)




// 2)innerText= returns text context and children of the elements

// inner text has  3 types--> i)element, ii) comment iii)text but element node is generally of more use 

// let text=document.querySelector("body").lastChild;
// console.dir(text);




//3)  InnerHtml--> prints the code of html aswel inclusing the inner text
// let text=document.querySelector("body").innerHTML;
// console.dir(text)

//4) textContent--> shows the hidden elements on console tab


//Q1
// let heading=document.querySelector("h2")
// console.dir(heading)

// heading.innerText=heading.innerText+" from earth"

// let heading=document.querySelectorAll(".box")
// // console.log(heading)
// // heading[0].innerText="new heading 1"
// // heading[1].innerText="new heading 2"
// // heading[2].innerText="new heading 3"

// //using loops
// let i=0
// for(div of heading){
 
//     div.innerText=("New Value "+ i)
//     i++
//     console.dir(div.innerText)
// }

// let docVal= document.querySelector("link")
// console.dir(docVal)

//getArrtribute prints the value of the attribute

// let atrributeVal=docVal.getAttribute("rel")
// console.dir(atrributeVal)
// let atrributeVal2=docVal.getAttribute("href")
// console.dir(atrributeVal)

//setAttribute --> This element is used to change the value of the atrribute

// let docVal= document.querySelector("div")
// console.dir(docVal)

// let atrributeVal=docVal.setAttribute("class","className")
// console.dir(atrributeVal)
// console.dir(body)


//style attribute--> gives the css code/ gives the styling of a node 

// let style= document.querySelectorAll("div")
// style.forEach(div => {
//     div.style.backgroundColor="blue"
// });

//Insert Elments--> This allows the user to insert elelments--> 4 types

//node.append(element)--> adds at the end of node (inside)
//node.prepend(element)--> adds at the start of node (inside)
//node.before(element)--> adds at the end of node (inside)
//node.after(element)--> adds at the start of node (outside)

// let button=document.createElement("h1")
// button.innerText="Punch me!"

// let div=document.querySelector("div1")
// div.prepend(button)
// console.log(button)

//node.remove --> To remove any element
// let para=document.querySelector("div1")
// para.remove()

//q1 
// let newBtn=document.createElement("button")
// newBtn.innerText="Click me"
// console.log(newBtn)

// newBtn.style.backgroundColor="blue"
// newBtn.style.color="white"
// console.log(newBtn)
// document.querySelector("body").append(newBtn)

//classList-->list of all classes of the element-->adds styling from css