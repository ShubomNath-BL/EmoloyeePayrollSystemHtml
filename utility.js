const stringifyDate = (date) => {
    const options = {day: "numeric", month: "short", year: "numeric"};
    const newdate = !date ? undefined: 
                    new Date(Date.parse(date)).toLocaleDateString("en-GB", options);
    return newdate;
}

const update = (node) => {
    let employeePayrollData = employeePayrollList.find(empData => empData._name == node.id);
    if(!employeePayrollData) return;
    localStorage.setItem("editEmp", JSON.stringify(employeePayrollData));
    window.location.replace(site_properties.add_employee_payroll_page);
}