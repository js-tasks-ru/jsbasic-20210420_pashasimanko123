function sumSalary(salaries) {
  let sum = 0;

  for(let item in salaries) {
    if(!isFinite(salaries[item])) continue;
    sum += salaries[item]
  }
  return sum;

}
