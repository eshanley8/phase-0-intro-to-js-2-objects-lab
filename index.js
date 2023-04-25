// Initialize employee object
const employee = {
    name: 'John Doe',
    streetAddress: '123 Main St'
  };
  
  // Function to update employee object non-destructively
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  // Function to update employee object destructively
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete key-value pair from employee object non-destructively
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete key-value pair from employee object destructively
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }