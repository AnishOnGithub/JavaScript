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



//events--> This gives the website a dynamic touch

// btn1=document.querySelector("#btn")
// btn1.style.backgroundColor="blue"
// btn.onmouseover=(event)=>{
//     console.log(event)
//     console.log(event.type)
//     console.log(event.clientX,event.clientY)
// }

//event listners-->allows to use multiple events on a element 
//removeeventListener--> example below
// const eventhandler=()=>{
//     console.log("button 1 was clicked")
// }
// btn.addEventListener("click",eventhandler)
// btn.removeEventListener("click",eventhandler)

//q1) create a button which turns light annd dark mode on or off

// btn1=document.querySelector("button")
// console.dir(btn1)

// let screenColour="light"

// btn1.addEventListener("click",()=>{
//     if(screenColour==="light"){
//         screenColour="dark"
//         document.querySelector("body").style.backgroundColor="black"
        
//     }
//     else{
//         screenColour="light"
//         document.querySelector("body").style.backgroundColor="white"
        
//     }
//     console.log(screenColour)
// })



// ------------------------------------------------


//largest number

// let numbers=[22,23,24,25,26]


// let largest = numbers[0];
// for( let i=1; i<numbers.length;i++){
//     if (numbers[i]>largest){
//         largest=numbers[i];
//     }
    
// }

// console.log(largest)


//To print names of male gender

// let userNames=["Anish","Rahul","Priya"]
// let gender=["Male","Male","Female",]

// for(let i=0;i<userNames.length;i++){
//     if (gender[i]=="Male"){
//         console.log(userNames)
//     }
// }

//complex and structured way to solve this 

// const userNames=[{
//     firstName:"Anish",
//     age:"18"
// },{
//     firstName:"Rahul",
//     age:"32"
// },{
//     firstName:"Priya",
//     age:"32"
// }]

// for(let i=0;i<userNames.length;i++){
//     if(userNames[i]["age"]>18){
//         oldPeople=("Old people are ",userNames[i]["firstName"])
//         console.log(oldPeople)
//     }
    
// }

//program to reverse all elements of a given array
// let numbers=[1,2,3,4]
// let reverNum=[];
// for(let i=numbers.length-1;i>=0;i--){
//     reverNume
// }

//function inside a function

// function sum(num1, num2, fnToCall){
//     let result=num1+num2
//     fnToCall(result);
// }

// function displayScreen(){
//     console.log("result")
//  }
//  function displayConsole(){
//     console.dir("noResult")
//  }

// let answer=sum(1,2,displayConsole)




// function sumResult(num1,num2,functionx){
//     let sum=num1+num2;
//     functionx(sum);
// }

// function difResult(num1,num2,functionx){
//     let diff=num1-num2;
//     functionx(diff)
    
// }
// function chooseRelsult(result){
//     console.log(result)
// }

// difResult(5,2,chooseRelsult) 

//upper same code but using a single function

// function operations(a,b,type){
//     if (type=="sum"){
//         result=(a+b)
//         return result
//     }
//     if (type=="minus"){
//         result=(a-b)
//         return result

//     }
// }

// let user=operations(1,2,"sum")
// console.log(result);

//setTimeout fxn

// function greetings(){
//     console.log("hello")
// }

// setTimeout(greetings, 3*1000) 


//inbuilt functions--> Strings

//1)getLength
// function getLength(str){
//     console.log("string: ",str)
//     console.log("length:",str.length)
// }
// getLength("hello world")

//2)indexOf

// function findIndexOf(str,position){
//     console.log("string: ",str)
//     console.log("position", str.findIndexOf(position))
// }
// findIndexOf("Hello its Anish, welcome to my js code","welcome") 

//3)lastIndexOf (WHEN A TARGETED WORD IS PRESENT MORE THAN ONE TIME )

// function lastIndex(str,target){
//     console.log("string: ",str)
//     console.log("the position is: ",str.lastIndexOf(target))

// }

// lastIndex("hello i am anish anish anish","anish")

//4)slice--> gives piece of code between 2 indices

// function getSLice(str,index1,index2){
//     console.log("string: ",str)
//     console.log("After slice: ",str.slice(index1,index2))
// }
// getSLice("hello world",0,4)

//slice-->code
// function cutIt(str,start,end){
//     let newStr="";
//     for(let i=0;i<str.length;i++){
//         if(i>=start,i<=end){
//           newStr=newStr+str[i]
            
//         }
//     }console.log(newStr)
// }
// cutIt("Anish is my name",0,2)

//5)replace
// const lol="hello world"
// console.log(lol.replace("o","js"))

//6)Split
// const value= "I,am,Anish"
// const words= value.split(",")
// console.log(words);


//7)Trim--> remove spaces from start and end
// const value="      Hello Javascript         "
// console.log(value.trim())

//8)toUpperCase & toLowerCase
// const value="Hello Javascript"
// console.log(value.toLowerCase())

