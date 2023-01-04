export const numberWithCommas = (x: string) => {
  const xx = parseFloat(x).toFixed(3);
  return xx.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
