// Arabic to Roman converter, 1 through 3999

function convertToRoman(num) {
    if (!num) {
        return undefined;
    }

    const numbers = {
        1: 'I', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX',
        10: 'X', 40: 'XL',
        50: 'L', 60: 'LX', 70: 'LXX', 80: 'LXXX', 90: 'XC',
        100: 'C', 400: 'CD',
        500: 'D', 600: 'DC', 700: 'DCC', 800: 'DCCC', 900: 'CM',
        1000: 'M'
    };

    const numberDecomposeToArray = function (num) {
        const arr = [];
        let div = 10;
        let mult = 1;
        let r = 0;

        if (num == 10) {
            return [[1, 10]];
        }
        if (num == 100) {
            return [[1, 100]];
        }
        if (num == 1000) {
            return [[1, 1000]];
        }

        while (num > 0) {
            r = num % div;
            arr.push([r, mult]);
            num = Math.floor(num / div);
            mult *= 10;
        }
    
        return arr.reverse();
    }

    const arabicNumber = numberDecomposeToArray(num);
    const romanNumber = [];

    console.log(`arabicNumber: ${arabicNumber}`);

    for (let i = 0; i < arabicNumber.length; i++) {
        if (arabicNumber[i][0] < 4) {
            for (let j = 0; j < arabicNumber[i][0]; j++) {
                romanNumber.push(numbers[arabicNumber[i][1]]);
            }
        }
        if (arabicNumber[i][0] >= 4) {
            let n = arabicNumber[i][0] * arabicNumber[i][1];
            romanNumber.push(numbers[n]);
        }
    }

    return romanNumber.join("");
}

console.log(`in: 2337, out: ${convertToRoman(2337)}\n`);
console.log(`in: 276, out: ${convertToRoman(276)}\n`);
console.log(`in: 3276, out: ${convertToRoman(3276)}\n`);
console.log(`in: 420, out: ${convertToRoman(420)}\n`);
console.log(`in: 490, out: ${convertToRoman(490)}\n`);
console.log(`in: 890, out: ${convertToRoman(890)}\n`);
console.log(`in: 10, out: ${convertToRoman(10)}\n`);
console.log(`in: 50, out: ${convertToRoman(50)}\n`);
console.log(`in: 100, out: ${convertToRoman(100)}\n`);
console.log(`in: 500, out: ${convertToRoman(500)}\n`);
console.log(`in: 1000, out: ${convertToRoman(1000)}\n`);
console.log(`in: 11, out: ${convertToRoman(11)}\n`);
console.log(`in: 110, out: ${convertToRoman(110)}\n`);
console.log(`in: 1110, out: ${convertToRoman(1110)}\n`);