// Code your solution here

function findMatching(myArr, string) {
  let driver = myArr.filter((i) => i.toUpperCase() === string.toUpperCase());
  return driver;
}

function fuzzyMatch(myArr, string) {
  let driver = myArr.filter((i) => i.charAt(0) === string.charAt(0));
  return driver;
}

function matchName(myArr, string) {
  let names = myArr.filter((obj) => obj.name === string);
  return names;
}
