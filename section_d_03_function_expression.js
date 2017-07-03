var greeting = function () {
 return "Hi there!";
};

var age = 4;

if (age <= 10) {
  var buildMenu = function () {
    return "Kids' Menu";
  };
  
  function wrongMenuBuilder () {
    return "Wrong Kids' Menu";
  }
  
  console.log(buildMenu());
  console.log(wrongMenuBuilder());
}
