//prints out all even number between 1 and 10
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//counts 10 downwards
var count = 10;

while (count >= 1) {
  console.log(count);
  count--;
}

//prints the number 5 once even though the condition is false
var number = 5;
 
do {
  console.log(5);
} while (number > 10);