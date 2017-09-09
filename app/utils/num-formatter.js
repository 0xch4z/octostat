export default (n) => {
  const num = parseInt(n);
  if (994500 < num) {
    return `${Math.round(10 * (num / 1000000.0)) / 10}m`;
  } else if (945 < num) {
    return `${Math.round(10 * (num / 1000.0)) / 10}k`;
  } else {
    return num;
  }
};
