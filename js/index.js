

const user = { name:"gomnam" , age:100};


//reference type
const user2=user;
user2.age= 98;
console.log(user);
console.log(user2);

console.log("*********");
//want to have copy of object with out change main object
const user3={};
for (key in user){
    user3[key]=user[key];
}
user3.age= 96;
console.log(user);
console.log(user3);

console.log("*********");
//assign methode
const user4 = Object.assign({},user);
user4.age=94;
console.log(user);
console.log(user4);


console.log("*********");
//assign methode with object that have prperty ....
const user5 = Object.assign({color:"red"},user);
user5.age=92;
console.log(user);
console.log(user5);

console.log("*********");
//spread operator
const user6={ ...user };
console.log(user);
console.log(user6);


