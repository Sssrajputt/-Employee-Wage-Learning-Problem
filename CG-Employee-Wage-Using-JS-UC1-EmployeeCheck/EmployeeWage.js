// UC1 - Ability to Check Employee is Present or Absent

// Constant to represent employee absence
const IS_ABSENT = 0;

// Generate a random number to simulate employee check
let empCheck = Math.floor(Math.random() * 10) % 2;

// Check if the employee is absent or present
if (empCheck === IS_ABSENT) {
  console.log("Employee is absent");
} else {
  console.log("Employee is present");

  // UC2 - Ability to Calculate Daily Employee Wage based on part-time or full-time work

  // Constants to represent part-time and full-time work
  const IS_PART_TIME = 1;
  const IS_FULL_TIME = 2;
  const PART_TIME_HOURS = 4;
  const FULL_TIME_HOURS = 8;
  const WAGE_PER_HOUR = 20;

  let empHrs = 0;
  empCheck = Math.floor(Math.random() * 10) % 3;
  switch (empCheck) {
    case IS_PART_TIME:
      empHrs = PART_TIME_HOURS;
      break;
    case IS_FULL_TIME:
      empHrs = FULL_TIME_HOURS;
      break;
    default:
      empHrs = 0;
  }

  let empWage = empHrs * WAGE_PER_HOUR;
  console.log("Employee Wage: " + empWage);
}
