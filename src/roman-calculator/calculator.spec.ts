import { addRomanNumbers } from "./calculator";

describe("Add two roman numbers and return the sum in roman number", () => {
  it("Should return the sum of I + I", () => {
    const firstRomanNumber = "I";
    const secondRomanNumber = "I";

    expect(addRomanNumbers(firstRomanNumber, secondRomanNumber)).toEqual("II");
  });
  it("Should return the sum of I + II", () => {
    const firstRomanNumber = "I";
    const secondRomanNumber = "II";

    expect(addRomanNumbers(firstRomanNumber, secondRomanNumber)).toEqual("III");
  });
  it("Should return the sum of II + II", () => {
    const firstRomanNumber = "II";
    const secondRomanNumber = "II";

    expect(addRomanNumbers(firstRomanNumber, secondRomanNumber)).toEqual("IV");
  });
  it("Should return the sum of I + III", () => {
    const firstRomanNumber = "I";
    const secondRomanNumber = "III";

    expect(addRomanNumbers(firstRomanNumber, secondRomanNumber)).toEqual("IV");
  });
  it("Should return the sum of II + III", () => {
    const firstRomanNumber = "II";
    const secondRomanNumber = "III";

    expect(addRomanNumbers(firstRomanNumber, secondRomanNumber)).toEqual("V");
  });
  // it("Should return the sum of III + III", () => {
  //   const firstRomanNumber = "III";
  //   const secondRomanNumber = "III";

  //   expect(addRomanNumbers(firstRomanNumber, secondRomanNumber)).toEqual("VI");
  // });
});