//9)parseInt--> converts string to nummber type, ignores words written after a number,ignores decimal

// let num="6.3fdgshj"
// console.log(parseInt(num))

//10)parseFloat--> like parseInt but prints decimal aswel

// console.log(parseFloat(num))



//functions for arrays 

//11)push--> adds element in array at the end
//12)shift--> adds element in array at the start

// const initialArray=[1,2,3];
// initialArray.push(5);
// console.log(initialArray)

//13)pop--> removes element in array at the end
//14)unshift--> removes element in array at the start

// initialArray.pop()
// console.log(initialArray)

//15)concat--> used to club two arrays

// let array1=[1,1,1]
// let array2=[2,2,2]
// console.log(array1.concat(array2))

// function log1(){
//     console.log("hello js")
// }

// function log2(){
//     console.log("hello anish")
// }

// function fnSelector(fn){
//     fn()
// }

// fnSelector(log2)

//16) forEach
// let array=[2,3,4,9]

// for (let i=0;i<array.length;i++){
//    array[i]=array[i]+1
    
// }
// console.log(array)

// array=[1,2,3,4]
// function insider(x){
//     console.log(x+"lol")

// }
// array.forEach(insider)




//class
// let dog={
//     name:"tofu",
//     numLegs:"4",
//     speaks: "bhow bhow"}

//  let cat={
//   name:"paneer",
//   numLegs:"4",
//   speaks: "meow meow"}

//   function animalInfo(animal){
//    console.log("animal "+ animal["name"]+ " "+"\n","It speaks ",animal["speaks"])
//   }
    
// animalInfo(cat)

//using classes

// class animals{
//     constructor(name, legCount, language){
//         this.name=name;
//         this.legCount=legCount;
//         this.language=language;
//     }
//     language(){
//         console.log("hello ", this.language)
//     }
// }

// let dog= new animals("dog",4,"bhaw bhaw")
// let cat= new animals("cat",4,"meow meow")

// console.log("hi there "+dog.language)


// static  functions--> they can be used on a whole class only,  not on  



//Date class in js

// const currentDate = new Date();
// console.log(currentDate.getMonth()+1)
//  console.log(currentDate.getFullYear());

//time taken to execute a program

// function calculateSum(){
//      let sum=0;
//      for(i=0;i<=1000 ;i++)
//         sum=sum+i;
//     console.log("sum=",sum)
// }

// const beforeDate=new Date();
// const beforeTime=beforeDate.getTime()

// calculateSum()

// const afterDate=new Date();
// const afterTime=afterDate.getTime();

// console.log(afterTime-beforeTime)


//JSON--> stores data and does client-server communication
// const user={
//     userName:"anish",
//     age:18,
//     gender: "male"
// }

// const finalStr=JSON.stringify(user)
// console.log(user["userName"])


// function numSq(x){
//     return x*x
// }

// function numCube(x){
//     return x*x*x
// }

// function sqAdd(a,b,fn){
//      a = fn(a)
//      b = fn(b)
//     return a+b
// }
// console.log(sqAdd(2,3,numCube))


//Sync And Aync  functions 

//sync functions--> can perform only one task at a time --> things happen one after the other 

//async functions--> does various tasks and dosent wait for a task to render, as in it renders the next code 

//example for a async function--> setTimeout, readFile

// fs.readFile("temp.txt", "utf-8", function(err, data) {
//     if (err) {
//         console.error("Error reading file:", err);
//         return;
//     }
//     console.log(data);
// });


// let array=[1,2,3,4,5]
// let target=6;

// for( let i=0;i<array.length;i++){
//     for( let j=0;j<array.length;j++){
//     if(array[i]+array[j]===target){
//         console.log(array[j], array[i])}
//     }
    
// }

// const currentMonth=new Date();
// console.log(currentMonth.getMonth());


// callbacks revision
// function square(n){
//     return n*n
// }
// function cube(n){
//     return n*n*n
// }

// function powerSum(a,b,fn){
//     let val1=fn(a);
//     let val2=fn(b);
//     return val1+val2
// }
// let result=powerSum(3,4,square);
// console.log(result)

//sum of 2 areas 
// function areaCircle(a){
    
//     return 3.14*a*a
// }
// function areaRec(a,b){
    
//     return a*b
// }
// function areaTri(a,b){
    
//     return 0.5*a*b
// }

// function areaSum(a,b,c,d,fn,fn2){
//     let val1= fn(a,b);
//     let val2=fn2(c,d)
//     let result= val1+val2
//     return result
// }
// let result=area(1,2,3,4,areaTri,areaCircle)
// console.log(result)

// function sum(a,b){
//     let sum=a+b
//     return sum
// }
// console.log(sum(1,2))

// let ans =0;
// for(let i=0;i<=100;i++){
//     ans= ans + 1; 
// }
// console.log(ans)

// console.log("hi")
// function onDone(){
//     console.log("Click me")
// }
// setTimeout(onDone,5000)
// console.log("welcome to js")