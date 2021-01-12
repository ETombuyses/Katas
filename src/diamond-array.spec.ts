import { createDiamond } from "./diamond-array";

describe("Create a diamond shape of N x N size", () => {
  it("Should accept odd numbers", () => {
    expect(createDiamond(1)).not.toBe(false);
  });
  it("Should accept odd numbers", () => {
    expect(createDiamond(7)).not.toBe(false);
  });

  it("Should not accept even numbers", () => {
    expect(createDiamond(2)).toEqual(false);
  });
  it("Should not accept even numbers", () => {
    expect(createDiamond(8)).toEqual(false);
  });

  it("Should be an integer", () => {
    expect(createDiamond(3.4)).toEqual(false);
  });
  it("Should be an integer", () => {
    expect(createDiamond(7.9)).toEqual(false);
  });

  it("Should not accept 0", () => {
    expect(createDiamond(0)).toEqual(false);
  });

  it("Should return an bidimentional array [['*']]", () => {
    expect(createDiamond(1)).toEqual([["*"]]);
  });
  it("Should return an bidimentional array of 3", () => {
    expect(createDiamond(3)).toEqual([
      [" ", "*", " "],
      ["*", "*", "*"],
      [" ", "*", " "],
    ]);
  });
  it("Should return an bidimentional array of 5", () => {
    expect(createDiamond(5)).toEqual([
      [" ", " ", "*", " ", " "],
      [" ", "*", "*", "*", " "],
      ["*", "*", "*", "*", "*"],
      [" ", "*", "*", "*", " "],
      [" ", " ", "*", " ", " "],
    ]);
  });
  it("Should return an bidimentional array of 7", () => {
    expect(createDiamond(7)).toEqual([
      [" ", " ", " ", "*", " ", " ", " "],
      [" ", " ", "*", "*", "*", " ", " "],
      [" ", "*", "*", "*", "*", "*", " "],
      ["*", "*", "*", "*", "*", "*", "*"],
      [" ", "*", "*", "*", "*", "*", " "],
      [" ", " ", "*", "*", "*", " ", " "],
      [" ", " ", " ", "*", " ", " ", " "],
    ]);
  });
});
