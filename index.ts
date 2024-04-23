#! /usr/bin/env node
import inquirer from "inquirer";

const answers: {
  sentence: string;
} = await inquirer.prompt([
  {
    name: "sentence",
    message: "please enter your sentence to count the words",
    type: "input",
  },
]);

const words = answers.sentence.trim().split(" ");

// console.log(words);

console.log(
  "------------------********************************************************************-------------"
);

console.log(`\n \n \t  your sentence word count is ${words.length}\n`);

console.log("\t thankyou for using words counter \n \n");
console.log(
  "------------------********************************************************************-------------"
);
let condition = true;
while (condition) {
  let ask = await inquirer.prompt({
    name: "permission",
    type: "confirm",
    message: "do you want to count more words?",
    default: "false",
  });
  if (ask.permission === true) {
    let addMore = await inquirer.prompt({
      name: "ask",
      type: "input",
      message: "please enter your sentence to count words : ",
    });
    let add = addMore.ask.trim().split(" ");
    console.log(
      "------------------********************************************************************-------------"
    );
    console.log(`\n \n \t your sentence has ${add.length} words`);
    console.log(`\n \n \t thanyou for using word counter \n \n`);
    console.log(
      "------------------********************************************************************-------------"
    );
  } else {
    console.log(`thankyou for using word counter \n see ya later ...!`);
  }
  condition = ask.permission;
}
