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

  // UC3 - Refactor the Code to write a function to get work hours

  function getWorkingHours(empCheck) {
    switch (empCheck) {
      case IS_PART_TIME:
        return PART_TIME_HOURS;
      case IS_FULL_TIME:
        return FULL_TIME_HOURS;
      default:
        return 0;
    }
  }

  let empHrs = 0;
  empCheck = Math.floor(Math.random() * 10) % 3;
  empHrs = getWorkingHours(empCheck);
  let empWage = empHrs * WAGE_PER_HOUR;
  console.log("Employee Wage: " + empWage);

  // UC4 - Calculating Wages for a Month assuming 20 Working Days in a Month

  const NUM_OF_WORKING_DAYS = 20;
  let totalEmpHrs = 0;
  for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
  }
  let totalEmpWage = totalEmpHrs * WAGE_PER_HOUR;
  console.log("Total Hrs: " + totalEmpHrs + " Emp Wage: " + totalEmpWage);

  // UC5 - Calculate Wages till a condition of total working hours of 160 or max days of 20 is reached for a month

  const MAX_HRS_IN_MONTH = 160;
  let totalWorkingDays = 0;
  totalEmpHrs = 0;
  while (
    totalEmpHrs <= MAX_HRS_IN_MONTH &&
    totalWorkingDays < NUM_OF_WORKING_DAYS
  ) {
    totalWorkingDays += 1;
    empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
  }
  empWage = totalEmpHrs * WAGE_PER_HOUR;
  console.log(
    "Total days: " +
      totalWorkingDays +
      " Total Hrs: " +
      totalEmpHrs +
      " Total Wages: " +
      empWage
  );
}
