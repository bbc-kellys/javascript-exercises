/* Write function bmi that calculates body mass index (bmi = weight / height2).
if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"
*/
const bmi = (weight, height) => {
  const bmaye = weight/Math.pow(height, 2);
  if (bmaye <= 18.0) return 'Underweight';
  if (bmaye <= 25.0) return 'Normal';
  if (bmaye <= 30) return 'Overweight';
  return 'Obese';
}

/* 
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Note for F#: The input will be of (int list list) which is a List<List>

Example Input
[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
*/
const openOrSenior = (data) => data.map(([age, handicap]) => {
  return age >= 55 && handicap > 7 ? 'Senior' : 'Open';
});


/*
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note:
Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.
*/
const nbYear = (p0, percent, aug, p) => {
  let count = 0;
  while (p0 < p) {
    p0 = p0 + p0*(percent/100) + aug;
    count ++;
  }
  return count;
}

/* 
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:

findNextSquare(121) --> returns 144
findNextSquare(625) --> returns 676
findNextSquare(114) --> returns -1 since 114 is not a perfect square

*/
const findNextSquare = (sq) => {
  const newSqrt = Math.pow((Math.sqrt(sq) + 1), 2);
  return newSqrt % 1 === 0 ? newSqrt : -1;
}

/*
I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++
*/
const generateShape = (integer) => {
  let square = '';
  for (j=0; j<integer; j+=1) {
    for (i=0; i<integer; i+=1) {
      square += '+';
    }
    square += '\n';
  }
  return square.replace(/\n$/, "");
}

const generateShape = (n) => {
  return ("+".repeat(n)+"\n").repeat(n).trim()
}

/*
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
Have fun!
*/

const oddOrEven = (array) => {
  const sum = array.reduce((a,b) => a + b, 0);
  if (sum % 2 !== 0) return 'odd';
  return 'even';
}

// refactored to:
const oddOrEven = (array) => array.reduce((a, b) => a + b, 0) % 2 !== 0 ? 'odd' : 'even';

/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

const highAndLow = (numbers) => {
  const nums = numbers.split(' ');
  return `${Math.max(...nums)} ${Math.min(...nums)}`;
}