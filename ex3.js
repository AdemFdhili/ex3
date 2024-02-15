console.log("PARTIE FILTER :")
console.log("array that has only the numbers that are 5 or greater.")
let array1=[2,5,9,3,7,1,1,8];
let filterarray1 = array1.filter((value,index)=>{
   return value>=5;
})
console.log(filterarray1);



console.log("array that only includes the even numbers")
let array2=[2,5,,3,8,4,6,1,,9,1,];
let filterarray2 = array2.filter((val,index,array)=>val % 2 ==0)
console.log(filterarray2);



console.log("array that only includes those that are 5 characters or fewer in length")
let array3=["adem","ali","abdkrim","mohammed","chaaben"];
let filterarray3 = array3.filter((val,index,array)=>val.length<=5)
console.log(filterarray3)



console.log("array that has filtered out all  the people who are old enough (older than 18) ")
let array4=[
    { name: 'adem', age: 23 },
    { name: 'wissem', age: 17 },
    { name: 'ali', age: 10 },
    { name: 'saleh', age: 40 },
    { name: 'monji', age: 205 }];
let filterarray4 = array4.filter((value,index)=>{
    if(value.age>=18){
    return value.name;
}});
console.log(filterarray4);



console.log("PARTIE REDUCE :")
console.log("Turn an array of numbers into a total of all the numbers")
let array5=[2,5,8,3,7,10,11,8]
let reducearray1 = array5.reduce((acc,item,index)=> {
    return acc + item;
},);
console.log(reducearray1);



console.log("array of numbers into a long string of all those numbers.")
let array6=[1,5,8,9,10,2]
let reducearray2 = array6.reduce((acc,item,index)=>{
    return acc+item.toString();
    
});
console.log(reducearray2);



console.log(" array of voter objects into a count of how many people voted")
let array7=[
    { name: 'adem', vote: true },
    { name: 'wissem',vote:false },
    { name: 'ali', vote:false },
    { name: 'saleh', vote:true },
    { name: 'saleh2', vote:true },
    { name: 'saleh3', vote:false },
    { name: 'saleh4', vote:false },
    { name: 'saleh5', vote:true },
    { name: 'saleh6', vote:false },
];
let reducearray3 = array7.reduce((acc,item,index)=>{
    if (item.vote) {
        return acc + 1;
        }
       return acc
},0);
console.log(reducearray3)





console.log("Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once")
let array8 = [
    { name: 'Laptop', price: 3200 },
    { name: 'Headphones', price: 150 },
    { name: 'Smartphone', price: 800 },
    { name: 'Tv', price: 2000 }
  ];
  
 let reducearray4 = array8.reduce((acc, Item) => {
    return acc + Item.price;
  },0);
  
  console.log(reducearray4);


























































