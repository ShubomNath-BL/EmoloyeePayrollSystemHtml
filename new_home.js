window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th>"+
                        "<th>Start Date</th><th>Actions</th>"
    let innerHtml = `${headerHtml}`
    let employeePayrollList = createEmployeePayrollJason();    
    for(const employeePayrollData of employeePayrollList){
        innerHtml = `${innerHtml}
        <tr>
            <td><img class="profile" alt="" src="${employeePayrollData._profilePic}"></td>
            <td>${employeePayrollData._name}</td>
            <td>${employeePayrollData._gender}</td>
            <td>
                <div class="dept">${employeePayrollData._department[0]}</div>
                <div class="dept">${employeePayrollData._department[1]}</div>
                <div class="dept">${employeePayrollData._department[2]}</div>
            </td>
            <td>${employeePayrollData._salary}</td>
            <td>${employeePayrollData._startDate}</td>
            <td>
                <img name="${employeePayrollData._id}" onclick="remove(this)" alt="delete" src="./Assets/icons/delete-black-18dp.svg">
                <img name="${employeePayrollData._id}" onclick="update(this)" alt="edit" src="./Assets/icons/create-black-18dp.svg">
            </td>
        </tr>
    `;
    }                
    document.querySelector("#display").innerHTML = innerHtml;
}

const createEmployeePayrollJason = () => {
    let employeePayrollList = [
        {
            _name: "Shubom",
            _gender: "Male",
            _department: [
                "Sales",
                "Engineer"
            ],
            _salary: "450000",
            _startDate: "3 September 2019",
            _note: "test",
            _id: new Date().getTime(),
            _profilePic: "./Assets/profile-images/Ellipse -2.png"
        },
        {
            _name: "Jyoti",
            _gender: "Female",
            _department: [
                "Sales",
                "HR"
            ],
            _salary: "400000",
            _startDate: "8 September 2020",
            _note: "test",
            _id: new Date().getTime(),
            _profilePic: "./Assets/profile-images/Ellipse -3.png"
        },
        {
            _name: "Moko",
            _gender: "Male",
            _department: [
                "Sales",
                "Others"
            ],
            _salary: "450000",
            _startDate: "20 September 2018",
            _note: "test",
            _id: new Date().getTime(),
            _profilePic: "./Assets/profile-images/Ellipse -4.png"
        },
        {
            _name: "Supali",
            _gender: "Female",
            _department: [
                "Finance",
                "Engineer"
            ],
            _salary: "450000",
            _startDate: "3 September 2021",
            _note: "test",
            _id: new Date().getTime(),
            _profilePic: "./Assets/profile-images/Ellipse -5.png"
        }
    ];
    return employeePayrollList;
}