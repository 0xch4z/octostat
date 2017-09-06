export default (n) => {
  const num = parseInt(n);
  return num < 999 ? num :
    `${Math.round( 10 *( num /1000.0 ) ) / 10}k`;
};
