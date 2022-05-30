function telephoneCheck(str) {
  let re = /^(1\s?)?(\((\d{3})\)|\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
  return re.test(str);
}

console.log(telephoneCheck("1 555 555 5555"));