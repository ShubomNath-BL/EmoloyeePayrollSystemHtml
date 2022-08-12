let employeePayrollList;
window.addEventListener("DOMContentLoaded", (event) => {
    employeePayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = employeePayrollList.length;
    createInnerHtml();
    localStorage.removeItem("editEmp");
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem("EmployeePayrollList") ?
                                JSON.parse(localStorage.getItem("EmployeePayrollList")) : [];
}

const createInnerHtml = () => {
    if(employeePayrollList.length == 0) return;
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th>"+
                        "<th>Start Date</th><th>Actions</th>"
    let innerHtml = `${headerHtml}`
    for(const employeePayrollData of employeePayrollList){
        innerHtml = `${innerHtml}
        <tr>
            <td><img class="profile" alt="" 
                                    src="${employeePayrollData._profilePic}">
            </td>
            <td>${employeePayrollData._name}</td>
            <td>${employeePayrollData._gender}</td>
            <td>${getDeptHtml(employeePayrollData._department)}</td>
            <td>${employeePayrollData._salary}</td>
            <td>${stringifyDate(employeePayrollData.date)}</td>
            <td>
                <img id="${employeePayrollData._name}" onclick="remove(this)" alt="delete" 
                                                            src="./Assets/icons/delete-black-18dp.svg">
                <img id="${employeePayrollData._id}" onclick="update(this)" alt="edit" 
                                                            src="./Assets/icons/create-black-18dp.svg">
            </td>
        </tr>
    `;
    }                
    document.querySelector("#display").innerHTML = innerHtml;
}

const getDeptHtml = (deptList) => {
    let deptHtml = "";
    for(const dept of deptList){
        deptHtml = `${deptHtml}<div class="dept">${dept}</div>`
    }
    return deptHtml;
}

const remove = (node) => {
    let employeePayrollData = employeePayrollList.find(empData => empData._name == node.id);
    if(!employeePayrollData) return;
    const index = employeePayrollList
                                .map(empData => empData._name)
                                .indexOf(employeePayrollData._name);
    employeePayrollList.splice(index, 1);
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
    createInnerHtml();                            
}