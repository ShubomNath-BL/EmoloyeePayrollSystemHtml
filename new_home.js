window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
});

createInnerHtml = () => {
    const innerHtml = `
        <tr>
            <th></th>
            <th>Name</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Start Date</th>
            <th>Actions</th>
        </tr>
        <tr>
            <td><img class="profile" alt="" src="./Assets/profile-images/Ellipse -2.png"></td>
            <td>Shubom</td>
            <td>Male</td>
            <td>
                <div class="dept">HR</div>
                <div class="dept">Sales</div>
                <div class="dept">Finance</div>
            </td>
            <td>400000</td>
            <td>3 September 2019</td>
            <td>
                <img id="1" onclick="remove(this)" alt="delete" src="./Assets/icons/delete-black-18dp.svg">
                <img id="2" onclick="update(this)" alt="edit" src="./Assets/icons/create-black-18dp.svg">
            </td>
        </tr>
    `;
    document.querySelector("#display").innerHTML = innerHtml;
}