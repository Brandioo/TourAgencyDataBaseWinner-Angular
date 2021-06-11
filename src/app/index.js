var greet = ()=>{
  alert('Hello '+getName())
}

var getName=()=>{
  return prompt('Tell me your name: ');
}
greet();

var listItem=document.getElementsByClassName('list-item');
listItem.innerText
console.log(listItem);

var globeVar=43;

function myFunction(){
  var carName="Volvo";

  if(true){

  }
  console.log(carName)
}

let array1 = ['val1']
let array2 = ['val2']
let array3 = ['val3']
let result = [...array1,...array2,...array3];
console.log('...',result)
console.log('concat',array1.concat(array2, array3))


const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
