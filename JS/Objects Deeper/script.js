'use strict'
// //this
// console.log(this); // global object

// function showThis() {
//     console.log(this); // global object
// }
// showThis();

// var getThis = () => {
//     console.log(this); // global object
// }
// getThis();

// var obj = {
//     name: 'Akash',
//     age: 22,
//     getDetails: () => {
//         console.log(`1`,this);
//     }
// };
// obj.getDetails(); // undefined is undefined years old.

// var person = {
//     name: 'Akash',
//     age: 22,
//     getDetails: function() {
//         console.log(this.name + ' is ' + this.age + ' years old.');
//         var getName = () => {
//             console.log(this);
//             return this.name;
//         };
//         getName();
//     }
// }

// person.getDetails();


var college = {
    name: 'STCET',
    courses: ['CS','IT','EE','ECE','AIML'],
    isGood: true,
    students: 2000,
    slogan:function(){
        console.log('We are STCETIANS');
    }
}

var s1 = {
    name: "Gourab",
    age:22,
    course: 'ECE',
    year:2,
    isTopper:false,
    university:'MAKAUT',
    getIntro: function(year,university){
        console.log(`I am ${year} year student, ${this.name} from ${university}`);
    }
}

var s2 = {
    name: "Rakshita",
    age:23,
    course: 'CS',
    year:3,
    isTopper:true
}

// //Function Sharing

//call

s1.getIntro(2,'MAKAUT');
s1.getIntro.call(s2,3,'IIT');
college.slogan();




