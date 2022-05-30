function roundError(num) {
  return parseFloat(num.toFixed(2));
}

function checkCashRegister(price, cash, cid) {
  const moneyUnits = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1.0,
    "FIVE": 5.0,
    "TEN": 10.0,
    "TWENTY": 20.0,
    "ONE HUNDRED": 100.0
  };

  const changeValues = {
    "PENNY": 0,
    "NICKEL": 0,
    "DIME": 0,
    "QUARTER": 0,
    "ONE": 0,
    "FIVE": 0,
    "TEN": 0,
    "TWENTY": 0,
    "ONE HUNDRED": 0
  };

  let output = {status: "", change: []};
  let change = cash - price;
  let cidSum = cid.reduce((a, b) => a + b[1], 0);

  if (cidSum - change < 0) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }
  if (cidSum - change == 0) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }

  for (let i = cid.length-1; i >= 0;) {
    let val = moneyUnits[cid[i][0]];

    if (change >= val && cid[i][1] > 0) {
      change = roundError(change - val);
      cid[i][1] = roundError(cid[i][1] - val);
      changeValues[cid[i][0]] = roundError(changeValues[cid[i][0]] + val);
    } else {
      i--;
    }
  }

  if (change) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  output.status = "OPEN";
  output.change = Object.entries(changeValues).reverse().filter(e => e[1] > 0);
  return output;
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));