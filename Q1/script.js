// Compare Two JSON have the same properties without order:-

//JSON format Input

let obj1={name:"person1",age:5}
let obj2={age:5,name:"person1"}

// _is equal method used to a deep comparison between two JSON to determine if they are equivalent
// This method returns a Boolean value
//syntax: _.isEqual( value1, value2);

console.log(_.isEqual(obj1, obj2));


//Another method using stringify,sort and statement:-

// let obj1={name:"person1",age:5}
// let obj2={age:5,name:"person1"}

// let result = JSON.stringify(obj1,Object.keys(obj1).sort());
// let result1 = JSON.stringify(obj2,Object.keys(obj2).sort());

// if(result===result1)
//     {
//         console.log("JSON is equal");
//     }
// else
//     {
//     console.log("JSON not equal");
//     }


    

    
   





 