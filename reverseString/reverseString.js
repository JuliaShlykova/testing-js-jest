const reverseString = (str) => {
  let newStr = '';
  let i = str.length-1
  while (i>=0) {
    newStr+=str[i];
    i--;
  }
  return newStr;
};

export default reverseString;