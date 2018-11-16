const toPx = (n: number) => `${n}px`;

export const grid = 8;
export const multiple = (n: number) => ({
  px: toPx(n * grid),
  n: n * grid,
});
export const px = toPx(grid);
