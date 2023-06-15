let salaries = [3000, 4000, 5000, 10000];

//Map Method
let newSalaries = salaries.map(
  (Salary = (e) => {
    let updatedSalary = e / 2;
    return updatedSalary + e;
  })
);

console.log(newSalaries);

//Filter Method
