function factorial(n) {

  let sum = 1;

  if(n === 1) {
    return n;
  }
  for(let i = n;  i >= 1; i--)  {
    sum *= i;
  }
  return sum;
}
