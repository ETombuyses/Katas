import { createDiamond } from "./diamond-string";

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

  it("Should return '*' if n = 1", () => {
    expect(createDiamond(1)).toEqual("*");
  });
  it("Should return a diamond of 3 x 3 when n = 3", () => {
    expect(createDiamond(3)).toEqual(" * \n***\n * ");
  });
  it("Should return a diamond of 5 x 5 when n = 5", () => {
    expect(createDiamond(5)).toEqual("  *  \n *** \n*****\n *** \n  *  ");
  });
  it("Should return a diamond of 7 x 7 when n = 7", () => {
    expect(createDiamond(7)).toEqual("   *   \n  ***  \n ***** \n*******\n ***** \n  ***  \n   *   ");
  });
});
