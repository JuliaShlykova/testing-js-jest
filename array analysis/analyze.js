const analyze = (arr) => {
  const sum = arr.reduce((sum,a) => sum+a,0);
  const length = arr.length;
  const average = sum/length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return {length, average, min, max};
};

export default analyze;