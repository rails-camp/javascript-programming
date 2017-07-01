"100" + 42; // "10042"
42 + "100"; // "42100"
"100" - 42; // 58
100 + null; // 100

var ageOne = 12;
String(ageOne); // '12'
ageOne.toString(); // '12'

var ageTwo = '33';
Number(ageTwo); // 33
parseInt(ageTwo); // 33
parseFloat(ageTwo); // 33
+ ageTwo; // 33
parseInt('5555555555 is my phone number'); // 5555555555
parseInt('foo 5555555555 is my phone number'); // NaN
Number("100") + 42; // 142

Number(true); // 1
Number(false); // 0
