export const addRomanNumbers = (romanNumber1: string, romanNumber2: string): string => {
  const romanNumbers = [
    { symbol: "I", repeat: 3, count: 0 },
    { symbol: "V", repeat: 1, count: 0 },
    { symbol: "X", repeat: 3, count: 0 },
    { symbol: "L", repeat: 1, count: 0 },
    { symbol: "C", repeat: 3, count: 0 },
    { symbol: "D", repeat: 1, count: 0 },
    { symbol: "M", repeat: 3, count: 0 },
  ];

  let result = "";
  const concatainedNumbers = romanNumber1 + romanNumber2;
  // TODO: modify code to treat each number individually
  // TODO: check if next symbol is greater than the currentSymbol ex: IV

  for (let i = 0; i < concatainedNumbers.length; i++) {
    let currentSymbol = romanNumbers.find((element) => element.symbol === concatainedNumbers[i]);
    let currentSymbolIndex = romanNumbers.findIndex((element) => element.symbol === concatainedNumbers[i]);
    let nextSymbol = romanNumbers[currentSymbolIndex + 1];

    if (currentSymbol.count < currentSymbol.repeat && nextSymbol.count === 0) {
      // if we can add the same symbol
      result += currentSymbol.symbol;
      currentSymbol.count++;
    } else if (nextSymbol.count === 0 && currentSymbol.count > 0) {
      // if we have reached the maximum occurence of the symbol ex: III

      // remove all current symbol occurences ex: "III" --> ""
      result = result.slice(currentSymbol.repeat);
      currentSymbol.count = 0;

      // new result is current symbol + nextSymbol ex: "IV"
      result = result + currentSymbol.symbol + nextSymbol.symbol;
      currentSymbol.count++;
      nextSymbol.count++;
    } else if (nextSymbol.count === 1 && currentSymbol.count === 1) {
      // if we have one previous symbol + currentSymbol ex: IV
      result = result.slice(1);
      currentSymbol.count--;
    }
  }
  return result;
};
