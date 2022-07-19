const reverseBits = (n) => {
    const reverseNum = Array.from(n).reverse();
    const numLength = reverseNum.length;
    let result = 0;
    reverseNum.forEach((e, i) => {
        result += (2 ** (numLength - 1 - i)) * parseInt(reverseNum[i]);
    });
    return result;
};

console.log(reverseBits('00000010100101000001111010011100'));
