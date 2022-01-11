# 8-kyu-Grasshopper---Grade-book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'

solution:

function getGrade (s1, s2, s3) {
let sum = (s1 + s2 + s3) / 3;
return 90 <= sum && sum <= 100 ? "A" 
: 80 <= sum && sum < 90 ? "B" 
: 70 <= sum && sum < 80 ? "C" 
: 60 <= sum && sum < 70 ? "D" 
: "F";
  }
