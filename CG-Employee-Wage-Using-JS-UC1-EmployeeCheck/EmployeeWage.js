// Constant to represent employee absence
const IS_ABSENT = 0;

// Generate a random number to simulate employee check
let empCheck = Math.floor(Math.random() * 10) % 2;

// Check if the employee is absent or present
if (empCheck === IS_ABSENT) {
  console.log("Employee is absent");
} else {
  console.log("Employee is present");
}
