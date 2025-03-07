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

  // UC6 - Store the Daily Wage along with the Total Wage

  function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
  }

  const MAX_HRS_IN_MONTH = 160;
  const NUM_OF_WORKING_DAYS = 20;
  let totalEmpHrs = 0;
  let totalWorkingDays = 0;
  let empDailyWageArr = [];
  let empDailyWageMap = new Map();
  let empDailyHrsMap = new Map();
  let empDailyHrsAndWageArr = [];

  while (
    totalEmpHrs <= MAX_HRS_IN_MONTH &&
    totalWorkingDays < NUM_OF_WORKING_DAYS
  ) {
    totalWorkingDays += 1;
    empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    let dailyWage = calcDailyWage(empHrs);
    empDailyWageArr.push(dailyWage);
    empDailyWageMap.set(totalWorkingDays, dailyWage);
    empDailyHrsMap.set(totalWorkingDays, empHrs);
    empDailyHrsAndWageArr.push({
      dayNum: totalWorkingDays,
      dailyHours: empHrs,
      dailyWage: calcDailyWage(empHrs),
      toString() {
        return `Day ${this.dayNum}: Hours: ${this.dailyHours}, Wage: ${this.dailyWage}`;
      },
    });
  }

  let totalEmpWage = calcDailyWage(totalEmpHrs);
  console.log(
    "Total Days: " +
      totalWorkingDays +
      " Total Hrs: " +
      totalEmpHrs +
      " Total Emp Wage: " +
      totalEmpWage
  );
  console.log("Daily Wages: " + empDailyWageArr);
  console.log("Daily Wage Map: " + empDailyWageMap);
  console.log("Showing Daily Hours Worked and Wage Earned: ");
  console.log(empDailyHrsAndWageArr);

  // UC7 - Use the Daily Wage Array to perform various operations using Array Helper Functions

  // UC 7A: Calculate total Wage using Array forEach traversal or reduce method
  totalEmpWage = 0;
  empDailyWageArr.forEach((dailyWage) => (totalEmpWage += dailyWage));
  console.log(
    "Total Days: " +
      totalWorkingDays +
      " Total Hrs: " +
      totalEmpHrs +
      " Emp Wage: " +
      totalEmpWage
  );

  function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
  }
  console.log("Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));

  // UC 7B: Show the Day along with Daily Wage using Array map helper function
  let dailyCounter = 0;
  function mapDayWithWage(dailyWage) {
    dailyCounter++;
    return dailyCounter + " = " + dailyWage;
  }
  let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
  console.log("Daily Wage Map:");
  console.log(mapDayWithWageArr);

  // UC 7C: Show Days when Full time wage of 160 were earned
  function fulltimeWage(dailyWage) {
    return dailyWage === 160;
  }
  let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
  console.log("Daily Wage Filter When Fulltime Wage Earned:");
  console.log(fullDayWageArr);

  // UC 7D: Find the first occurrence when Full Time Wage was earned using find function
  function findFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
  }
  console.log(
    "First time Fulltime wage was earned on Day: " +
      mapDayWithWageArr.find(findFulltimeWage)
  );

  // UC 7E: Check if Every Element of Full Time Wage is truly holding Full time wage
  function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
  }
  console.log(
    "Check All Element have Full Time Wage: " +
      fullDayWageArr.every(isAllFulltimeWage)
  );

  // UC 7F: Check if there is any Part Time Wage
  function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
  }
  console.log(
    "Check If Any Part Time Wage: " + mapDayWithWageArr.some(isAnyPartTimeWage)
  );

  // UC 7G: Find the number Of days the Employee Worked
  function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays + 1;
    return numOfDays;
  }
  console.log(
    "Number of Days Emp Worked: " + empDailyWageArr.reduce(totalDaysWorked, 0)
  );

  // UC8 - Store the Day and the Daily Wage along with the Total Wage using Map

  function calcTotalWageFromMap(totalWage, dailyWage) {
    return totalWage + dailyWage;
  }

  console.log(
    "Emp Wage Map totalWages: " +
      Array.from(empDailyWageMap.values()).reduce(calcTotalWageFromMap, 0)
  );

  // UC9 - Use the Daily Wage Map and Daily Hour Map to perform operations using Arrow Functions

  // UC 9A: Calculate total Wage and total hours worked
  const findTotal = (total, dailyVal) => total + dailyVal;
  let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
  let totalSalary = empDailyWageArr
    .filter((dailyWage) => dailyWage > 0)
    .reduce(findTotal, 0);

  console.log(
    "Emp Wage with Arrow: Total Hours: " +
      totalHours +
      " Total Wages: " +
      totalSalary
  );

  // UC 9B: Show the full working days, part working days, and no working days
  let nonWorkingDays = [];
  let partWorkingDays = [];
  let fullWorkingDays = [];

  empDailyHrsMap.forEach((value, key) => {
    if (value === 8) fullWorkingDays.push(key);
    else if (value === 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
  });

  console.log("Full Working Days: " + fullWorkingDays);
  console.log("Part Working Days: " + partWorkingDays);
  console.log("Non-Working Days: " + nonWorkingDays);

  // UC10 - Store the Day, Hours Worked and Wage Earned in a single object
  console.log(
    "Showing Daily Hours Worked and Wage Earned: " + empDailyHrsAndWageArr
  );

  // UC11 - Perform Object operations using Arrow Functions

  // UC 11A: Calculate total Wage and total hours worked
  totalWages = empDailyHrsAndWageArr
    .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyWage > 0)
    .reduce(
      (totalWage, dailyHrsAndWage) => (totalWage += dailyHrsAndWage.dailyWage),
      0
    );

  totalHours = empDailyHrsAndWageArr
    .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyHours > 0)
    .reduce(
      (totalHours, dailyHrsAndWage) =>
        (totalHours += dailyHrsAndWage.dailyHours),
      0
    );
  console.log("Total Hours: " + totalHours + " Total Wages: " + totalWages);

  // UC 11B: Show the full working days using foreach
  process.stdout.write("Logging full work days: ");
  empDailyHrsAndWageArr
    .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyHours == 8)
    .forEach((dailyHrsAndWage) =>
      process.stdout.write(dailyHrsAndWage.toString() + "\n")
    );

  // UC 11C: Show Part working days using Map by reducing to String Array
  let partWorkingDayStrArr = empDailyHrsAndWageArr
    .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyHours == 4)
    .map((dailyHrsAndWage) => dailyHrsAndWage.toString());

  console.log("Part Working Days String: " + partWorkingDayStrArr);

  // UC 11D: Show Non-Working days using Map by reducing to Number Array

  let nonWorkingDaysNums = empDailyHrsAndWageArr
    .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyHoura == 0)
    .map((dailyHrsAndWage) => dailyHrsAndWage.dayNum);

  console.log("Non-Working Days Nums: " + nonWorkingDaysNums);
}
