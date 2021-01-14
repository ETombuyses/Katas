/* -------------- V1 - nested arrays ---------- */
/* Write a function that displays a diamond given its width n, a non-nul, odd, natural integer. */

export const createDiamond = (n: number): string[][] | boolean => {
  if (Math.round(n) !== n || n % 2 === 0) return false;

  const diamond: string[][] = [];
  const middle: number = (n + 1) / 2;

  // create each row and adds them to the diamond
  for (let i = 1; i <= n; i++) {
    const starsCount: number = n - Math.abs(middle - i) * 2;
    const blankCount: number = n - starsCount;
    const row: string[] = createRow(blankCount, starsCount);

    diamond.push(row);
  }
  // console.log(diamond);
  return diamond;
};

// fill in a new row with the right amount of blanks and stars
const createRow = (blankCount: number, starsCount: number): string[] => {
  const row: string[] = [];
  fill(row, blankCount / 2, " ");
  fill(row, starsCount, "*");
  fill(row, blankCount / 2, " ");
  return row;
};

const fill = (row: string[], condition: number, string: string): void => {
  for (let i = 0; i < condition; i++) row.push(string);
};
