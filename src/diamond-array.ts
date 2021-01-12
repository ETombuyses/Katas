/* -------------- V1 - nested arrays ---------- */
/* Write a function that displays a diamond given its width n, a non-nul, odd, natural integer. */

export const createDiamond = (n: number): string[][] | boolean => {
  if (Math.round(n) !== n || !(n % 2 > 0)) return false;

  const diamond: string[][] = [];
  const middle: number = (n + 1) / 2;

  for (let i = 1; i <= n; i++) {
    const row: string[] = [];
    const starsCount: number = n - Math.abs(middle - i) * 2;
    const whiteCount: number = n - starsCount;

    fillRow(row, whiteCount, starsCount);
    diamond.push(row);
  }
  console.log(diamond);
  return diamond;
};

const fillRow = (row: string[], whiteCount: number, starsCount: number): void => {
  fill(row, whiteCount / 2, " ");
  fill(row, starsCount, "*");
  fill(row, whiteCount / 2, " ");
};

const fill = (row: string[], condition: number, string: string): void => {
  for (let i = 0; i < condition; i++) row.push(string);
};
