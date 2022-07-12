let sum = 0;

for (let i = 1; i <= 20; i++) {
  //   console.log(i);
  sum = sum + i;
  console.log(sum);
}

console.log("----------------------------------");

// for (let i = 1; i <= 5; i++) {
//   console.log(
//     `There ${i < 2 ? "is" : "are"} ${i} bottle${
//       i < 2 ? "" : "s"
//     } of beer on the table.`
//   );
// }

for (let i = 1; i <= 5; i++) {
  if (i == 1) {
    console.log(`There is ${i} bottle of beer on the table.`);
  } else {
    console.log(`There are ${i} bottles of beer on the table.`);
  }
}

console.log("----------------------------------");

for (let i = 0; i <= 20; i++) {
  //   console.log(i);
  if (i % 2 === 0) {
    console.log(i, "is even");
  } else {
    console.log(i, "is odd");
  }
}

let result = 0;
for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= 10; j++) {
    result = j * 9;
  }
  console.log(result);
}
