var age = 30;

if (age <= 10) {
  console.log('You can eat from the kid menu');
  console.log('Not old enough to drive');
  console.log('Not old enough to rent a car');
} else if (age > 10 && age < 25) {
  console.log('Adult menu time for you');
  console.log('You can drive');
  console.log('Not old enough to rent a car');
} else if (age >= 25) {
  console.log('Adult menu time for you');
  console.log('You can drive');
  console.log('You can rent a car');
}
