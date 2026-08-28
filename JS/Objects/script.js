//Objects: reference data type, which stores named data with key and value pair

// var s1 = {
//     name: 'Akash Das',
//     age:21,
//     city: 'Howrah'
// }
//CRUD -> Create, Read, Update, Delete
// console.log(s1);
// console.log(s1.name);
// console.log(s1.age);
// console.log(s1.city);

// s1.isTopper = true;
// console.log(s1.isTopper);
// console.log(s1);

// delete s1.isTopper;
// console.log(s1);

// var a = Object.keys(s1);
// console.log(a);
// var b = Object.values(s1);
// console.log(b);
// var c = Object.entries(s1);
// console.log(...c);

// var _name = prompt("Enter name: ");
// var _age = Number(prompt("Enter age: "));
// var _city = prompt("Enter city"); 
// var s2 = {_name, _age, _city};
// console.log(s2);

// var s2 = {
//     name: 'Shyam Dhar',
//     age: 21,
//     city: 'Kolkata',
//     isTopper: false,
//     subjects:  ['physics', 'chemistry', 'maths'],
//     marks:{
//         Physics: 89,
//         Chemistry: 81,
//         Maths: 99
//     }
// }

// console.log(s2);
// console.log(s2.name);
// console.log(s2.age);
// console.log(s2.subjects[0],s2.subjects[1],s2.subjects[2]);
// console.log(s2.marks.Physics);

//Function in Object
var robot = {
    name:'Chitti',
    memory:'1 ZB',
    speed: '1 THz',
    isWorking: true,
    greet:(a = 'sir')=>{
        console.log('Helloo',a);
    },
    skills: ['fight','calculation','store'],
    creator : {
        name: 'Vashi',
        age: 42,
        profession: 'scientist'
    }
} 

console.log(robot)
robot.greet('Akash');
console.log(robot.greet());

//console is a object, it returns undefined and prints the thing written in ()
console.log(console.log('Akash'));

//Array is a special type of object, follows sequential order, push operation
//
var arr = [10,20,30,40]
arr['name'] = 50
console.log(arr);
console.log(arr.name);

robot['isWorking'] = false

//seal is used to stop adding more additional properties to object, ie we can't create or delete
Object.seal(robot);
robot.age = 2;
robot.name = 'mitti'
console.log(robot);

// freeze is used to totally stop addition, deletion of properties or values of objects
Object.freeze(robot);
robot.age = 2;
robot.name = 'litti'
console.log(robot);

//Destructuring

var arr = [11, 22, 33, 44, 55]
//rest operator '...a', it takes the rest or remaining elements

var [a,b,...c] = arr;
console.log(a,b,c);

var {name: x, speed: y, ...z } = robot ;
console.log(x,y,z);

//Deep Copy 
var rob_str = JSON.stringify(robot);
var robot2 = JSON.parse(rob_str);
robot2.name = 'Chttti Robo'
robot2.creator.age = 60;
console.log(rob_str);
console.log(robot2);
console.log(robot);

//Shallow copy () from object to object
// var robot1 = {...robot};
// robot1.name = 'chitti',
// robot1.isWorking = true;
// console.log(robot1);

//Changing in objects in robot1 makes change in the objects robot too
// robot1.creator.age = 50;
// console.log(robot);
// console.log(robot1);

//Iteration
for(let a in robot){
    console.log(a);
    console.log(robot[a]);
}