// shifting by 5
const n = 5;

// str.charCodeAt(index); charAt; String.fromCharCode(charCode1,charCode2,...)

const bigCase = (code) => {
  if(code<=90-n) {
    return code+n;
  } else {
    return 65+n-(90-code)-1;
  };
};

const littleCase = (code) => {
  if(code<=122-n) {
    return code+n;
  } else {
    return 97+n-(122-code)-1;
  };
};

const caesar = (str) => {
  let encryptedStr = '';

  for (let i=0; i<str.length; i++) {
    let code = str.charCodeAt(i);
     if((code>=65)&&(code<=90)) {
      encryptedStr+=String.fromCharCode(bigCase(code));
    } else if ((code>=97)&&(code<=122)) {
      encryptedStr+= String.fromCharCode(littleCase(code));
    } else {
      encryptedStr+=str[i];
    }
  }

  return encryptedStr;
}

export default caesar;