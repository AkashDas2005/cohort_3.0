 var arr = [10,25,30,90,40,45]
// arr[3]=35;
// arr[arr.length-1] = 40;
// console.log(arr);
// Mutable operations
// arr.push(45)
// console.log(arr);
// arr.pop();
// console.log(arr);
 arr.unshift(5);
 console.log(arr);
 arr.shift();
 console.log(arr,1);
 arr.splice(1,2);
console.log(arr);
arr.splice(1,0,20,30); 
console.log(arr);
// arr.sort();
// console.log(arr);
// arr.sort((a,b)=>a=b);
// console.log(arr);
// arr.reverse();
// console.log(arr);
// var n = 5;
// var arr1 = new Array(n);
// console.log(arr1);

// var arr2 = [];
// for(let i=0;i<n;i++){
//     arr2.push(i+1);
// }
// console.log(arr2);

//Immutable Operation
// var arr3 = [54,64,37,92,55,10,34]
// var arr4 = arr3.sort().slice(1,5);
// console.log(arr4);
// var arr5 = arr3.concat(arr4);
// console.log(arr5);
// console.log(arr3.includes(10));
// console.log(arr3.includes(40));
// console.log(arr3.indexOf(54));
// console.log(arr3.indexOf(69));

// var str = arr3.join(",")
// console.log(str);

// var arr6 = str.split(",");
// console.log(arr6);

// var arr7 = arr3;
// console.log(arr7);

// arr7.push(69);
// console.log(arr7, arr3);

// var arr8 = [...arr3];
// arr8.push(100);
// console.log(arr8);

//Part 2
// var n = 6;
// var arr2 = [];
// for(let i=0;i<n;i++){
//     arr2.push(i+1);
// }
// var total = 0 
// arr2.forEach((elements,index)=>{
//     total+=elements;
//     console.log(index)
// })
// console.log(total);


// var users = ['Ram', 'Shyam', 'Jodu', 'Modhu']

// function greet(a,i){
//     return (`${i+1}. Hello ${a} sir`);
// }

// var newuser = users.map(greet);
// console.log(newuser);

// var marks = [10,65,73,39,30,75,69,21,28,65,98,17,78,87,85,96,29,79,100]
// console.log(marks.length);

// var pass = marks.filter((a)=>{
//     return a>=30
// })
// console.log("Passed Students' numbers are: ",pass);

// var topper = marks.filter((a)=>{
//     return a>=80
// })

// console.log("Toppers' numbers are", topper);

// var price = [4,98,6,54,67,34,62,65,4]
// var max = price.reduce(( acc,value)=>{
//     if(value>acc)
//         return value
//     return acc
// },0)

// console.log(max);

// var c = price.find((a)=>a==105)
// console.log(c);
