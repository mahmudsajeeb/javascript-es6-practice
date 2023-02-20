
const fish ={0
  name: "king Hilsa",
  address: "chotogram",
  color : "red"
}

function getSum(a, b=9){return a+b;} console.log(getSum(2, 7));
const y = x => x*x; const z = y(5);
console.log(z)

const division= num1, num2 => console.log(num1 /num2)

const cars=['toyota', 'honda','mercedes']; 
const newCars= [...cars , 'ferrari']; console.log(newCars)
const arr = (a,b,c) => (a * b * c);
console.log(arr(2,2,2))

const threeLine = `
I am a web developer. 
I love to code. 
I love to eat biryani.

console.log(threeLine)

const defaultPara = (a, b=2)=> a + b
console.log(defaultPara(2));


const friends = {name : "sajib", age : "12"};

const result = friends.name;
console.log(result)

const friend = []; // create an empty array to store friends' names

while (true) {
  const name = "sajib";
  if (name === null) {
    break; // exit the loop if user presses 'Cancel'
  } else {
    friend.push(name); // add the name to the array
  }
}

console.log(friend); // display the final list of friends

const getEvenLengthNames =(friends) =>{
  return friends.filter(name => name.length %2 ===0)
}

const friendsaArra =['sajib',"rasel","alamin", "joynab"];
const frindLength = getEvenLengthNames(friendsaArra);
console.log(frindLength)